"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[224],{5224:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Fi,searchItemsByLesson:()=>Ni});var i={};n.r(i),n.d(i,{getThumbnailAssetUrl:()=>c,getUrl:()=>l}),n(1999),n(921);var r=n(6936),o=n(8350);const a="isLearn",s=()=>(0,o.getContext)(a)??!1;function l(t){return`assets/${t.path}`}function c(t){return`assets/${t}`}var d=n(7903),h=n(4982);const p=t=>{if(t<=0||isNaN(t))return;const e=Math.min(Math.floor(t/3600),0),n=Math.floor(t/60)-60*e;return{hours:e,minutes:n,seconds:t-60*n-3600*e}},u=t=>t.map((t=>t.toString().padStart(2,"0"))),g=(t,e=!0)=>{const n=p(t);if(!n)return(e?"":"0")+"0:00";const{hours:i,minutes:r,seconds:o}=n,a=i>0?[i,r,o]:[r,o],[s,...l]=a;return(e?[s,...u(l)]:u(a)).join(":")},v=t=>{const e=p(t);if(!e)return"0 seconds";const{hours:n,minutes:i,seconds:r}=e;let o="";return n>0&&(o+=`${new Intl.NumberFormat(void 0,{style:"unit",unit:"hour",unitDisplay:"long"}).format(n)} `),i>0&&(o+=`${new Intl.NumberFormat(void 0,{style:"unit",unit:"minute",unitDisplay:"long"}).format(i)} `),o+=new Intl.NumberFormat(void 0,{style:"unit",unit:"second",unitDisplay:"long"}).format(Math.round(r)),o};function m(t,e,n,i){return e.addEventListener(t,n,i),()=>{e.removeEventListener(t,n,i)}}function b(t=window.document){const e=t.activeElement;return e?e.shadowRoot?b(e.shadowRoot):e:null}let f=[];function w(t){const e=f.findIndex((e=>e.element===t));e>=0&&f.splice(e,1),t.hidePopover()}const y="ItemRenderingContext";function C(){const t=(0,o.getContext)(y);if(!t)throw new Error("This component must be provided with an ItemRenderingContext");return t}const x=(()=>{const t=document.createElement("div");t.style.visibility="hidden",t.style.overflowX="hidden",t.style.overflowY="scroll",document.body.appendChild(t);const e=t.offsetWidth-t.scrollWidth;return t.remove(),e})();function z(t,e,n){return e<t?t:e>n?n:e}function k({fromPoint:t,fromValue:e,toPoint:n,toValue:i},r){const o=r.x-t.x,a=r.y-t.y,s=n.x-t.x,l=n.y-t.y,c=(o*s+a*l)/(s*s+l*l);return(1-c)*e+c*i}function L({fromPoint:t,fromValue:e,toPoint:n,toValue:i},r){const o=(r-e)/(i-e),a=1-o;return{x:t.x*a+n.x*o,y:t.y*a+n.y*o}}function M({fromPoint:t,i:e,j:n},i){const r=L({fromPoint:t,...e},i.x),o=L({fromPoint:t,...n},i.y);return{x:r.x+o.x-t.x,y:r.y+o.y-t.y}}document.body.style.setProperty("--ua-scrollbar-width",`${x}px`);const{sqrt:Z,min:J,atan2:$,tan:H,PI:_,abs:T}=Math;function S(t,e,n){const i=J(.5*t.l,.5*e.l,n);if(i<.1)return null;let r=1,o=$(t.y0-t.y3,t.x0-t.x3)-$(e.y3-e.y0,e.x3-e.x0);o<0&&(o=-o,r^=1),o>_&&(o=2*_-o,r^=1);const a=H(.5*o)*i;if(a<.1||a>1e6)return null;const s=1-i/t.l,l=i/e.l,c=t.x0*(1-s)+t.x3*s,d=t.y0*(1-s)+t.y3*s,h=e.x0*(1-l)+e.x3*l,p=e.y0*(1-l)+e.y3*l;return t.x2=c,t.y2=d,e.x1=h,e.y1=p,`a ${a} ${a} 0 0 ${r} ${h-c},${p-d}`}function A(t,e,n,i,r){if(e.length<2)throw new Error("emitPathRounded must have at least two path components!");const o=[],{p:{x:a,y:s}}=t;let l=a,c=s;function d(t,e){const n=t.x,o=t.y,a=`${(n-l)*i},${(o-c)*r}`;return e&&(l=n,c=o),a}function h(t,e){const n=t.x,o=t.y,a=`${n*i},${o*r}`;return e&&(l+=n,c+=o),a}function p(t,e,n){let a=t,s=e;n&&(a+=l,s+=c);const d=l*i,h=c*r,p=a*i,u=s*r,g=d-p,v=h-u,m=Z(g*g+v*v);o.push({x0:d,y0:h,x1:d,y1:h,x2:p,y2:u,x3:p,y3:u,l:m}),l=a,c=s}for(const t of e)switch(t.cmd){case"T":o.push(`t ${d(t.p,!0)}`);break;case"t":o.push(`t ${h(t.p,!0)}`);break;case"Q":o.push(`q ${d(t.c,!1)} ${d(t.p,!0)}`);break;case"q":o.push(`q ${h(t.c,!1)} ${h(t.p,!0)}`);break;case"S":o.push(`s ${d(t.c,!1)} ${d(t.p,!0)}`);break;case"s":o.push(`s ${h(t.c,!1)} ${h(t.p,!0)}`);break;case"C":o.push(`c ${d(t.c1,!1)} ${d(t.c2,!1)} ${d(t.p,!0)}`);break;case"c":o.push(`c ${h(t.c1,!1)} ${h(t.c2,!1)} ${h(t.p,!0)}`);break;case"A":o.push(`a ${t.radius.x*i} ${t.radius.y*r} ${t.angle} ${+t.large} ${+t.sweep} ${d(t.p,!0)}`);break;case"a":o.push(`a ${t.radius.x*i} ${t.radius.y*r} ${t.angle} ${+t.large} ${+t.sweep} ${h(t.p,!0)}`);break;case"H":p(t.v,c,!1);break;case"h":p(t.v,0,!0);break;case"V":p(l,t.v,!1);break;case"v":p(0,t.v,!0);break;case"L":p(t.p.x,t.p.y,!1);break;case"l":p(t.p.x,t.p.y,!0)}return(T(l-a)>.01||T(c-s)>.01)&&p(a,s,!1),function(t,e,n,i){const r=[];for(let t=0;t<n.length;t+=1){const e=n[t],o=n[t+1]??n[0];if(r.push(e),"string"!=typeof e&&"string"!=typeof o){const t=S(e,o,i);t&&r.push(t)}}const o=r[0],a=["string"==typeof o?`m ${t},${e}`:`m ${o.x1},${o.y1}`];for(const t of r)a.push("string"==typeof t?t:`l ${t.x2-t.x1},${t.y2-t.y1}`);return a.push("z"),a.join(" ")}(a,s,o,n)}function V({width:t,height:e}){return{fromPoint:{x:0,y:0},i:{fromValue:1,toPoint:{x:t,y:0},toValue:0},j:{fromValue:.5,toPoint:{x:0,y:e},toValue:-.5}}}const P={discriminator:"arrow",clipPath({cornerRounding:t,thickness:e,headLength:n},{width:i,height:r}){const o=1-n;return A({cmd:"M",p:{x:0,y:.5-e}},[{cmd:"H",v:o},{cmd:"V",v:0},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:o,y:1}},{cmd:"V",v:.5+e},{cmd:"H",v:0}],t,i,r)},textExtents({thickness:t,headLength:e}){const n=.5-t;return{left:0,top:n,width:2*n*e+(1-e),height:.5+t-n}},getControlPoints:({thickness:t,headLength:e},n,i,r,o)=>[{position:M(V(n),{x:e,y:t}),style:"normal"}],dragControlPoint(t,e,n,i,r,o){const a=function({fromPoint:t,i:e,j:n},i){return{x:k({fromPoint:t,...e},i),y:k({fromPoint:t,...n},i)}}(V(e),i);return{...t,thickness:z(.1,a.y,.5),headLength:z(.1,a.x,.9)}}},E={discriminator:"bookmark",textExtents:({cutoutInset:t})=>({left:0,top:0,width:1,height:1-t}),clipPath:({cornerRounding:t,cutoutInset:e},{width:n,height:i})=>A({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:.5,y:1-e}},{cmd:"L",p:{x:1,y:1}},{cmd:"L",p:{x:1,y:0}},{cmd:"L",p:{x:0,y:0}}],t,n,i),getControlPoints:({cutoutInset:t},e)=>[{position:L(I(e)[0],t),style:"normal"}],dragControlPoint:(t,e,n,i)=>({...t,cutoutInset:z(0,k(I(e)[n],i),.8)})};function I({width:t,height:e}){const n=.5*t;return[{fromPoint:{x:n,y:.2*e},fromValue:.8,toPoint:{x:n,y:e},toValue:0}]}function R({width:t,height:e}){return[{fromPoint:{x:.3*t,y:.5*e},fromValue:.3,toPoint:{x:0,y:.5*e},toValue:0},{fromPoint:{x:.7*t,y:.5*e},fromValue:.7,toPoint:{x:1*t,y:.5*e},toValue:1}]}const B={discriminator:"chevron",clipPath:({cornerRounding:t,insideCenterXCoord:e,outsideCornerXCoords:n},{width:i,height:r})=>A({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:n,y:0}},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:n,y:1}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:e,y:.5}},{cmd:"L",p:{x:0,y:0}}],t,i,r),textExtents:({insideCenterXCoord:t,outsideCornerXCoords:e})=>({left:t,top:0,width:e-t,height:1}),getControlPoints({insideCenterXCoord:t,outsideCornerXCoords:e},n){const i=R(n);return[t,e].map(((t,e)=>({position:L(i[e],t),style:"normal"})))},dragControlPoint(t,e,n,i){const r=k(R(e)[n],i),o={...t};switch(n){case 0:o.insideCenterXCoord=z(0,r,.3);break;case 1:o.outsideCornerXCoords=z(.7,r,1)}return o}},j=[{cmd:"M",p:{x:217.234,y:57.006}},{cmd:"C",c1:{x:217.785,y:54.084},c2:{x:218.073,y:51.069},p:{x:218.073,y:47.986}},{cmd:"C",c1:{x:218.073,y:21.4841},c2:{x:196.796,y:0},p:{x:170.549,y:0}},{cmd:"C",c1:{x:154.49,y:0},c2:{x:140.291,y:8.043},p:{x:131.689,y:20.3575}},{cmd:"C",c1:{x:123.43,y:13.3566},c2:{x:112.778,y:9.1402},p:{x:101.151,y:9.1402}},{cmd:"C",c1:{x:75.1559,y:9.1402},c2:{x:54.036,y:30.2136},p:{x:53.6331,y:56.364}},{cmd:"C",c1:{x:24.4644,y:56.364},c2:{x:.82373,y:80.235},p:{x:.82373,y:109.682}},{cmd:"C",c1:{x:.82373,y:139.129},c2:{x:24.4644,y:163},p:{x:53.6272,y:163}},{cmd:"L",p:{x:209.021,y:163}},{cmd:"C",c1:{x:238.183,y:163},c2:{x:261.824,y:139.129},p:{x:261.824,y:109.682}},{cmd:"C",c1:{x:261.824,y:83.056},c2:{x:242.496,y:60.99},p:{x:217.234,y:57.006}},{cmd:"Z"}],F={left:20/262,top:50/163,width:222/262,height:113/163},O={discriminator:"cloud",clipPath:(t,{width:e,height:n})=>function(t,e=1,n=1){const i=[];let r=0,o=0;function a(t,i){const a=t.x,s=t.y,l=`${(a-r)*e},${(s-o)*n}`;return i&&(r=a,o=s),l}function s(t,i){const a=t.x,s=t.y,l=`${a*e},${s*n}`;return i&&(r+=a,o+=s),l}for(const l of t)switch(i.push(l.cmd.toLowerCase()),l.cmd){case"M":case"L":case"T":i.push(a(l.p,!0));break;case"m":case"l":case"t":i.push(s(l.p,!0));break;case"H":i.push(a({x:l.v,y:o},!0));break;case"V":i.push(a({x:r,y:l.v},!0));break;case"h":i.push(s({x:l.v,y:0},!0));break;case"v":i.push(s({x:0,y:l.v},!0));break;case"C":i.push(a(l.c1,!1),a(l.c2,!1),a(l.p,!0));break;case"c":i.push(s(l.c1,!1),s(l.c2,!1),s(l.p,!0));break;case"S":case"Q":i.push(a(l.c,!1),a(l.p,!0));break;case"s":case"q":i.push(s(l.c,!1),s(l.p,!0));break;case"A":i.push(l.radius.x*e,l.radius.y*n,l.angle,+l.large,+l.sweep,a(l.p,!0));break;case"a":i.push(l.radius.x,l.radius.y,l.angle,+l.large,+l.sweep,s(l.p,!0))}return i.join(" ")}(j,e/262,n/163),textExtents:t=>F},q={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},D={discriminator:"ellipse",clipPath(t,{width:e,height:n}){let i="m 0 0";return i+=` m ${e} ${n/2}`,i+=` a ${e/2} ${n/2} 0 0 1 ${-e},0`,i+=` a ${e/2} ${n/2} 0 0 1 ${e},0`,i+=" z",i},textExtents:t=>q},N={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},G={discriminator:"octagon",clipPath({cornerRounding:t},{width:e,height:n}){const i=Math.min(e,n)/(1+Math.SQRT2)/Math.SQRT2;return A({cmd:"M",p:{x:i,y:0}},[{cmd:"L",p:{x:e-i,y:0}},{cmd:"L",p:{x:e,y:i}},{cmd:"L",p:{x:e,y:n-i}},{cmd:"L",p:{x:e-i,y:n}},{cmd:"L",p:{x:i,y:n}},{cmd:"L",p:{x:0,y:n-i}},{cmd:"L",p:{x:0,y:i}},{cmd:"L",p:{x:i,y:0}}],t,1,1)},textExtents:t=>N},U={discriminator:"parallelogram",textExtents:({shear:t})=>t>.45?{left:.45,top:0,width:0,height:1}:{left:t,top:0,width:1-2*t,height:1},clipPath:({cornerRounding:t,shear:e},{width:n,height:i})=>A({cmd:"M",p:{x:1,y:0}},[{cmd:"L",p:{x:e,y:0}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1-e,y:1}},{cmd:"L",p:{x:1,y:0}}],t,n,i),getControlPoints:({shear:t},e)=>[{position:L(Y(e)[0],t),style:"normal"}],dragControlPoint:(t,e,n,i)=>({...t,shear:z(0,k(Y(e)[n],i),.99)})};function Y({width:t}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:t,y:0},toValue:1}]}const K={discriminator:"plus",textExtents:({stroke:t})=>({left:0,top:(1-t)/2,width:1,height:t}),clipPath({cornerRounding:t,stroke:e},{width:n,height:i}){const r=(1-e)/2;return A({cmd:"M",p:{x:r,y:0}},[{cmd:"L",p:{x:r,y:r}},{cmd:"L",p:{x:0,y:r}},{cmd:"L",p:{x:0,y:1-r}},{cmd:"L",p:{x:r,y:1-r}},{cmd:"L",p:{x:r,y:1}},{cmd:"L",p:{x:1-r,y:1}},{cmd:"L",p:{x:1-r,y:1-r}},{cmd:"L",p:{x:1,y:1-r}},{cmd:"L",p:{x:1,y:r}},{cmd:"L",p:{x:1-r,y:r}},{cmd:"L",p:{x:1-r,y:0}},{cmd:"L",p:{x:r,y:0}}],t,n,i)},getControlPoints:({stroke:t},e)=>[{position:L(W(e)[0],t),style:"normal"}],dragControlPoint:(t,e,n,i)=>({...t,stroke:z(.01,k(W(e)[n],i),1)})};function W({width:t,height:e}){return[{fromPoint:{x:0,y:0},fromValue:1,toPoint:{x:t/2,y:e/2},toValue:0}]}const X=`url(${function(t,e){const n=[...(new TextEncoder).encode('\n<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">\n  <g filter="url(#filter0_d_10962_163787)">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 18.5V2.5L15.6 14.1081H8.55353L8.40242 14.232L4 18.5Z" fill="white"/>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.7998V15.9998L7.969 13.1307L8.129 12.9916L13.165 12.9998L5 4.7998Z" fill="black"/>\n    <path d="M8.5 27.5C9.06115 27.5 9.48005 27.0493 9.51635 26.5351C9.74356 23.3161 12.3161 20.7436 15.5351 20.5163C16.0493 20.4801 16.5 20.0611 16.5 19.5C16.5 18.956 16.0524 18.4804 15.4691 18.5163C11.1973 18.7798 7.7798 22.1973 7.51632 26.4691C7.48035 27.0524 7.95597 27.5 8.5 27.5Z" fill="black" stroke="white" stroke-linejoin="round"/>\n  </g>\n  <defs>\n    <filter id="filter0_d_10962_163787" x="2.2" y="1.7" width="16.6" height="29.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n      <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n      <feOffset dy="1"/>\n      <feGaussianBlur stdDeviation="0.9"/>\n      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/>\n      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10962_163787"/>\n      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10962_163787" result="shape"/>\n    </filter>\n  </defs>\n</svg>\n')].map((t=>String.fromCharCode(t))).join("");return"data:image/svg+xml;base64,"+btoa(n)}()}) 5 5, move`,Q=["ne","nw","nw","ne"],{min:tt}=Math,et={left:0,top:0,width:1,height:1},nt={topLeft:0,topRight:0,bottomRight:0,bottomLeft:0};function it(t,e,n){return t+n<=e?t:t*e/(t+n)}function rt(t,e,n,i,r){return tt(it(n,e,t),it(n,i,r))}function ot({topLeft:t,topRight:e,bottomRight:n,bottomLeft:i},{width:r,height:o}){return{topLeft:rt(i,o,t,r,e),topRight:rt(t,r,e,o,n),bottomRight:rt(e,o,n,r,i),bottomLeft:rt(n,r,i,o,t)}}function at(t){if(!t)return!0;const{topLeft:e,topRight:n,bottomRight:i,bottomLeft:r}=t;return e===n&&e===i&&e===r}function st({width:t,height:e}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:10,y:10},toValue:10},{fromPoint:{x:t,y:0},fromValue:0,toPoint:{x:t-10,y:10},toValue:10},{fromPoint:{x:t,y:e},fromValue:0,toPoint:{x:t-10,y:e-10},toValue:10},{fromPoint:{x:0,y:e},fromValue:0,toPoint:{x:10,y:e-10},toValue:10}]}const lt={discriminator:"rectangle",clipPath({borderRadius:t},e){const{width:n,height:i}=e;let r="m 0 0";if(t){const{topLeft:o,topRight:a,bottomRight:s,bottomLeft:l}=ot(t,e);r+=` m ${o} 0`,r+=` l ${n-o-a} 0 a ${a} ${a} 0 0 1 ${a},${a}`,r+=` l 0 ${i-a-s} a ${s} ${s} 0 0 1 ${-s},${s}`,r+=` l ${s+l-n} 0 a ${l} ${l} 0 0 1 ${-l},${-l}`,r+=` l 0 ${l+o-i} a ${o} ${o} 0 0 1 ${o},${-o}`}else r+=` l ${n} 0`,r+=` l 0 ${i}`,r+=` l ${-n} 0`,r+=" l 0 "+-i;return r+=" z",r},textExtents:t=>et,getControlPoints({borderRadius:t},e,n,i,r){const{topLeft:o,topRight:a,bottomRight:s,bottomLeft:l}=ot(t??nt,e),c=st(e),d=at(r?ot(r.borderRadius??nt,e):t)!==i?"normal":"alternate";return[o,a,s,l].map(((t,e)=>({position:L(c[e],t),style:d,tooltip:{text:`Radius ${t.toFixed(0)}`,position:Q[e]},cursor:X})))},dragControlPoint({borderRadius:t},e,n,i,r,o){const a=st(e)[n],{width:s,height:l}=e,c=k(a,i);let d;if(at(t)!==o){const t=z(0,c,tt(l/2,s/2));d={topLeft:t,topRight:t,bottomRight:t,bottomLeft:t}}else switch(d={...t??nt},n){case 0:d.topLeft=z(0,c,tt(l-d.bottomLeft,s-d.topRight));break;case 1:d.topRight=z(0,c,tt(s-d.topLeft,l-d.bottomRight));break;case 2:d.bottomRight=z(0,c,tt(l-d.topRight,s-d.bottomLeft));break;case 3:d.bottomLeft=z(0,c,tt(s-d.bottomRight,l-d.topLeft))}return{type:"rectangle",borderRadius:d}}},ct={left:0,top:0,width:1,height:1},dt={discriminator:"shield",clipPath({cornerRounding:t},{width:e,height:n}){const i=Math.min(.5*e,.5*n);return A({cmd:"M",p:{x:0,y:0}},[{cmd:"H",v:e},{cmd:"V",v:n-i},{cmd:"A",radius:{x:.5*e,y:i},angle:0,large:!1,sweep:!0,p:{x:0,y:n-i}},{cmd:"V",v:0}],t,1,1)},textExtents:t=>ct},ht={cmd:"M",p:{x:0,y:0}},pt=[{cmd:"H",v:210},{cmd:"V",v:175},{cmd:"H",v:129},{cmd:"L",p:{x:40,y:217}},{cmd:"V",v:175},{cmd:"H",v:0},{cmd:"V",v:0}],ut={left:0,top:0,width:1,height:175/217},gt={discriminator:"speechBubble",clipPath:({cornerRounding:t},{width:e,height:n})=>A(ht,pt,t,e/210,n/217),textExtents:t=>ut},{PI:vt,cos:mt,sin:bt}=Math,ft=-.5*vt,wt=2*vt;function yt(t,e){return ft+wt*(t/e)}function Ct(t,e){return ft+wt*((2*t+1)/(2*e))}const xt={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2};function zt({sidePairs:t},{width:e,height:n}){const i=Ct(t-1,t);return{fromPoint:{x:.5*e,y:.5*n},fromValue:0,toPoint:{x:(.5*mt(i)+.5)*e,y:(.5*bt(i)+.5)*n},toValue:1}}const kt={discriminator:"star",clipPath({cornerRounding:t,sidePairs:e,innerRadius:n},{width:i,height:r}){let o;const a=[];let s=!0;function l(t,e){const n={x:mt(t)*e*.5+.5,y:bt(t)*e*.5+.5};s?(o={cmd:"M",p:n},s=!1):a.push({cmd:"L",p:n})}for(let t=0;t<e;t+=1)l(yt(t,e),1),l(Ct(t,e),n);return A(o,a,t,i,r)},textExtents:t=>xt,getControlPoints:(t,e)=>[{position:L(zt(t,e),t.innerRadius),style:"normal"}],dragControlPoint(t,e,n,i){const r=k(zt(t,e),i);return{...t,innerRadius:z(.1,r,1)}}},Lt={discriminator:"triangle",clipPath:({cornerRounding:t,topVertex:e},{width:n,height:i})=>A({cmd:"M",p:{x:e??.5,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1,y:1}}],t,n,i),textExtents:({topVertex:t})=>({width:.5,height:.5,left:(t??.5)/2,top:.5}),getControlPoints:({topVertex:t},e)=>[{position:L(Mt(e)[0],t??.5),style:"normal"}],dragControlPoint:(t,e,n,i)=>({...t,topVertex:z(0,k(Mt(e)[n],i),1)})};function Mt({width:t}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:t,y:0},toValue:1}]}const Zt=new Map;function Jt(t){Zt.set(t.discriminator,t)}Jt(lt),Jt(D),Jt(kt),Jt(O),Jt(K),Jt(Lt),Jt(E),Jt(G),Jt(B),Jt(U),Jt(gt),Jt(dt),Jt(P);var $t=n(4015),Ht=n.n($t);function _t(t,e,n=Object.keys(t.states.default)){const i=t.states.default,r=structuredClone(t.states[e]);return n.reduce(((t,e)=>(Ht()(t[e])&&(t[e]=structuredClone(i[e])),t)),r)}var Tt=n(4198),St=n(9679),At=n(3092),Vt=n.n(At);const Pt=(0,Tt._w)(d.Al),Et=St.ZF.fromSchema(Pt),It=(t,e)=>{if(e.content)return{...e,content:e.content.flatMap((e=>It(t,e)),0)};if("text"===e.type&&e.text){const n=new RegExp(Vt()(t),"gi"),i=e.text.match(n);return i&&i.length>0?((t,e)=>{const n=new RegExp(`(${Vt()(t)})`,"gi");return e.text.split(n).filter(Boolean).map((n=>{const i=n.toLowerCase()===t.toLowerCase(),r=e.marks.find((t=>"textStyle"===t.type));let o=!1;const a=i?e.marks.map((t=>"highlight"===t.type?(o=!0,{...t,attrs:{...t.attrs,color:"#FFFF00"}}):t)):e.marks;return!o&&i&&a.push({type:"highlight",attrs:{textSize:r?.attrs.textSize??"inherit",color:"#FFFF00"}}),{text:n,type:"text",marks:a}}))})(t,e):e}return e},Rt=(t,e)=>{function n({doc:e,searchTerm:n}){t.textContent="";const i=""===n||null==n?e:It(n,e),r=St.bP.fromJSON(Pt,i);Et.serializeFragment(r.content,void 0,t)}return n(e),{update:n}};var Bt=n(3134),jt=n.n(Bt);function Ft(t){return new Map(Object.entries(jt()(t,(t=>t.sourceId??"none"))))}var Ot=r.vs('<link rel="prefetch" as="image">');r.vs('<div><div class="collapsible-section-content svelte-n9z2g8"><!></div></div>');var qt=n(5608),Dt=n(2835);function Nt(t,e){return[...t.querySelectorAll(e)]}function Gt(t,e,n,i){return e.addEventListener(t,n,i),()=>{e.removeEventListener(t,n,i)}}var Ut,Yt,Kt=n(9701);class Wt extends Dt.WF{get $form(){return(0,qt.gn)(this,Yt,"f")?.form??null}get $slotted(){return this.$$$("*")}$(t){return function(t,e){return t.querySelector(e)}(this.shadowRoot,t)}$$(t){return Nt(this.shadowRoot,t)}$$$(t,e){const n=e?`slot[name="${e}"]`:"slot:not([name])",i=this.$(n);return i?i.assignedElements({flatten:!0}).map((e=>e.matches(t)?[e]:Nt(e,t))).flat():(console.warn(`Could not query ${n} within ${this.tagName.toLowerCase()} because it does not exist.`),[])}constructor(){super(),Ut.set(this,[]),Yt.set(this,void 0),this.hasSlotted=t=>this.$slotted.some((e=>e.contains(t))),this.hasWithin=t=>this.contains(t)||this.hasSlotted(t),this.unbindEvents=()=>{(0,qt.gn)(this,Ut,"f").forEach((t=>t()))},this.collectOff=t=>{(0,qt.gn)(this,Ut,"f").push(t)},this.on=(t,e,n)=>{const i=Gt(t,this,e,n);return this.collectOff(i),i},this.dispatch=(t,e={})=>function(t,e,n={},i={}){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,...i,detail:n}))}(this,t,e),this.constructor.formAssociated&&(0,qt.GG)(this,Yt,this.attachInternals(),"f")}connectedCallback(){super.connectedCallback(),this.bindEvents()}disconnectedCallback(){super.disconnectedCallback(),this.unbindEvents()}bindEvents(){}}Ut=new WeakMap,Yt=new WeakMap,Wt.formAssociated=!1,Wt.shadowRootOptions={...Dt.WF.shadowRootOptions,delegatesFocus:!0};const Xt=Dt.qy`
  <svg
    width="11"
    height="13"
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.75 1.28125C0.75 0.925781 1.02344 0.625 1.40625 0.625H2.71875H3.15625H6.54688C8.40625 0.625 9.9375 2.15625 9.9375 4.01562C9.9375 4.97266 9.52734 5.84766 8.89844 6.44922C10.0195 6.99609 10.8125 8.17188 10.8125 9.48438C10.8125 11.3711 9.28125 12.875 7.42188 12.875H3.15625H2.71875H1.40625C1.02344 12.875 0.75 12.6016 0.75 12.2188C0.75 11.8633 1.02344 11.5625 1.40625 11.5625H2.0625V6.75V1.9375H1.40625C1.02344 1.9375 0.75 1.66406 0.75 1.28125ZM6.54688 6.09375C7.69531 6.09375 8.625 5.16406 8.625 4.01562C8.625 2.86719 7.69531 1.9375 6.54688 1.9375H3.375V6.09375H6.54688ZM3.375 7.40625V11.5625H7.42188C8.57031 11.5625 9.5 10.6328 9.5 9.48438C9.5 8.33594 8.57031 7.40625 7.42188 7.40625H6.54688H3.375Z"
      fill="black"
    />
  </svg>
`,Qt=Dt.qy`
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.3125 1.28125V5.875C1.3125 6.47656 1.77734 6.96875 2.40625 6.96875H11.7578L9.37891 4.58984C9.10547 4.34375 9.10547 3.93359 9.37891 3.66016C9.625 3.41406 10.0352 3.41406 10.3086 3.66016L13.8086 7.1875C14.0547 7.43359 14.0547 7.84375 13.8086 8.08984L10.3086 11.5898C10.0352 11.8633 9.625 11.8633 9.37891 11.5898C9.10547 11.3438 9.10547 10.9336 9.37891 10.6602L11.7578 8.28125H2.40625C1.06641 8.28125 0 7.21484 0 5.875V1.28125C0 0.925781 0.273438 0.625 0.65625 0.625C1.01172 0.625 1.3125 0.925781 1.3125 1.28125Z"
      fill="black"
    />
  </svg>
`,te=Dt.qy`
  <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9336 0.566406C13.1797 0.839844 13.1797 1.25 12.9336 1.49609L5.71484 8.71484C5.44141 8.98828 5.03125 8.98828 4.78516 8.71484L1.06641 4.99609C0.792969 4.75 0.792969 4.33984 1.06641 4.09375C1.3125 3.82031 1.72266 3.82031 1.96875 4.09375L5.22266 7.34766L12.0039 0.566406C12.25 0.320312 12.6602 0.320312 12.9062 0.566406H12.9336Z"
      fill="black"
    />
  </svg>
`,ee=(Dt.qy`
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.18359 1.49609L5.90234 4.77734L9.15625 8.03125C9.42969 8.27734 9.42969 8.6875 9.15625 8.93359C8.91016 9.20703 8.5 9.20703 8.25391 8.93359L4.97266 5.67969L1.71875 8.93359C1.47266 9.20703 1.0625 9.20703 0.816406 8.93359C0.542969 8.6875 0.542969 8.27734 0.816406 8.00391L4.07031 4.75L0.816406 1.49609C0.542969 1.25 0.542969 0.839844 0.816406 0.566406C1.0625 0.320312 1.47266 0.320312 1.74609 0.566406L5 3.84766L8.25391 0.59375C8.5 0.320312 8.91016 0.320312 9.18359 0.59375C9.42969 0.839844 9.42969 1.25 9.18359 1.49609Z"
      fill="black"
    />
  </svg>
`,Dt.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.375 9.9375C11.5938 9.9375 11.8125 9.74609 11.8125 9.5V3.92188L9.95312 2.0625H6.125C5.87891 2.0625 5.6875 2.28125 5.6875 2.5V9.5C5.6875 9.74609 5.87891 9.9375 6.125 9.9375H11.375ZM6.125 11.25C5.14062 11.25 4.375 10.4844 4.375 9.5V2.5C4.375 1.54297 5.14062 0.75 6.125 0.75H9.95312C10.2812 0.75 10.6367 0.914062 10.8828 1.16016L12.7148 2.99219C12.9609 3.23828 13.125 3.59375 13.125 3.92188V9.5C13.125 10.4844 12.332 11.25 11.375 11.25H6.125ZM2.625 4.25H3.5V5.5625H2.625C2.37891 5.5625 2.1875 5.78125 2.1875 6V13C2.1875 13.2461 2.37891 13.4375 2.625 13.4375H7.875C8.09375 13.4375 8.3125 13.2461 8.3125 13V12.125H9.625V13C9.625 13.9844 8.83203 14.75 7.875 14.75H2.625C1.64062 14.75 0.875 13.9844 0.875 13V6C0.875 5.04297 1.64062 4.25 2.625 4.25Z"
      fill="black"
    />
  </svg>
`),ne=Dt.qy`
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.8125 4.6875C5.32031 4.6875 4.91016 4.44141 4.66406 4.03125C4.41797 3.64844 4.41797 3.12891 4.66406 2.71875C4.91016 2.33594 5.32031 2.0625 5.8125 2.0625C6.27734 2.0625 6.6875 2.33594 6.93359 2.71875C7.17969 3.12891 7.17969 3.64844 6.93359 4.03125C6.6875 4.44141 6.27734 4.6875 5.8125 4.6875ZM5.8125 9.0625C5.32031 9.0625 4.91016 8.81641 4.66406 8.40625C4.41797 8.02344 4.41797 7.50391 4.66406 7.09375C4.91016 6.71094 5.32031 6.4375 5.8125 6.4375C6.27734 6.4375 6.6875 6.71094 6.93359 7.09375C7.17969 7.50391 7.17969 8.02344 6.93359 8.40625C6.6875 8.81641 6.27734 9.0625 5.8125 9.0625ZM7.125 12.125C7.125 12.6172 6.85156 13.0273 6.46875 13.2734C6.05859 13.5195 5.53906 13.5195 5.15625 13.2734C4.74609 13.0273 4.5 12.6172 4.5 12.125C4.5 11.6602 4.74609 11.25 5.15625 11.0039C5.53906 10.7578 6.05859 10.7578 6.46875 11.0039C6.85156 11.25 7.125 11.6602 7.125 12.125ZM10.1875 4.6875C9.69531 4.6875 9.28516 4.44141 9.03906 4.03125C8.79297 3.64844 8.79297 3.12891 9.03906 2.71875C9.28516 2.33594 9.69531 2.0625 10.1875 2.0625C10.6523 2.0625 11.0625 2.33594 11.3086 2.71875C11.5547 3.12891 11.5547 3.64844 11.3086 4.03125C11.0625 4.44141 10.6523 4.6875 10.1875 4.6875ZM11.5 7.75C11.5 8.24219 11.2266 8.65234 10.8438 8.89844C10.4336 9.14453 9.91406 9.14453 9.53125 8.89844C9.12109 8.65234 8.875 8.24219 8.875 7.75C8.875 7.28516 9.12109 6.875 9.53125 6.62891C9.91406 6.38281 10.4336 6.38281 10.8438 6.62891C11.2266 6.875 11.5 7.28516 11.5 7.75ZM10.1875 13.4375C9.69531 13.4375 9.28516 13.1914 9.03906 12.7812C8.79297 12.3984 8.79297 11.8789 9.03906 11.4688C9.28516 11.0859 9.69531 10.8125 10.1875 10.8125C10.6523 10.8125 11.0625 11.0859 11.3086 11.4688C11.5547 11.8789 11.5547 12.3984 11.3086 12.7812C11.0625 13.1914 10.6523 13.4375 10.1875 13.4375Z"
      fill="#636363"
    />
  </svg>
`,ie=Dt.qy`
  <svg
    width="12"
    height="15"
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 13.4375H9.5C9.71875 13.4375 9.9375 13.2461 9.9375 13V5.125H7.75C7.25781 5.125 6.875 4.74219 6.875 4.25V2.0625H2.5C2.25391 2.0625 2.0625 2.28125 2.0625 2.5V13C2.0625 13.2461 2.25391 13.4375 2.5 13.4375ZM2.5 0.75H7.01172C7.47656 0.75 7.91406 0.941406 8.24219 1.26953L10.7305 3.75781C11.0586 4.08594 11.25 4.52344 11.25 4.98828V13C11.25 13.9844 10.457 14.75 9.5 14.75H2.5C1.51562 14.75 0.75 13.9844 0.75 13V2.5C0.75 1.54297 1.51562 0.75 2.5 0.75ZM8.65234 8.07812L5.72656 11.0039C5.58984 11.1133 5.42578 11.1953 5.26172 11.1953C5.09766 11.1953 4.90625 11.1133 4.79688 11.0039L3.34766 9.52734C3.07422 9.28125 3.07422 8.87109 3.34766 8.59766C3.59375 8.35156 4.00391 8.35156 4.27734 8.59766L5.26172 9.60938L7.72266 7.14844C7.96875 6.90234 8.37891 6.90234 8.65234 7.14844C8.89844 7.39453 8.89844 7.83203 8.65234 8.07812Z"
      fill="black"
    />
  </svg>
`,re=Dt.qy`
  <svg
    width="8"
    height="13"
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.03516 6.28516L6.28516 1.0625C6.53125 0.789062 6.94141 0.789062 7.21484 1.0625C7.46094 1.30859 7.46094 1.71875 7.21484 1.96484L2.40234 6.75L7.1875 11.5625C7.46094 11.8086 7.46094 12.2188 7.1875 12.4648C6.94141 12.7383 6.53125 12.7383 6.28516 12.4648L1.03516 7.21484C0.761719 6.96875 0.761719 6.55859 1.03516 6.28516Z"
      fill="#707070"
    />
  </svg>
`,oe=Dt.qy`
  <svg
    width="12"
    height="2"
    viewBox="0 0 12 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6875 0.75C11.6875 1.13281 11.3867 1.40625 11.0312 1.40625H0.96875C0.585938 1.40625 0.3125 1.13281 0.3125 0.75C0.3125 0.394531 0.585938 0.09375 0.96875 0.09375H11.0312C11.3867 0.09375 11.6875 0.394531 11.6875 0.75Z"
      fill="black"
    />
  </svg>
`,ae=Dt.qy`
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.480469 12.7539L1.10938 10.6211C1.21875 10.2383 1.4375 9.88281 1.71094 9.60938L10.0234 1.29688C10.707 0.613281 11.8281 0.613281 12.5117 1.29688L13.5781 2.36328C13.6602 2.44531 13.7422 2.55469 13.7969 2.63672C14.2617 3.32031 14.1797 4.25 13.5781 4.85156L5.26562 13.1641C5.23828 13.1914 5.18359 13.2188 5.15625 13.2734C4.88281 13.4922 4.58203 13.6562 4.25391 13.7656L2.12109 14.3945L0.945312 14.7227C0.726562 14.8047 0.480469 14.75 0.316406 14.5586C0.125 14.3945 0.0703125 14.1484 0.152344 13.9297L0.480469 12.7539ZM2.17578 11.6328L1.73828 13.1367L3.24219 12.6992L3.87109 12.5078C4.0625 12.4531 4.19922 12.3711 4.33594 12.2344L10.5977 5.97266L8.90234 4.27734L2.64062 10.5391C2.61328 10.5391 2.61328 10.5664 2.58594 10.5938C2.47656 10.7031 2.42188 10.8398 2.36719 11.0039L2.17578 11.6328ZM6.90625 13.4375H15.2188C15.5742 13.4375 15.875 13.7383 15.875 14.0938C15.875 14.4766 15.5742 14.75 15.2188 14.75H6.90625C6.52344 14.75 6.25 14.4766 6.25 14.0938C6.25 13.7383 6.52344 13.4375 6.90625 13.4375Z"
      fill="black"
    />
  </svg>
`,se=Dt.qy`
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.65625 0.71875V5.09375H11.0312C11.3867 5.09375 11.6875 5.39453 11.6875 5.75C11.6875 6.13281 11.3867 6.40625 11.0312 6.40625H6.65625V10.7812C6.65625 11.1641 6.35547 11.4375 6 11.4375C5.61719 11.4375 5.34375 11.1641 5.34375 10.7812V6.40625H0.96875C0.585938 6.40625 0.3125 6.13281 0.3125 5.75C0.3125 5.39453 0.585938 5.09375 0.96875 5.09375H5.34375V0.71875C5.34375 0.363281 5.61719 0.0625 6 0.0625C6.35547 0.0625 6.65625 0.363281 6.65625 0.71875Z"
      fill="black"
    />
  </svg>
`,le=Dt.qy`
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9062 5.875H8.96875C8.58594 5.875 8.3125 5.60156 8.3125 5.21875C8.3125 4.86328 8.58594 4.5625 8.96875 4.5625H11.4297L10.6914 3.6875C9.78906 2.62109 8.47656 1.9375 7 1.9375C4.32031 1.9375 2.1875 4.09766 2.1875 6.75C2.1875 9.42969 4.32031 11.5625 7 11.5625C8.06641 11.5625 9.07812 11.207 9.87109 10.6055C10.1719 10.3867 10.582 10.4414 10.8008 10.7422C11.0195 11.043 10.9648 11.4531 10.6641 11.6719C9.65234 12.4375 8.36719 12.875 7 12.875C3.60938 12.875 0.875 10.1406 0.875 6.75C0.875 3.38672 3.60938 0.625 7 0.625C8.88672 0.625 10.582 1.5 11.7031 2.83984L12.25 3.49609V1.28125C12.25 0.925781 12.5234 0.625 12.9062 0.625C13.2617 0.625 13.5625 0.925781 13.5625 1.28125V5.21875C13.5625 5.60156 13.2617 5.875 12.9062 5.875Z"
      fill="black"
    />
  </svg>
`,ce=Dt.qy`
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.48438 9.5625L12.1094 5.1875C12.2734 4.91406 12.5469 4.75 12.875 4.75C13.1758 4.75 13.4492 4.91406 13.6133 5.1875L16.2383 9.5625C16.4023 9.83594 16.4023 10.1641 16.2383 10.4375C16.1016 10.7109 15.8008 10.875 15.5 10.875H10.25C9.92188 10.875 9.62109 10.7109 9.48438 10.4375C9.32031 10.1641 9.32031 9.83594 9.48438 9.5625ZM12.875 6.5L11.0156 9.5625H14.707L12.875 6.5ZM17.6875 13.5H14.1875V17H17.6875V13.5ZM13.9688 12.1875H17.9062C18.5078 12.1875 19 12.6797 19 13.2812V17.2188C19 17.8477 18.5078 18.3125 17.9062 18.3125H13.9688C13.3398 18.3125 12.875 17.8477 12.875 17.2188V13.2812C12.875 12.6797 13.3398 12.1875 13.9688 12.1875ZM10.6875 15.25C10.6875 14.4844 10.25 13.7734 9.59375 13.3633C8.91016 12.9805 8.0625 12.9805 7.40625 13.3633C6.72266 13.7734 6.3125 14.4844 6.3125 15.25C6.3125 16.043 6.72266 16.7539 7.40625 17.1641C8.0625 17.5469 8.91016 17.5469 9.59375 17.1641C10.25 16.7539 10.6875 16.043 10.6875 15.25ZM5 15.25C5 14.0195 5.65625 12.8711 6.75 12.2422C7.81641 11.6133 9.15625 11.6133 10.25 12.2422C11.3164 12.8711 12 14.0195 12 15.25C12 16.5078 11.3164 17.6562 10.25 18.2852C9.15625 18.9141 7.81641 18.9141 6.75 18.2852C5.65625 17.6562 5 16.5078 5 15.25Z"
      fill="black"
    />
  </svg>
`,de=Dt.qy`
  <svg
    width="20"
    height="20"
    viewBox="2 2 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33984 5.51562L18.4258 10.7656C19.3008 11.1484 19.3008 12.3789 18.4258 12.7617L6.33984 18.0117C5.41016 18.4219 4.45312 17.3828 4.94531 16.4805L6.85938 12.9531C6.96875 12.7344 7.1875 12.5703 7.46094 12.543L12.2734 11.9414C12.3555 11.9414 12.4375 11.8594 12.4375 11.75C12.4375 11.668 12.3555 11.5859 12.2734 11.5859L7.46094 10.9844C7.1875 10.9297 6.96875 10.793 6.85938 10.5742L4.94531 7.04688C4.45312 6.14453 5.41016 5.10547 6.33984 5.51562Z"
      fill="var(--arc-color-neutral-400)"
    />
  </svg>
`,he=Dt.qy`
  <svg
    width="20"
    height="20"
    viewBox="2 2 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33984 5.51562L18.4258 10.7656C19.3008 11.1484 19.3008 12.3789 18.4258 12.7617L6.33984 18.0117C5.41016 18.4219 4.45312 17.3828 4.94531 16.4805L6.85938 12.9531C6.96875 12.7344 7.1875 12.5703 7.46094 12.543L12.2734 11.9414C12.3555 11.9414 12.4375 11.8594 12.4375 11.75C12.4375 11.668 12.3555 11.5859 12.2734 11.5859L7.46094 10.9844C7.1875 10.9297 6.96875 10.793 6.85938 10.5742L4.94531 7.04688C4.45312 6.14453 5.41016 5.10547 6.33984 5.51562Z"
      fill="url(#paint0_linear_7580_30219)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7580_30219"
        x1="0.292683"
        y1="24"
        x2="23.8389"
        y2="23.1127"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9C15FF" />
        <stop
          offset="1"
          stop-color="#1EB4FB"
        />
      </linearGradient>
    </defs>
  </svg>
`,pe=Dt.qy`
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6875 7.75C12.6875 5.72656 11.5938 3.86719 9.84375 2.82812C8.06641 1.81641 5.90625 1.81641 4.15625 2.82812C2.37891 3.86719 1.3125 5.72656 1.3125 7.75C1.3125 9.80078 2.37891 11.6602 4.15625 12.6992C5.90625 13.7109 8.06641 13.7109 9.84375 12.6992C11.5938 11.6602 12.6875 9.80078 12.6875 7.75ZM0 7.75C0 5.26172 1.3125 2.96484 3.5 1.70703C5.66016 0.449219 8.3125 0.449219 10.5 1.70703C12.6602 2.96484 14 5.26172 14 7.75C14 10.2656 12.6602 12.5625 10.5 13.8203C8.3125 15.0781 5.66016 15.0781 3.5 13.8203C1.3125 12.5625 0 10.2656 0 7.75ZM4.83984 9.47266C5.25 9.91016 5.96094 10.375 7 10.375C8.01172 10.375 8.72266 9.91016 9.13281 9.47266C9.37891 9.19922 9.78906 9.17188 10.0625 9.41797C10.3359 9.66406 10.3359 10.0742 10.0898 10.3477C9.48828 11.0039 8.44922 11.6875 7 11.6875C5.52344 11.6875 4.48438 11.0039 3.88281 10.3477C3.63672 10.0742 3.66406 9.66406 3.91016 9.41797C4.18359 9.17188 4.59375 9.19922 4.83984 9.47266ZM3.9375 6.4375C3.9375 5.97266 4.32031 5.5625 4.8125 5.5625C5.30469 5.5625 5.6875 5.97266 5.6875 6.4375C5.6875 6.92969 5.30469 7.3125 4.8125 7.3125C4.32031 7.3125 3.9375 6.92969 3.9375 6.4375ZM9.1875 5.5625C9.67969 5.5625 10.0625 5.97266 10.0625 6.4375C10.0625 6.92969 9.67969 7.3125 9.1875 7.3125C8.69531 7.3125 8.3125 6.92969 8.3125 6.4375C8.3125 5.97266 8.69531 5.5625 9.1875 5.5625Z"
      fill="black"
    />
  </svg>
`,ue=Dt.qy`
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 13.4375H7.97266C11.1172 13.4375 13.6602 10.8945 13.6602 7.75C13.6602 7.3125 13.6328 6.875 13.5234 6.46484L13.4141 7.09375C13.3047 7.72266 12.7578 8.1875 12.1289 8.1875H9.96875C9.33984 8.1875 8.79297 7.72266 8.68359 7.09375L8.49219 6H7.48047L7.28906 7.09375C7.17969 7.72266 6.63281 8.1875 6.00391 8.1875H3.84375C3.21484 8.1875 2.66797 7.72266 2.55859 7.09375L2.44922 6.46484C2.33984 6.875 2.3125 7.3125 2.3125 7.75C2.3125 10.8945 4.85547 13.4375 8 13.4375ZM7.20703 4.6875H8.76562C9.01172 4.44141 9.36719 4.25 9.75 4.25H12.3477C12.375 4.25 12.4297 4.25 12.4844 4.27734C11.4453 2.9375 9.80469 2.0625 8 2.0625C6.16797 2.0625 4.52734 2.9375 3.48828 4.27734C3.54297 4.27734 3.59766 4.25 3.625 4.25H6.22266C6.60547 4.25 6.96094 4.44141 7.20703 4.6875ZM8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM4.91016 9.85547C5.18359 9.60938 5.59375 9.63672 5.83984 9.91016C6.25 10.3477 6.96094 10.8125 8 10.8125C9.01172 10.8125 9.72266 10.3477 10.1328 9.91016C10.3789 9.63672 10.7891 9.60938 11.0625 9.85547C11.3086 10.1016 11.3359 10.5117 11.0898 10.7852C10.4883 11.4414 9.44922 12.125 7.97266 12.125C6.52344 12.125 5.48438 11.4414 4.88281 10.7852C4.63672 10.5117 4.66406 10.1016 4.91016 9.85547Z"
      fill="black"
    />
  </svg>
`,ge=Dt.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.94141 3.10156L10.5 2.5L11.0742 0.96875C11.1016 0.832031 11.2383 0.75 11.375 0.75C11.4844 0.75 11.6211 0.832031 11.6484 0.96875L12.25 2.5L13.7812 3.10156C13.918 3.12891 14 3.26562 14 3.375C14 3.51172 13.918 3.64844 13.7812 3.67578L12.25 4.25L11.6484 5.80859C11.6211 5.91797 11.4844 6 11.375 6C11.2383 6 11.1016 5.91797 11.0742 5.80859L10.5 4.25L8.94141 3.67578C8.83203 3.64844 8.75 3.51172 8.75 3.375C8.75 3.26562 8.83203 3.12891 8.94141 3.10156ZM0.246094 7.3125L0.710938 7.12109L0.929688 7.01172H0.957031L3.36328 5.89062L4.48438 3.45703L4.59375 3.23828L4.8125 2.77344C4.86719 2.60938 5.03125 2.5 5.19531 2.5C5.35938 2.5 5.52344 2.60938 5.60547 2.77344L5.82422 3.23828L5.90625 3.45703L5.93359 3.48438L7.02734 5.89062L9.46094 7.01172L9.67969 7.12109L10.1445 7.33984C10.3086 7.39453 10.418 7.55859 10.418 7.72266C10.418 7.88672 10.3086 8.05078 10.1445 8.13281L9.67969 8.32422L9.46094 8.43359L7.02734 9.55469L5.90625 11.9609V11.9883L5.79688 12.207L5.60547 12.6719C5.52344 12.8359 5.35938 12.9453 5.19531 12.9453C5.03125 12.9453 4.86719 12.8359 4.8125 12.6719L4.59375 12.207L4.48438 11.9883V11.9609L3.36328 9.55469L0.957031 8.43359H0.929688L0.710938 8.32422L0.246094 8.13281C0.0820312 8.05078 0 7.88672 0 7.72266C0 7.55859 0.0820312 7.39453 0.246094 7.3125ZM2.51562 7.72266L3.91016 8.37891C4.18359 8.48828 4.42969 8.73438 4.56641 9.00781L5.19531 10.4023L5.85156 9.00781C5.98828 8.73438 6.20703 8.48828 6.48047 8.37891L7.875 7.72266L6.48047 7.06641C6.20703 6.95703 5.98828 6.71094 5.85156 6.4375L5.19531 5.04297L4.56641 6.4375C4.42969 6.71094 4.18359 6.95703 3.91016 7.06641L2.51562 7.72266ZM10.5 11.25L11.0742 9.71875C11.1016 9.58203 11.2383 9.5 11.375 9.5C11.4844 9.5 11.6211 9.58203 11.6484 9.71875L12.25 11.25L13.7812 11.8516C13.918 11.8789 14 12.0156 14 12.125C14 12.2617 13.918 12.3984 13.7812 12.4258L12.25 13L11.6484 14.5586C11.6211 14.668 11.4844 14.75 11.375 14.75C11.2383 14.75 11.1016 14.668 11.0742 14.5586L10.5 13L8.94141 12.4258C8.83203 12.3984 8.75 12.2617 8.75 12.125C8.75 12.0156 8.83203 11.8789 8.94141 11.8516L10.5 11.25Z"
      fill="black"
    />
  </svg>
`,ve=Dt.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.52344 2.17188L5.00391 2.9375H8.96875L8.44922 2.17188C8.42188 2.11719 8.33984 2.0625 8.25781 2.0625H5.71484C5.63281 2.0625 5.55078 2.11719 5.52344 2.17188ZM9.54297 1.43359L10.5547 2.9375H10.9375H12.25H12.4688C12.8242 2.9375 13.125 3.23828 13.125 3.59375C13.125 3.97656 12.8242 4.25 12.4688 4.25H12.25V12.5625C12.25 13.793 11.2656 14.75 10.0625 14.75H3.9375C2.70703 14.75 1.75 13.793 1.75 12.5625V4.25H1.53125C1.14844 4.25 0.875 3.97656 0.875 3.59375C0.875 3.23828 1.14844 2.9375 1.53125 2.9375H1.75H3.0625H3.41797L4.42969 1.43359C4.70312 1.02344 5.19531 0.75 5.71484 0.75H8.25781C8.77734 0.75 9.26953 1.02344 9.54297 1.43359ZM3.0625 4.25V12.5625C3.0625 13.0547 3.44531 13.4375 3.9375 13.4375H10.0625C10.5273 13.4375 10.9375 13.0547 10.9375 12.5625V4.25H3.0625ZM5.25 6V11.6875C5.25 11.9336 5.03125 12.125 4.8125 12.125C4.56641 12.125 4.375 11.9336 4.375 11.6875V6C4.375 5.78125 4.56641 5.5625 4.8125 5.5625C5.03125 5.5625 5.25 5.78125 5.25 6ZM7.4375 6V11.6875C7.4375 11.9336 7.21875 12.125 7 12.125C6.75391 12.125 6.5625 11.9336 6.5625 11.6875V6C6.5625 5.78125 6.75391 5.5625 7 5.5625C7.21875 5.5625 7.4375 5.78125 7.4375 6ZM9.625 6V11.6875C9.625 11.9336 9.40625 12.125 9.1875 12.125C8.94141 12.125 8.75 11.9336 8.75 11.6875V6C8.75 5.78125 8.94141 5.5625 9.1875 5.5625C9.40625 5.5625 9.625 5.78125 9.625 6Z"
      fill="black"
    />
  </svg>
`,me=Dt.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.1875 4.25C9.1875 3.48438 8.75 2.77344 8.09375 2.36328C7.41016 1.98047 6.5625 1.98047 5.90625 2.36328C5.22266 2.77344 4.8125 3.48438 4.8125 4.25C4.8125 5.04297 5.22266 5.75391 5.90625 6.16406C6.5625 6.54688 7.41016 6.54688 8.09375 6.16406C8.75 5.75391 9.1875 5.04297 9.1875 4.25ZM3.5 4.25C3.5 3.01953 4.15625 1.87109 5.25 1.24219C6.31641 0.613281 7.65625 0.613281 8.75 1.24219C9.81641 1.87109 10.5 3.01953 10.5 4.25C10.5 5.50781 9.81641 6.65625 8.75 7.28516C7.65625 7.91406 6.31641 7.91406 5.25 7.28516C4.15625 6.65625 3.5 5.50781 3.5 4.25ZM2.21484 13.4375H11.7578C11.5117 11.7148 10.0352 10.375 8.23047 10.375H5.74219C3.9375 10.375 2.46094 11.7148 2.21484 13.4375ZM0.875 13.957C0.875 11.25 3.03516 9.0625 5.74219 9.0625H8.23047C10.9375 9.0625 13.125 11.25 13.125 13.957C13.125 14.3945 12.7422 14.75 12.3047 14.75H1.66797C1.23047 14.75 0.875 14.3945 0.875 13.957Z"
      fill="black"
    />
  </svg>
`,be=Dt.qy`
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.52344 1.92578L6.90625 0.886719C6.93359 0.804688 7.01562 0.75 7.125 0.75C7.20703 0.75 7.28906 0.804688 7.31641 0.886719L7.69922 1.92578L8.73828 2.30859C8.82031 2.33594 8.875 2.41797 8.875 2.5C8.875 2.60938 8.82031 2.69141 8.73828 2.71875L7.69922 3.10156L7.31641 4.11328C7.28906 4.19531 7.20703 4.25 7.125 4.25C7.01562 4.25 6.93359 4.19531 6.90625 4.11328L6.52344 3.10156L5.51172 2.71875C5.42969 2.69141 5.375 2.60938 5.375 2.5C5.375 2.41797 5.42969 2.33594 5.51172 2.30859L6.52344 1.92578ZM12.7305 2.0625L9.72266 5.07031L10.6797 6.02734L13.6875 3.01953L12.7305 2.0625ZM2.3125 12.5078L3.24219 13.4375L9.75 6.95703L8.79297 6L2.3125 12.5078ZM11.8008 1.16016C12.3203 0.640625 13.1406 0.640625 13.6602 1.16016L14.5898 2.08984C15.1094 2.60938 15.1094 3.42969 14.5898 3.94922L4.17188 14.3672C3.65234 14.8867 2.83203 14.8867 2.3125 14.3672L1.38281 13.4375C0.863281 12.918 0.863281 12.0977 1.38281 11.5781L11.8008 1.16016ZM0.316406 3.97656L1.875 3.375L2.44922 1.84375C2.47656 1.70703 2.61328 1.625 2.75 1.625C2.85938 1.625 2.99609 1.70703 3.02344 1.84375L3.625 3.375L5.15625 3.97656C5.29297 4.00391 5.375 4.14062 5.375 4.25C5.375 4.38672 5.29297 4.52344 5.15625 4.55078L3.625 5.125L3.02344 6.68359C2.99609 6.79297 2.85938 6.875 2.75 6.875C2.61328 6.875 2.47656 6.79297 2.44922 6.68359L1.875 5.125L0.316406 4.55078C0.207031 4.52344 0.125 4.38672 0.125 4.25C0.125 4.14062 0.207031 4.00391 0.316406 3.97656ZM9.94141 10.9766L11.5 10.375L12.0742 8.84375C12.1016 8.70703 12.2383 8.625 12.375 8.625C12.4844 8.625 12.6211 8.70703 12.6484 8.84375L13.25 10.375L14.7812 10.9766C14.918 11.0039 15 11.1406 15 11.25C15 11.3867 14.918 11.5234 14.7812 11.5508L13.25 12.125L12.6484 13.6836C12.6211 13.793 12.4844 13.875 12.375 13.875C12.2383 13.875 12.1016 13.793 12.0742 13.6836L11.5 12.125L9.94141 11.5508C9.83203 11.5234 9.75 11.3867 9.75 11.25C9.75 11.1406 9.83203 11.0039 9.94141 10.9766Z"
      fill="var(--arc-color-text-primary)"
    />
  </svg>
`,fe=(Dt.qy`
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7734 3.85938L15 3L15.8203 0.8125C15.8594 0.617188 16.0547 0.5 16.25 0.5C16.4062 0.5 16.6016 0.617188 16.6406 0.8125L17.5 3L19.6875 3.85938C19.8828 3.89844 20 4.09375 20 4.25C20 4.44531 19.8828 4.64062 19.6875 4.67969L17.5 5.5L16.6406 7.72656C16.6016 7.88281 16.4062 8 16.25 8C16.0547 8 15.8594 7.88281 15.8203 7.72656L15 5.5L12.7734 4.67969C12.6172 4.64062 12.5 4.44531 12.5 4.25C12.5 4.09375 12.6172 3.89844 12.7734 3.85938ZM8.00781 3.39062L10.0391 7.84375L14.4922 9.875C14.7266 9.99219 14.8828 10.2266 14.8828 10.4609C14.8828 10.6953 14.7266 10.9297 14.4922 11.0078L10.0391 13.0781L8.00781 17.5312C7.89062 17.7656 7.65625 17.9219 7.42188 17.9219C7.1875 17.9219 6.95312 17.7656 6.875 17.5312L4.80469 13.0781L0.351562 11.0469C0.117188 10.9297 0 10.6953 0 10.4609C0 10.2266 0.117188 9.99219 0.351562 9.875L4.80469 7.84375L6.875 3.39062C6.95312 3.15625 7.1875 3 7.42188 3C7.65625 3 7.89062 3.15625 8.00781 3.39062ZM15 15.5L15.8203 13.3125C15.8594 13.1172 16.0547 13 16.25 13C16.4062 13 16.6016 13.1172 16.6406 13.3125L17.5 15.5L19.6875 16.3594C19.8828 16.3984 20 16.5938 20 16.75C20 16.9453 19.8828 17.1406 19.6875 17.1797L17.5 18L16.6406 20.2266C16.6016 20.3828 16.4062 20.5 16.25 20.5C16.0547 20.5 15.8594 20.3828 15.8203 20.2266L15 18L12.7734 17.1797C12.6172 17.1406 12.5 16.9453 12.5 16.75C12.5 16.5938 12.6172 16.3984 12.7734 16.3594L15 15.5Z"
      fill="url(#paint0_linear_8045_3935)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_8045_3935"
        x1="-1.70732"
        y1="22"
        x2="21.8389"
        y2="21.1127"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9C15FF" />
        <stop
          offset="1"
          stop-color="#1EB4FB"
        />
      </linearGradient>
    </defs>
  </svg>
`,Dt.AH`
  .canned-options {
    background-color: var(
      --ai-writer-background-color,
      var(--arc-color-mono-white)
    );
    margin-top: var(--arc-space-1);
    padding: var(--arc-space-1) 0;
    max-height: min(42rem, 60vh); /** Taken from Rise */
    min-width: 26.5rem; /** Taken from Rise */
    overflow-y: auto;
    width: fit-content;
    box-shadow: var(--arc-shadow-md);
    border-radius: var(--arc-border-radius-md);
    box-sizing: border-box;
    --mon-menu-box-shadow: none;
    --mon-menu-padding: 0;
    --mon-menu-item-border-radius: 0;
    --mon-menu-item-padding: var(--arc-space-1) var(--arc-space-2-5);
    --mon-menu-item-icon-size: 24px;
  }

  .canned-options .menu-heading:first-of-type {
    padding: var(--arc-space-0-5) var(--arc-space-2-5);
  }

  .canned-options .menu-heading {
    padding: var(--arc-space-1-5) var(--arc-space-2-5) var(--arc-space-0-5);
  }

  .menu-heading {
    font-size: var(--arc-font-size-12);
  }

  .mon-visually-hidden {
    display: none;
  }

  .right-chevron svg {
    transform: rotateY(180deg);
  }

  [slot='icon'] {
    display: flex;
  }
`),we=[{icon:be,value:"improve",text:"Improve writing"},{icon:ie,value:"proofread",text:"Fix spelling and grammar"},{icon:oe,value:"shorten",text:"Make shorter"},{icon:se,value:"lengthen",text:"Make longer"},{icon:pe,value:"changeTone",text:"Change tone",submenu:[{value:"changeTone_professional",text:"Professional"},{value:"changeTone_casual",text:"Casual"},{value:"changeTone_straightforward",text:"Straightforward"},{value:"changeTone_confident",text:"Confident"},{value:"changeTone_friendly",text:"Friendly"},{value:"changeTone_custom",text:"Custom"}]},{icon:me,value:"changeAudience",text:"Change audience"},{icon:ce,value:"simplify",text:"Simplify Writing"}],ye=[{icon:Xt,value:"boldKeyTerms",text:"Bold key terms"},{icon:ue,value:"addEmojis",text:"Add emojis"}],Ce=[{icon:ae,value:"continue",text:"Continue writing"},{icon:ge,value:"explain",text:"Explain this"},{icon:ge,value:"suggestImprovements",text:"Suggest improvements"},{icon:ge,value:"findSynonyms",text:"Find synonyms"},{icon:ge,value:"createAnalogy",text:"Create an analogy"},{icon:ge,value:"createScenario",text:"Create a scenario"},{icon:ge,value:"createKeyTakeaways",text:"Create key takeaways"},{icon:ge,value:"createImagePrompt",text:"Create an AI image prompt"}],xe=[{icon:ge,value:"createHaiku",text:"Write a haiku"}],ze=[{icon:ge,value:"writeAboutTopic",text:"Write about..."},{icon:ge,value:"write1ParagraphAboutTopic",text:"Write 1 paragraph"},{icon:ge,value:"write2ParagraphsAboutTopic",text:"Write 2 paragraphs"},{icon:ge,value:"write3ParagraphsAboutTopic",text:"Write 3 paragraphs"}],ke=[{icon:te,value:"replace",text:"Replace selection"},{icon:Qt,value:"append",text:"Insert below"},{icon:ee,value:"copy",text:"Copy"},{icon:ae,value:"continue",text:"Continue writing"},{icon:ve,value:"discard",text:"Cancel"}],Le=[{icon:le,value:"retry",text:"Try again"},{icon:ve,value:"discard",text:"Cancel"}],Me={improve:{option:"improve"},proofread:{option:"proofread"},lengthen:{option:"lengthen"},shorten:{option:"shorten"},changeTone_professional:{option:"changeTone",params:{tone:"professional"}},changeTone_casual:{option:"changeTone",params:{tone:"casual"}},changeTone_straightforward:{option:"changeTone",params:{tone:"straightforward"}},changeTone_confident:{option:"changeTone",params:{tone:"confident"}},changeTone_friendly:{option:"changeTone",params:{tone:"friendly"}},changeTone_custom:{option:"changeTone"},changeAudience:{option:"changeAudience"},simplify:{option:"simplify"},copy:{option:"copy"},append:{option:"append"},replace:{option:"replace"},continue:{option:"continue"},discard:{option:"discard"},retry:{option:"retry"},boldKeyTerms:{option:"boldKeyTerms"},addEmojis:{option:"addEmojis"},explain:{option:"explain"},suggestImprovements:{option:"suggestImprovements"},findSynonyms:{option:"findSynonyms"},createAnalogy:{option:"createAnalogy"},createScenario:{option:"createScenario"},createKeyTakeaways:{option:"createKeyTakeaways"},createImagePrompt:{option:"createImagePrompt"},createHaiku:{option:"createHaiku"},writeAboutTopic:{option:"writeAboutTopic"},write1ParagraphAboutTopic:{option:"write1ParagraphAboutTopic"},write2ParagraphsAboutTopic:{option:"write2ParagraphsAboutTopic"},write3ParagraphsAboutTopic:{option:"write3ParagraphsAboutTopic"}};let Ze=class extends Wt{constructor(){super(...arguments),this.menu="initial",this.submenuAnchor=this,this.handleMenuSubmit=t=>{const{detail:e}=t,n=Me[e.value];n&&this.dispatchEvent(new CustomEvent("canned-option:submit",{detail:n}))},this.handleSubmenuTriggerClick=(t,e)=>{t.currentTarget instanceof HTMLElement&&(this.selected!==e?(this.selected=e,this.submenuAnchor=t.currentTarget):this.closeSubmenu())},this.openSubmenu=t=>{this.selected!==t.detail.value&&(this.selected=t.detail.value,this.submenuAnchor=t.detail.target)},this.closeSubmenu=()=>{this.selected=void 0,this.submenuAnchor=this},this.onMenuEscape=()=>{this.selected&&(this.selected=void 0,this.submenuAnchor=this)}}render(){return Dt.qy`
      <div class="canned-options">
        <mon-menu
          class="menu"
          name="ai-writer-menu"
          @mon-menu:open-sub-menu=${this.openSubmenu}
          @mon-menu:close-sub-menu=${this.closeSubmenu}
          @mon-menu:escape=${this.onMenuEscape}
          @mon-menu:submit=${this.handleMenuSubmit}
        >
          ${this.renderInitialMenuOptions()} ${this.renderReplyMenuOptions()}
          ${this.renderScratchMenuOptions()} ${this.renderCanceledMenuOptions()}
        </mon-menu>
      </div>
    `}renderInitialMenuOptions(){return"initial"!==this.menu?Dt.s6:Dt.qy`
      ${this.renderEditSelectionsOptions()}
      ${this.renderFormatSelectionOptions()}
      ${this.renderGenerateFromSelectionOptions()} ${this.renderPromptOptions()}
      ${this.renderScratchOptions()}
    `}renderReplyMenuOptions(){return"reply"!==this.menu?Dt.s6:Dt.qy`
      ${this.renderMenuItemGroup(ke)}
      ${this.renderEditSelectionsOptions()}
      ${this.renderFormatSelectionOptions()}
    `}renderScratchMenuOptions(){return"scratch"!==this.menu?Dt.s6:this.renderScratchOptions()}renderCanceledMenuOptions(){return"canceled"!==this.menu?Dt.s6:Dt.qy`${this.renderMenuItemGroup(Le)}`}renderEditSelectionsOptions(){return Dt.qy`
      <strong class="menu-heading">Edit selection</strong>
      ${this.renderMenuItemGroup(we)}
    `}renderFormatSelectionOptions(){return Dt.qy`
      <strong class="menu-heading">Format selection</strong>
      ${this.renderMenuItemGroup(ye)}
    `}renderGenerateFromSelectionOptions(){return Dt.qy`
      <strong class="menu-heading">Generate from selection</strong>
      ${this.renderMenuItemGroup(Ce)}
    `}renderPromptOptions(){return Dt.qy`
      <strong class="menu-heading">Prompt</strong>
      ${this.renderMenuItemGroup(xe)}
    `}renderScratchOptions(){return Dt.qy`
      <strong class="menu-heading">Generate from scratch</strong>
      ${this.renderMenuItemGroup(ze)}
    `}renderMenuItemGroup(t){return Dt.qy`
      ${t.map((t=>t.submenu?.length?Dt.qy`
            <mon-menu-item
              value=${t.value}
              data-has-icons
              @click=${e=>{this.handleSubmenuTriggerClick(e,t.value)}}
            >
              <span slot="icon">${t.icon}</span>
              <span>${t.text}</span>
              <span
                slot="chevron"
                class="right-chevron"
              >
                ${re}
              </span>
            </mon-menu-item>
            ${this.renderSubmenu(t)}
          `:Dt.qy`
          <mon-menu-item
            value=${t.value}
            data-has-icons
          >
            <span slot="icon">${t.icon}</span>
            <span>${t.text}</span>
          </mon-menu-item>
        `))}
    `}renderSubmenu({submenu:t,value:e}){return e===this.selected&&t?Dt.qy`
        <mon-popover
          .anchor=${this.submenuAnchor}
          .autoResizeOptions=${{enabled:!0,padding:{top:8,right:8,bottom:8,left:8}}}
          .semantic=${!0}
          .offset=${4}
          placement="right-start"
        >
          <mon-menu
            aria-label="${e} submenu"
            name="${e} submenu"
            autofocusit
          >
            ${t.map((t=>Dt.qy`
                <mon-menu-item value=${t.value}>
                  <span slot="icon">${t.icon}</span>
                  <span>${t.text}</span>
                </mon-menu-item>
              `))}
          </mon-menu>
        </mon-popover>
      `:Dt.qy``}};Ze.styles=fe,(0,qt.Cg)([(0,Kt.MZ)({type:String})],Ze.prototype,"menu",void 0),(0,qt.Cg)([(0,Kt.wk)()],Ze.prototype,"submenuAnchor",void 0),(0,qt.Cg)([(0,Kt.wk)()],Ze.prototype,"selected",void 0),Ze=(0,qt.Cg)([(0,Kt.EM)("mon-ai-writer-canned-options")],Ze);var Je=n(5494),$e=n(6394),He=n(1959),_e=n(2602),Te=n.n(_e);class Se{constructor({onCancel:t,onDone:e,onResult:n,onSubmitted:i,fetch:r}){if(this.sessionId=window.crypto.randomUUID(),this.process=async(t,e)=>{const{onDone:n,onResult:i,onSubmitted:r}=this;r();const o=await this.fetch(this.sessionId,t,{signal:e.signal});if(!e.signal.aborted){const n=o.pipeThrough(new Ae).getReader(),r=()=>{this.onCancel(),n.cancel()};e.signal.addEventListener("abort",r);try{await n.read().then((function e({done:r,value:o}){if(!r)return i({input:t,output:o}),n.read().then(e)}))}finally{e.signal.removeEventListener("abort",r)}}n()},!r)throw new Error("AI Writer must be initialized with a defined AIResponseFetcher function");this.onCancel=t,this.onDone=e,this.onResult=n,this.onSubmitted=i,this.fetch=r}}class Ae extends TransformStream{static _guardHtml(t){const e=t.lastIndexOf("<");return-1===e||-1!==t.slice(e+1).indexOf(">")}constructor(t){let e=t?.response??"";super({start(n){null!=t&&n.enqueue(e)},transform(t,n){e+=t,Ae._guardHtml(e)&&n.enqueue(e)}})}}const Ve=t=>{class e extends t{constructor(){super(...arguments),this.initialContent="",this.aiResponseFetcher=void 0,this.formatter=Ie,this.courseId="mondrian-test",this.status="prompt",this.userInput="",this.aiResponses=[],this.selectedResponseIndex=0,this.updateLastResponse=Te()((t=>{const e=[...this.aiResponses],n=e.pop();n&&(this.aiResponses=[...e,{...n,...t}])}),64),this.addNewResponse=()=>{this.aiResponses=[...this.aiResponses,{prompt:this.userInput,response:"",menu:"reply"}],this.selectedResponseIndex=this.aiResponses.length-1},this.incrementResponseIndex=()=>{this.selectedResponseIndex<=this.aiResponses.length-1&&this.selectedResponseIndex++},this.decrementResponseIndex=()=>{this.selectedResponseIndex>0&&this.selectedResponseIndex--},this.handleInput=t=>{this.userInput=t.target.value},this.submitInput=()=>{this.userInput.length&&this.requestResult({content:this.displayedResult||" ",key:"custom",prompt:this.userInput})},this.requestResult=t=>{this.abortController=new AbortController,this.aiStreamInstance.process({...t,courseId:this.courseId,wentBack:this.wentBack},this.abortController).catch((t=>{"AbortError"!==t.name&&(this.status="error")}))},this.fillPrompt=t=>{const e=Pe[t];e&&(this.userInput=`${e} `)},this.handleCannedOption=({option:t,params:e})=>{switch(t){case"changeTone":e&&e.tone?this.requestResult({content:this.displayedResult,key:t,tone:e.tone}):this.fillPrompt(t);break;case"changeAudience":case"createBulletedList":case"createNumberedList":case"createTable":case"writeAboutTopic":case"write1ParagraphAboutTopic":case"write2ParagraphsAboutTopic":case"write3ParagraphsAboutTopic":this.fillPrompt(t);break;case"continue":this.requestResult({content:this.displayedResult,key:t});break;case"append":this.dispatchEvent(new CustomEvent("append",{detail:this.displayedResult}));break;case"replace":this.dispatchEvent(new CustomEvent("replace",{detail:this.displayedResult}));break;case"copy":navigator.clipboard.writeText(this.displayedResult).then((()=>{console.log("copied to clipboard")}));break;case"discard":this.dispatchEvent(new CustomEvent("blur"));break;case"retry":{const{retry:t}=this.currentResponse;t&&this.requestResult(t[0]);break}default:this.requestResult({content:this.displayedResult,key:t,...e??{}})}},this.stopGeneratingAIResponse=()=>{this.abortController&&this.abortController.abort();const t=this.aiResponses[this.aiResponses.length-1];t.response?.length||(this.aiResponses.pop(),this.decrementResponseIndex()),this.status="prompt"}}get currentMenu(){return this.currentResponse.menu??"initial"}get currentResponse(){return 0===this.aiResponses.length?Ee(this.initialContent):this.aiResponses[this.selectedResponseIndex]}get responseCount(){return this.aiResponses.length}get displayedResult(){const{currentResponse:t}=this;return this.formatter(t.response||this.initialContent)}get wentBack(){return Math.max(this.aiResponses.length-this.selectedResponseIndex-1,0)}get aiStreamInstance(){return this.aiStream||(this.aiStream=new Se({onCancel:()=>{this.currentResponse.menu="canceled"},onDone:()=>{this.status="prompt"},onResult:({input:t,output:e})=>{try{"streaming"!==this.status&&(this.status="streaming"),this.updateLastResponse({response:e,retry:[t]})}catch{this.status="error"}},onSubmitted:()=>{this.status="pending",this.addNewResponse()},fetch:this.aiResponseFetcher})),this.aiStream}connectedCallback(){super.connectedCallback(),this.aiResponses.length||this.aiResponses.push(Ee(this.initialContent))}}return(0,qt.Cg)([(0,Kt.MZ)({type:String})],e.prototype,"initialContent",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Function,attribute:!1})],e.prototype,"aiResponseFetcher",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Function,attribute:!1})],e.prototype,"formatter",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String})],e.prototype,"courseId",void 0),(0,qt.Cg)([(0,Kt.wk)()],e.prototype,"status",void 0),(0,qt.Cg)([(0,Kt.wk)()],e.prototype,"userInput",void 0),(0,qt.Cg)([(0,Kt.wk)()],e.prototype,"aiResponses",void 0),(0,qt.Cg)([(0,Kt.wk)()],e.prototype,"selectedResponseIndex",void 0),e},Pe={changeAudience:"Rewrite this for an intended audience of",changeTone:"Change the tone to",createBulletedList:"Write a bulleted list about",createNumberedList:"Write a numbered list about",createTable:"Create a table about",writeAboutTopic:"Write about",write1ParagraphAboutTopic:"Write 1 paragraph about",write2ParagraphsAboutTopic:"Write 2 paragraphs about",write3ParagraphsAboutTopic:"Write 3 paragraphs about"};function Ee(t){const e=document.createElement("div");return e.innerHTML=t,{prompt:"",response:t,menu:e.innerText.trim().length>0?"initial":"scratch"}}function Ie(t){const e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText||""}const Re=Dt.AH`
  :host * {
    box-sizing: border-box;
    font-family: var(--arc-font-family-body), sans-serif;
  }

  :host mon-draggable {
    max-width: 75rem; /** Taken from Rise */
    cursor: grab;
    background: transparent;
    overflow: visible;
  }

  :host mon-draggable:active {
    cursor: grabbing;
  }

  .content {
    width: fit-content;
  }

  .body {
    background-color: var(
      --ai-writer-background-color,
      var(--arc-color-mono-white)
    );
    box-shadow: var(--arc-shadow-md);
    border-radius: var(--arc-border-radius-md);
    width: 68rem; /** Taken from Rise */
    max-width: 90vw; /** Taken from Rise */
  }

  .input-section form {
    display: flex;
    width: 100%;
  }

  .response {
    padding: var(--ai-writer-content-padding, var(--arc-space-2));
    font-size: var(--arc-font-size-16);
  }

  .response {
    height: 16.2rem; /** Taken from Rise */
    overflow: auto;
    line-height: var(--arc-font-size-32);
    word-break: break-word;
  }

  .response p {
    margin-top: 0;
  }

  .response p:last-child {
    margin-bottom: 0;
  }

  .input-section {
    border-top: 1px solid var(--arc-color-border-standard);
    display: flex;
    align-items: center;
    gap: 1.5rem; /** Taken from Rise */
    padding: 0 var(--arc-space-2);
  }

  .input-section > div {
    padding-top: var(--arc-space-1-5);
    padding-bottom: var(--arc-space-1-5);
  }

  .decorative-icons,
  .submit {
    flex: 0 0 auto;
  }

  .decorative-icons {
    display: flex;
    align-items: center;
    gap: 1.5rem; /** Taken from Rise */
  }

  .input {
    flex: 1 1 100%;
    border: none;
  }

  .input:focus,
  .input:active {
    border: none;
    outline: none;
  }

  .submit {
    background: none;
    border: none;
  }

  .submit:not(:disabled) {
    cursor: pointer;
  }

  .input-section .pagination {
    color: var(--arc-color-neutral-500);
    flex: 1 0 fit-content;
    display: flex;
    align-items: center;
    border-left: 1px solid var(--arc-color-border-standard);
    padding-top: 0;
    padding-bottom: 0;
    margin-right: calc(-1 * var(--arc-space-2));
  }

  .page-number {
    margin-bottom: 2px;
  }

  .pagination button {
    border: none;
    background: none;
    opacity: 0.5;
    padding: var(--arc-space-1-5) var(--arc-space-2-5);
  }

  .pagination button svg {
    width: 100%;
    height: var(--arc-font-size-14);
  }

  .pagination button:not(:disabled) {
    opacity: 1;
    cursor: pointer;
  }

  .right-chevron svg {
    transform: rotateY(180deg);
  }

  .stop {
    flex: 1 0 auto;
  }

  .stop button {
    padding: 0;
    background: none;
    border: none;
    outline: none;
    font-size: var(--arc-font-size-12);
    color: var(--arc-color-text-secondary);
    cursor: pointer;
  }

  .stop button:hover {
    text-decoration: underline;
    color: var(--arc-color-text-primary);
  }
`;let Be=class extends(Ve(Wt)){constructor(){super(...arguments),this.offset=12,this.positionConfig={middleware:[(0,Je.cY)(this.offset)]},this.stopMouseEventPropagation=!1,this.inputRef=(0,$e._)(),this.resultsMutationObserver=new MutationObserver((()=>{const t=this.$(".response");t&&t.scrollTo(0,t.scrollHeight)})),this.handleInputSubmit=t=>{t.preventDefault(),this.submitInput()},this.handleCannedOptionSelect=t=>{this.handleCannedOption(t.detail)},this.maybeStopPropagation=t=>{this.stopMouseEventPropagation&&this.stopPropagation(t)},this.stopPropagation=t=>{t.stopPropagation()},this.handleBlur=t=>{this.dispatchEvent(new CustomEvent("blur"))},this.handlePaginationClick=t=>{const e=t.currentTarget;"decrement"===e.name&&this.decrementResponseIndex(),"increment"===e.name&&this.incrementResponseIndex(),this.status="prompt"}}get isGenerating(){return["pending","streaming"].includes(this.status)}willUpdate(t){const e=t.get("status"),n=this.status,i=this.$(".response");i&&("pending"!==e&&"pending"===n&&this.resultsMutationObserver.observe(i,{subtree:!0,childList:!0}),"pending"===e&&"prompt"===n&&this.resultsMutationObserver.disconnect())}renderSubmitButton(){if(!this.isGenerating){const t=this.userInput.length<=0;return Dt.qy`
        <button
          class="submit"
          @click=${this.handleInputSubmit}
          ?disabled=${t}
        >
          ${t?de:he}
        </button>
      `}}renderResponseContents(){return"error"===this.status?Dt.qy`<span>An error occurred</span>`:["prompt","streaming"].includes(this.status)?Dt.qy`<span>${(0,He._)(this.displayedResult)}</span>`:Dt.qy`<span>Loading...</span>`}renderResponse(){return"scratch"===this.currentMenu?Dt.s6:Dt.qy`<div class="response">${this.renderResponseContents()}</div>`}renderPopoverContent(){return Dt.qy`
      <div class="content">
        <div class="body">
          ${this.renderResponse()}
          <div class="input-section">
            <div class="decorative-icons">${ne}</div>
            <form @submit=${this.handleInputSubmit}>
              <input
                ${(0,$e.K)(this.inputRef)}
                class="input"
                type="text"
                autofocus
                placeholder="Tell me how to edit this text"
                @click=${this.maybeStopPropagation}
                @mousedown=${this.maybeStopPropagation}
                .value=${this.userInput}
                @input=${this.handleInput}
                @keypress=${this.stopPropagation}
              />
              ${this.renderSubmitButton()} ${this.renderMiscActions()}
            </form>
          </div>
        </div>
        ${this.renderCannedOptionMenu()}
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.inputRef.value&&window.requestAnimationFrame((()=>{this.inputRef.value?.focus()}))}renderCannedOptionMenu(){if(!this.isGenerating)return Dt.qy`
        <mon-ai-writer-canned-options
          @canned-option:submit=${this.handleCannedOptionSelect}
          .menu=${this.currentMenu}
        ></mon-ai-writer-canned-options>
      `}renderMiscActions(){return this.isGenerating?Dt.qy`
        <div class="stop">
          <button @click=${this.stopGeneratingAIResponse}>
            Stop generating
          </button>
        </div>
      `:this.renderPagination()}renderPagination(){const{responseCount:t,selectedResponseIndex:e}=this,n=e+1;if(this.responseCount>1)return Dt.qy`
        <div class="pagination">
          <button
            @click=${this.handlePaginationClick}
            ?disabled=${n<2}
            name="decrement"
          >
            <span class="left-chevron">${re}</span>
          </button>
          <span class="page-number">${n} of ${t}</span>
          <button
            @click=${this.handlePaginationClick}
            ?disabled=${n>=t}
            name="increment"
          >
            <span class="right-chevron">${re}</span>
          </button>
        </div>
      `}render(){return Dt.qy`
      <mon-draggable
        @click=${this.maybeStopPropagation}
        @mousedown=${this.maybeStopPropagation}
        .anchor=${this}
        .positionConfig=${this.positionConfig}
        .isPopover=${!1}
        @blur=${this.handleBlur}
      >
        ${this.renderPopoverContent()}
      </mon-draggable>
    `}};Be.styles=Re,(0,qt.Cg)([(0,Kt.MZ)({type:Number})],Be.prototype,"offset",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Object})],Be.prototype,"positionConfig",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean})],Be.prototype,"stopMouseEventPropagation",void 0),(0,qt.Cg)([(0,Kt.wk)()],Be.prototype,"inputRef",void 0),Be=(0,qt.Cg)([(0,Kt.EM)("mon-ai-writer")],Be);var je=n(6678),Fe=n(1514);const Oe=Dt.AH`
  @media (prefers-reduced-motion: no-preference) {
    :host {
      --animation-duration: 1ms;
    }
  }

  @keyframes grow-in {
    from {
      opacity: 0;
      transform: scale(0.9, 0.9);
    }
    to {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  @keyframes shrink-out {
    from {
      opacity: 1;
      transform: scale(1, 1);
    }
    to {
      opacity: 0;
      transform: scale(0.9, 0.9);
    }
  }

  :host * {
    box-sizing: border-box;
    font-family: var(--arc-font-family-body), sans-serif;
    font-size: 10px;
  }

  dialog {
    background: var(--art-color-primary-white-500, #fff);
    border: none;
    border-radius: var(
      --art-modal-border-radius,
      var(--arc-border-radius-lg, 8px)
    );
    min-height: var(--art-modal-min-height, auto);
    min-width: var(--art-modal-min-width, auto);
    outline: 1px solid transparent;
    padding: 0;
  }

  dialog.open {
    animation: var(--animation-duration) ease-in grow-in;
    animation-iteration-count: 1;
  }

  dialog.closing {
    animation: var(--animation-duration) ease-in shrink-out;
    animation-iteration-count: 1;
    opacity: 0;
  }

  dialog::backdrop,
  dialog.closing::backdrop {
    background: rgb(0 0 0 / 1%);
    transition: var(--animation-duration) ease-in;
  }

  dialog.open::backdrop {
    background: rgb(0 0 0 / 70%);
  }

  dialog.no-backdrop::backdrop {
    background: transparent;
  }

  .dialog-wrap {
    overflow: auto;
  }

  .dialog-header {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
  }

  .dialog-header h1 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 1.6rem 1rem 1.6rem 2.4rem;
  }

  .close-button {
    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    display: flex;
    height: 2.4rem;
    margin: 1.6rem 2.4rem 1.6rem auto;
    place-content: center;
    width: 2.4rem;
  }

  .close-button svg {
    height: 2rem;
    width: 1.4rem;
  }

  .dialog-content {
    padding: var(--art-modal-content-padding, 0 2.4rem);
  }
`;let qe=class extends Wt{constructor(){super(...arguments),this.closeOnBackgroundClick=!1,this.disableClose=!1,this.animationDuration=250,this.open=!1,this.titleText="",this.noBackdrop=!1,this.dialogStyles={},this.closing=!1}async updated(t){if(super.updated(t),t.has("open")){const e=t.get("open");e||!0!==this.open?e&&!1===this.open&&this.closeModal():this.dialog?.showModal()}}handleBGClick(t){this.closeOnBackgroundClick&&t.target===this.dialog&&this.closeModal()}handleKeyDown(t){"Escape"===t.key&&(t.preventDefault(),t.stopPropagation(),this.closeModal())}closeModal(){this.dialog.open&&!this.closing&&(this.closing=!0,setTimeout((()=>{this.dialog.close(),this.dispatchEvent(new CustomEvent("artDialogClosed",{bubbles:!0,composed:!0})),this.closing=!1}),this.animationDuration))}connectedCallback(){super.connectedCallback(),this.style.setProperty("--animation-duration",`${this.animationDuration}ms`)}render(){const t={"no-backdrop":this.noBackdrop,open:this.open,closing:this.closing};return Dt.qy`
      <dialog
        .aria-label=${this.getAttribute("aria-label")}
        ?aria-modal=${!0}
        @click="${this.handleBGClick}"
        @keydown="${this.handleKeyDown}"
        style=${(0,Fe.W)(this.dialogStyles)}
        class=${(0,je.H)(t)}
      >
        <div class="dialog-wrap">
          <slot name="toast-container"></slot>
          <div class="dialog-header">
            <slot name="title">
              ${this.titleText?Dt.qy`<h1>${this.titleText}</h1>`:Dt.s6}
            </slot>
            ${this.disableClose?Dt.s6:Dt.qy`
                  <button
                    class="close-button"
                    aria-label="Close modal"
                    @click=${this.closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                      />
                    </svg>
                  </button>
                `}
          </div>
          <div class="dialog-content">
            <slot><p>Modal content failed to load</p></slot>
          </div>
        </div>
      </dialog>
    `}};qe.styles=Oe,(0,qt.Cg)([(0,Kt.P)("dialog")],qe.prototype,"dialog",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean})],qe.prototype,"closeOnBackgroundClick",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean})],qe.prototype,"disableClose",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Number})],qe.prototype,"animationDuration",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean})],qe.prototype,"open",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String})],qe.prototype,"titleText",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean})],qe.prototype,"noBackdrop",void 0),(0,qt.Cg)([(0,Kt.MZ)({attribute:!1})],qe.prototype,"dialogStyles",void 0),(0,qt.Cg)([(0,Kt.wk)()],qe.prototype,"closing",void 0),qe=(0,qt.Cg)([(0,Kt.EM)("art-modal")],qe);const De=Dt.AH`
  * {
    box-sizing: border-box;
    font-size: 10px;
  }

  :host {
    align-items: flex-start;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--arc-space-0-25, 0.2rem);
    outline: none;
  }

  :host(:focus-visible) {
    outline: -webkit-focus-ring-color auto 1px;
    outline-offset: var(--arc-space-0-5, 0.4rem);
  }

  ::slotted(i) {
    font-size: 1.4rem;
  }

  .content {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    gap-row: var(--arc-space-1, 0.8rem);
  }

  .tab-label {
    font-size: 1.4rem;
  }

  .tab-underline {
    display: none;
  }

  .tab-selected {
    display: flex;
    height: var(--arc-space-0-25, 0.2rem);
    align-self: stretch;
    background: var(--art-grays-black-000000, #000);
  }
`;let Ne=class extends Wt{constructor(){super(...arguments),this.slot="tab",this.label="",this.role="tab",this.value="",this["aria-selected"]="false",this.selected=!1,this.disabled=!1,this.tabIndex=-1,this.bindEvents=()=>{this.on("click",this.onClick)}}onClick(){this.dispatch("art-tab:change")}render(){return Dt.qy`
      <span class="content">
        <slot name="icon"></slot>
        <div class="tab-label">${this.label}</div>
        <slot></slot>
      </span>
      <span class="tab-underline ${this.selected?"tab-selected":""}"></span>
    `}};Ne.styles=De,(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],Ne.prototype,"slot",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String})],Ne.prototype,"label",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],Ne.prototype,"role",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String})],Ne.prototype,"value",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],Ne.prototype,"aria-selected",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean,reflect:!0})],Ne.prototype,"selected",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean,reflect:!0})],Ne.prototype,"disabled",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],Ne.prototype,"aria-controls",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Number,reflect:!0})],Ne.prototype,"tabIndex",void 0),Ne=(0,qt.Cg)([(0,Kt.EM)("art-tab")],Ne);const Ge=Dt.AH`
  * {
    box-sizing: border-box;
  }
`;let Ue=class extends Wt{constructor(){super(...arguments),this.value="",this.slot="panel"}render(){return Dt.qy`
      <div
        role="tabpanel"
        id=${this.id}
      >
        <slot></slot>
      </div>
    `}};Ue.styles=Ge,(0,qt.Cg)([(0,Kt.MZ)({type:String})],Ue.prototype,"value",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],Ue.prototype,"slot",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],Ue.prototype,"aria-labelledby",void 0),Ue=(0,qt.Cg)([(0,Kt.EM)("art-tab-panel")],Ue);const Ye=Dt.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
  }

  .tabs {
    align-items: flex-start;
    background: white;
    display: flex;
  }

  .tabs.sticky-header {
    position: sticky;
    top: 0;
    z-index: 999;
    padding-bottom: var(--arc-space-2-5);
  }

  slot[name='tab'] {
    display: flex;
    flex-direction: row;
    gap: var(--arc-space-4);
    padding-top: var(--arc-space-1);
  }
`;let Ke=class extends Wt{constructor(){super(...arguments),this.autofocusit=!0,this.value=null,this.stickyHeaderPosition=-1,this.tabFocus=0,this.bindEvents=()=>{this.on("art-tab:change",this.onChange),this.on("keydown",this.onKeydown)},this.onChange=t=>{t.target instanceof Ne&&(this.value=t.target.value??null,this.syncTabStates(),this.dispatch("art-tabs:change",{value:this.value}))},this.onKeydown=t=>{if(!(t.target instanceof Ne))return;const{key:e}=t;if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e)){const t=this.$$$("art-tab","tab");"ArrowRight"===e||"ArrowUp"===e?(this.tabFocus++,this.tabFocus>=t.length&&(this.tabFocus=0)):"ArrowLeft"===e||"ArrowDown"===e?(this.tabFocus--,this.tabFocus<0&&(this.tabFocus=t.length-1)):"Home"===e?this.tabFocus=0:"End"===e&&(this.tabFocus=t.length-1),this.value=t[this.tabFocus].value,this.syncTabStates()}},this.focusFirstApplicableItem=()=>{this.value=this.$selected?.value??this.$$$("art-tab","tab")[0]?.value,this.syncTabStates(),this.dispatch("art-tabs:change",{value:this.value})},this.onTabSlotChange=()=>{this.autofocusit&&this.focusFirstApplicableItem(),this.syncAriaLabels()},this.syncAriaLabels=()=>{const t=this.$$$("art-tab-panel","panel");this.$$$("art-tab","tab").forEach(((e,n)=>{const i=`art-tabs-tab-${n}`;e.id=i,t.forEach(((t,n)=>{if(t.value===e.value){const r=`art-tabs-tab-panel-${n}`;t.id=r,t.setAttribute("aria-labelledby",i),e.setAttribute("aria-controls",r)}}))}))},this.syncTabStates=()=>{this.$$$("art-tab","tab").forEach(((t,e)=>{const n=t.value===this.value;t.toggleAttribute("selected",n),t.setAttribute("aria-selected",n.toString()),t.tabIndex=n?0:-1,n&&(this.tabFocus=e,t.focus())})),this.$$$("art-tab-panel","panel").forEach((t=>{t.toggleAttribute("hidden",this.value!==t.value)}))}}get $selected(){return this.$$$("art-tab[selected]")[0]}update(t){super.update(t),t.has("value")&&this.value!==t.get("value")&&this.syncTabStates()}render(){return Dt.qy`
      <div
        role="tablist"
        class=${(0,je.H)({tabs:!0,"sticky-header":this.stickyHeaderPosition>-1})}
        style=${(0,Fe.W)({position:this.stickyHeaderPosition>-1?"sticky":"inherit",top:this.stickyHeaderPosition>-1?`${this.stickyHeaderPosition}px`:"unset"})}
      >
        <slot
          name="tab"
          @slotchange=${this.onTabSlotChange}
        ></slot>
      </div>
      <slot name="panel"></slot>
    `}};Ke.styles=Ye,(0,qt.Cg)([(0,Kt.MZ)({type:Boolean,reflect:!0})],Ke.prototype,"autofocusit",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],Ke.prototype,"value",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Number})],Ke.prototype,"stickyHeaderPosition",void 0),Ke=(0,qt.Cg)([(0,Kt.EM)("art-tabs")],Ke);const We=Dt.AH`
  :host {
    margin: 0;
    border: none;
    padding: 0;
  }
`;let Xe=class extends Wt{constructor(){super(...arguments),this.offsets={x:0,y:0},this.anchor=null,this.positionConfig={},this.strategy="fixed",this.isPopover=!0,this.updatePosition=async()=>{const{anchor:t,style:e}=this;if(t&&e){const{x:n,y:i}=await(0,Je.rD)(t,this,{placement:"bottom",strategy:this.strategy,middleware:[(0,Je.UU)(),(0,Je.BN)(),(0,Je.cY)(12)],...this.positionConfig});e.top=`${i}px`,e.left=`${n}px`}},this.checkClickOutside=t=>{const{anchor:e}=this;e&&!t.composedPath().includes(e)&&this.dispatchEvent(new CustomEvent("blur"))},this.handleMove=({pageX:t,pageY:e})=>{this.style.left=t-this.offsets.x+"px",this.style.top=e-this.offsets.y+"px"}}connectedCallback(){super.connectedCallback();const{anchor:t}=this;t&&(this.isPopover?(this.popover||(this.popover="manual",this.showPopover()),this.collectOff((0,Je.ll)(t,this,this.updatePosition))):this.style.position="relative",this.onmousedown=({pageX:t,pageY:e})=>(this.offsets.x=t-this.offsetLeft,this.offsets.y=e-this.offsetTop,window.addEventListener("mousemove",this.handleMove,!0),!1),this.onmouseup=()=>(window.removeEventListener("mousemove",this.handleMove,!0),!1)),window.addEventListener("mousedown",this.checkClickOutside,{capture:!0,passive:!0})}disconnectedCallback(){super.disconnectedCallback(),this.isPopover&&this.hidePopover(),this.onmousedown=null,this.onmouseup=null,window.removeEventListener("mousedown",this.checkClickOutside,{capture:!0})}render(){return Dt.qy`
      <div class="mon-draggable">
        <slot></slot>
      </div>
    `}};Xe.styles=We,(0,qt.Cg)([(0,Kt.MZ)()],Xe.prototype,"anchor",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Object})],Xe.prototype,"positionConfig",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String})],Xe.prototype,"strategy",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean})],Xe.prototype,"isPopover",void 0),Xe=(0,qt.Cg)([(0,Kt.EM)("mon-draggable")],Xe);const Qe=Dt.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    cursor: pointer;
    display: flex;
    padding: var(
      --mon-menu-item-padding,
      var(--arc-space-1) var(--arc-space-1-5)
    );
    background-color: var(--arc-color-mono-white);
    align-items: center;
    font-size: var(--art-font-size-sm);
    color: var(--art-color-mono-900);
    border-radius: var(
      --mon-menu-item-border-radius,
      var(--arc-border-radius-md)
    );
    --mon-menu-item-gap: var(--arc-space-1-5);
    height: var(--mon-menu-item-height, auto);
    min-height: var(--mon-menu-item-min-height, auto);
    min-width: var(--mon-menu-item-min-width, auto);
  }

  :host(:hover) {
    background-color: var(--mon-menu-item-hover-background-color);
  }

  :host(:focus) {
    z-index: 1;
  }

  :host([selected]) {
    background-color: var(--mon-menu-item-selected-background-color);
    color: var(--arc-color-text-primary);
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'],
  .extras {
    display: flex;
    align-items: center;
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'] {
    color: var(--arc-color-icon-primary);
  }

  /* Base icon slot styles */
  slot[name='icon'] {
    --_icon-size: var(--mon-menu-item-icon-size, 1.6rem);
    --mon-icon-size: var(--_icon-size);
    flex: none;
    width: 0;
    height: var(--_icon-size);
    justify-content: center;
    opacity: 0;
  }

  /* When icon slot has content */
  slot[name='icon']:not(:empty) {
    width: var(--_icon-size);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  /* For menus that always have icons (like context menu), force consistent spacing and visibility */
  :host([data-has-icons]) slot[name='icon'] {
    width: var(--_icon-size);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  .content {
    display: flex;
    flex: 1;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
  }

  ::slotted(*:not([slot])) {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  .extras {
    flex: none;
    justify-content: flex-end;
  }
`;let tn=class extends Wt{constructor(){super(...arguments),this.selected=!1,this.tabIndex=-1,this.role="menuitem",this.delegatesFocus=!1,this.focusableRef=(0,$e._)(),this.bindEvents=()=>{this.on("mouseenter",(()=>{this.dispatch("hover",{value:this.value,hovered:!0})})),this.on("click",this.onClick),this.on("focus",(()=>{if(this.delegatesFocus){const t=this.querySelector('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');t instanceof HTMLElement&&t.focus()}}))}}onClick(){this.dispatch("mon-menu-item:select")}render(){return Dt.qy`
      <slot name="icon"></slot>
      <div class="content">
        <slot></slot>
        <div class="extras">
          <slot name="shortcut"></slot>
          <slot name="chevron"></slot>
        </div>
      </div>
    `}};tn.formAssociated=!0,tn.styles=Qe,tn.shadowRootOptions={...Dt.WF.shadowRootOptions,delegatesFocus:!1},(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],tn.prototype,"value",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean,reflect:!0})],tn.prototype,"selected",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Number,reflect:!0})],tn.prototype,"tabIndex",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],tn.prototype,"role",void 0),(0,qt.Cg)([(0,Kt.MZ)()],tn.prototype,"delegatesFocus",void 0),(0,qt.Cg)([(0,Kt.wk)()],tn.prototype,"focusableRef",void 0),tn=(0,qt.Cg)([(0,Kt.EM)("mon-menu-item")],tn);const en=Dt.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --mon-menu-item-hover-background-color: var(
      --arc-color-background-primary-hover
    );
    --mon-menu-item-selected-background-color: var(
      --arc-color-background-primary-selected
    );
    --mon-menu-font-size: var(--art-font-size-sm);
    --mon-menu-color: var(--art-color-mono-900);
    background: var(--arc-color-mono-white);
    border-radius: var(--mon-menu-border-radius, var(--arc-border-radius-lg));
    box-shadow: var(--mon-menu-box-shadow, var(--arc-shadow-lg));
    padding: var(--mon-menu-padding, var(--arc-space-0-5));
    min-width: var(--mon-menu-min-width, auto);
    font-size: var(--mon-menu-font-size);
    color: var(--mon-menu-color);
    display: flex;
    flex-direction: column;
  }

  :host([floating]) {
    position: var(--mon-menu-position, absolute);
    inset: var(--mon-menu-inset, 100% 0 auto 0);
    z-index: 99999;
    top: var(--mon-menu-top, unset);
    right: var(--mon-menu-right, unset);
  }
`;let nn=class extends Wt{constructor(){super(...arguments),this.floating=!1,this.autofocusit=!1,this.value=null,this.itemFocus=0,this.submit=()=>{this.dispatch("mon-menu:submit",{name:this.name,value:this.value})},this.focusFirstApplicableItem=()=>{this.menuItems[this.itemFocus]?.focus()},this.onSelect=t=>{t.stopPropagation(),this.value=t.target.value??null;for(const t of this.$$$("mon-menu-item"))t.selected=t.value===this.value;this.submit()},this.onKeyDown=t=>{const{key:e,shiftKey:n}=t;t.target.assignedSlot?.parentElement===this||t.composedPath().includes(this)?(["ArrowUp","ArrowDown","ArrowRight","End","Home"].includes(e)&&(t.stopPropagation(),t.preventDefault()),["ArrowUp","ArrowDown","End","Home"].includes(e)?("ArrowDown"===e?(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.itemFocus=0)):"ArrowUp"===e?(this.itemFocus--,this.itemFocus<0&&(this.itemFocus=this.menuItems.length-1)):"Home"===e?this.itemFocus=0:"End"===e&&(this.itemFocus=this.menuItems.length-1),this.menuItems[this.itemFocus].focus(),this.value=this.menuItems[this.itemFocus].value??null):"Tab"===e?(n?(this.itemFocus--,this.itemFocus<0?(this.value=null,this.dispatch("mon-menu:escape")):(t.preventDefault(),t.stopPropagation(),this.menuItems[this.itemFocus].focus())):(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.value=null,this.dispatch("mon-menu:escape"))),this.value=this.menuItems[this.itemFocus]?.value??null):"Escape"===e?this.dispatch("mon-menu:escape"):"ArrowRight"===e?this.dispatch("mon-menu:open-sub-menu",{name:this.name,value:this.value,target:this.menuItems[this.itemFocus]}):"ArrowLeft"===e&&this.dispatch("mon-menu:close-sub-menu")):("Escape"!==e&&"ArrowLeft"!==e||(this.focusFirstApplicableItem(),t.preventDefault(),t.stopPropagation()),"Tab"===e&&null===t.target.nextElementSibling&&(this.itemFocus++,t.stopPropagation()))},this.onKeyup=t=>{const{key:e}=t;"Enter"!==e&&" "!==e||(this.value=this.menuItems[this.itemFocus]?.value??null,this.submit(),t.stopPropagation())},this.onSlotChange=()=>{for(const t of this.menuItems)t.tabIndex=0,t.selected=t.value===this.value;this.autofocusit&&!Ln()&&this.focusFirstApplicableItem()}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}get menuItems(){return this.$$$("mon-menu-item")}bindEvents(){this.on("mon-menu-item:select",this.onSelect),this.on("keyup",this.onKeyup),this.on("keydown",this.onKeyDown)}render(){return Dt.qy` <slot @slotchange=${this.onSlotChange}></slot> `}};nn.styles=en,(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],nn.prototype,"name",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean,reflect:!0})],nn.prototype,"floating",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean,reflect:!0})],nn.prototype,"autofocusit",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String})],nn.prototype,"value",void 0),nn=(0,qt.Cg)([(0,Kt.EM)("mon-menu")],nn);const rn=Dt.AH`
  :host {
    position: fixed;
    z-index: var(--mon-z-index-popover);
    border-radius: var(--mon-popover-border-radius, 0);
    padding: var(--mon-popover-padding, var(--arc-space-2));
    overflow: var(--mon-popover-overflow, auto);
    box-shadow: var(--mon-popover-shadow, var(--arc-shadow-md));
    box-sizing: border-box;
    width: var(--mon-popover-width, auto);
    clip-path: var(--mon-popover-clip-path, none);
  }

  :host([semantic]) {
    border: var(--mon-overlay-border, none);
    border-radius: var(--mon-popover-border-radius, 0);
    margin: var(--mon-popover-margin, 0);
    width: var(--mon-popover-width, fit-content);
  }
`,on={enabled:!1,padding:0,boundary:"clippingAncestors",prioritizeResize:!1,minResizeHeight:0,minResizeWidth:0,enableShiftCrossAxis:!1,flipPadding:0,shiftPadding:0,maxResizeHeight:1/0,maxResizeWidth:1/0,avoidFlipOverlap:!1,matchAnchorWidth:!1};let an=class extends Wt{constructor(){super(...arguments),this.autoFlip=!0,this.autoResizeOptions={},this.customMiddleware=[],this.autoShift=!0,this.semantic=!1,this.enableAutoUpdates=!0,this.semanticPriority=0,this.offset=10,this.placement="bottom",this.sizeMiddlewareOptions={...on,...this.autoResizeOptions},this.middleware=[],this.syncMiddleware=()=>{this.sizeMiddlewareOptions={...on,...this.autoResizeOptions};const t=this.sizeMiddlewareOptions.avoidFlipOverlap,e=this.sizeMiddlewareOptions.minResizeWidth,n=this.sizeMiddlewareOptions.maxResizeWidth,i=this.sizeMiddlewareOptions.minResizeHeight,r=this.sizeMiddlewareOptions.maxResizeHeight,o=this.sizeMiddlewareOptions.matchAnchorWidth,a="number"==typeof this.sizeMiddlewareOptions.shiftPadding?this.sizeMiddlewareOptions.shiftPadding:this.sizeMiddlewareOptions.shiftPadding.top??0,s=this.sizeMiddlewareOptions.enabled&&(0,Je.Ej)({apply({availableWidth:s,availableHeight:l,elements:c,rects:d,y:h,placement:p}){const u=r?`${r}px`:"",g=[l,r,window.innerHeight-a];if(t){const t=c.reference.getBoundingClientRect().top;t>h&&p.includes("top")&&g.push(window.innerHeight-(window.innerHeight-t)-a)}const v=`${Math.max(i,Math.min(...g))}px`;c.floating.style.maxHeight=l>=c.floating.scrollHeight?u:v,c.floating.style.maxWidth=`${Math.max(e,Math.min(n,s))}px`,o&&(c.floating.style.minWidth=`${d.reference.width}px`)},padding:this.sizeMiddlewareOptions.padding,boundary:this.sizeMiddlewareOptions.boundary}),l=this.autoShift&&(0,Je.BN)({crossAxis:this.sizeMiddlewareOptions.enableShiftCrossAxis,padding:this.sizeMiddlewareOptions.shiftPadding}),c=(0,Je.cY)(this.offset);this.sizeMiddlewareOptions.prioritizeResize?this.middleware=[s,this.autoFlip&&(0,Je.UU)({fallbackStrategy:"initialPlacement",flipAlignment:!1,padding:this.sizeMiddlewareOptions.flipPadding}),l,...this.customMiddleware,c].filter((t=>!!t)):this.middleware=[this.autoFlip&&(0,Je.UU)({padding:this.sizeMiddlewareOptions.flipPadding}),l,s,...this.customMiddleware,c].filter((t=>!!t))},this.updatePosition=()=>{this.anchor&&(0,Je.rD)(this.anchor,this,{placement:this.placement,strategy:"fixed",middleware:this.middleware}).then((({x:t,y:e})=>{this.style.left=`${t}px`,this.style.top=`${e}px`}))}}updated(t){if(super.updated(t),Array.from(t.keys()).some((t=>["autoFlip","autoShift","autoResizeOptions","customMiddleware","offset"].includes(t)))&&this.syncMiddleware(),t.has("semantic")&&(this.semantic?(this.hasAttribute("popover")||(this.setAttribute("popover","manual"),function(t,e){const n=[];let i;{let r=0;for(;r<f.length;r+=1){const t=f[r];if(t.order>e)break;n.push(t)}for(i=r,n.push({element:t,order:e});r<f.length;r+=1){const t=f[r];t.element.hidePopover(),n.push(t)}}for(let t=i;t<n.length;t+=1)n[t].element.showPopover();f=n}(this,this.semanticPriority)),this.collectOff((()=>{this.hasAttribute("popover")&&(w(this),this.removeAttribute("popover"))}))):this.hasAttribute("popover")&&(w(this),this.removeAttribute("popover"))),t.has("anchor")&&this.anchor)if(this.enableAutoUpdates){this.autoUpdateDisposer&&this.autoUpdateDisposer();const t=(0,Je.ll)(this.anchor,this,this.updatePosition,{animationFrame:!0});this.collectOff(t),this.autoUpdateDisposer=t}else this.updatePosition()}render(){return Dt.qy`<slot></slot>`}};an.styles=rn,(0,qt.Cg)([(0,Kt.MZ)()],an.prototype,"anchor",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean})],an.prototype,"autoFlip",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Object})],an.prototype,"autoResizeOptions",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Array})],an.prototype,"customMiddleware",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean})],an.prototype,"autoShift",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean,reflect:!0})],an.prototype,"semantic",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Boolean})],an.prototype,"enableAutoUpdates",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Number,reflect:!0})],an.prototype,"semanticPriority",void 0),(0,qt.Cg)([(0,Kt.MZ)()],an.prototype,"offset",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String})],an.prototype,"placement",void 0),an=(0,qt.Cg)([(0,Kt.EM)("mon-popover")],an);const sn=Dt.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --icon-color: var(--arc-color-neutral-600);
    display: block;
    position: relative;
    max-width: 100%;
  }

  .hidden {
    display: none;
  }

  .trigger {
    cursor: pointer;
    width: 100%;
    height: 3.2rem;
    display: flex;
    align-items: center;
    gap: var(--arc-space-0-75);
    border: none;
    border-radius: var(--arc-border-radius-md);
    background: var(--mon-color-input);
    padding: 0 var(--arc-space-1-5);
    text-align: left;
    font-family: inherit;
    font-size: var(--arc-font-size-14);
    outline: none;
  }

  .trigger:hover {
    box-shadow: var(--mon-input-hover-box-shadow);
  }

  .trigger:focus-visible {
    box-shadow: var(--mon-input-focus-box-shadow);
  }

  .trigger-content {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .trigger-icon {
    width: 14px;
    height: 14px;
    fill: var(--arc-color-neutral-700);
  }

  .mon-select-popover {
    --mon-popover-padding: 0;
    --mon-popover-border-radius: var(--arc-border-radius-lg);
  }

  .mon-select-menu {
    overflow-y: auto;
    --mon-menu-border-radius: 0;
  }
`;let ln=class extends Wt{constructor(){super(...arguments),this.value=null,this.popoverPlacement="bottom-end",this.placeholder="Choose an item...",this.open=!1,this.labelText="",this.anchorRef=(0,$e._)(),this.scrollBarWidth=x,this.cancel=()=>{this.open&&(this.dispatch("mon-select:cancel"),this.dispatch("mon-select:close")),this.open=!1},this.onMenuEscape=()=>{this.cancel()},this.onSubmit=t=>{this.open=!1,t.stopPropagation(),this.dispatch("mon-select:close"),this.dispatch("mon-select:change",{name:this.name,value:t.detail.value})},this.onClickOutside=()=>{this.cancel()},this.onClickTrigger=()=>{this.open?this.cancel():(this.open=!0,this.dispatch("mon-select:open"))},this.onKeyDown=t=>{"ArrowLeft"===t.key&&t.stopPropagation()},this.onButtonKeyDown=t=>{"Enter"===t.key?t.preventDefault():"ArrowDown"===t.key&&(t.stopPropagation(),this.open=!0,this.dispatch("mon-select:open"))},this.onSlotChange=()=>{this.syncLabelText()},this.syncLabelText=()=>{this.labelText=this.$$$("mon-menu-item")?.filter((t=>t.value===this.value))[0]?.innerText??this.placeholder},this.handleRefChange=t=>{this.anchorRef=t}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}bindEvents(){this.on("mon-menu:escape",this.onMenuEscape),this.on("keydown",this.onKeyDown),this.collectOff(Gt("mousedown",window,(t=>{const e=t.composedPath();t.target instanceof Node&&!e.includes(this)&&this.onClickOutside()}),{capture:!0,passive:!0}))}updated(t){t.has("value")&&this.syncLabelText(),this.open&&!1===t.get("open")&&window.requestAnimationFrame((()=>{const t=this.$$$("mon-menu-item")?.find((t=>t.value===this.value));t?.scrollIntoView({behavior:"instant",block:"nearest"})}))}renderTrigger(){return Dt.qy`
      <button
        ${(0,$e.K)(this.handleRefChange)}
        @click=${this.onClickTrigger}
        @keydown=${this.onButtonKeyDown}
        type="button"
        class="trigger"
      >
        <span class="trigger-content">
          <slot name="selected">${this.labelText}</slot>
        </span>
        <span class="trigger-icon">
          <!-- TODO: Stop using '<i />'-based icons; use svgs instead. -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </span>
      </button>
    `}renderMenu(){return this.open?Dt.qy`
          <mon-popover
            .anchor=${this.anchorRef}
            class="mon-select-popover"
            .offset=${0}
            .autoResizeOptions=${{enabled:!0,padding:{top:0,right:0,bottom:36,left:0},prioritizeResize:!0,minResizeHeight:72,enableShiftCrossAxis:!0,shiftPadding:{top:99,right:0,bottom:0,left:this.scrollBarWidth},maxResizeHeight:400,avoidFlipOverlap:!0,matchAnchorWidth:!0}}
            placement=${this.popoverPlacement}
            semantic=${!0}
            .autoShift=${!0}
          >
            <mon-menu
              class="mon-select-menu"
              name=${this.name}
              autofocusit
              @mon-menu:submit=${this.onSubmit}
              value=${this.value}
            >
              <slot></slot>
            </mon-menu>
          </mon-popover>
        `:Dt.qy`<slot
          class="hidden"
          @slotchange=${this.onSlotChange}
        ></slot>`}renderClosedSlot(){return this.open?Dt.s6:Dt.qy`<slot name="closed"></slot>`}render(){return Dt.qy`${this.renderTrigger()}${this.renderMenu()}${this.renderClosedSlot()}`}};ln.styles=sn,(0,qt.Cg)([(0,Kt.MZ)({type:String,reflect:!0})],ln.prototype,"name",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String})],ln.prototype,"value",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:String})],ln.prototype,"popoverPlacement",void 0),(0,qt.Cg)([(0,Kt.MZ)()],ln.prototype,"placeholder",void 0),(0,qt.Cg)([(0,Kt.wk)()],ln.prototype,"open",void 0),(0,qt.Cg)([(0,Kt.wk)()],ln.prototype,"labelText",void 0),(0,qt.Cg)([(0,Kt.wk)()],ln.prototype,"anchorRef",void 0),(0,qt.Cg)([(0,Kt.wk)()],ln.prototype,"scrollBarWidth",void 0),ln=(0,qt.Cg)([(0,Kt.EM)("mon-select")],ln);const cn=Dt.AH`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :host {
    --border-color: rgb(0 0 0 / 30%);
    --border-color-active: black;
    --border-color-active-hover: rgb(0 0 0 / 60%);
    --border-color-hover: black;
    --border-radius: calc(0.5 * var(--toggle-height));
    --border-width: 1px;
    --control-width: 3.8rem;
    --focus-color: #4d90fe;
    --handle-bg-color: white;
    --handle-box-shadow: 0 2px 6px 0 rgb(0 0 0 / 16%);
    --inset-active-bg-color: black;
    --inset-active-bg-hover-color: rgb(0 0 0 / 60%);
    --inset-bg-color: rgb(0 0 0 / 5%);
    --inset-bg-hover-color: rgb(0 0 0 / 10%);
    --toggle-height: 2.2rem;
    --transition: 0.1s ease-out;
  }

  .toggle .control {
    background-color: var(--inset-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    height: var(--toggle-height);
    position: relative;
    transition: var(--transition);
    width: var(--control-width);
  }

  .toggle .handle {
    background-color: var(--handle-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--handle-box-shadow);
    height: var(--toggle-height);
    left: calc(-1 * var(--border-width));
    position: absolute;
    top: calc(-1 * var(--border-width));
    transition: var(--transition);
    width: var(--toggle-height);
  }

  .toggle.active .control {
    background-color: var(--inset-active-bg-color);
  }

  .toggle.active .handle {
    border-color: var(--border-color-active);
    transform: translateX(calc(var(--control-width) - var(--toggle-height)));
  }

  .toggle.active:hover .control {
    background-color: var(--inset-active-bg-hover-color);
    border-color: var(--border-color-active-hover);
  }

  .toggle.active:hover .handle {
    border-color: var(--border-color-active-hover);
  }

  .toggle:hover .control {
    background-color: var(--inset-bg-hover-color);
    border-color: var(--border-color-hover);
  }

  .toggle:hover .handle {
    border-color: var(--border-color-hover);
  }

  .toggle.in-focus .control {
    outline: 2px solid var(--focus-color);
    outline-offset: 1px;
  }
`;let dn=class extends Wt{constructor(){super(...arguments),this.focusedByClick=!1,this.animationDuration=250}toggleSwitch(t){!0===t?this.toggle?.classList.add("active"):!1===t?this.toggle?.classList.remove("active"):this.toggle?.classList.toggle("active")}handleClick(){this.focusedByClick=!0,this.checkboxes[0].checked=!this.checkboxes[0].checked,this.checkboxes[0].dispatchEvent(new Event("change")),setTimeout((()=>{this.focusedByClick=!1}))}handleFocus(){setTimeout((()=>{!1===this.focusedByClick&&this.toggleVisibleFocus(!0)}))}handleBlur(){this.toggleVisibleFocus(!1)}toggleVisibleFocus(t){!0===t?this.toggle.classList.add("in-focus"):this.toggle.classList.remove("in-focus")}handleCheckboxChange(t){const e=t.target;this.toggleSwitch(e.checked)}handleKeydown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.handleClick())}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.checkboxes.forEach((t=>{this.toggleSwitch(t.checked),t.style.left="0",t.style.opacity="0.01",t.style.outline="none !important",t.style.position="absolute",t.style.top="0",t.addEventListener("focus",this.handleFocus.bind(this)),t.addEventListener("blur",this.handleBlur.bind(this)),t.addEventListener("change",this.handleCheckboxChange.bind(this)),t.addEventListener("keydown",this.handleKeydown.bind(this))}))}render(){return Dt.qy`
      <div class="toggle">
        <div
          @click=${this.handleClick}
          class="control"
        >
          <div class="handle"></div>
        </div>
        <slot></slot>
      </div>
    `}};dn.styles=cn,(0,qt.Cg)([(0,Kt.P)(".toggle")],dn.prototype,"toggle",void 0),(0,qt.Cg)([(0,Kt.P)(".control")],dn.prototype,"control",void 0),(0,qt.Cg)([(0,Kt.KN)({selector:'input[type="checkbox"]'})],dn.prototype,"checkboxes",void 0),(0,qt.Cg)([(0,Kt.wk)()],dn.prototype,"focusedByClick",void 0),(0,qt.Cg)([(0,Kt.MZ)({type:Number})],dn.prototype,"animationDuration",void 0),dn=(0,qt.Cg)([(0,Kt.EM)("mon-toggle")],dn);const hn=(t,e)=>{const n=e.cssText,i=new WeakSet;return e=>{const r=e.getRootNode();if(!i.has(r)){i.add(r);const e=(r instanceof ShadowRoot?r.ownerDocument:r instanceof Document?r:document).createElement("style");e.setAttribute("data-svelte-lit-styles",t),e.textContent=n,r.appendChild(e)}}},pn=Dt.AH`
  &[data-flex='1'] {
    --arc-internal-btn-flex: 1;
  }

  &[data-flex='2'] {
    --arc-internal-btn-flex: 2;
  }

  &[data-flex='3'] {
    --arc-internal-btn-flex: 3;
  }

  &[data-flex='4'] {
    --arc-internal-btn-flex: 4;
  }

  &[data-flex='5'] {
    --arc-internal-btn-flex: 5;
  }

  &[data-layout='fill'] {
    --arc-internal-btn-display: flex;
    --arc-internal-btn-width: 100%;
    --arc-internal-btn-content-width: 0;
  }

  &[data-layout='icon'] {
    --arc-internal-btn-flex: none;
    --arc-internal-btn-padding-inline: 0;
    --arc-internal-btn-min-width: min-content;
    --arc-internal-btn-max-width: none;
    --arc-internal-btn-aspect-ratio: 1 / 1;

    &[data-shape='narrow'] {
      --arc-internal-btn-padding-inline: 2;
      --arc-internal-btn-aspect-ratio: auto;
    }
  }
`,un=Dt.AH`
  &[data-size='xxl'] {
    --arc-modifier: 16; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 20;
    --arc-internal-btn-height: 56;
    --arc-internal-btn-gap: 10;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 32;
  }

  &[data-size='xl'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 48;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='lg'] {
    /** @default */
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 40;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 20;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='md'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 14;
    --arc-internal-btn-height: 32;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 16;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='sm'] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 12;
    --arc-internal-btn-height: 24;
    --arc-internal-btn-gap: 4;
    --arc-internal-btn-padding-inline: 12;
    --arc-internal-btn-spinner-width: 14;
  }
`,gn=Dt.AH`
  &[data-variant='primary'] {
    /** @default */
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-mono-black);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-800);

    --arc-internal-btn-active-text: var(--arc-color-neutral-200);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-600);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-neutral-800);
  }

  &[data-variant='secondary'] {
    /** @default - when icon-only */
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: var(--arc-color-border-full);

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-100);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-200);
    --arc-internal-btn-active-edge: var(--arc-color-border-stark);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-border-stark);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-edge: var(--arc-color-border-standard);
      --arc-internal-btn-hover-edge: var(--arc-color-border-stark);
      --arc-internal-btn-focus-edge: var(--arc-color-border-standard);
    }
  }

  &[data-variant='tertiary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-black-10);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-black-03);
  }

  /** TODO: We'll need to true this up once the design system component implements their text variant */
  &[data-variant='text'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-text: var(--arc-color-neutral-700);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-neutral-500);

    --arc-internal-btn-disabled-text: var(--arc-color-neutral-300);

    --arc-internal-btn-processing-text: var(--art-color-neutral-200);
  }
`,vn=Dt.AH`
  &[data-variant='primary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-80);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-70);
    }
  }

  &[data-variant='secondary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);
    --arc-internal-btn-hover-edge: var(--arc-color-alpha-white-80);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
    --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);
    --arc-internal-btn-active-edge: var(--arc-color-alpha-white-50);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-edge: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: transparent;
    --arc-internal-btn-processing-edge: var(--arc-color-alpha-white-60);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
      --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
      --arc-internal-btn-active-edge: var(--arc-color-alpha-white-40);
    }
  }

  &[data-variant='tertiary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-20);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
    }
  }
`,mn=Dt.AH`
  &[data-variant='ai-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill:
      var(--arc-gradient-ai-500) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-600) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-text: var(--arc-color-alpha-white-70);
    --arc-internal-btn-processing-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant='ai-secondary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-300) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-100) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant^='ai-'] {
    --arc-internal-btn-border-width: var(--arc-computed-ai-btn-border-width);
    --arc-internal-btn-edge: transparent;
    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
  }
`,bn=Dt.AH`
  &[data-variant='critical-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-critical-dark);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-active-text: var(--arc-color-critical-medium);
    --arc-internal-btn-active-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-critical-heavy);
  }

  &[data-variant='critical-secondary'] {
    --arc-internal-btn-text: var(--arc-color-critical-dark);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-critical-dark);

    --arc-internal-btn-hover-fill: var(--arc-color-critical-light);
    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-100);

    --arc-internal-btn-active-text: var(--arc-color-red-300);
    --arc-internal-btn-active-fill: var(--arc-color-red-100);
    --arc-internal-btn-active-edge: var(--arc-color-critical-medium);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-critical-medium);
  }
`,fn=Dt.AH`
  ${gn}
  ${vn}
  ${bn}
  ${mn}
`;hn("MonArcButton",Dt.AH`
  [arc-button] {
    ${un}
    ${pn}
    ${fn}

    & {
      --arc-internal-btn-text-color: var(--arc-internal-btn-text);
      --arc-internal-btn-fill-color: var(--arc-internal-btn-fill);
      --arc-internal-btn-edge-color: var(--arc-internal-btn-edge);

      --arc-internal-btn-border-radius: var(--arc-border-radius-pill);
      --arc-internal-btn-border-radius-md: 4;
      --arc-internal-btn-border-width: 1;
      --arc-internal-btn-outline-size: 2;

      --arc-modifier-px: var(--arc-modifier) * 1px;
      --arc-modifier-em: var(--arc-modifier) * 1em;

      /* COMPUTED VARIABLES ------------------------------------------• */

      --arc-computed-btn-font-size: calc(var(--arc-modifier-px));
      --arc-computed-btn-icon-size: calc(
        var(--arc-internal-btn-icon-size) / var(--arc-modifier-em)
      );
      --arc-computed-btn-border-width: calc(
        var(--arc-internal-btn-border-width) / var(--arc-modifier-em)
      );
      --arc-computed-btn-outline-size: max(
        var(--arc-border-width-md),
        calc(var(--arc-internal-btn-outline-size) / var(--arc-modifier-em))
      );
      --arc-computed-btn-border-radius-md: calc(
        var(--arc-internal-btn-border-radius-md) / var(--arc-modifier-em)
      );
      --arc-computed-btn-height: calc(
        var(--arc-internal-btn-height) / var(--arc-modifier-em)
      );
      --arc-computed-btn-padding-inline: calc(
        var(--arc-internal-btn-padding-inline) / var(--arc-modifier-em)
      );
      --arc-computed-btn-gap: calc(
        var(--arc-internal-btn-gap) / var(--arc-modifier-em)
      );
      --arc-computed-btn-spinner-width: calc(
        var(--arc-internal-btn-spinner-width) / var(--arc-modifier-em)
      );

      /* Inter-Component Communication -------------------------------• */
      --arc-icon-size: var(
        --arc-computed-btn-icon-size
      ); /** @computed • ArcIcon size */
    }

    &:is(
        [data-layout='icon']:not([data-shape]),
        [data-shape='square'],
        [data-shape='narrow']
      ) {
      --arc-internal-btn-border-radius: var(
        --arc-computed-btn-border-radius-md
      ); /** @computed • border-radius */
    }

    &[data-variant^='ai-'] {
      --arc-computed-btn-border-width: calc(2 / var(--arc-modifier-em));
    }

    /* STATES --------------------------------------------------------- */

    &:is([data-is-processing], :has(input)) {
      --arc-internal-btn-position: relative;
    }

    &:disabled {
      --arc-internal-btn-cursor: not-allowed;
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-disabled-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-disabled-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-disabled-edge,
        var(--arc-internal-btn-edge)
      );
    }

    &:not(:disabled, [data-is-processing]) {
      &:hover {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-hover-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-hover-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-hover-edge,
          var(--arc-internal-btn-edge)
        );
      }

      &:is(:active, [data-is-active]) {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-active-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-active-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-active-edge,
          var(--arc-internal-btn-edge)
        );
      }
    }

    &[data-is-processing] {
      --arc-internal-btn-cursor: default;
      --arc-internal-btn-content-visibility: hidden;
      --arc-internal-btn-content-opacity: 0;

      --arc-internal-btn-text-color: var(
        --arc-internal-btn-processing-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-processing-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-processing-edge,
        var(--arc-internal-btn-edge)
      );

      /* spinner svg style controls */
      --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-30);
      --arc-internal-btn-spinner-circle-stroke: var(
        --arc-internal-btn-text-color
      );
      --arc-internal-btn-spinner-progress-stroke: var(
        --arc-internal-btn-text-color
      );

      &:is(
      [data-variant*=secondary], /* contains 'secondary' */
      [data-variant*=tertiary], /* contains 'tertiary' */
      [data-variant^=ai-], /* starts with 'ai-' */
      [data-variant$=-inverse] /* ends with '-inverse' */
    ) {
        --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-100);
        --arc-internal-btn-spinner-progress-stroke: var(--arc-color-brand-root);
      }
    }

    &:where(:focus, :focus-within):focus-visible {
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-focus-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-focus-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-focus-edge,
        var(--arc-internal-btn-edge)
      );
      --arc-internal-btn-outline-color: var(--arc-color-border-focus);

      &[data-variant$='-inverse'] {
        --arc-internal-btn-outline-color: var(--arc-color-border-focus-inverse);
      }

      outline: var(--arc-computed-btn-outline-size) solid
        var(--arc-internal-btn-outline-color); /** @computed • outline-width */
      outline-offset: var(
        --arc-button-outline-offset,
        var(--arc-computed-btn-outline-size)
      ); /** @computed • outline-offset */

      * {
        outline: none;
      }
    }
  }

  /* CORE STYLES ------------------------------------------------------ */

  [arc-button]:not([hidden]) {
    flex: var(--arc-internal-btn-flex, unset);
    display: var(--arc-internal-btn-display, inline-flex);
    align-items: center;
    justify-content: center;
  }

  [arc-button] {
    appearance: none;
    cursor: var(--arc-internal-btn-cursor, pointer);
    position: var(--arc-internal-btn-position, unset);
    transition: 150ms ease-out;

    /* footprint */

    font: inherit;
    font-size: var(
      --arc-button-font-size,
      var(--arc-computed-btn-font-size, inherit)
    ); /** @computed • font-size */
    font-weight: var(--arc-button-font-weight, var(--arc-font-weight-600));
    max-width: var(--arc-internal-btn-max-width, 100%);
    min-width: var(--arc-internal-btn-min-width, unset);
    width: var(--arc-internal-btn-width, unset);
    height: var(--arc-computed-btn-height, unset); /** @computed • height */
    aspect-ratio: var(--arc-internal-btn-aspect-ratio, unset);

    padding-block: 0;
    padding-inline: var(
      --arc-computed-btn-padding-inline
    ); /** @computed • padding-inline */

    /* Variant Theme Applied -----------------------------------------• */

    color: var(--arc-internal-btn-text-color, unset);
    background: var(--arc-internal-btn-fill-color, transparent);
    border: var(--arc-computed-btn-border-width) solid
      var(--arc-internal-btn-edge-color, unset); /** @computed • border-width */
    border-radius: var(
      --arc-button-border-radius,
      var(--arc-internal-btn-border-radius)
    ); /** @computed • border-radius */

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ------------------------------------------------• */

    [data-element='button-content'] {
      flex: 1;
      width: var(--arc-internal-btn-content-width, auto);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: max(
        var(--arc-space-0-75),
        var(--arc-computed-btn-gap)
      ); /** @computed • gap */ /* 4px */
      max-width: 100%;
      overflow: hidden;
      pointer-events: var(--arc-internal-btn-content-pointer-events, none);
      user-select: none;
      visibility: var(--arc-internal-btn-content-visibility, unset);
      opacity: var(--arc-internal-btn-content-opacity, unset);
    }

    [data-element='button-label'] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      line-height: normal;
      transition: 0.2s ease-out;
    }

    [data-element='button-icon'] {
      transition: 0.2s ease-out;
    }

    :is([data-element='button-spinner'], input) {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
    }

    input {
      opacity: 0;
      scale: 0.1;
    }

    [data-element='button-spinner'] {
      display: flex;
      pointer-events: none;
      border-radius: 50%;
      width: var(
        --arc-computed-btn-spinner-width
      ); /** @computed • spinner size */
      aspect-ratio: 1 / 1;

      [data-element='spinner-circle'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-circle-stroke);
        opacity: var(--arc-internal-btn-spinner-circle-opacity, 0.4);
      }

      [data-element='spinner-progress'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-progress-stroke);
        stroke-dasharray: 0.3334 1;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: 743ms arc-spinner-rotate linear infinite;
        transform-origin: 50% 50%;
      }
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`),r.Dn('<svg viewBox="0 0 100 100" data-element="button-spinner"><circle data-element="spinner-circle" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle><circle data-element="spinner-progress" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle></svg>'),r.vs('<span data-element="button-content"><!></span> <!>',1),r.vs('<a arc-button=""><!></a>'),r.vs('<button arc-button=""><!></button>');const wn=Dt.AH`
  @layer arc-components {
    [arc-icon] {
      font-size: var(--arc-icon-size, 1em);
      color: var(--arc-icon-color, currentcolor);
      opacity: var(--arc-icon-opacity, 1);

      &:not([hidden]) {
        flex: none;
        display: var(--arc-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        max-height: 1lh;
        line-height: 1lh;
      }

      &:has(svg) {
        width: 1em;
        height: var(--arc-icon-svg-height, 1lh);
        align-self: var(--arc-icon-svg-align-self, center);
        vertical-align: -0.1lh;

        /* Todo: This is Mondrian CSS in the Arc style sheet to handle duotones. We should try to separate this */
        &:not([data-duotone]) {
          svg {
            fill: var(--arc-icon-color, currentcolor);
          }
        }

        svg {
          width: 100%; /* keeps Safari happy ¯\_(ツ)_/¯ */
        }
      }
    }
  }
`,yn=t=>"number"==typeof t?`calc(${t/10}rem * var(--arc-internal-font-size))`:t,Cn=hn("MonArcIcon",wn);var xn=r.vs("<span></span>"),zn=r.vs('<span arc-icon=""><!></span>');(0,h.writable)(!1);const kn=['input:not([type="checkbox"], [type="radio"])',"art-asset-library","textarea","[contenteditable]"].join(", ");function Ln(t=b()){return null!=t&&!!t.matches(kn)}var Mn=n(9205);const Zn=n.n(Mn)()("mondrian").extend("keyboard"),Jn={activeModifierKeys:new Set,get alt(){return Jn.activeModifierKeys.has("Alt")},get meta(){return Jn.activeModifierKeys.has("Meta")||Jn.activeModifierKeys.has("Control")},get shift(){return Jn.activeModifierKeys.has("Shift")},key:void 0,get combo(){return[Jn.meta&&"Meta",Jn.alt&&"Alt",Jn.shift&&"Shift",Jn.key].filter(Boolean).join("+")}};function $n({metaKey:t,altKey:e,shiftKey:n,ctrlKey:i},r){let o=!1;return t!==r.has("Meta")&&(o=!0,t?r.add("Meta"):r.delete("Meta")),e!==r.has("Alt")&&(o=!0,e?r.add("Alt"):r.delete("Alt")),n!==r.has("Shift")&&(o=!0,n?r.add("Shift"):r.delete("Shift")),i!==r.has("Control")&&(o=!0,i?r.add("Control"):r.delete("Control")),o}let Hn=!1;const _n={...(0,h.readable)(Jn,(t=>{function e(e){const n="keydown"===e.type;$n(e,Jn.activeModifierKeys),Jn.key=n?e.key:void 0,t(Jn)}function n(e){$n(e,Jn.activeModifierKeys)&&t(Jn)}Hn||(Hn=!0,window.addEventListener("keydown",e),window.addEventListener("keyup",e),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&(Jn.activeModifierKeys.clear(),Jn.key=void 0,t(Jn))})),window.addEventListener("blur",(function(){Jn.activeModifierKeys.clear(),Jn.key=void 0,t(Jn)})),window.addEventListener("mousedown",n,{passive:!0,capture:!0}),window.addEventListener("mousemove",n,{passive:!0,capture:!0}))})),is:t=>(Jn.combo&&Zn(`comparing keycombos, store: ${Jn.combo}, comparison: ${t}`),Jn.combo.toLowerCase()===t.toLowerCase()),on(t,e){const n=n=>{!Ln()&&_n.is(t)&&(Zn("keyCombo matched, executing handler",t),e(n))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}},Tn=((0,h.derived)(_n,(t=>t.meta)),(0,h.derived)(_n,(t=>t.alt)),(0,h.derived)(_n,(t=>t.shift)),{down:!1,downX:-1,downY:-1,target:void 0,x:-1,y:-1});(0,h.readable)(Tn,(t=>{return window.addEventListener("mousedown",e),window.addEventListener("mousemove",i),window.addEventListener("mouseup",n),function(){window.removeEventListener("mousedown",e),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",n)};function e(t){Tn.down=!0,Tn.downX=Tn.x=t.clientX,Tn.downY=Tn.y=t.clientY,Tn.target=t.target,r()}function n(){Tn.down=!1,Tn.downX=Tn.x=Tn.downY=Tn.y=-1,Tn.target=void 0,r()}function i(t){Tn.x=t.x,Tn.y=t.y,r()}function r(){t(Tn)}}));var Sn=n(4993),An=n.n(Sn);const{setTimeout:Vn,clearTimeout:Pn}=window;r.vs('<mon-menu-item><label class="multi-select-option-label svelte-1aujqfc"><input class="multi-select-option-checkbox svelte-1aujqfc" type="checkbox"> <!> <span class="multi-select-option-label-text svelte-1aujqfc"> </span></label></mon-menu-item>',2),r.vs('<div class="no-results svelte-1aujqfc"> </div>'),r.vs('<mon-popover><mon-menu><section class="filters svelte-1aujqfc"><div class="search-filter svelte-1aujqfc"><!> <input class="search-filter-input svelte-1aujqfc" type="text" placeholder="Search"></div> <label class="select-all svelte-1aujqfc"><input type="checkbox" class="svelte-1aujqfc"> <span> </span></label></section> <section class="menu-items svelte-1aujqfc"></section> <!></mon-menu></mon-popover>',2),r.vs('<div class="multi-select svelte-1aujqfc"><div class="multi-select-menu-trigger svelte-1aujqfc" tabindex="-1"><div class="trigger-content svelte-1aujqfc"><!></div> <button class="chevron svelte-1aujqfc"><!></button></div> <!></div>'),r.vs('<span class="hint-text svelte-1463wmx"><!></span>'),r.vs('<div><input class="mon-focusable svelte-1da47cf" type="text" data-1pignore="" data-lpignore="" autocomplete="off"> <div class="static svelte-1da47cf" tabindex="0"> </div></div>'),r.vs('<label class="label svelte-18j4x0z"><span class="label-text svelte-18j4x0z"> </span> <input class="input svelte-18j4x0z" type="number" placeholder="--"></label>'),r.vs('<div class="mon-spinner svelte-1fzag14"><svg class="mon-spinner__icon svelte-1fzag14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" clip-rule="evenodd"></path><path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z"></path></svg> <!></div>'),r.vs('<p class="mon-loading__text svelte-1omw61o">Loading custom layout</p>'),r.vs('<div class="mon-loading svelte-1omw61o"><!></div>');r.Dn('<svg class="defs svelte-1l67ssw" aria-hidden="true"><defs><linearGradient x1="2.5" y1="25" x2="22.5" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0000"></stop><stop offset="0.135" stop-color="#FF8000"></stop><stop offset="0.315" stop-color="#FFFF00"></stop><stop offset="0.465" stop-color="#1AFE0A"></stop><stop offset="0.625" stop-color="#1EDFF4"></stop><stop offset="0.82" stop-color="#3912FA"></stop><stop offset="0.905" stop-color="#FF01E6"></stop></linearGradient><clipPath><circle cx="12" cy="12" r="12"></circle></clipPath><mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><circle cx="12" cy="12" r="12" fill="currentColor"></circle></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><clipPath><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></clipPath></defs></svg>');const En="#glyphs-",In={"arc-fullscreen-disable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"arc-fullscreen-enable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/></svg>',"arc-pause":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3.448 3.43 13.081 13.099"><path d="M6.5 4H7.5C8.3125 4 9 4.6875 9 5.5V14.5C9 15.3438 8.3125 16 7.5 16H6.5C5.65625 16 5 15.3438 5 14.5V5.5C5 4.6875 5.65625 4 6.5 4ZM12.5 4H13.5C14.3125 4 15 4.6875 15 5.5V14.5C15 15.3438 14.3125 16 13.5 16H12.5C11.6562 16 11 15.3438 11 14.5V5.5C11 4.6875 11.6562 4 12.5 4Z" /></svg>',"arc-pip-disable":'<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="18px" viewBox="0 0 22 18"><path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z" fill-rule="nonzero"/><path fill="none" d="M-1-3h24v24H-1z"/></svg>',"arc-pip-enable":'<svg viewBox="0 0 24 24"><path d="M19 11h-8v6h8zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-2 .02H3V4.97h18z"></path></svg>',"arc-play":'<svg width="12" height="13" viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg"><path d="M2.74609 0.816406L10.6211 5.62891C11.0039 5.875 11.25 6.3125 11.25 6.75C11.25 7.21484 11.0039 7.65234 10.6211 7.87109L2.74609 12.6836C2.33594 12.9297 1.81641 12.957 1.40625 12.7109C0.996094 12.4922 0.75 12.0547 0.75 11.5625V1.9375C0.75 1.47266 0.996094 1.03516 1.40625 0.816406C1.81641 0.570312 2.33594 0.570312 2.74609 0.816406Z" /></svg>',"arc-transparency":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1H3.8V3.8H1V1Z" fill="black"/><path d="M3.7998 3.7998H6.5998V6.5998H3.7998V3.7998Z" fill="black" fill-opacity="0.8"/><path d="M6.6001 1H9.4001V3.8H6.6001V1Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 1H15.0002V3.8H12.2002V1Z" fill="black" fill-opacity="0.2"/><path d="M1 6.59961H3.8V9.39961H1V6.59961Z" fill="black"/><path d="M6.6001 6.59961H9.4001V9.39961H6.6001V6.59961Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 6.59961H15.0002V9.39961H12.2002V6.59961Z" fill="black" fill-opacity="0.2"/><path d="M1 12.2002H3.8V15.0002H1V12.2002Z" fill="black"/><path d="M6.6001 12.2002H9.4001V15.0002H6.6001V12.2002Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 12.2002H15.0002V15.0002H12.2002V12.2002Z" fill="black" fill-opacity="0.2"/><path d="M9.3999 3.7998H12.1999V6.5998H9.3999V3.7998Z" fill="black" fill-opacity="0.4"/><path d="M3.7998 9.40039H6.5998V12.2004H3.7998V9.40039Z" fill="black" fill-opacity="0.8"/><path d="M9.3999 9.40039H12.1999V12.2004H9.3999V9.40039Z" fill="black" fill-opacity="0.4"/></svg>',"arc-volume-high":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>',"arc-volume-mid":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.1 34.8C344.6 40 352 51.4 352 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352 96 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-muted":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.1 386.2C556.7 352 576 306.3 576 256c0-60.1-27.7-113.8-70.9-149c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C507.3 170.7 528 210.9 528 256c0 39.1-15.6 74.5-40.9 100.5L449 326.6c19-17.5 31-42.7 31-70.6c0-30.1-13.9-56.9-35.4-74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C425.1 227.6 432 241 432 256s-6.9 28.4-17.7 37.3c-1.3 1-2.4 2.2-3.4 3.4L352 250.6 352 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L197.8 129.8 38.8 5.1zM352 373.3L82.9 161.3C53.8 167.4 32 193.1 32 224l0 64c0 35.3 28.7 64 64 64l67.8 0L298.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S352 460.6 352 448l0-74.7z"/></svg>',"border-solid":'<svg width="100%" height="100%" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="2" rx="1" fill="currentColor"/></svg>',"border-dashed":'<svg width="100%" height="100%" viewBox="0 0 19 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="2" fill="currentColor"/><rect x="7" width="5" height="2" fill="currentColor"/><rect x="14" width="5" height="2" fill="currentColor"/></svg>',"border-dotted":'<svg width="100%" height="100%" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="2" fill="currentColor"/><rect x="4" width="2" height="2" fill="currentColor"/><rect x="8" width="2" height="2" fill="currentColor"/><rect x="12" width="2" height="2" fill="currentColor"/></svg>',"corner-radius-top-left":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25Z" fill="black"/>\n      <path d="M0.75 10C0.334375 10 0 10.3344 0 10.75V14.25C0 14.6656 0.334375 15 0.75 15H4.25C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5H1.5V10.75C1.5 10.3344 1.16562 10 0.75 10Z" fill="#C6C6C6"/>\n      <path d="M14 1.75C14 1.33437 13.6656 1 13.25 1H9.75C9.33437 1 9 1.33437 9 1.75C9 2.16562 9.33437 2.5 9.75 2.5H12.5V5.25C12.5 5.66563 12.8344 6 13.25 6C13.6656 6 14 5.66563 14 5.25V1.75Z" fill="#C6C6C6"/>\n      <path d="M13.25 10C12.8344 10 12.5 10.3344 12.5 10.75V13.5H9.75C9.33437 13.5 9 13.8344 9 14.25C9 14.6656 9.33437 15 9.75 15H13.25C13.6656 15 14 14.6656 14 14.25V10.75C14 10.3344 13.6656 10 13.25 10Z" fill="#C6C6C6"/>\n      </svg>',"corner-radius-top-right":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84280)">\n        <path d="M15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25Z" fill="black"/>\n        <path d="M6 0.75C6 0.334375 5.66563 -1.4616e-08 5.25 -3.27835e-08L1.75 -1.85773e-07C1.33437 -2.03941e-07 1 0.334375 1 0.75L1 4.25C1 4.66562 1.33437 5 1.75 5C2.16562 5 2.5 4.66562 2.5 4.25L2.5 1.5L5.25 1.5C5.66562 1.5 6 1.16562 6 0.75Z" fill="#C6C6C6"/>\n        <path d="M14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14Z" fill="#C6C6C6"/>\n        <path d="M6 13.25C6 12.8344 5.66562 12.5 5.25 12.5L2.5 12.5L2.5 9.75C2.5 9.33437 2.16563 9 1.75 9C1.33437 9 1 9.33437 1 9.75L1 13.25C1 13.6656 1.33437 14 1.75 14L5.25 14C5.66562 14 6 13.6656 6 13.25Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84280">\n        <rect width="14" height="16" fill="white" transform="translate(16) rotate(90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-left":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84287)">\n        <path d="M1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75Z" fill="black"/>\n        <path d="M10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25Z" fill="#C6C6C6"/>\n        <path d="M1.75 8.94366e-09C1.33438 3.98738e-09 1 0.334375 1 0.75L1 4.25C1 4.66563 1.33437 5 1.75 5C2.16562 5 2.5 4.66563 2.5 4.25L2.5 1.5L5.25 1.5C5.66563 1.5 6 1.16563 6 0.75C6 0.334375 5.66563 5.5637e-08 5.25 5.06807e-08L1.75 8.94366e-09Z" fill="#C6C6C6"/>\n        <path d="M10 0.75C10 1.16563 10.3344 1.5 10.75 1.5L13.5 1.5L13.5 4.25C13.5 4.66563 13.8344 5 14.25 5C14.6656 5 15 4.66563 15 4.25L15 0.75C15 0.334375 14.6656 5.5637e-08 14.25 5.06807e-08L10.75 8.94366e-09C10.3344 3.98738e-09 10 0.334375 10 0.75Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84287">\n        <rect width="14" height="16" fill="white" transform="translate(0 14) rotate(-90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-right":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15Z" fill="black"/>\n      <path d="M13.25 6C13.6656 6 14 5.66563 14 5.25L14 1.75C14 1.33437 13.6656 1 13.25 1L9.75 1C9.33438 1 9 1.33437 9 1.75C9 2.16562 9.33438 2.5 9.75 2.5L12.5 2.5L12.5 5.25C12.5 5.66562 12.8344 6 13.25 6Z" fill="#C6C6C6"/>\n      <path d="M6.55671e-08 14.25C2.9232e-08 14.6656 0.334375 15 0.75 15L4.25 15C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5L1.5 13.5L1.5 10.75C1.5 10.3344 1.16563 10 0.75 10C0.334375 10 4.07882e-07 10.3344 3.71547e-07 10.75L6.55671e-08 14.25Z" fill="#C6C6C6"/>\n      <path d="M0.75 6C1.16563 6 1.5 5.66562 1.5 5.25L1.5 2.5L4.25 2.5C4.66563 2.5 5 2.16563 5 1.75C5 1.33437 4.66563 1 4.25 1L0.75 1C0.334375 1 4.07882e-07 1.33437 3.71547e-07 1.75L6.55671e-08 5.25C2.9232e-08 5.66562 0.334375 6 0.75 6Z" fill="#C6C6C6"/>\n      </svg>',"aspect-ratio-9:16":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M21.4998 26.5V16V5.5C21.4998 5.00781 20.8331 4.625 20.4998 4.625H11.4998C10.9998 4.625 10.4998 5 10.4998 5.5L10.6667 16V26.5C10.6667 26.9375 11.1248 27.375 11.4998 27.375H20.4998C20.8331 27.375 21.4998 26.9375 21.4998 26.5ZM24 5.5V26.5C24 28.4141 22.7917 30 21.3333 30H10.6667C9.16667 30 8 28.4141 8 26.5V5.5C8 3.53125 9.16667 2 10.6667 2H21.3333C22.7917 2 24 3.53125 24 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-16:9":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 21.4998L16 21.4998L26.5 21.4998C26.9922 21.4998 27.375 20.8331 27.375 20.4998L27.375 11.4998C27.375 10.9998 27 10.4998 26.5 10.4998L16 10.6667L5.5 10.6667C5.0625 10.6667 4.625 11.1248 4.625 11.4998L4.625 20.4998C4.625 20.8331 5.0625 21.4998 5.5 21.4998ZM26.5 24L5.5 24C3.5859 24 2 22.7917 2 21.3333L2 10.6667C2 9.16667 3.5859 8 5.5 8L26.5 8C28.4688 8 30 9.16667 30 10.6667L30 21.3333C30 22.7917 28.4687 24 26.5 24Z" fill="currentColor"/></svg>',"aspect-ratio-2:3":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M23.5 26.5V16V5.5C23.5 5.00781 22.8958 4.625 22.5 4.625H10.5C9.90625 4.625 9.5 5 9.5 5.5V16V26.5C9.5 26.9375 10.0547 27.375 10.5 27.375H22.5C22.8958 27.375 23.5 26.9375 23.5 26.5ZM26 5.5V26.5C26 28.4141 24.5651 30 22.8333 30H10.1667C8.38542 30 7 28.4141 7 26.5V5.5C7 3.53125 8.38542 2 10.1667 2H22.8333C24.5651 2 26 3.53125 26 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-3:2":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 22.5L16 22.5L26.5 22.5C26.9922 22.5 27.375 21.8958 27.375 21.5L27.375 9.5C27.375 8.90625 27 8.5 26.5 8.5L16 8.5L5.5 8.5C5.0625 8.5 4.625 9.05469 4.625 9.5L4.625 21.5C4.625 21.8958 5.0625 22.5 5.5 22.5ZM26.5 25L5.5 25C3.5859 25 2 23.5651 2 21.8333L2 9.16667C2 7.38542 3.5859 6 5.5 6L26.5 6C28.4688 6 30 7.38542 30 9.16667L30 21.8333C30 23.5651 28.4687 25 26.5 25Z" fill="currentColor"/></svg>',"border-color":'\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\n        <g clip-path="url(#mon-border-color-icon-boundary-clip-path)" data-figma-skip-parse="true">\n          <foreignObject x="0" y="0" width="24" height="24">\n            <div xmlns="http://www.w3.org/1999/xhtml"\n              style="background:var(--fa-secondary-color);height:100%;width:100%;opacity:1"></div>\n          </foreignObject>\n        </g>\n        <path\n          d="M23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM1 12C1 5.92487 5.92487 1 12 1V-1C4.8203 -1 -1 4.8203 -1 12H1ZM12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM16.3333 12C16.3333 14.3932 14.3932 16.3333 12 16.3333V18.3333C15.4978 18.3333 18.3333 15.4978 18.3333 12H16.3333ZM12 7.66667C14.3932 7.66667 16.3333 9.60677 16.3333 12H18.3333C18.3333 8.5022 15.4978 5.66667 12 5.66667V7.66667ZM7.66667 12C7.66667 9.60677 9.60677 7.66667 12 7.66667V5.66667C8.5022 5.66667 5.66667 8.5022 5.66667 12H7.66667ZM12 16.3333C9.60677 16.3333 7.66667 14.3932 7.66667 12H5.66667C5.66667 15.4978 8.5022 18.3333 12 18.3333V16.3333Z"\n          fill="black"\n          fill-opacity="0.1"\n          mask="url(#mon-border-color-icon-outline-mask)"\n        />\n      </svg>',"custom-shapes-rectangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="3.25" width="18.5" height="13.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-square":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="18.5" height="18.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-circle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.25" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-plus":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41667 6.66667V0.75H12.5833V6.66667V7.41667H13.3333H19.25V12.5833H13.3333H12.5833V13.3333V19.25H7.41667V13.3333V12.5833H6.66667H0.75V7.41667H6.66667H7.41667V6.66667Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-chevron":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0763 18.25L1.20849 18.25L5.1303 10.3329L5.29521 10L5.1303 9.66709L1.2085 1.75L15.0763 1.75L19.163 10L15.0763 18.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-octagon":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.757121 6.42456L5.99251 0.936083L13.5754 0.757121L19.0639 5.99251L19.2429 13.5754L14.0075 19.0639L6.42456 19.2429L0.936083 14.0075L0.757121 6.42456Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-triangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.31131 17.75L10 2.97923L18.6887 17.75H1.31131Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-parallelogram":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.998432 18.25L5.78397 1.75H19.0016L14.216 18.25H0.998432Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-shield":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.25C5.86967 19.25 2.75 16.455 2.75 13.266L2.75 0.750001L17.25 0.75L17.25 13.266C17.25 16.455 14.1303 19.25 10 19.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-bookmark":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70948 15.527L1.75 18.8714V0.75H18.25V18.8714L10.2905 15.527L10 15.405L9.70948 15.527Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-speech":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0481 15.445L4.5 18.8403V16.129V15.379H3.75H0.75V0.75H19.25V15.379H12.3558H12.1949L12.0481 15.445Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-burst":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.43692L11.2238 3.4368L11.5957 4.04466L12.2218 3.70422L14.2815 2.58415L14.3414 4.92798L14.3596 5.64039L15.072 5.65859L17.4159 5.71846L16.2958 7.77821L15.9553 8.40427L16.5632 8.77623L18.5631 10L16.5632 11.2238L15.9553 11.5957L16.2958 12.2218L17.4159 14.2815L15.072 14.3414L14.3596 14.3596L14.3414 15.072L14.2815 17.4159L12.2218 16.2958L11.5957 15.9553L11.2238 16.5632L10 18.5631L8.77623 16.5632L8.40427 15.9553L7.77821 16.2958L5.71846 17.4159L5.65859 15.072L5.64039 14.3596L4.92798 14.3414L2.58415 14.2815L3.70422 12.2218L4.04466 11.5957L3.4368 11.2238L1.43692 10L3.4368 8.77623L4.04466 8.40427L3.70422 7.77821L2.58415 5.71846L4.92798 5.65859L5.64039 5.64039L5.65859 4.92798L5.71846 2.58415L7.77821 3.70422L8.40427 4.04466L8.77623 3.4368L10 1.43692Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-star":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.74152L12.2033 6.35881L12.3786 6.72619L12.7821 6.77938L17.8543 7.44799L14.1438 10.9702L13.8486 11.2505L13.9227 11.6507L14.8542 16.6812L10.3578 14.2408L10 14.0467L9.64224 14.2408L5.14579 16.6813L6.07729 11.6507L6.1514 11.2505L5.85618 10.9702L2.14572 7.44799L7.21787 6.77938L7.62144 6.72619L7.79674 6.35881L10 1.74152Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-cloud":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8435 7.77179L15.7201 8.5053L16.4526 8.63477C17.9724 8.90342 19.25 10.4356 19.25 12.4205C19.25 14.6255 17.6897 16.25 15.9538 16.25H4.04624C2.31032 16.25 0.75 14.6255 0.75 12.4205C0.75 10.2156 2.31032 8.59108 4.04624 8.59108H4.0467H4.78646L4.79663 7.85139C4.82308 5.92674 6.18956 4.53505 7.68789 4.53505C8.36794 4.53505 9.00377 4.80993 9.51137 5.29221L10.1781 5.92566L10.6645 5.14517C11.2076 4.2736 12.0714 3.75 13.0057 3.75C14.5182 3.75 15.8974 5.16954 15.8974 7.1215C15.8974 7.34459 15.8788 7.56192 15.8435 7.77179Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-arrow":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.681 18.0566V14.0592V13.3092H10.931H0.75V6.69081H10.931H11.681V5.94081V1.94342L18.9875 10L11.681 18.0566Z" stroke=currentColor stroke-width="1.5"/></svg>',"folder-open":'<svg width="49" height="49"viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 11.625C1.125 8.75391 3.42188 6.375 6.375 6.375H15.9727C17.3672 6.375 18.6797 6.94922 19.6641 7.93359L21.8789 10.1484C22.8633 11.1328 24.1758 11.625 25.5703 11.625H35.25C38.1211 11.625 40.5 14.0039 40.5 16.875V22.125H12.9375C11.9531 22.125 11.1328 22.6172 10.6406 23.4375L1.45312 39.1875C1.20703 39.5977 1.125 40.0898 1.125 40.5V11.625ZM1.28906 41.5664C1.37109 41.6484 1.37109 41.7305 1.45312 41.8125C1.37109 41.8125 1.37109 41.7305 1.37109 41.6484L1.28906 41.5664ZM38.9414 41.6484L40.2539 39.3516C40.0078 40.1719 39.5977 40.9922 38.9414 41.6484Z" fill="#136EAB"/><path d="M12.9375 22.125H45.75C46.6523 22.125 47.5547 22.6172 47.9648 23.4375C48.457 24.2578 48.457 25.3242 47.9648 26.1445L38.7773 41.8945C38.2852 42.6328 37.4648 43.125 36.5625 43.125H3.75C2.76562 43.125 1.94531 42.6328 1.45312 41.8125C0.960938 40.9922 0.960938 40.0078 1.45312 39.1875L10.6406 23.4375C11.1328 22.6172 11.9531 22.125 12.9375 22.125Z" fill="#4BB4EE"/></svg>',"padding-top-bottom":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M15.9111 13.47C15.9111 12.8936 16.3777 12.4264 16.9532 12.4264C17.5287 12.4264 17.9953 12.8936 17.9953 13.47C17.9953 14.0464 17.5287 14.5137 16.9532 14.5137C16.3777 14.5137 15.9111 14.0464 15.9111 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 9.9915C15.9111 9.41511 16.3777 8.94785 16.9532 8.94785C17.5287 8.94785 17.9953 9.41511 17.9953 9.9915C17.9953 10.5679 17.5287 11.0352 16.9532 11.0352C16.3777 11.0352 15.9111 10.5679 15.9111 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 6.51494C15.9111 5.93854 16.3777 5.47128 16.9532 5.47128C17.5287 5.47128 17.9953 5.93854 17.9953 6.51494C17.9953 7.09133 17.5287 7.55859 16.9532 7.55859C16.3777 7.55859 15.9111 7.09133 15.9111 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 13.47C2.01093 12.8936 2.47749 12.4264 3.05303 12.4264C3.62857 12.4264 4.09514 12.8936 4.09514 13.47C4.09514 14.0464 3.62857 14.5137 3.05303 14.5137C2.47749 14.5137 2.01093 14.0464 2.01093 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 9.9915C2.01093 9.41511 2.47749 8.94785 3.05303 8.94785C3.62857 8.94785 4.09514 9.41511 4.09514 9.9915C4.09514 10.5679 3.62857 11.0352 3.05303 11.0352C2.47749 11.0352 2.01093 10.5679 2.01093 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 6.51494C2.01093 5.93854 2.47749 5.47128 3.05303 5.47128C3.62857 5.47128 4.09514 5.93854 4.09514 6.51494C4.09514 7.09133 3.62857 7.55859 3.05303 7.55859C2.47749 7.55859 2.01093 7.09133 2.01093 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.00006 3.04366C2.00006 2.46726 2.46663 2 3.04217 2L16.958 2C17.5335 2 18.0001 2.46726 18.0001 3.04366C18.0001 3.62005 17.5335 4.08731 16.958 4.08731L3.04217 4.08731C2.46663 4.08731 2.00006 3.62005 2.00006 3.04366Z" fill="black"/>\n      <path d="M2.00006 16.9558C2.00006 16.3794 2.46663 15.9121 3.04217 15.9121L16.958 15.9121C17.5335 15.9121 18.0001 16.3794 18.0001 16.9558C18.0001 17.5322 17.5335 17.9994 16.958 17.9994L3.04217 17.9994C2.46663 17.9994 2.00006 17.5322 2.00006 16.9558Z" fill="black"/>\n      </svg>',"padding-left-right":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6.53 15.9119C7.10639 15.9119 7.57365 16.3784 7.57365 16.954C7.57365 17.5295 7.10639 17.9961 6.53 17.9961C5.9536 17.9961 5.48634 17.5295 5.48634 16.954C5.48634 16.3784 5.9536 15.9119 6.53 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 15.9119C10.5849 15.9119 11.0522 16.3784 11.0522 16.954C11.0522 17.5295 10.5849 17.9961 10.0085 17.9961C9.43212 17.9961 8.96486 17.5295 8.96486 16.954C8.96486 16.3784 9.43212 15.9119 10.0085 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 15.9119C14.0615 15.9119 14.5287 16.3784 14.5287 16.954C14.5287 17.5295 14.0615 17.9961 13.4851 17.9961C12.9087 17.9961 12.4414 17.5295 12.4414 16.954C12.4414 16.3784 12.9087 15.9119 13.4851 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M6.53 2.01149C7.10639 2.01149 7.57365 2.47806 7.57365 3.0536C7.57365 3.62914 7.10639 4.0957 6.53 4.0957C5.9536 4.0957 5.48634 3.62914 5.48634 3.0536C5.48634 2.47806 5.9536 2.01149 6.53 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 2.01149C10.5849 2.01149 11.0522 2.47806 11.0522 3.0536C11.0522 3.62914 10.5849 4.0957 10.0085 4.0957C9.43212 4.0957 8.96486 3.62914 8.96486 3.0536C8.96486 2.47806 9.43212 2.01149 10.0085 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 2.01149C14.0615 2.01149 14.5287 2.47806 14.5287 3.0536C14.5287 3.62914 14.0615 4.0957 13.4851 4.0957C12.9087 4.0957 12.4414 3.62914 12.4414 3.0536C12.4414 2.47806 12.9087 2.01149 13.4851 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M16.9564 2C17.5328 2 18 2.46657 18 3.04211L18 16.9579C18 17.5334 17.5328 18 16.9564 18C16.38 18 15.9127 17.5334 15.9127 16.9579L15.9127 3.04211C15.9127 2.46657 16.38 2 16.9564 2Z" fill="black"/>\n      <path d="M3.04425 2C3.62065 2 4.08791 2.46657 4.08791 3.04211L4.08791 16.9579C4.08791 17.5334 3.62065 18 3.04425 18C2.46786 18 2.00059 17.5334 2.00059 16.9579L2.00059 3.04211C2.00059 2.46657 2.46786 2 3.04425 2Z" fill="black"/>\n      </svg>',"regular-microphone-sparkle":'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M0.5625 6.65625C0.5625 6.30078 0.835938 6 1.21875 6C1.57422 6 1.875 6.30078 1.875 6.65625V7.75C1.875 9.69141 3.43359 11.25 5.375 11.25C6.00391 11.25 6.60547 11.0859 7.125 10.7852C7.125 10.8125 7.125 10.8125 7.125 10.8125V10.8398C7.125 11.3047 7.34375 11.7148 7.72656 11.9609C7.20703 12.2617 6.63281 12.4531 6.03125 12.5352V13.4375H7.34375C7.69922 13.4375 8 13.7383 8 14.0938C8 14.4766 7.69922 14.75 7.34375 14.75H5.375H3.40625C3.02344 14.75 2.75 14.4766 2.75 14.0938C2.75 13.7383 3.02344 13.4375 3.40625 13.4375H4.71875V12.5352C2.36719 12.207 0.5625 10.2109 0.5625 7.75V6.65625ZM2.75 3.375C2.75 1.92578 3.92578 0.75 5.375 0.75C6.82422 0.75 8 1.92578 8 3.375V7.75C8 9.19922 6.82422 10.375 5.375 10.375C3.92578 10.375 2.75 9.19922 2.75 7.75V3.375ZM4.0625 3.375V7.75C4.0625 8.48828 4.63672 9.0625 5.375 9.0625C6.08594 9.0625 6.6875 8.48828 6.6875 7.75V3.375C6.6875 2.66406 6.08594 2.0625 5.375 2.0625C4.63672 2.0625 4.0625 2.66406 4.0625 3.375ZM8 10.8125C8 10.6211 8.10938 10.457 8.30078 10.375L10.625 9.5L11.4727 7.20312C11.5547 7.01172 11.7188 6.875 11.9375 6.875C12.1289 6.875 12.293 7.01172 12.375 7.20312L13.25 9.5L15.5469 10.375C15.7383 10.457 15.875 10.6211 15.875 10.8125C15.875 11.0312 15.7383 11.1953 15.5469 11.2773L13.25 12.125L12.375 14.4492C12.293 14.6406 12.1289 14.75 11.9375 14.75C11.7188 14.75 11.5547 14.6406 11.4727 14.4492L10.625 12.125L8.30078 11.2773C8.10938 11.1953 8 11.0312 8 10.8125ZM8.46484 9.39062C8.71094 8.89844 8.875 8.35156 8.875 7.75V6.65625C8.875 6.30078 9.14844 6 9.53125 6C9.88672 6 10.1875 6.30078 10.1875 6.65625V7.75C10.1875 7.91406 10.1602 8.07812 10.1602 8.24219L9.94141 8.84375L8.46484 9.39062Z" fill="black"/>\n      </svg>',"menu-border-width":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M15.5 13.4C15.5 13.5591 15.4539 13.7117 15.3719 13.8243C15.2898 13.9368 15.1785 14 15.0625 14L1.9375 14C1.82147 14 1.71019 13.9368 1.62814 13.8243C1.54609 13.7117 1.5 13.5591 1.5 13.4L1.5 11C1.5 10.8409 1.54609 10.6883 1.62814 10.5757C1.71019 10.4632 1.82147 10.4 1.9375 10.4L15.0625 10.4C15.1785 10.4 15.2898 10.4632 15.3719 10.5757C15.4539 10.6883 15.5 10.8409 15.5 11L15.5 13.4ZM15.5 7.4C15.5 7.55913 15.4539 7.71174 15.3719 7.82426C15.2898 7.93679 15.1785 8 15.0625 8L1.9375 8C1.82147 8 1.71019 7.93678 1.62814 7.82426C1.54609 7.71174 1.5 7.55913 1.5 7.4L1.5 6.2C1.5 6.04087 1.54609 5.88826 1.62814 5.77573C1.71019 5.66321 1.82147 5.6 1.9375 5.6L15.0625 5.6C15.1785 5.6 15.2898 5.66321 15.3719 5.77573C15.4539 5.88826 15.5 6.04087 15.5 6.2L15.5 7.4ZM15.5 2.6C15.5 2.75913 15.4539 2.91174 15.3719 3.02426C15.2898 3.13679 15.1785 3.2 15.0625 3.2L1.9375 3.2C1.82147 3.2 1.71019 3.13678 1.62814 3.02426C1.54609 2.91174 1.5 2.75913 1.5 2.6C1.5 2.44087 1.54609 2.28826 1.62814 2.17573C1.71019 2.06321 1.82147 2 1.9375 2L15.0625 2C15.1785 2 15.2898 2.06321 15.3719 2.17574C15.4539 2.28826 15.5 2.44087 15.5 2.6Z" fill="currentColor"/>\n    </svg>',"menu-corner-radius":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80187 1H4.76667H2.27778C1.84823 1 1.5 1.34823 1.5 1.77778C1.5 2.20733 1.84823 2.55556 2.27778 2.55556H4.76667C6.52189 2.55556 7.79152 2.55616 8.79008 2.63775C9.77954 2.71859 10.4341 2.87505 10.9717 3.14897C11.9962 3.67094 12.8291 4.50384 13.351 5.52827C13.6249 6.06585 13.7814 6.72046 13.8623 7.70992C13.9438 8.70848 13.9444 9.97811 13.9444 11.7333V14.2222C13.9444 14.6517 14.2927 15 14.7222 15C15.1517 15 15.5 14.6517 15.5 14.2222V11.7333V11.6981C15.5 9.98553 15.5 8.65252 15.4126 7.58325C15.3239 6.49758 15.1413 5.61549 14.737 4.82206C14.0659 3.50493 12.9951 2.43407 11.6779 1.76295C10.8845 1.35868 10.0024 1.17606 8.91675 1.08736C7.84748 1 6.51447 1 4.80187 1Z" fill="currentColor"/>\n    </svg>',"menu-box-shadow":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M13.75 2.75V1H1.5V13.25H3.25V15H15.5V2.75H13.75ZM12.875 12.375H2.375V1.875H12.875V12.375Z" fill="currentColor"/>\n    </svg>',"menu-overlay":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M12.7445 3.78598C12.5683 3.81798 10.005 3.81798 9.92492 3.76999V1.00247H7.12136V3.78598C6.96116 3.81798 4.38188 3.81798 4.30178 3.76999V1.01847C4.18964 0.986478 1.5623 1.00247 1.51424 1.01847C1.4822 1.16245 1.51424 3.73799 1.51424 3.81798H4.30178V6.60148H1.51424C1.4822 6.77745 1.51424 9.337 1.51424 9.41699H4.30178V12.2165H1.51424C1.4822 12.3285 1.51424 14.6801 1.51424 15H4.3178V12.2325C4.38188 12.2325 6.96116 12.2165 7.10534 12.2325C7.12136 12.2965 7.12136 14.76 7.10534 15H9.94094V12.2325H12.7285C12.7445 12.2965 12.7445 14.6961 12.7445 15H15.5V12.2165H12.7445V9.41699H15.5V6.58549H12.7445V3.81798H15.5V1.00247H12.7445V3.78598ZM7.10534 9.40099C7.04126 9.40099 4.55811 9.41699 4.33382 9.40099C4.30178 9.337 4.30178 6.76146 4.33382 6.61748H7.10534V9.40099ZM9.92492 12.2005C9.84482 12.2325 7.28156 12.2325 7.12136 12.2165V9.41699H9.92492V12.2005ZM7.12136 6.58549V3.81798H9.92492C9.92492 3.89796 9.94094 6.47351 9.92492 6.58549H7.12136ZM12.7445 9.40099H9.94094C9.92492 9.337 9.92492 6.76146 9.94094 6.61748H12.7445V9.40099Z" fill="url(#paint0_linear_14204_11278)"/>\n      <defs>\n        <linearGradient id="paint0_linear_14204_11278" x1="2.5" y1="8" x2="14" y2="8" gradientUnits="userSpaceOnUse">\n          <stop offset="0" stop-color="currentColor" />\n          <stop offset="1" stop-opacity="0.2" stop-color="currentColor" />\n        </linearGradient>\n      </defs>\n    </svg>\n    ',swatch:'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g\n          clip-path="url(#mon-swatch-clip-path)"\n        >\n          <g>\n            <foreignObject\n              x="0"\n              y="0"\n              width="24"\n              height="24"\n            >\n              <div class="conic-gradient" style="background: var(--fa-primary-color, currentColor); height: 100%; width: 100%;"></div>\n            </foreignObject>\n          </g>\n        </g>\n        <circle\n          cx="12"\n          cy="12"\n          r="11.5"\n          stroke="black"\n          stroke-opacity="0.1"\n        />\n      </svg>\n    ',"swatch-checkered":'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g mask="url(#mon-swatch-clip-mask)">\n          <rect width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="3.42822" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="3.42969" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="3.42822" y="10.2852" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="3.42822" y="17.1445" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="10.2856" y="3.42969" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="17.1426" y="3.42969" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="10.2856" y="10.2852" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="17.1426" y="10.2852" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="10.2856" y="17.1445" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="17.1426" y="17.1445" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <circle cx="12" cy="12" r="11.5" stroke="black" stroke-opacity="0.2"/>\n        </g>\n      </svg>\n    ',"text-color":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M12.6016 4.28516L17.1953 15.2227C17.332 15.5508 17.168 15.9336 16.8398 16.0977C16.5117 16.2344 16.1289 16.0703 15.9648 15.7422L15.0352 13.5H8.9375L8.00781 15.7422C7.87109 16.0703 7.46094 16.2344 7.13281 16.0977C6.80469 15.9336 6.64062 15.5508 6.77734 15.2227L11.3711 4.28516C11.4805 4.03906 11.7266 3.875 12 3.875C12.2461 3.875 12.4922 4.03906 12.6016 4.28516ZM14.4883 12.1875L12 6.22656L9.48438 12.1875H14.4883Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight-undefined":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n      </svg>\n    ',"regular-image-sparkle":'\n      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5C0 3.90625 0.875 3 2 3H14C15.0938 3 16 3.90625 16 5V8.09375C15.8125 8.03125 15.6562 8 15.5 8C15.125 8 14.75 8.15625 14.5 8.375V5C14.5 4.75 14.25 4.5 14 4.5H2C1.71875 4.5 1.5 4.75 1.5 5V15V15.0312L1.625 14.8438L4.125 11.3438C4.28125 11.125 4.5 11 4.75 11C4.96875 11 5.21875 11.125 5.34375 11.3125L6.3125 12.6562L8.90625 9.3125C9.03125 9.125 9.25 9 9.5 9C9.71875 9 9.9375 9.125 10.0938 9.3125L11.9375 11.7188L11 12.0625C10.375 12.2812 10 12.875 10 13.5V13.5312C10 14.1562 10.375 14.7188 11 14.9688L13.2188 15.7812L13.6562 17H2C0.875 17 0 16.125 0 15V5ZM3.1875 6.75C3.46875 6.3125 3.9375 6 4.5 6C5.03125 6 5.53125 6.3125 5.78125 6.75C6.0625 7.21875 6.0625 7.8125 5.78125 8.25C5.53125 8.71875 5.03125 9 4.5 9C3.9375 9 3.46875 8.71875 3.1875 8.25C2.90625 7.8125 2.90625 7.21875 3.1875 6.75ZM11 13.5C11 13.2812 11.125 13.0938 11.3438 13L14 12L14.9688 9.375C15.0625 9.15625 15.25 9 15.5 9C15.7188 9 15.9062 9.15625 16 9.375L17 12L19.625 13C19.8438 13.0938 20 13.2812 20 13.5C20 13.75 19.8438 13.9375 19.625 14.0312L17 15L16 17.6562C15.9062 17.875 15.7188 18 15.5 18C15.25 18 15.0625 17.875 14.9688 17.6562L14 15L11.3438 14.0312C11.125 13.9375 11 13.75 11 13.5Z" fill="url(#paint0_linear_19093_1180)"/>\n        <defs>\n          <linearGradient id="paint0_linear_19093_1180" x1="0.243902" y1="20" x2="19.8657" y2="19.2606" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#9C15FF"/>\n            <stop offset="1" stop-color="#1EB4FB"/>\n          </linearGradient>\n        </defs>\n      </svg>\n    '};function Rn(t){return Object.hasOwn(In,t)}function Bn(t){return t.startsWith(En)}Object.keys(In);var jn=r.vs('<span class="glyph"> </span>');function Fn(t,e){r.VC(e,!1);const n=r.zg(),i=r.zg(),o=r.zg(),a=t=>{var e=r.Im(),n=r.es(e),i=t=>{var e=r.Im(),n=r.es(e);r.qy(n,(()=>In[l()]),!1,!1),r.BC(t,e)};r.if(n,(t=>{Rn(l())&&t(i)})),r.BC(t,e)},s=t=>{var e=r.Im(),n=r.es(e),i=t=>{var e=jn(),n=r.jf(e,!0);r.cL(e),r.vN((t=>r.j(n,t)),[()=>function(t){return t.slice(En.length)}(l())],r.Xd),r.BC(t,e)};r.if(n,(t=>{Bn(l())&&t(i)})),r.BC(t,e)};let l=r._w(e,"icon",8),c=r._w(e,"style",8,"regular"),d=r._w(e,"size",8,14);r.M3((()=>r.iT(l())),(()=>{r.hZ(n,Rn(l()))})),r.M3((()=>r.iT(l())),(()=>{r.hZ(i,Bn(l()))})),r.M3((()=>r.iT(c())),(()=>{r.hZ(o,"duotone"===c())})),r.iq(),r.Ts();const h=r.Xd((()=>r.Jt(n)?a:r.Jt(i)?s:`fa-${c()} fa-${l()}`));!function(t,e){r.VC(e,!1);let n=r._w(e,"icon",8,"fa-regular fa-circle-dashed"),i=r._w(e,"color",8,void 0),o=r._w(e,"size",8,void 0),a=r._w(e,"duotone",8,void 0),s=r._w(e,"children",8,void 0);const l="string"==typeof n()&&n().length>0;r.Ts();var c=zn();let d;var h=r.jf(c),p=t=>{var e=r.Im(),i=r.es(e);r.UA(i,n),r.BC(t,e)},u=(t,e)=>{var i=t=>{var e=xn();r.vN((()=>r.ys(e,1,r.$z(n())))),r.BC(t,e)},o=t=>{var e=r.Im(),n=r.es(e);r.UA(n,(()=>s()??r.lQ)),r.BC(t,e)};r.if(t,(t=>{l?t(i):t(o,!1)}),e)};r.if(h,(t=>{n()&&"string"!=typeof n()?t(p):t(u,!1)})),r.cL(c),r.XI(c,(t=>Cn?.(t))),r.vN((t=>{r.Jk(c,"data-duotone",a()||void 0),d=r.hg(c,"",d,{"--arc-icon-size":t,"--arc-icon-color":i()})}),[()=>yn(o())],r.Xd),r.BC(t,c),r.uY()}(t,{get icon(){return r.Jt(h)},get size(){return d()},get duotone(){return r.Jt(o)}}),r.uY()}r.vs("<div><!></div>"),r.vs('<div class="scrollbar svelte-1e1sej9" aria-hidden="true"><div class="handle svelte-1e1sej9"></div> <input tabindex="-1" type="range" class="svelte-1e1sej9"></div>'),r.vs("<!> <!>",1),r.vs('<div class="panel-tabs svelte-1uez1n9"><!></div>'),r.vs('<div class="panel svelte-1uez1n9"><!> <!></div>'),r.vs('<div class="panel-actions svelte-ir5tsd"><!></div>'),r.vs('<header><div class="panel-heading svelte-ir5tsd"><!></div> <!></header>'),n(2732),n(3252),n(5266),r.vs('<div class="tooltip svelte-1wsjo2i" data-mon-tooltip="" popover="manual"><!> <svg class="arrow svelte-1wsjo2i" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" data-mon-tooltip-arrow=""><path d="M13 0H1V1L6.2929 6.2929c.3905.3905 1.0237.3905 1.4142 0L13 1V0Z"></path></svg></div>'),r.vs('<div class="tooltip-locator svelte-1wsjo2i"></div> <!>',1),r.vs('<span class="text-label svelte-156x2eo"> </span>'),r.vs('<!> <div class="mon-sr-only svelte-156x2eo"><!></div>',1),r.vs("<div><!> <!></div>"),r.vs('<div><input type="number" class="input-value svelte-gx1obz"> <div class="input-button dec svelte-gx1obz"><!></div> <div class="input-button inc svelte-gx1obz"><!></div></div>'),r.vs("<button><!></button>"),r.vs('<div><!> <input class="radio-input svelte-1nbcryn" type="radio"></div>'),r.vs('<div class="radio-icon-group svelte-1nbcryn" role="radiogroup"></div>'),r.vs('<div class="text-input-wrapper svelte-dw7kuc"><div class="text-input-prefix svelte-dw7kuc"><div class="text-input-lead-icon svelte-dw7kuc"><!></div></div> <input> <div class="actions svelte-dw7kuc"><!></div></div>'),r.vs('<div class="slider-container svelte-7a6v09"><div class="slider-wrapper svelte-7a6v09"><div class="slider-track svelte-7a6v09"></div> <input type="range" class="slider svelte-7a6v09"></div> <!></div>'),r.vs("<!> ",1),r.vs("<mon-menu-item><!> </mon-menu-item>",2),r.vs("<mon-menu></mon-menu>",2),r.vs('<div class="mon-split-button mon-tooltip-anchor svelte-10dj79p"><div class="mon-split-button-primary svelte-10dj79p"><!></div> <div class="mon-split-button-divider svelte-10dj79p"></div> <div><div class="mon-split-button-secondary svelte-10dj79p"><!></div> <!></div></div>');var On=r.vs("<div><!></div>");const qn={hash:"svelte-1i06x9o",code:".suspense.--loading.svelte-1i06x9o {visibility:hidden;}"};r.vs('<label><input class="input mon-visually-hidden svelte-5dh97r"> <!></label>'),r.vs('<div class="tag-group svelte-2750ar"><!></div>'),r.vs("<input>"),r.vs('<label class="toggle-group-option mon-tooltip-anchor svelte-13t9a5s"><!> <input class="svelte-13t9a5s"> <span class="icon-wrapper svelte-13t9a5s"><!></span></label>'),r.vs('<div class="toggle-group-container svelte-13t9a5s"></div>');var Dn=r.vs('<div class="audio-player svelte-ozy54q"><div class="audio-player__housing svelte-ozy54q" role="group"><button class="audio-player__play svelte-ozy54q" type="button"><!></button> <div class="audio-player__slider-wrapper svelte-ozy54q"><input class="audio-player__slider svelte-ozy54q" type="range" step="any"> <div class="audio-player__slider-progress svelte-ozy54q"></div></div> <div class="audio-player__timer svelte-ozy54q" role="timer"> </div></div> <audio class="audio-player__audio-element"></audio></div>');const Nn={hash:"svelte-ozy54q",code:".audio-player.svelte-ozy54q {display:flex;min-width:0;flex:1;padding-block:0.4rem;padding-inline:1.2rem;height:4rem;align-items:center;border-radius:10rem;background-color:var(--arc-color-mono-white);pointer-events:initial;}.audio-player__housing.svelte-ozy54q {--slider-thumb-size: 10px;--slider-thumb-bg: var(--arc-color-mono-black);--slider-thumb-border: 1px solid var(--arc-color-border-standard);--slider-thumb-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--slider-track-height: 0.5rem;align-items:center;display:flex;flex-flow:row nowrap;width:100%;-webkit-user-select:none;user-select:none;}.audio-player__play.svelte-ozy54q {cursor:pointer;display:flex;align-items:center;justify-content:center;}.audio-player__play.svelte-ozy54q {-webkit-appearance:none;appearance:none;border:none;background:none;font-size:1.6rem;padding-inline:0;}.audio-player__slider-wrapper.svelte-ozy54q {position:relative;height:32px;min-width:0;flex:1;display:flex;--pad-left: 1.25rem;--pad-right: 1.2rem;}.audio-player__slider.svelte-ozy54q {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;min-width:0;flex:1;height:100%;padding-inline-start:var(--pad-left);padding-inline-end:var(--pad-right);}\n\n  /***** Chrome, Safari, Opera and Edge Chromium styles *****/.audio-player__slider.svelte-ozy54q::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-ozy54q::-webkit-slider-runnable-track {background-color:var(--arc-color-border-standard);border-radius:var(--slider-track-height);height:var(--slider-track-height);}\n\n  /******** Firefox styles ********/.audio-player__slider.svelte-ozy54q::-moz-range-thumb {appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-ozy54q::-moz-range-track {background-color:var(--arc-color-border-standard);border-radius:var(--slider-track-height);height:var(--slider-track-height);}.audio-player__slider-progress.svelte-ozy54q {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );border-radius:var(--slider-track-height);height:var(--slider-track-height);position:absolute;inset-inline-start:var(--pad-left);inset-inline-end:var(--pad-right);inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;}.audio-player__timer.svelte-ozy54q {font-size:1.4rem;font-family:var(--arc-font-family-body);font-weight:var(--arc-font-weight-600);white-space:nowrap;text-align:right;width:4rem;}"};var Gn=r.vs('<div class="mon-audio-wrapper svelte-1req34n"><!></div>');const Un={hash:"svelte-1req34n",code:".mon-audio-wrapper.svelte-1req34n {align-items:center;display:flex;inset:0;position:absolute;}"};var Yn=r.Dn('<g><path class="border svelte-1b0340t"></path></g>');const Kn={hash:"svelte-1b0340t",code:".border.svelte-1b0340t {fill:none;stroke-linecap:round;}"},Wn=.5,Xn=1;var Qn=r.Dn('<filter x="0" y="0" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceAlpha"></feGaussianBlur><feOffset result="mask"></feOffset><feFlood result="color"></feFlood><feComposite operator="in" in="color" in2="mask"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>'),ti=r.Dn('<rect class="fill-color svelte-s28lkx"></rect>');const ei={hash:"svelte-s28lkx",code:".fill-color.svelte-s28lkx {stroke:none;}"};function ni(t,e){r.VC(e,!1),r.kZ(t,ei);let n=r._w(e,"width",8),i=r._w(e,"height",8),o=r._w(e,"fill",8);r.Ts();var a=r.Im(),s=r.es(a),l=t=>{var e=ti();r.vN((()=>{r.Jk(e,"width",n()),r.Jk(e,"height",i()),r.Jk(e,"fill",o().color),r.Jk(e,"opacity",o().opacity)})),r.BC(t,e)};r.if(s,(t=>{o().color&&t(l)})),r.BC(t,a),r.uY()}var ii=r.Dn('<image class="fill-image" preserveAspectRatio="none"></image>');let ri=0;const oi={type:"rectangle"};function ai(t){return t?.applied?t:void 0}function si(t){return t?.applied?t:void 0}var li=r.vs('<div class="backdrop-wrapper svelte-faya9i" role="presentation"><svg class="mon-item-backdrop svelte-faya9i" preserveAspectRatio="none"><defs><clipPath><path></path></clipPath><!></defs><g><g><g><!><!><!><rect></rect></g><!></g></g></svg></div>');const ci={hash:"svelte-faya9i",code:".backdrop-wrapper.svelte-faya9i {position:absolute;}.mon-item-backdrop.svelte-faya9i {display:block;width:100%;height:100%;}.mon-item-mouse-trigger.svelte-faya9i {fill:none;}.mon-item-mouse-trigger.--visible.svelte-faya9i {pointer-events:all;}.mon-item-mouse-trigger.--clickable.svelte-faya9i {cursor:pointer;}"};function di(t,e){r.VC(e,!1),r.kZ(t,ci);const n=r.zg(),o=r.zg(),a=r.zg();let s=r._w(e,"item",8),c=r._w(e,"stateId",8),d=r._w(e,"visible",8),h=r._w(e,"clickable",8,!1),p=r.zg(),u=r.zg(),g=r.zg(oi),v=r.zg(),m=r.zg(),b=r.zg(),f=r.zg(),w=r.zg(),y=r.zg(),C=r.zg(),x=r.zg(),z=r.zg(),k=r.zg(),L=r.zg(),M=r.zg();const Z="mon-item-backdrop-clip-"+ri++,J="mon-item-backdrop-shadow-filter-"+ri++;r.M3((()=>r.iT(s())),(()=>{r.hZ(n,s().states.default)})),r.M3((()=>(r.iT(s()),r.iT(c()))),(()=>{r.hZ(o,s().states[c()])})),r.M3((()=>(r.Jt(o),r.Jt(n),r.iT(s()))),(()=>{if(r.hZ(p,r.Jt(o).width?.value??r.Jt(n).width.value),r.hZ(u,r.Jt(o).height?.value??r.Jt(n).height.value),"image"===s().type){const t=r.Jt(o),e=r.Jt(n);r.hZ(g,t.shapeDef??e.shapeDef),r.hZ(m,t.fill??e.fill),r.hZ(b,t.overlay??e.overlay),r.hZ(f,ai(t.dropShadow??e.dropShadow)),r.hZ(w,si(t.border??e.border)),r.hZ(y,t.altText??e.altText)}else if("shape"===s().type){const t=r.Jt(o),e=r.Jt(n);r.hZ(g,t.shapeDef??e.shapeDef),r.hZ(v,t.fill??e.fill),r.hZ(b,t.overlay??e.overlay),r.hZ(f,ai(t.dropShadow??e.dropShadow)),r.hZ(w,si(t.border??e.border)),r.hZ(y,t.altText??e.altText)}else if("group"===s().type){const t=r.Jt(o),e=r.Jt(n);r.hZ(v,t.fill??e.fill),r.hZ(b,t.overlay??e.overlay),r.hZ(w,si(t.border??e.border))}})),r.M3((()=>(r.Jt(C),r.Jt(p),r.Jt(x),r.Jt(u),r.Jt(z),r.Jt(k),r.Jt(L),r.Jt(M),r.Jt(w),r.Jt(f),Xn)),(()=>{r.hZ(C,r.Jt(p)),r.hZ(x,r.Jt(u)),r.hZ(z,0),r.hZ(k,0),r.hZ(L,0),r.hZ(M,0);let t=0;if(r.Jt(w)&&(t+=Math.ceil(.5*r.Jt(w).width.value)),r.Jt(f)){t+=r.Jt(f).blur*Xn;const{offset:{x:e,y:n}}=r.Jt(f);e<0?(r.hZ(C,r.Jt(C)-e),r.hZ(z,r.Jt(z)+e)):(r.hZ(C,r.Jt(C)+e),r.hZ(L,r.Jt(L)-e)),n<0?(r.hZ(x,r.Jt(x)-n),r.hZ(k,r.Jt(k)+n)):(r.hZ(x,r.Jt(x)+n),r.hZ(M,r.Jt(M)-n))}r.hZ(C,r.Jt(C)+2*t),r.hZ(x,r.Jt(x)+2*t),r.hZ(z,r.Jt(z)-t),r.hZ(k,r.Jt(k)-t),r.hZ(L,r.Jt(L)-t),r.hZ(M,r.Jt(M)-t)})),r.M3((()=>(r.Jt(g),r.Jt(p),r.Jt(u))),(()=>{var t,e;r.hZ(a,(t=r.Jt(g),e={width:r.Jt(p),height:r.Jt(u)},Zt.get(t.type).clipPath(t,e)))})),r.iq(),r.Ts();var $=li();let H;var _=r.jf($),T=r.jf(_),S=r.jf(T);r.Jk(S,"id",Z);var A=r.jf(S);r.cL(S);var V=r.AD(S),P=t=>{!function(t,e){r.VC(e,!1);let n=r._w(e,"id",8),i=r._w(e,"dropShadow",8),o=r._w(e,"svgWidth",8),a=r._w(e,"svgHeight",8);r.Ts();var s=Qn(),l=r.jf(s),c=r.AD(l),d=r.AD(c);r.K2(2),r.cL(s),r.vN((()=>{r.Jk(s,"id",n()),r.Jk(s,"width",o()),r.Jk(s,"height",a()),r.Jk(l,"stdDeviation",i().blur*Wn),r.Jk(c,"dx",i().offset.x),r.Jk(c,"dy",i().offset.y),r.Jk(d,"flood-color",i().color),r.Jk(d,"flood-opacity",i().opacity)})),r.BC(t,s),r.uY()}(t,{id:J,get dropShadow(){return r.Jt(f)},get svgWidth(){return r.Jt(C)},get svgHeight(){return r.Jt(x)}})};r.if(V,(t=>{r.Jt(f)&&t(P)})),r.cL(T);var E=r.AD(T),I=r.jf(E),R=r.jf(I);r.Jk(R,"clip-path",`url(#${Z??""})`);var B=r.jf(R),j=t=>{ni(t,{get width(){return r.Jt(p)},get height(){return r.Jt(u)},get fill(){return r.Jt(v)}})};r.if(B,(t=>{r.Jt(v)&&t(j)}));var F=r.AD(B),O=t=>{!function(t,e){r.VC(e,!1);const n=r.zg();let o=r._w(e,"width",8),a=r._w(e,"height",8),s=r._w(e,"assets",8,void 0),c=r._w(e,"fill",8);r.M3((()=>(r.iT(c()),r.iT(s()),i)),(()=>{r.hZ(n,c().assetId&&s()?.[c().assetId]?l(s()?.[c().assetId]):null)})),r.iq(),r.Ts();var d=r.Im(),h=r.es(d),p=t=>{var e=ii();const i=r.Xd((()=>{const{crop:t}=c();return{crop:t}})),s=r.Xd((()=>r.Jt(i).crop.width*o())),l=r.Xd((()=>r.Jt(i).crop.height*a())),d=r.Xd((()=>.5*(o()-r.Jt(s))+o()*r.Jt(i).crop.left)),h=r.Xd((()=>.5*(a()-r.Jt(l))+a()*r.Jt(i).crop.top));let p;r.vN((()=>{r.Jk(e,"href",r.Jt(n)),r.Jk(e,"width",r.Jt(s)),r.Jk(e,"height",r.Jt(l)),r.Jk(e,"x",r.Jt(d)),r.Jk(e,"y",r.Jt(h)),p=r.hg(e,"",p,{opacity:c().opacity})})),r.BC(t,e)};r.if(h,(t=>{r.Jt(n)&&t(p)})),r.BC(t,d),r.uY()}(t,{get width(){return r.Jt(p)},get height(){return r.Jt(u)},get assets(){return s().assets},get fill(){return r.Jt(m)}})};r.if(F,(t=>{r.Jt(m)&&t(O)}));var q=r.AD(F),D=t=>{ni(t,{get width(){return r.Jt(p)},get height(){return r.Jt(u)},get fill(){return r.Jt(b)}})};r.if(q,(t=>{r.Jt(b)&&t(D)}));var N=r.AD(q);let G;r.cL(R);var U=r.AD(R),Y=t=>{!function(t,e){r.VC(e,!1),r.kZ(t,Kn);let n=r._w(e,"border",8),i=r._w(e,"d",8);r.Ts();var o=Yn();let a;var s=r.jf(o);r.cL(o),r.vN((t=>{a=r.hg(o,"",a,{opacity:n().opacity}),r.Jk(s,"stroke-width",n().width.value),r.Jk(s,"stroke",n().color),r.Jk(s,"stroke-dasharray",t),r.Jk(s,"d",i())}),[()=>function(t){if(!t.applied)return;const e=t.width.value;return"dashed"===t.style?`${2*e} ${2*e}`:"dotted"===t.style?"0 "+2*e:void 0}(n())],r.Xd),r.BC(t,o),r.uY()}(t,{get border(){return r.Jt(w)},get d(){return r.Jt(a)}})};r.if(U,(t=>{r.Jt(w)&&t(Y)})),r.cL(I),r.cL(E),r.cL(_),r.cL($),r.vN((t=>{H=r.hg($,"",H,{left:`${r.Jt(z)??""}px`,top:`${r.Jt(k)??""}px`,right:`${r.Jt(L)??""}px`,bottom:`${r.Jt(M)??""}px`}),r.Jk(_,"viewBox",`0 0 ${r.Jt(C)??""} ${r.Jt(x)??""}`),r.Jk(_,"role",r.Jt(y)?"img":"presentation"),r.Jk(_,"aria-label",r.Jt(y)||void 0),r.Jk(A,"d",r.Jt(a)),r.Jk(E,"filter",r.Jt(f)?`url(#${J})`:void 0),r.Jk(I,"transform",`translate(${-r.Jt(z)} ${-r.Jt(k)})`),G=r.ys(N,0,"mon-item-mouse-trigger svelte-faya9i",null,G,t),r.Jk(N,"width",r.Jt(p)),r.Jk(N,"height",r.Jt(u)),r.Jk(N,"role",h()?"button":void 0),r.Jk(N,"tabindex",h()?0:void 0)}),[()=>({"--visible":d(),"--clickable":h()})],r.Xd),r.BC(t,$),r.uY()}var hi=r.vs('<div role="presentation" tabindex="-1"><!></div>');const pi={hash:"svelte-d0xz7b",code:".mon-item-transform.svelte-d0xz7b {position:absolute;\n    /*\n    This element defines a virtual reference box for the item, but the actual physical\n    extents of the item may vary.  For non-rectangle ShapeItems, the clickable area of\n    the item can be much smaller.  For GroupItems, the reference box itself is generally\n    not clickable; only the children within.  So this element has to be non-interactable,\n    and children of ItemTransform that wish to be interactable are expected to override\n    this within the child components.\n    */pointer-events:none;}.mon-item-transform.--smooth-transitions.svelte-d0xz7b {transition:all 100ms ease;}"},ui={type:"rectangle"};var gi=r.vs('<div class="text-item-clip svelte-1nmagoa"><div class="text-item-clip-boundary svelte-1nmagoa"><div class="text-item-padding-boundary svelte-1nmagoa"><!></div></div></div>');const vi={hash:"svelte-1nmagoa",code:".text-item-clip.svelte-1nmagoa {position:absolute;inset:0;}.text-item-clip-boundary.svelte-1nmagoa {position:absolute;}.text-item-padding-boundary.svelte-1nmagoa {position:absolute;inset:var(--top) var(--right) var(--bottom) var(--left);}.text-item-padding-boundary[data-vertical-align='top'].svelte-1nmagoa {--text-item-vertical-align: start;}.text-item-padding-boundary[data-vertical-align='middle'].svelte-1nmagoa {--text-item-vertical-align: center;}.text-item-padding-boundary[data-vertical-align='bottom'].svelte-1nmagoa {--text-item-vertical-align: end;}.text-item-padding-boundary.svelte-1nmagoa .tiptap {align-content:var(--text-item-vertical-align);align-self:var(--text-item-vertical-align);overflow-anchor:none;}"};var mi=r.vs('<div class="content-wrapper svelte-f85pc"><div class="tiptap ProseMirror content svelte-f85pc"></div></div>');const bi={hash:"svelte-f85pc",code:".content-wrapper.svelte-f85pc {height:100%;display:flex;pointer-events:auto;}\n\n  /**\n    * Tiptap content can sometimes render authored line breaks as empty <p> or <h1>-<h6> tags depending\n    * on whether the author used Shift+Enter vs Enter. We need to ensure these empty tags\n    * have a minimum height so they actually behave like line breaks which take up space.\n    */.content.svelte-f85pc\n    \n      :is(p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty)\n     {min-height:1lh;}"};function fi(t,e){r.VC(e,!1),r.kZ(t,bi);const[n,i]=r.DZ(),o=r.zg();let a=r._w(e,"item",8),s=r._w(e,"stateId",8);const l=C(),{searchTerm:c}=l;r.M3((()=>(r.iT(a()),r.iT(s()))),(()=>{r.hZ(o,a().states[s()].text?.json??a().states.default.text.json)})),r.iq(),r.Ts(),function(t,e){r.VC(e,!1),r.kZ(t,vi);const n=r.zg(),i=r.zg(),o=r.zg();let a=r._w(e,"item",8),s=r._w(e,"stateId",8);r.M3((()=>(r.iT(a()),r.iT(s()))),(()=>{r.hZ(n,_t(a(),s()))})),r.M3((()=>(r.iT(a()),r.Jt(n))),(()=>{var t;r.hZ(i,(t="shape"===a().type?r.Jt(n).shapeDef:ui,Zt.get(t.type).textExtents(t)))})),r.M3((()=>(r.Jt(o),r.Jt(n))),(()=>{var t;t=r.Jt(n),r.hZ(o,t.textPadding)})),r.iq(),r.Ts();var l=gi(),c=r.jf(l);let d;var h=r.jf(c);let p;var u=r.jf(h);r.NI(u,e,"default",{},null),r.cL(h),r.cL(c),r.cL(l),r.vN((()=>{d=r.hg(c,"",d,{left:`calc(${r.Jt(i).left??""} * 100%)`,top:`calc(${r.Jt(i).top??""} * 100%)`,width:`calc(${r.Jt(i).width??""} * 100%)`,height:`calc(${r.Jt(i).height??""} * 100%)`}),r.Jk(h,"data-vertical-align",r.Jt(n).textVerticalAlign),p=r.hg(h,"",p,{"--top":`${r.Jt(o).top??""}px`,"--left":`${r.Jt(o).left??""}px`,"--bottom":`${r.Jt(o).bottom??""}px`,"--right":`${r.Jt(o).right??""}px`})})),r.BC(t,l),r.uY()}(t,{get item(){return a()},get stateId(){return s()},children:(t,e)=>{var i=mi(),l=r.jf(i);r.XI(l,((t,e)=>Rt?.(t,e)),(()=>({doc:r.Jt(o),searchTerm:s()===a().initialState?r.Hz(c,"$searchTerm",n):void 0}))),r.cL(i),r.BC(t,i)},$$slots:{default:!0}}),r.uY(),i()}var wi=r.vs('<button class="video-player__big-play-button svelte-1xrpo7n"><!></button>'),yi=r.vs('<button class="video-player__pip-button svelte-1xrpo7n" aria-label="Toggle Picture-in-Picture"><!></button>'),Ci=r.vs('<div role="group"><video class="video-player__video svelte-1xrpo7n"><source></video> <!> <div class="video-player__controls svelte-1xrpo7n"><button class="video-player__play-button svelte-1xrpo7n" type="button"><!></button> <div class="video-player__seek-bar-wrapper svelte-1xrpo7n"><input class="video-player__seek-bar svelte-1xrpo7n" type="range" aria-label="Seek"> <div class="video-player__seek-bar-progress svelte-1xrpo7n"></div></div> <span class="video-player__time-remaining svelte-1xrpo7n"> </span> <!> <button class="video-player__fullscreen-button svelte-1xrpo7n" aria-label="Toggle Fullscreen"><!></button> <div class="video-player__volume-control svelte-1xrpo7n"><button class="video-player__volume-button svelte-1xrpo7n" aria-label="Toggle volume"><!></button> <div class="video-player__volume-slider-wrapper svelte-1xrpo7n"><input class="video-player__volume-slider svelte-1xrpo7n" type="range" min="0" max="1" step="0.01" aria-label="Volume"> <div class="video-player__volume-slider-progress svelte-1xrpo7n"></div></div></div></div></div>',2);const xi={hash:"svelte-1xrpo7n",code:".video-player.svelte-1xrpo7n {--slider-thumb-size: 10px;--slider-thumb-bg: var(--arc-color-mono-white);--slider-thumb-border: 1px solid var(--arc-color-border-standard);--slider-thumb-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--slider-track-height: 0.2rem;container-type:inline-size;container-name:video-player;position:relative;align-items:center;display:flex;flex-direction:column;margin:auto;pointer-events:initial;width:100%;height:100%;}.video-player.fullscreen.svelte-1xrpo7n .video-player__video:where(.svelte-1xrpo7n) {margin:auto 0;}.video-player.touched.svelte-1xrpo7n:not(.active):not(.paused) .video-player__controls:where(.svelte-1xrpo7n),\n  .video-player.svelte-1xrpo7n:not(.touched) .video-player__controls:where(.svelte-1xrpo7n) {opacity:0;pointer-events:none;transition:opacity 1s;}.video-player__big-play-button.svelte-1xrpo7n {aspect-ratio:1 / 1;background-color:rgba(0, 0, 0, 0.67);border-radius:0;border-radius:50%;border:none;cursor:pointer;left:50%;margin:0;padding:0;position:absolute;top:50%;transform:translate(-50%, -50%);transition:background-color 0.4s;max-width:9.8rem;width:13%;min-width:4.8rem;color:var(--arc-color-mono-white);}.video-player.svelte-1xrpo7n:hover .video-player__big-play-button:where(.svelte-1xrpo7n) {background-color:rgba(0, 0, 0, 0.85);outline:0.3rem solid white;}.video-player__video.svelte-1xrpo7n {width:100%;height:100%;object-fit:fill;}.video-player__controls.svelte-1xrpo7n {bottom:0;position:absolute;align-items:center;background-color:rgba(0, 0, 0, 0.67);display:flex;gap:1rem;width:100%;height:7.5rem; /* mini = 3.2rem */color:var(--arc-color-mono-white);padding:0 1rem;}.video-player__play-button.svelte-1xrpo7n {padding:0 0.4rem;height:100%;}.video-player__play-button.svelte-1xrpo7n,\n  .video-player__pip-button.svelte-1xrpo7n,\n  .video-player__fullscreen-button.svelte-1xrpo7n,\n  .video-player__volume-button.svelte-1xrpo7n {display:flex;height:100%;align-items:center;background:none;border:none;cursor:pointer;font-size:1.5rem;color:var(--arc-color-mono-white);}.video-player__play-button.svelte-1xrpo7n:focus svg,\n  .video-player__pip-button.svelte-1xrpo7n:focus svg,\n  .video-player__fullscreen-button.svelte-1xrpo7n:focus svg,\n  .video-player__volume-button.svelte-1xrpo7n:focus svg {filter:drop-shadow(0 0 4px rgb(255 255 255 / 0.8));}.video-player__seek-bar-wrapper.svelte-1xrpo7n {position:relative;height:32px;min-width:0;flex:1;display:flex;}.video-player__time-remaining.svelte-1xrpo7n {font-size:1.2rem;font-weight:700;min-width:3.5rem;}.video-player__volume-control.svelte-1xrpo7n {align-items:center;display:flex;gap:5px;}.video-player__volume-slider-wrapper.svelte-1xrpo7n {position:relative;height:32px;min-width:0;width:100px;display:flex;}.video-player__volume-slider.svelte-1xrpo7n {width:100%;}.video-player__seek-bar.svelte-1xrpo7n,\n  .video-player__volume-slider.svelte-1xrpo7n {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;flex:1;height:100%;}.video-player__seek-bar.svelte-1xrpo7n::-webkit-slider-thumb,\n  .video-player__volume-slider.svelte-1xrpo7n::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-1xrpo7n::-webkit-slider-runnable-track,\n  .video-player__volume-slider.svelte-1xrpo7n::-webkit-slider-runnable-track {background-color:rgba(115, 133, 159, 0.5);height:var(--slider-track-height);}.video-player__seek-bar.svelte-1xrpo7n::-moz-range-thumb,\n  .video-player__volume-slider.svelte-1xrpo7n::-moz-range-thumb {appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-1xrpo7n::-moz-range-track,\n  .video-player__volume-slider.svelte-1xrpo7n::-moz-range-track {background-color:var(--arc-color-border-standard);height:var(--slider-track-height);}.video-player__seek-bar-progress.svelte-1xrpo7n,\n  .video-player__volume-slider-progress.svelte-1xrpo7n {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );height:var(--slider-track-height);position:absolute;inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;width:100%;}\n\n  @container video-player (max-width: 45rem) {.video-player__controls.svelte-1xrpo7n {height:3.2rem;justify-content:space-around;}.video-player__volume-slider-wrapper.svelte-1xrpo7n {width:100%;}.video-player__seek-bar-wrapper.svelte-1xrpo7n,\n    .video-player__time-remaining.svelte-1xrpo7n,\n    .video-player__pip-button.svelte-1xrpo7n {display:none;}\n  }"};var zi=r.vs('<div class="mon-video-wrapper svelte-ngn0zs"><!></div>');const ki={hash:"svelte-ngn0zs",code:".mon-video-wrapper.svelte-ngn0zs {align-items:center;display:flex;inset:0;position:absolute;}"};var Li=r.vs('<div class="mon-item-children svelte-1qzkifk" role="presentation"></div>'),Mi=r.vs('<div role="presentation"><!> <!> <!> <!> <!></div>');const Zi={hash:"svelte-1qzkifk",code:".mon-item.svelte-1qzkifk {position:absolute;inset:0;&.--smooth-transitions {transition:opacity 100ms ease;}&.--hidden {opacity:0;}&.--clip {overflow:clip;}}.mon-item-children.svelte-1qzkifk {isolation:isolate;}"};function Ji(t,e){r.VC(e,!1),r.kZ(t,Zi);const[n,a]=r.DZ(),c=()=>r.Hz(_,"$item",n),h=()=>r.Hz(T,"$stateId",n),p=()=>r.Hz(A,"$triggersBySourceId",n),u=()=>r.Hz(S,"$visible",n),m=r.zg(),b=r.zg(),f=r.zg(),w=r.zg(),y=r.zg(),x=r.zg(),z=r.zg();let k=r._w(e,"itemId",8),L=r._w(e,"index",8,void 0),M=r._w(e,"clip",8,!1),Z=r._w(e,"noTransform",8,!1);const J=C(),{bindTriggers:$,hideTextContentForId:H}=J,_=J.getItem(k()),T=J.getState(k()),S=J.getVisible(k()),A=J.getTriggersBySourceId(),V=s();function P({event:t}){return"click"===t}r.M3((()=>c()),(()=>{r.hZ(m,"group"===c().type?c().children:void 0)})),r.M3((()=>c()),(()=>{r.hZ(b,"shape"===c().type||"text"===c().type?c():void 0)})),r.M3((()=>c()),(()=>{r.hZ(f,"video"===c().type?c():void 0)})),r.M3((()=>c()),(()=>{r.hZ(w,"audio"===c().type?c():void 0)})),r.M3((()=>(c(),h())),(()=>{r.hZ(y,c().states[h()].opacity??c().states.default.opacity)})),r.M3((()=>(p(),c())),(()=>{r.hZ(x,p().get(c().id)??[])})),r.M3((()=>r.Jt(x)),(()=>{r.hZ(z,r.Jt(x).some(P))})),r.iq(),r.Ts();const E=r.Xd((()=>null!=L()?-L():void 0));!function(t,e){r.VC(e,!1),r.kZ(t,pi);const n=r.zg(),i=r.zg(),o=r.zg(),a=r.zg(),l=r.zg(),c=r.zg(),d=r.zg(),h=r.zg(),p=r.zg();let u=r._w(e,"item",8),g=r._w(e,"stateId",8),v=r._w(e,"zIndex",8,void 0),m=r._w(e,"noTransform",8,!1);const b=!(u().parentId===u().blockumentId)&&s();let f=r.zg(),w=r.zg();r.M3((()=>r.iT(u())),(()=>{r.hZ(n,u().states.default)})),r.M3((()=>(r.iT(u()),r.iT(g()))),(()=>{r.hZ(i,u().states[g()])})),r.M3((()=>(r.Jt(i),r.Jt(n))),(()=>{r.hZ(o,(r.Jt(i).width??r.Jt(n).width).value)})),r.M3((()=>(r.Jt(i),r.Jt(n))),(()=>{r.hZ(a,(r.Jt(i).height??r.Jt(n).height).value)})),r.M3((()=>(r.Jt(n),r.Jt(i))),(()=>{r.hZ(l,r.Jt(n).x.value+(r.Jt(i).xOffset??0))})),r.M3((()=>(r.Jt(n),r.Jt(i))),(()=>{r.hZ(c,r.Jt(n).y.value+(r.Jt(i).yOffset??0))})),r.M3((()=>(r.Jt(i),r.Jt(n),r.Jt(f),r.Jt(w))),(()=>{const t=r.Jt(i).rotation??r.Jt(n).rotation;if(null==r.Jt(f))r.hZ(w,t);else if(t!==r.Jt(f)){let e=t-r.Jt(f);e>180?e-=360:e<=-180&&(e+=360),r.hZ(w,r.Jt(w)+e)}r.hZ(f,t)})),r.M3((()=>(r.Jt(i),r.Jt(n))),(()=>{r.hZ(d,r.Jt(i).flipX??r.Jt(n).flipX)})),r.M3((()=>(r.Jt(i),r.Jt(n))),(()=>{r.hZ(h,r.Jt(i).flipY??r.Jt(n).flipY)})),r.M3((()=>(r.iT(m()),r.Jt(l),r.Jt(c),r.Jt(w),r.Jt(d),r.Jt(h))),(()=>{r.hZ(p,m()?void 0:`translate(${r.Jt(l)}px, ${r.Jt(c)}px) rotate(${r.Jt(w)}deg) scale(${r.Jt(d)?-1:1}, ${r.Jt(h)?-1:1})`)})),r.iq(),r.Ts();var y=hi();let C;r.ys(y,1,"mon-item-transform svelte-d0xz7b",null,{},{"--smooth-transitions":b});var x=r.jf(y);r.NI(x,e,"default",{},null),r.cL(y),r.vN((t=>{r.Jk(y,"data-item-id",t),C=r.hg(y,"",C,{width:`${r.Jt(o)??""}px`,height:`${r.Jt(a)??""}px`,transform:r.Jt(p),"z-index":v()})}),[()=>u().id.slice(0,5)],r.Xd),r.BC(t,y),r.uY()}(t,{get item(){return c()},get stateId(){return h()},get zIndex(){return r.Jt(E)},get noTransform(){return Z()},children:(t,e)=>{var a=Mi();let s,p;var L=r.jf(a);di(L,{get item(){return c()},get stateId(){return h()},get visible(){return u()},get clickable(){return r.Jt(z)}});var Z=r.AD(L,2),J=t=>{var e=Li();r.__(e,7,(()=>r.Jt(m)),(t=>t.id),((t,e,n,i)=>{var o=r.Im();Ji(r.es(o),{get itemId(){return r.Jt(e).id},get index(){return r.Jt(n)}}),r.BC(t,o)})),r.cL(e),r.BC(t,e)};r.if(Z,(t=>{r.Jt(m)&&t(J)}));var _=r.AD(Z,2),T=t=>{fi(t,{get item(){return r.Jt(b)},get stateId(){return h()}})};r.if(_,(t=>{r.Jt(b)&&r.Hz(H,"$hideTextContentForId",n)!==k()&&t(T)}));var S=r.AD(_,2),A=t=>{!function(t,e){r.VC(e,!1),r.kZ(t,ki);let n=r._w(e,"item",8),a=r._w(e,"stateId",8),s=r.zg();function c(t,e){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:{itemId:n().id}}))}function h(t){c(t.target,d.H5.mediaPlay)}function p(t){c(t.target,d.H5.mediaPause)}function u(t){c(t.target,d.H5.mediaEnd)}r.M3((()=>(r.iT(n()),r.iT(a()),i)),(()=>{const t=(n().states[a()].videoSources??n().states.default.videoSources).default,e=t&&n().assets?.[t];r.hZ(s,e?l(e):void 0)})),r.iq(),r.Ts();var m=zi(),b=r.jf(m);r.Eb(b,a,(t=>{var e=r.Im(),i=r.es(e),a=t=>{!function(t,e){r.VC(e,!1),r.kZ(t,xi);const n=r.zg(),{a11yMediaPlay:i,a11yMediaPause:a,a11yGroupVideoPlayer:s}={a11yMediaPause:"Pause button label",a11yMediaPlay:"Play button label",a11yGroupVideoPlayer:"Video player"},l=!0;let c=r._w(e,"mediaSrc",8),d=r._w(e,"item",8),h=r._w(e,"onPlay",8,(()=>{})),p=r._w(e,"onPause",8,(()=>{})),u=r._w(e,"onEnded",8,(()=>{})),m=r.zg(),b=r.zg(),f=r.zg(),w=r.zg(),y=r.zg(),x=r.zg(),z=r.zg(0),k=r.zg(!0),L=r.zg(1),M=r.zg(0),Z=r.zg(0),J=r.zg(!1),$=r.zg(!1),H=!1,_=1,T=r.zg(!1),S=r.zg(!1);const A=()=>{r.Jt(w)&&r.Jt(w).style.setProperty("--slider-progress-percent",Number(r.Jt(M))/r.Jt(z)*100+"%")},V=An()((()=>{r.hZ(S,!1)}),2e3),{mediaElements:P}=C(),E=!!HTMLVideoElement.prototype.requestPictureInPicture;(0,o.onMount)((()=>(P?.set(d().id,r.Jt(b)),E&&r.Jt(b)?.addEventListener("leavepictureinpicture",q),r.Tk(f,r.Jt(f).value="0"),()=>{P?.delete(d().id),E&&r.Jt(b)?.removeEventListener("leavepictureinpicture",q)})));let I=r.zg(),R=r.zg(),B=r.zg();const j=()=>{r.hZ(S,!0),V()},F=t=>{r.Jt(k)?(r.Jt(b).play().catch((()=>{})),t&&h()(t),r.hZ(T,!0)):(r.Jt(b).pause(),t&&p()(t))},O=async()=>{document.pictureInPictureElement?await document.exitPictureInPicture():(await r.Jt(b).requestPictureInPicture(),r.hZ($,!0)),A()},q=()=>{r.hZ($,!1)},D=async()=>{document.fullscreenElement?await document.exitFullscreen():await r.Jt(m).requestFullscreen()},N=t=>{r.hZ(Z,t<0?Math.max(r.Jt(Z)+t,0):Math.min(r.Jt(Z)+t,r.Jt(z)))},G=t=>{r.hZ(L,t<0?Math.max(r.Jt(L)+t,0):Math.min(r.Jt(L)+t,1))};r.M3((()=>(r.Jt(z),r.Jt(Z))),(()=>{r.hZ(I,Math.round(r.Jt(z)-r.Jt(Z)))})),r.M3((()=>(r.Jt(I),v)),(()=>{r.hZ(R,g(r.Jt(I))),r.hZ(B,v(r.Jt(I)))})),r.M3((()=>r.iT(c())),(()=>{r.hZ(n,(t=>{const e=t.split(".").pop()?.toLowerCase();switch(e){case"webm":return"video/webm";case"mp4":return"video/mp4";case"ogg":case"ogm":case"ogv":return"video/ogg";case"mov":return"video/quicktime";case"avi":return"video/x-msvideo";case"mkv":return"video/x-matroska";default:return"application/octet-stream"}})(c()))})),r.iq(),r.Ts();var U=Ci();let Y;r.Jk(U,"aria-hidden",!1),r.Jk(U,"aria-label",s),r.Jk(U,"tabindex",0);var K=r.jf(U),W=r.jf(K);r.cL(K),r.Lc(K,(t=>r.hZ(b,t)),(()=>r.Jt(b)));var X=r.AD(K,2),Q=t=>{var e=wi();Fn(r.jf(e),{icon:"arc-play",size:"2rem"}),r.cL(e),r.f0("click",e,F),r.BC(t,e)};r.if(X,(t=>{r.Jt(k)&&t(Q)}));var tt=r.AD(X,2),et=r.jf(tt);r.Jk(et,"tabindex",0);var nt=r.jf(et);const it=r.Xd((()=>r.Jt(k)?"arc-play":"arc-pause"));Fn(nt,{get icon(){return r.Jt(it)}}),r.cL(et);var rt=r.AD(et,2),ot=r.jf(rt);r.R0(ot),r.Jk(ot,"min",0),r.Jk(ot,"step",.01),r.Lc(ot,(t=>r.hZ(f,t)),(()=>r.Jt(f)));var at=r.AD(ot,2);r.Lc(at,(t=>r.hZ(w,t)),(()=>r.Jt(w))),r.cL(rt);var st=r.AD(rt,2),lt=r.jf(st);r.cL(st);var ct=r.AD(st,2),dt=t=>{var e=yi(),n=r.jf(e);const i=r.Xd((()=>"arc-pip-"+(r.Jt($)?"disable":"enable")));Fn(n,{get icon(){return r.Jt(i)},size:"2rem"}),r.cL(e),r.f0("click",e,O),r.BC(t,e)};r.if(ct,(t=>{E&&t(dt)}));var ht=r.AD(ct,2),pt=r.jf(ht);const ut=r.Xd((()=>"arc-fullscreen-"+(r.Jt(J)?"disable":"enable")));Fn(pt,{get icon(){return r.Jt(ut)},size:"1.5rem"}),r.cL(ht);var gt=r.AD(ht,2),vt=r.jf(gt),mt=r.jf(vt);const bt=r.Xd((()=>"arc-volume-"+(0===r.Jt(L)?"muted":r.Jt(L)<=.33?"low":r.Jt(L)<=.66?"mid":"high")));Fn(mt,{get icon(){return r.Jt(bt)},size:"1.8rem"}),r.cL(vt);var ft=r.AD(vt,2),wt=r.jf(ft);r.R0(wt),r.Lc(wt,(t=>r.hZ(y,t)),(()=>r.Jt(y)));var yt=r.AD(wt,2);let Ct;r.Lc(yt,(t=>r.hZ(x,t)),(()=>r.Jt(x))),r.cL(ft),r.cL(gt),r.cL(tt),r.cL(U),r.Lc(U,(t=>r.hZ(m,t)),(()=>r.Jt(m))),r.vN((t=>{Y=r.ys(U,1,"video-player svelte-1xrpo7n",null,Y,t),K.volume=r.Jt(L),r.Jk(W,"src",c()),r.Jk(W,"type",r.Jt(n)),r.Jk(et,"aria-label",r.Jt(k)?i:a),r.Jk(ot,"max",r.Jt(z)),r.Jk(st,"aria-label",r.Jt(B)),r.j(lt,`-${r.Jt(R)??""}`),r.to(wt,r.Jt(L)),Ct=r.hg(yt,"",Ct,{"--slider-progress-percent":100*r.Jt(L)+"%"})}),[()=>({active:r.Jt(S),paused:r.Jt(k),fullscreen:r.Jt(J),touched:r.Jt(T)})],r.Xd),r.M$(K,(()=>r.Jt(Z)),(t=>r.hZ(Z,t))),r.IY("duration","durationchange",K,(t=>r.hZ(z,t))),r.Ej(K,(()=>r.Jt(k)),(t=>r.hZ(k,t))),r.f0("click",K,F),r.f0("ended",K,(function(...t){u()?.apply(this,t)})),r.f0("timeupdate",K,(t=>{const e=t.target,{currentTime:n}=e;H||(r.hZ(M,`${n}`),A())})),r.f0("click",et,F),r.oJ(ot,(()=>r.Jt(M)),(t=>r.hZ(M,t))),r.f0("input",ot,(()=>{H||(H=!0),A()})),r.f0("change",ot,(t=>{H&&(H=!1);const e=Number(t.currentTarget?.value);r.hZ(Z,e)})),r.f0("click",ht,D),r.f0("click",vt,(()=>{r.Jt(L)>0?(_=r.Jt(L),r.hZ(L,0)):r.hZ(L,_)})),r.f0("input",wt,(t=>{const e=t.target;r.hZ(L,parseFloat(e.value))})),r.f0("fullscreenchange",U,(t=>{r.hZ(J,!r.Jt(J)),A()})),r.f0("click",U,j),r.f0("keydown",U,(t=>{const e=r.Jt(z)<=20?.1*r.Jt(z):5,n={Enter:()=>F()," ":()=>F(),ArrowRight:()=>N(e),ArrowLeft:()=>N(-e),ArrowUp:()=>G(.1),ArrowDown:()=>G(-.1),f:D};t.target===t.currentTarget&&Object.keys(n).includes(t.key)&&(t.preventDefault(),t.stopPropagation(),n[t.key]())})),r.f0("mousemove",U,j),r.f0("focus",U,j),r.BC(t,U),r.Ek(e,"allowTabNavigation",l),r.uY({allowTabNavigation:l})}(t,{get mediaSrc(){return r.Jt(s)},get item(){return n()},onPlay:h,onPause:p,onEnded:u})};r.if(i,(t=>{r.Jt(s)&&t(a)})),r.BC(t,e)})),r.cL(m),r.vN((()=>r.Jk(m,"data-item-id",n().id))),r.BC(t,m),r.uY()}(t,{get item(){return r.Jt(f)},get stateId(){return h()}})};r.if(S,(t=>{r.Jt(f)&&t(A)}));var P=r.AD(S,2),E=t=>{!function(t,e){r.VC(e,!1),r.kZ(t,Un);let n=r._w(e,"item",8),a=r._w(e,"stateId",8),s=r.zg();function c(t,e){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:{itemId:n().id}}))}function h(t){c(t.target,d.H5.mediaPlay)}function p(t){c(t.target,d.H5.mediaPause)}function u(t){c(t.target,d.H5.mediaEnd)}r.M3((()=>(r.iT(n()),r.iT(a()),i)),(()=>{const t=(n().states[a()].audioSources??n().states.default.audioSources).default,e=t&&n().assets?.[t];r.hZ(s,e?l(e):void 0)})),r.iq(),r.Ts();var m=Gn(),b=r.jf(m);r.Eb(b,a,(t=>{var e=r.Im(),i=r.es(e),a=t=>{!function(t,e){r.VC(e,!1),r.kZ(t,Nn);const{mediaElements:n}=C(),i=!0;let a=r._w(e,"item",8),s=r._w(e,"mediaSrc",8),l=r.zg(),c=r._w(e,"onPlay",8),d=r._w(e,"onPause",8),h=r._w(e,"onEnded",8);(0,o.onMount)((()=>(n?.set(a().id,r.Jt(l)),()=>{n?.delete(a().id)})));const{a11yMediaPlay:p,a11yMediaPause:u,a11yGroupAudioPlayer:m}={a11yMediaPause:"Pause button label",a11yMediaPlay:"Play button label",a11yGroupAudioPlayer:"Audio player"};let b=r.zg(),f=r.zg(),w=r.zg("0"),y=r.zg(),x=!1,z=r.zg(0),k=r.zg(0),L=r.zg(!0);const M=t=>{t.preventDefault(),t.stopPropagation(),r.hZ(L,!r.Jt(L))};let Z=r.zg(),J=r.zg(),$=r.zg();const H=t=>{r.hZ(z,t<0?Math.max(r.Jt(z)+t,0):Math.min(r.Jt(z)+t,r.Jt(k)))};r.M3((()=>(r.Jt(y),r.Jt(w),r.Jt(k),r.Jt(z))),(()=>{r.Jt(y)&&r.Jt(y).style.setProperty("--slider-progress-percent",Number(r.Jt(w))/r.Jt(k)*100+"%"),r.hZ(Z,Math.round(r.Jt(k)-r.Jt(z)))})),r.M3((()=>(r.Jt(Z),v)),(()=>{r.hZ(J,g(r.Jt(Z),!1)),r.hZ($,v(r.Jt(Z)))})),r.iq(),r.Ts();var _=Dn(),T=r.jf(_);r.Jk(T,"aria-hidden",!1),r.Jk(T,"aria-label",m),r.Jk(T,"tabindex",0);var S=r.jf(T);r.Jk(S,"tabindex",0);var A=r.jf(S);const V=r.Xd((()=>r.Jt(L)?"arc-play":"arc-pause"));Fn(A,{get icon(){return r.Jt(V)}}),r.cL(S),r.Lc(S,(t=>r.hZ(b,t)),(()=>r.Jt(b)));var P=r.AD(S,2),E=r.jf(P);r.R0(E),r.Jk(E,"min",0),r.Lc(E,(t=>r.hZ(f,t)),(()=>r.Jt(f)));var I=r.AD(E,2);r.Lc(I,(t=>r.hZ(y,t)),(()=>r.Jt(y))),r.cL(P);var R=r.AD(P,2),B=r.jf(R,!0);r.cL(R),r.cL(T);var j=r.AD(T,2);r.Lc(j,(t=>r.hZ(l,t)),(()=>r.Jt(l))),r.cL(_),r.vN((()=>{r.Jk(S,"aria-label",r.Jt(L)?p:u),r.Jk(E,"max",r.Jt(k)||void 0),r.Jk(R,"aria-label",r.Jt($)),r.j(B,r.Jt(J)),r.Jk(j,"src",s())})),r.f0("click",S,M),r.oJ(E,(()=>r.Jt(w)),(t=>r.hZ(w,t))),r.f0("input",E,(()=>{x||(x=!0),r.Jt(y).style.setProperty("--slider-progress-percent",Number(r.Jt(w))/r.Jt(k)*100+"%")})),r.f0("change",E,(t=>{x&&(x=!1);const e=Number(t.currentTarget?.value);r.hZ(z,e)})),r.f0("keydown",T,(t=>{const e=t=>{t.preventDefault(),t.stopPropagation(),H(5)},n=t=>{t.preventDefault(),t.stopPropagation(),H(-5)};t.target===r.Jt(b)||t.target===r.Jt(f)?("Enter"===t.key||" "===t.key?M(t):t.stopPropagation(),t.target===r.Jt(f)&&("ArrowRight"===t.key||"ArrowUp"===t.key?e(t):"ArrowLeft"===t.key||"ArrowDown"===t.key?n(t):t.stopPropagation())):"Enter"===t.key||" "===t.key?M(t):"ArrowRight"===t.key||"ArrowUp"===t.key?e(t):"ArrowLeft"!==t.key&&"ArrowDown"!==t.key||n(t)})),r.M$(j,(()=>r.Jt(z)),(t=>r.hZ(z,t))),r.IY("duration","durationchange",j,(t=>r.hZ(k,t))),r.Ej(j,(()=>r.Jt(L)),(t=>r.hZ(L,t))),r.f0("timeupdate",j,(t=>{const e=t.target,{currentTime:n}=e;x||r.hZ(w,`${n}`)})),r.f0("loadedmetadata",j,(t=>{const e=t.target;(e.duration===1/0||isNaN(e.duration))&&(e.currentTime=1e101,e.ontimeupdate=()=>{e.ontimeupdate=null,e.currentTime=0})})),r.f0("ended",j,(function(...t){h()?.apply(this,t)})),r.f0("pause",j,(function(...t){d()?.apply(this,t)})),r.f0("play",j,(function(...t){c()?.apply(this,t)})),r.BC(t,_),r.Ek(e,"allowTabNavigation",i),r.uY({allowTabNavigation:i})}(t,{get item(){return n()},get mediaSrc(){return r.Jt(s)},onPlay:h,onPause:p,onEnded:u})};r.if(i,(t=>{r.Jt(s)&&t(a)})),r.BC(t,e)})),r.cL(m),r.vN((()=>r.Jk(m,"data-item-id",n().id))),r.BC(t,m),r.uY()}(t,{get item(){return r.Jt(w)},get stateId(){return h()}})};r.if(P,(t=>{r.Jt(w)&&t(E)})),r.cL(a),r.XI(a,((t,e)=>$?.(t,e)),(()=>({item:c(),triggers:r.Jt(x)}))),r.vN((t=>{s=r.ys(a,1,"mon-item svelte-1qzkifk",null,s,t),a.inert=!u(),r.Jk(a,"aria-hidden",!u()),p=r.hg(a,"",p,{opacity:r.Jt(y)})}),[()=>({"--smooth-transitions":V,"--clip":M(),"--hidden":!u()})],r.Xd),r.BC(t,a)},$$slots:{default:!0}}),r.uY(),a()}var $i=r.vs('<div class="ui-theme svelte-6j8omz"><!></div>');const Hi={hash:"svelte-6j8omz",code:"\n  /* Note that :root is important for elements injected into `body`\n  to have access to these vars. */:root,\n  :host {--mon-color-border: var(--arc-color-border-standard);--mon-color-border-selected: var(--arc-color-brand-root);--mon-color-primary: var(--arc-color-blue-600);--mon-color-secondary: var(--arc-color-blue-500);--mon-opacity-inert: var(--arc-alpha-50);--mon-color-input: var(--arc-color-alpha-black-03);\n\n    /*\n     * Some z-indexes for things that may occupy a shared stacking context.\n     * When possible, order problems should be resolved by using isolation instead.\n     */--mon-z-index-select: 3000;--mon-z-index-popover: 3100;--mon-z-index-context-menu: 3200;--mon-z-index-tooltip: 4000;--mon-z-index-toast: 5000;--mon-input-padding: var(--arc-space-0-75) var(--arc-space-1);--mon-input-height: 3.2rem;--mon-focus-outline-width: 0.2rem;--mon-input-hover-box-shadow: inset 0 0 0 0.1rem\n      var(--arc-color-border-stark);--mon-input-focus-box-shadow: inset 0 0 0 var(--mon-focus-outline-width)\n      var(--arc-color-border-focus);--mon-button-hover-background: var(--arc-color-alpha-black-05);--mon-button-active-background: var(--arc-color-alpha-black-10);}.ui-theme.svelte-6j8omz {\n    /*\n    TODO: Remove this forced font once Rise stops poisoning art-design-system-tokens.\n    See https://github.com/articulate/mondrian/issues/1965, https://github.com/articulate/rise-frontend/pull/7589\n    */--arc-font-family-body: Inter, system-ui, sans-serif;font-family:var(--arc-font-family-body);font-size:var(--arc-font-size-14);}.ui-theme.svelte-6j8omz *,\n  .ui-theme.svelte-6j8omz *::before,\n  .ui-theme.svelte-6j8omz *::after {box-sizing:border-box;\n    /** TODO: deprecate once we determine how this should be applied globally as part of\n      * the design system reset stylesheet in a way that is compatible with all the fonts\n      * we plan to support in i18n contexts */font-synthesis:none;}.ui-theme.svelte-6j8omz :where(button, input, textarea) {font-family:inherit;}.mon-sr-only {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}:where(.mon-focusable) {border-radius:var(--arc-border-radius-sm);}:where(.mon-focusable:not(:disabled, :has(:disabled)):hover) {box-shadow:inset 0 0 0 0.1rem var(--arc-color-neutral-100);}:where(.mon-focusable:is(:focus-visible, :has(:focus-visible))) {box-shadow:var(--mon-input-focus-box-shadow);}\n\n  /* TODO: Consider moving this utility class to own file */.mon-visually-hidden {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}\n\n  /** Custom tiptap overrides intended to be enforced by Mondrian specifically */.tiptap {font-family:var(--mon-theme-font-body);min-height:100%;width:100%;}.tiptap :is(h1, h2, h3, h4, h5, h6) {font-family:var(--mon-theme-font-heading);font-size:inherit;font-weight:inherit;}.tiptap :is(p, h1, h2, h3, h4, h5, h6) {margin:0;}.tiptap strong {font-weight:bold;}.tiptap em {font-style:italic;}.tiptap s {text-decoration:line-through;}.tiptap u {text-decoration:underline;}\n\n  /** Copy of styles that tiptap normally injects into the document head. We render in a shadow root\n    * so default injection doesn't work for us. So we just instead reproduce the rules in our UiTheme styles\n    * which do get rendered within our shadow root wrapper. \n    * TODO: Engage tiptap team about exporting their JS styles so we dont have to do stuff like this\n    */.ProseMirror {position:relative;word-wrap:break-word;white-space:pre-wrap;white-space:break-spaces;font-variant-ligatures:none;font-feature-settings:'liga' 0; /* the above doesn't seem to work in Edge */}.ProseMirror [contenteditable='false'] {white-space:normal;}.ProseMirror [contenteditable='false'] [contenteditable='true'] {white-space:pre-wrap;}.ProseMirror pre {white-space:pre-wrap;}img.ProseMirror-separator {display:inline !important;border:none !important;margin:0 !important;width:1px !important;height:1px !important;}.ProseMirror-gapcursor {display:none;pointer-events:none;position:absolute;margin:0;}.ProseMirror-gapcursor:after {content:'';display:block;position:absolute;top:-2px;width:20px;border-top:1px solid black;\n    animation: svelte-6j8omz-ProseMirror-cursor-blink 1.1s steps(2, start) infinite;}\n\n  @keyframes svelte-6j8omz-ProseMirror-cursor-blink {\n    to {\n      visibility: hidden;\n    }\n  }.ProseMirror-hideselection *::selection {background:transparent;}.ProseMirror-hideselection *::-moz-selection {background:transparent;}.ProseMirror-hideselection * {caret-color:transparent;}.ProseMirror-focused .ProseMirror-gapcursor {display:block;}.tippy-box[data-animation='fade'][data-state='hidden'] {opacity:0;}"},_i=(t,{item:e,triggers:n})=>{function i(i,r={}){n.filter((t=>t.event===i)).forEach((n=>{!function(t,e,n){e.dispatchEvent(new CustomEvent("trigger",{detail:n,bubbles:!0}))}(0,t,{itemId:e.id,triggerId:n.id,...r})}))}const r=[...new Set(n.map((t=>t.event)))].map((e=>{switch(e){case d.H5.hover:{let n=!1;return[m("mouseenter",t,(t=>{n||(n=!0,i(e,{hovered:n}))})),m("mouseleave",t,(t=>{n&&(n=!1,i(e,{hovered:n}))}))]}case d.H5.click:return[m("click",t,(t=>{const n=window.getSelection();"Range"!==n?.type&&i(e)})),m("keyup",t,(t=>{["Space","Enter"].includes(t.code)&&t.target===document.activeElement&&i(e)}))];case d.H5.mediaPlay:case d.H5.mediaPause:case d.H5.mediaEnd:return m(e,t,(t=>{i(e)}));default:return m(e,t,(()=>{i(e)}))}})).flat(2).filter(Boolean);return{destroy(){r.forEach((t=>{t()}))}}},Ti=(t,{items:e,currentStates:n,currentVisibles:i,triggers:r,mediaElements:o})=>{const a=jt()(r,"sourceId"),s={[d.zw.changeState](t,i,r){const o="self"===t.targetId[0]?i:e[t.targetId[0]];!1===r.hovered?n.get(o.id)?.revert(t.targetState):n.get(o.id)?.set(t.targetState)},[d.zw.changeVisibility](t,n,r){t.targetId.forEach((o=>{const a="self"===o?n:e[o];!1===r.hovered?i.get(a.id)?.set(!t.targetVisibility):i.get(a.id)?.set(t.targetVisibility)}))},[d.zw.mediaPause](t,e){t.targetId.forEach((t=>{const n=o?.get("self"===t?e.id:t);n?.pause()}))},[d.zw.mediaPlay](t,e){t.targetId.forEach((t=>{const n=o?.get("self"===t?e.id:t);n?.play().catch((()=>{}))}))},[d.zw.mediaEnd](t,e){t.targetId.forEach((t=>{const n=o?.get("self"===t?e.id:t);n&&(n.currentTime=n.duration,n.pause())}))},[d.zw.changeLayer](t,e){}},l=m("trigger",t,(t=>{const{itemId:n,triggerId:i,...r}=t.detail,o=e[n];if(!o)throw new Error(`Could not execute trigger ${i} on item ${n} because the item could not be found.`);const l=a[o.id]?.find((t=>t.id===i));if(!l||!l.actions.length)throw new Error(`Could not execute trigger ${i} on item ${n} because the trigger could not be found.`);l.actions.forEach((t=>{const e=s[t.type];if(!e)throw new Error(`Could not execute trigger ${i} on item ${n} because an appropriate handler for its '${t.type}' action could not be found.`);e(t,o,r)}))}));return{destroy(){l()}}};var Si=r.vs("<div> </div>"),Ai=r.vs('<div class="preview svelte-1cumtsm"><div class="width-gauge svelte-1cumtsm"></div> <div class="item-wrapper svelte-1cumtsm"><!></div></div>'),Vi=r.vs('<div class="item-wrapper svelte-1cumtsm"><!></div>'),Pi=r.vs("<!> <!>",1);const Ei={hash:"svelte-1cumtsm",code:".preview.svelte-1cumtsm {\n    /* Stacking context so Rise doesn't need to know about Mondrian z-indexes */isolation:isolate;width:100%;}.item-wrapper.svelte-1cumtsm {transform-origin:0 0;position:relative;.preview:where(.svelte-1cumtsm) & {margin:0 auto;}}.width-gauge.svelte-1cumtsm {width:100%;}"};var Ii=n(6170),Ri=n.n(Ii),Bi=n(4535);const ji=((t,e={width:"100%"},n="div")=>i=>{const r=(0,Ii.useRef)(null),o=(0,Ii.useRef)(null);return(0,Ii.useEffect)((()=>{const e=r.current.shadowRoot??r.current.attachShadow({mode:"open"});return o.current=(0,Bi.YU)({component:t,target:e,props:i}),()=>{o.current?.$destroy()}}),[]),(0,Ii.useEffect)((()=>{o.current?.$set(i)}),[i]),Ri().createElement(n,{ref:r,style:e})})((function(t,e){r.VC(e,!1),r.kZ(t,Ei);const[n,i]=r.DZ(),s=()=>r.Hz(M,"$itemsById",n),c=()=>r.Hz(r.Jt(d),"$rootItemCurrentStateId",n),d=r.zg(),p=r.zg(),u=r.zg(),g=r.zg();let v=r._w(e,"manifest",8),m=r._w(e,"blockumentId",8),b=r._w(e,"prefetch",8,!0),f=r._w(e,"searchTerm",8,void 0),w=r._w(e,"autoSize",8,!0);(0,o.setContext)(a,!0);let C=r.zg(),x=r.zg();const z=function(){const t=new Map;return{...(0,h.writable)(t),add:(e,n)=>(t.has(e)||t.set(e,function(t){let e,n,i;t.subscribe((t=>{e=t}));const r=(0,h.writable)(e);r.subscribe((t=>{n=i??e,i=t}));const o={...r,revert(t){i===t&&o.set(n)},reset(){o.set(e)}};return o}(n)),t.get(e)),get(e){if(!t.has(e))throw new Error(`No state found for item ${e}`);return t.get(e)},resetAll(){[...t.values()].forEach((t=>{t.reset()}))}}}(),k=function(){const t=new Map;return{...(0,h.writable)(t),upsert(e,n){if(!t.has(e)){const i=function(t){const e={...(0,h.writable)(t),show(){e.set(!0)},hide(){e.set(!1)},reset(){e.set(t)}};return e}(n);return t.set(e,i),i}const i=t.get(e);return i.set(n),i},get(e){if(!t.has(e))throw new Error(`No visibility found for item ${e}`);return t.get(e)},resetAll(){[...t.values()].forEach((t=>{t.reset()}))}}}(),L=(0,h.writable)(new Map),M=(0,h.writable)({}),Z=(0,h.derived)(M,(t=>Object.values(t)));(0,h.derived)([L,Z],(([t,e])=>({triggers:t,items:e}))).subscribe((({items:t})=>{t.forEach((t=>{z.add(t.id,(0,h.readable)(t.initialState)),k.upsert(t.id,t.initialVisible)})),k.resetAll(),z.resetAll()}));const J=new Map,$=(0,h.writable)(f()),H={getTriggersBySourceId:()=>(0,h.readonly)(L),getItem:t=>(0,h.derived)(M,(e=>e[t])),getState:t=>z.get(t),getVisible:t=>k.get(t),searchTerm:(0,h.readonly)($),bindTriggers:_i,mediaElements:J,hideTextContentForId:(0,h.readable)(null)};var _;_=H,(0,o.setContext)(y,_);let T=r.zg();(0,o.onMount)((()=>{k.resetAll();const t=new ResizeObserver((()=>{r.Jt(T)&&A()}));return r.Jt(T)&&t.observe(r.Jt(T)),()=>{t.disconnect()}}));let S=r.zg(1);function A(){if(!(r.Jt(x)&&r.Jt(T)&&c()&&w()&&r.Jt(u)&&r.Jt(g)))return;const t=r.Jt(T).offsetWidth;r.hZ(S,Math.min(1,t/r.Jt(u)))}let V=r.zg(),P=r.zg(),E=r.zg("off");const I=An()((t=>{r.hZ(E,t?"polite":"off")}),100,{maxWait:500,trailing:!0});function R(){I(!0)}function B(){I(!1)}r.M3((()=>(r.iT(v()),r.iT(m()),r.Jt(C),Ft)),(()=>{const t=function(t,e){const n={},{items:i}=t;if(i)for(const t of Object.values(i))t.blockumentId===e&&(n[t.id]=structuredClone(t));return n}(v(),m());r.hZ(C,v().blockuments?.[m()]),r.hZ(x,r.Jt(C)?.children[0]?.id),L.set(Ft(r.Jt(C)?.triggers??[])),M.set(t)})),r.M3((()=>r.iT(f())),(()=>{$.set(f())})),r.M3((()=>r.Jt(x)),(()=>{r.QK(r.hZ(d,r.Jt(x)?z.get(r.Jt(x)):void 0),"$rootItemCurrentStateId",n)})),r.M3((()=>(r.Jt(x),s(),c(),_t)),(()=>{r.hZ(p,r.Jt(x)&&s()[r.Jt(x)]&&c()?_t(s()[r.Jt(x)],c(),["width","height"]):void 0)})),r.M3((()=>r.Jt(p)),(()=>{r.hZ(u,r.Jt(p)?.width.value)})),r.M3((()=>r.Jt(p)),(()=>{r.hZ(g,r.Jt(p)?.height.value)})),r.M3((()=>(r.Jt(V),r.Jt(u),r.Jt(P),r.Jt(g))),(()=>{r.Jt(V)===r.Jt(u)&&r.Jt(P)===r.Jt(g)||(r.hZ(V,r.Jt(u)),r.hZ(P,r.Jt(g)),A())})),r.iq(),r.Ts(),function(t,e){r.kZ(t,Hi);var n=$i(),i=r.jf(n);r.NI(i,e,"default",{},null),r.cL(n),r.BC(t,n)}(t,{children:(t,e)=>{var i=Pi(),a=r.es(i),c=t=>{!function(t,e){r.VC(e,!1);const n=r.zg();let i=r._w(e,"items",8);r.M3((()=>r.iT(i())),(()=>{r.hZ(n,new Map(i().flatMap((t=>Object.values(t.assets??{}))).map((t=>[t.id,t]))))})),r.iq(),r.Ts(),r.d5((t=>{var e=r.Im(),i=r.es(e);r.__(i,1,(()=>r.Jt(n).values()),(t=>t.id),((t,e)=>{var n=Ot();r.vN((t=>r.Jk(n,"href",t)),[()=>l(r.Jt(e))],r.Xd),r.BC(t,n)})),r.BC(t,e)})),r.uY()}(0,{get items(){return r.Hz(Z,"$itemsList",n)}})};r.if(a,(t=>{b()&&t(c)}));var d=r.AD(a,2),h=t=>{var e=Si(),n=r.jf(e);r.cL(e),r.vN((()=>r.j(n,`Block ${m()??""} could not be loaded`))),r.BC(t,e)},p=t=>{!function(t,e){r.VC(e,!1),r.kZ(t,qn);const n=function(){const t=new Set;return(0,o.setContext)("mondrian-suspense",t),t}();let i=r.zg(!0);(0,o.onMount)((()=>{Promise.all(n).then((()=>{r.hZ(i,!1)}))})),r.Ts();var a=On();let s;var l=r.jf(a);r.NI(l,e,"default",{get isLoading(){return r.Jt(i)}},null),r.cL(a),r.vN((t=>s=r.ys(a,1,"suspense svelte-1i06x9o",null,s,t)),[()=>({"--loading":r.Jt(i)})],r.Xd),r.BC(t,a),r.uY()}(t,{children:(t,e)=>{var n=r.Im(),i=r.es(n),o=t=>{var e=Ai();let n;var i=r.jf(e);r.Lc(i,(t=>r.hZ(T,t)),(()=>r.Jt(T)));var o=r.AD(i,2);let a;Ji(r.jf(o),{get itemId(){return r.Jt(x)},noTransform:!0,clip:!0}),r.cL(o),r.QZ((()=>r.f0("focus",o,R))),r.QZ((()=>r.f0("blur",o,B))),r.QZ((()=>r.f0("focusin",o,R))),r.QZ((()=>r.f0("mouseover",o,R))),r.QZ((()=>r.f0("mouseout",o,B))),r.QZ((()=>r.f0("focusout",o,B))),r.XI(o,((t,e)=>Ti?.(t,e)),(()=>({items:s(),currentStates:z,currentVisibles:k,triggers:r.Jt(C).triggers,mediaElements:J}))),r.cL(e),r.vN((()=>{n=r.hg(e,"",n,{height:(r.Jt(g)??500)*r.Jt(S)+"px"}),r.Jk(o,"aria-live",r.Jt(E)),a=r.hg(o,"",a,{transform:`scale(${r.Jt(S)??""})`,width:`${r.Jt(u)??""}px`,height:`${r.Jt(g)??""}px`})})),r.BC(t,e)},a=t=>{var e=Vi();let n;Ji(r.jf(e),{get itemId(){return r.Jt(x)},clip:!0}),r.cL(e),r.QZ((()=>r.f0("focus",e,R))),r.QZ((()=>r.f0("blur",e,B))),r.QZ((()=>r.f0("focusin",e,R))),r.QZ((()=>r.f0("mouseover",e,R))),r.QZ((()=>r.f0("mouseout",e,B))),r.QZ((()=>r.f0("focusout",e,B))),r.XI(e,((t,e)=>Ti?.(t,e)),(()=>({items:s(),currentStates:z,currentVisibles:k,triggers:r.Jt(C).triggers,mediaElements:J}))),r.vN((()=>{r.Jk(e,"aria-live",r.Jt(E)),n=r.hg(e,"",n,{width:`${r.Jt(u)??""}px`,height:`${r.Jt(g)??""}px`})})),r.BC(t,e)};r.if(i,(t=>{w()?t(o):t(a,!1)})),r.BC(t,n)},$$slots:{default:!0}})};r.if(d,(t=>{void 0===r.Jt(C)||void 0===r.Jt(x)?t(h):t(p,!1)})),r.BC(t,i)},$$slots:{default:!0}}),r.uY(),i()})),Fi=t=>{const{manifest:e,...n}=t,i=(0,Ii.useMemo)((()=>{const t=d.S0.safeParse(e);if(t.success)return t.data}),[e]);return i?Ri().createElement(ji,{manifest:i,...n}):null},Oi=["shape","text"],qi=(t,e)=>{if(e.content)return e.content.reduce(((e,n)=>e+qi(t,n)),0);if("text"===e.type&&e.text){const n=new RegExp(Vt()(t),"gi"),i=e.text.match(n);return i?i.length:0}return 0},Di=(t,e,n)=>{if(e){if("children"in e)return e?.children.reduce(((e,i)=>e+Di(t,n[i.id],n)),0);if((t=>Oi.includes(t.type))(e)){const n=e.states[e.initialState].text;if(n)return qi(t,n.json)}}return 0},Ni=(t,e,n)=>e.reduce(((e,i)=>(e[i.id]=n.items?i.items.reduce(((e,i)=>{const r=Object.values(n.blockuments||{}).find((t=>t.id===i.blockumentId));return r?e+Di(t,n.items?.[r.children[0].id],n.items||{}):e}),0):0,e)),{})},7903:(t,e,n)=>{n.d(e,{Mw:()=>Rt,un:()=>Bt,S0:()=>Pt,zw:()=>It,H5:()=>Et,Al:()=>he});var i=n(5076);const r=i.z.object({id:i.z.string(),path:i.z.string(),name:i.z.string(),width:i.z.number().optional(),height:i.z.number().optional()}),o=i.z.object({unit:i.z.enum(["px","%","auto","fr"]),value:i.z.number()}),a=i.z.object({id:i.z.string(),name:i.z.string().max(128)}),s=a.extend({x:o.default({value:0,unit:"px"}),y:o.default({value:0,unit:"px"}),xOffset:i.z.number().default(0),yOffset:i.z.number().default(0),width:o.default({value:100,unit:"%"}),height:o.default({value:100,unit:"%"}),opacity:i.z.number().min(0).max(1).default(1),aspectRatioLocked:i.z.boolean(),rotation:i.z.number().default(0),flipX:i.z.boolean().default(!1),flipY:i.z.boolean().default(!1),authoringAspectRatioCropLock:i.z.enum(["freeform","preset","none"])}),l=t=>i.z.intersection(a,t.partial()),c=t=>i.z.intersection(i.z.object({default:t}),i.z.record(i.z.string(),l(t))),d=t=>i.z.object({id:i.z.string(),blockumentId:i.z.string(),clonedFromId:i.z.string().optional(),parentId:i.z.string(),type:i.z.string(),name:i.z.string().max(128),locked:i.z.boolean().default(!1),authoringVisible:i.z.boolean().default(!0),initialVisible:i.z.boolean().default(!0),initialState:i.z.string().default("default"),states:c(t),assets:i.z.record(i.z.string(),r).default({}),removed:i.z.boolean().default(!1),layer:i.z.string().optional(),aiExperiment:i.z.boolean().optional(),_v:i.z.literal(19)}),h=(l(s),i.z.object({default:i.z.string()})),p=s.extend({audioSources:h}),u=d(p).extend({type:i.z.literal("audio")}),g=(l(p),i.z.object({applied:i.z.boolean().default(!1),type:i.z.enum(["none","fill"]).default("none"),color:i.z.string().default("#000000"),opacity:i.z.number().default(1),style:i.z.enum(["solid","dashed","dotted"]).default("solid"),width:o.default({value:1,unit:"px"})})),v=i.z.object({x:i.z.number(),y:i.z.number()}),m=i.z.object({applied:i.z.literal(!1)}),b=i.z.object({applied:i.z.literal(!0),offset:v,blur:i.z.number().min(0),spread:i.z.number().min(0),color:i.z.string(),opacity:i.z.number().min(0).max(1)}),f=i.z.discriminatedUnion("applied",[m,b]),w=i.z.object({width:i.z.number(),height:i.z.number(),left:i.z.number(),top:i.z.number()}),y=i.z.object({opacity:i.z.number().min(0).max(1)}),C=y.extend({color:i.z.string().optional()}),x=y.extend({assetId:i.z.string().optional(),crop:w}),z=i.z.object({type:i.z.string()}),k=z.extend({cornerRounding:i.z.number().min(0)}),L=z.extend({type:i.z.literal("rectangle"),borderRadius:i.z.object({topLeft:i.z.number(),topRight:i.z.number(),bottomRight:i.z.number(),bottomLeft:i.z.number()}).optional()}),M=z.extend({type:i.z.literal("ellipse")}),Z=k.extend({type:i.z.literal("star"),sidePairs:i.z.number().min(3),innerRadius:i.z.number().min(.1).max(1)}),J=z.extend({type:i.z.literal("cloud")}),$=k.extend({type:i.z.literal("plus"),stroke:i.z.number().min(.01).max(1)}),H=k.extend({type:i.z.literal("triangle"),topVertex:i.z.number().min(0).max(1).optional()}),_=k.extend({type:i.z.literal("bookmark"),cutoutInset:i.z.number().min(0).max(.8)}),T=k.extend({type:i.z.literal("chevron"),outsideCornerXCoords:i.z.number().min(.7).max(1),insideCenterXCoord:i.z.number().min(0).max(.3)}),S=k.extend({type:i.z.literal("octagon")}),A=k.extend({type:i.z.literal("parallelogram"),shear:i.z.number().min(0).max(1)}),V=k.extend({type:i.z.literal("shield")}),P=k.extend({type:i.z.literal("speechBubble")}),E=k.extend({type:i.z.literal("arrow"),thickness:i.z.number().min(.1).max(.5),headLength:i.z.number().min(.1).max(.9)}),I=i.z.discriminatedUnion("type",[_,T,J,M,S,$,L,Z,H,A,V,P,E]),R=i.z.object({border:g,overlay:C}),B=R.extend({dropShadow:f,shapeDef:I}),j=i.z.object({fill:C}),F=i.z.object({fill:x}),O=R.extend(j.shape).extend({}),q=B.extend(j.shape).extend({}),D=B.extend(F.shape).extend({}),N=i.z.object({id:i.z.string(),clonedFromId:i.z.string().optional()}),G=i.z.object({type:i.z.enum(["mediaPause","mediaPlay","mediaEnd"]),targetId:i.z.array(i.z.string())}),U=i.z.object({type:i.z.literal("changeState"),targetId:i.z.tuple([i.z.string()]),targetState:i.z.string().default("default")}),Y=i.z.object({type:i.z.literal("changeVisibility"),targetId:i.z.array(i.z.string()),targetVisibility:i.z.boolean()}),K=i.z.object({type:i.z.literal("changeLayer"),layerId:i.z.string().nullable()}),W=i.z.discriminatedUnion("type",[G,U,Y,K]),X=i.z.object({id:i.z.string(),event:i.z.enum(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:i.z.string().optional(),actions:i.z.array(W)}),Q=i.z.object({id:i.z.string(),title:i.z.string().max(255),children:i.z.array(N).min(0).max(1),triggers:i.z.array(X),fonts:i.z.record(i.z.string(),i.z.string()).optional(),layers:i.z.array(i.z.object({id:i.z.string(),name:i.z.string()})),aiExperiment:i.z.boolean().optional(),authoringOpened:i.z.boolean(),_v:i.z.literal(19)}),tt=s.extend(O.shape).extend({_groupBrand:i.z.never().optional()}),et=d(tt).extend({type:i.z.literal("group"),children:i.z.array(N)}),nt=(l(tt),s.extend(D.shape).extend({altText:i.z.string()})),it=d(nt).extend({type:i.z.literal("image")}),rt=(l(nt),i.z.intersection(i.z.object({type:i.z.string().optional(),attrs:i.z.record(i.z.string(),i.z.any()).optional(),content:i.z.array(i.z.lazy((()=>rt))).optional(),marks:i.z.array(i.z.intersection(i.z.object({type:i.z.string(),attrs:i.z.record(i.z.string(),i.z.any()).optional()}),i.z.record(i.z.string(),i.z.any()))).optional(),text:i.z.string().optional()}),i.z.record(i.z.string(),i.z.any()))),ot=i.z.object({id:i.z.string(),type:i.z.literal("tiptap"),json:rt}),at=i.z.enum(["top","middle","bottom"]),st=i.z.object({top:i.z.number(),left:i.z.number(),bottom:i.z.number(),right:i.z.number()}),lt=s.extend({text:ot,textVerticalAlign:at.default("top"),textPadding:st}),ct=d(lt).extend({type:i.z.literal("text")}),dt=(l(lt),lt.extend(q.shape).extend({altText:i.z.string()})),ht=d(dt).extend({type:i.z.literal("shape")}),pt=(l(dt),i.z.object({default:i.z.string()})),ut=s.extend({videoSources:pt}),gt=d(ut).extend({type:i.z.literal("video")}),vt=(l(ut),i.z.discriminatedUnion("type",[u,et,it,ht,ct,gt])),mt=(i.z.object({blockument:Q.optional(),items:i.z.record(i.z.string(),vt).optional()}),i.z.object({type:i.z.literal("textStyle"),attrs:i.z.object({color:i.z.string(),textSize:i.z.number(),fontFamily:i.z.string()})})),bt=i.z.object({type:i.z.literal("highlight"),attrs:i.z.object({color:i.z.string(),textSize:i.z.number()})}),ft=i.z.object({type:i.z.literal("bold")}),wt=i.z.object({type:i.z.literal("italic")}),yt=i.z.object({type:i.z.literal("underline")}),Ct=i.z.object({type:i.z.literal("strike")}),xt=i.z.discriminatedUnion("type",[mt,bt,ft,wt,yt,Ct]),zt=i.z.object({type:i.z.literal("hardBreak"),marks:i.z.never().optional(),content:i.z.never().optional(),text:i.z.never().optional()}),kt=i.z.object({type:i.z.literal("text"),marks:i.z.array(xt).optional(),content:i.z.never().optional(),text:i.z.string()}),Lt=i.z.discriminatedUnion("type",[kt,zt]),Mt=i.z.object({textAlign:i.z.enum(["left","center","right"]),lineHeight:i.z.number()}),Zt=Mt.extend({level:i.z.union([i.z.literal(2),i.z.literal(3),i.z.literal(4),i.z.literal(5),i.z.literal(6)])}),Jt=i.z.union([i.z.array(Lt),i.z.array(i.z.lazy((()=>Vt)))]),$t=i.z.object({type:i.z.string(),marks:i.z.never().optional(),content:Jt.optional(),text:i.z.never().optional()}),Ht=$t.extend({type:i.z.literal("paragraph"),attrs:Mt}),_t=$t.extend({type:i.z.literal("heading"),attrs:Zt}),Tt=$t.extend({type:i.z.literal("listItem"),attrs:i.z.object({color:i.z.string().nullable(),textSize:i.z.number(),fontFamily:i.z.string()}).optional()}),St=$t.extend({type:i.z.literal("orderedList"),attrs:i.z.object({start:i.z.number()})}),At=$t.extend({type:i.z.literal("bulletList")}),Vt=i.z.discriminatedUnion("type",[Ht,_t,Tt,St,At]),Pt=(i.z.object({type:i.z.literal("doc"),content:i.z.array(Vt)}),i.z.object({blockuments:i.z.record(i.z.string(),Q).optional(),items:i.z.record(i.z.string(),vt).optional()})),Et={click:"click",hover:"hover",mediaPlay:"mediaPlay",mediaPause:"mediaPause",mediaEnd:"mediaEnd"},It={changeState:"changeState",changeVisibility:"changeVisibility",mediaPause:"mediaPause",mediaPlay:"mediaPlay",mediaEnd:"mediaEnd",changeLayer:"changeLayer"};n(8562),n(9840);const Rt={top:20,left:20,bottom:20,right:20},Bt={top:0,left:0,bottom:0,right:0},jt="var(--mon-theme-font-body)";var Ft=n(4198),Ot=n(4717),qt=n(3004),Dt=n(4758),Nt=n(2359),Gt=n(31),Ut=n(2740),Yt=n(2559),Kt=n(5873),Wt=n(9395);function Xt(t){return"string"==typeof t?t.replace(/[:;]/g,""):"number"==typeof t?String(t):""}const Qt=/([a-z%]+)\s*$/i;function te({attributes:t,chain:e,editor:n,selection:i}){const r=[];n.state.doc.nodesBetween(i.from,i.to,((t,e)=>{"listItem"===t.type.name&&r.push({node:t,pos:e})}));const o=i.$from.start()===i.from;if(r.length>1){for(const{node:n,pos:a}of r)(o||a>=i.from&&a<=i.to)&&e.setTextSelection({from:a,to:a+n.nodeSize}).updateAttributes("listItem",t);e.setTextSelection({from:i.from,to:i.to})}else n.isActive("listItem")&&o&&e.updateAttributes("listItem",t);return e}const ee=Ft.YY.create({name:"textSize",addGlobalAttributes:()=>[{types:["textStyle","highlight","listItem"],attributes:{textSize:{default:17,parseHTML(t){let e=t.style.fontSize;if(!e)if(t.closest){const n=t.closest('[style*="font-size:"]')?.style?.fontSize;e=n||""}else t.parentNode&&"style"in t.parentNode&&(e=t.parentNode.style.fontSize||"");const n=parseFloat(e);if(isNaN(n))return null;const i=Qt.exec(e);if(null==i)return null;switch(i[1]){case"rem":return Math.round(10*n);case"px":return Math.round(n);case"pt":return r=n,Math.round(4*r/3);default:return null}var r},renderHTML:t=>({style:`font-size: ${t.textSize/10}rem`})}}}],addCommands:()=>({setTextSize:t=>({chain:e,editor:n,tr:{selection:i}})=>{const r=n.isActive("highlight"),o=e().setMark("textStyle",{textSize:t});return r&&o.setMark("highlight",{textSize:t}),te({attributes:{textSize:t},chain:o,editor:n,selection:i}).run()}})}),ne=Ft.YY.create({name:"lineHeight",addGlobalAttributes:()=>[{types:["paragraph","heading"],attributes:{lineHeight:{default:2,parseHTML(t){const e=t.style.lineHeight,n=parseFloat(e);return isNaN(n)?null:n},renderHTML:t=>({style:`line-height: ${Xt(t.lineHeight)}`})}}}],addCommands:()=>({setLineHeight:t=>({commands:e})=>{const n=e.updateAttributes("paragraph",{lineHeight:t}),i=e.updateAttributes("heading",{lineHeight:t});return n&&i}})}),ie=Ft.YY.create({name:"fontFamily",addGlobalAttributes:()=>[{types:["textStyle","listItem"],attributes:{fontFamily:{default:jt,parseHTML:t=>t.style.fontFamily,renderHTML:t=>t.fontFamily?{style:`font-family: ${Xt(t.fontFamily)}`}:{}}}}],addCommands:()=>({setFontFamily:t=>({chain:e,editor:n,tr:{selection:i}})=>{const r=e();return r.setMark("textStyle",{fontFamily:t}),te({attributes:{fontFamily:t},chain:r,editor:n,selection:i}).run()}})}),re=Ot.A.extend({addGlobalAttributes(){const t=this.parent(),e=t[0].attributes.color.renderHTML;return t[0].attributes.color.renderHTML=({color:t})=>e({color:Xt(t)}),t},addCommands:()=>({setColor:t=>({chain:e,editor:n,tr:{selection:i}})=>{const r=e();return r.setMark("textStyle",{color:t}),te({attributes:{color:t},chain:r,editor:n,selection:i}).run()},unsetColor:()=>({chain:t,editor:e,tr:{selection:n}})=>{const i=t();return i.setMark("textStyle",{color:null}).removeEmptyTextStyle(),te({attributes:{color:null},chain:i,editor:e,selection:n}).run()}})}).configure({types:["textStyle","listItem"]}),oe=qt.Ay.extend({addAttributes(){const t=this.parent(),e=t.color.renderHTML;return t.color.renderHTML=({color:t})=>e({color:Xt(t)}),t}}).configure({multicolor:!0}),ae=Nt.A.extend({addGlobalAttributes(){const t=this.parent(),e=t[0].attributes.textAlign.renderHTML;return t[0].attributes.textAlign.renderHTML=({textAlign:t})=>e({textAlign:Xt(t)}),t}}).configure({types:["heading","paragraph"]}),se=Ft.YY.create({name:"init",addCommands:()=>({initFontFamily:()=>({chain:t})=>t().setFontFamily(jt).run(),initLineHeight:()=>({chain:t})=>t().setLineHeight(2).run(),initTextSize:()=>({chain:t})=>t().setTextSize(17).run(),initColor:()=>({chain:t})=>t().setColor("#000000").run()})}),le="latestDefocusedSelectionDecoration",ce=Ft.YY.create({name:le,addProseMirrorPlugins:()=>[new Yt.k_({key:new Yt.hs(le),state:{init:t=>Kt.zF.empty,apply(t,e){const{doc:n,selection:i}=t,r=t.getMeta(le),o=i&&i.from!==i.to;if(!o||"focus"===r?.action)return Kt.zF.empty;if(o&&"blur"===r?.action){const t=Kt.NZ.inline(i.from,i.to,{class:"latest-defocused-selection",nodeName:"mark"});return Kt.zF.create(n,[t])}return e}},props:{decorations(t){return this.getState(t)},handleDOMEvents:{blur(t){const{tr:e}=t.state,n=e.setMeta(le,{from:e.selection.from,to:e.selection.to,action:"blur"});t.dispatch(n)},focus(t){const{tr:e}=t.state,n=e.setMeta(le,{from:e.selection.from,to:e.selection.to,action:"focus"});t.dispatch(n)}}}})]}),de=Ft.YY.create({name:"clearMarksOnEnter",addKeyboardShortcuts(){return{Enter:()=>{const{state:t}=this.editor,{selection:e}=t,{$from:n,empty:i}=e;if(!i)return!1;const r=n.parent;if("heading"!==r.type.name)return!1;const o=n.marks().filter((t=>"textStyle"===t.type.name));let a=null;o.length>0&&(a=o[0].attrs.color||null);const s=r.attrs.textAlign||"left";let l=this.editor.chain().splitBlock().setParagraph().setTextAlign(s);return l=l.unsetMark("bold").unsetMark("italic").unsetMark("underline").unsetMark("strike").unsetMark("highlight"),l=a?l.setMark("textStyle",{color:a}):l.unsetMark("textStyle"),l.run()}}}}),he=[Wt.A.configure({history:!1,heading:{levels:[2,3,4,5,6]}}),ae,oe,de,Gt.A,re,ee,ne,Ut.A,Dt.A,ie,se,ce];(0,Ft._w)(he),n(1369)},8562:(t,e,n)=>{n.d(e,{up:()=>i}),n(3330);const i={id:crypto.randomUUID(),name:"bike.jpg",path:"mondrian/assets/default/bike.jpg",width:1680,height:1120}},1369:(t,e,n)=>{n.d(e,{B2:()=>v});var i=n(5076);i.z.intersection(i.z.object({aud:i.z.string(),cid:i.z.union([i.z.number(),i.z.string()]).optional(),exp:i.z.number(),iat:i.z.number(),iss:i.z.string(),jti:i.z.number().optional(),scp:i.z.unknown().optional(),sub:i.z.string(),uid:i.z.number().optional(),aid:i.z.string().optional()}),i.z.record(i.z.string(),i.z.unknown()));const r=i.z.enum(["app","blockument","course"]);function o(t){return i.z.preprocess((e=>{if(!e||"object"!=typeof e||Array.isArray(e))return{};const n={};for(const i in t.shape)if(i in e){const r=e[i];t.shape[i].safeParse(r).success&&(n[i]=r)}return n}),t.partial())}i.z.object({contentId:i.z.string(),contentType:r,parentId:i.z.string(),parentType:r}),i.z.object({parentId:i.z.string(),parentType:r});const a=i.z.object({themeId:i.z.string(),accentContrast:i.z.enum(["AUTO","BLACK","LIGHT","DARK"]).nullable().optional(),allowSearch:i.z.boolean(),animateBlockEntrance:i.z.boolean(),blockCorners:i.z.enum(["ROUNDED","SQUARED"]),blockNavigationType:i.z.enum(["CONTINOUS","STEPPED"]).nullable().optional(),blockPaddingBottom:i.z.number(),blockPaddingTop:i.z.number(),buttonNavigationStyle:i.z.enum(["FULL","FLOATING","FLOATING_FULL"]),buttonInlineStyle:i.z.enum(["ROUNDED","SQUARED"]),buttonScheme:i.z.enum(["ACCENT","DARK","LIGHT","TINT"]),colorAccent:i.z.string(),compactShowLessonCount:i.z.boolean(),coverImage:i.z.string(),coverImageAlpha:i.z.number(),coverImageColor:i.z.enum(["ACCENT","DARK","LIGHT"]).nullable().optional(),coverImageDefault:i.z.string().nullable().optional(),coverPageType:i.z.enum(["ACCENT","CENTERED","CENTERED_ACCENT_TINT","CENTERED_OVERLAY","CENTERED_IMAGE","IMAGE","LEFT","LEFT_OVERLAY","SPLIT_LEFT","SPLIT_LEFT_IMAGE","SPLIT_RIGHT","SPLIT_RIGHT_IMAGE","TWO_THIRDS_LEFT_IMAGE","TWO_THIRDS_RIGHT_IMAGE","WHITE"]),customColorLessonHeaderContrast:i.z.enum(["AUTO","BLACK","LIGHT","DARK"]).nullable().optional(),enableVideoPlaybackSpeed:i.z.boolean().nullable().optional(),hideCoverPage:i.z.boolean().nullable().optional(),hideLessonHeaders:i.z.boolean().nullable().optional(),lessonHeaderColor:i.z.string().nullable().optional(),lessonHeaderImage:i.z.string(),lessonHeaderImageAlpha:i.z.number(),lessonHeaderImageColor:i.z.enum(["ACCENT","DARK","LIGHT"]),lessonHeaderSize:i.z.enum(["LARGE","MEDIUM","SMALL"]),lessonHeaderStyle:i.z.enum(["ACCENT","BLACK","COLOR","DARK","GRAY","IMAGE","LIGHT","TINT"]),navigation:i.z.boolean(),navigationRestricted:i.z.boolean(),navigationStyle:i.z.enum(["ACCENT","DARK","DARK_ACCENT","DARK_IMAGE","LIGHT","LIGHT_ACCENT","LIGHT_IMAGE","GRAY","TINT"]),navigationType:i.z.enum(["COMPACT","OVERLAY","SIDEBAR"]),showAuthor:i.z.boolean(),showLessonCount:i.z.boolean(),showNavigationButtons:i.z.boolean(),sidebarStartsOpen:i.z.boolean(),bodyTypefaceId:i.z.string().nullable().optional(),headingTypefaceId:i.z.string().nullable().optional(),uiTypefaceId:i.z.string().nullable().optional(),colors:i.z.array(i.z.string()).nullable().optional()}).extend({colorTint:i.z.string()}),s=i.z.enum(["bold","regular","light","italic","black","semibold","semibolditalic","bolditalic","medium"]),l=i.z.object({id:i.z.string(),key:i.z.string(),original:i.z.string().nullable(),style:s}),c=i.z.object({id:i.z.string(),name:i.z.string(),author:i.z.string().nullable(),createdAt:i.z.string(),default:i.z.boolean(),fonts:i.z.record(i.z.string(),l)}),d=i.z.record(i.z.string(),c),h=i.z.union([i.z.boolean(),i.z.number(),i.z.string()]),p=i.z.record(i.z.string(),h),u=i.z.object({backgroundColor:i.z.string().optional()}),g=(o(i.z.object({theme:o(a),typefaces:d,featureFlags:p,block:u,aiAssistantSubscriptionEnabled:i.z.boolean(),showUpsellModal:i.z.boolean()})),i.z.object({key:i.z.string(),url:i.z.string(),refs:i.z.string().optional(),jobId:i.z.string(),courseId:i.z.string(),inputKey:i.z.string(),lessonId:i.z.string(),original:i.z.string(),uploadId:i.z.string(),mediaType:i.z.enum(["audio","video"]),thumbnail:i.z.string(),transcodeId:i.z.string(),state:i.z.enum(["COMPLETE","CANCELLED","ERROR"]),done:i.z.boolean(),duration:i.z.number()}),i.z.object({id:i.z.string(),blockumentId:i.z.string(),sourceId:i.z.string().nullable(),name:i.z.string().max(128),isComponent:i.z.boolean().default(!1),thumbnailAssetPath:i.z.string().nullable(),categoryId:i.z.string().nullable()}),i.z.object({id:i.z.string(),name:i.z.string().max(128),icon:i.z.string().nullable()}),i.z.object({id:i.z.string(),_v:i.z.number()})),v=i.z.object({blockuments:i.z.record(i.z.string(),g).optional(),items:i.z.record(i.z.string(),g).optional()})}}]);