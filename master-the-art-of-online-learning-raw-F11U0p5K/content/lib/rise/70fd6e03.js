"use strict";(self.wpRiseJsonp=self.wpRiseJsonp||[]).push([["vendors-node_modules_pnpm_articulate_design-system_1_4_0__articulate_design-system-tokens_1_1-86622f"],{51509:(en,Ca,ta)=>{ta.r(Ca),ta.d(Ca,{Arc:()=>ze,ArcAvatar:()=>wa,ArcAvatarColors:()=>Ja,ArcAvatarColorsReserved:()=>Pr,ArcAvatarOverflow:()=>ft,ArcAvatarOverflowSizes:()=>Hr,ArcAvatarPile:()=>Gr,ArcAvatarPileSizes:()=>Mr,ArcAvatarSizes:()=>Or,ArcAvatarText:()=>qr,ArcAvatarTextSizes:()=>Br,ArcBadge:()=>$t,ArcBadgeContrasts:()=>St,ArcBadgeCount:()=>Lt,ArcBadgeCountShapes:()=>It,ArcBadgeCountSizes:()=>jt,ArcBadgeCountVariants:()=>Tt,ArcBadgeLayouts:()=>Ct,ArcBadgeSizes:()=>zt,ArcBadgeVariants:()=>_t,ArcButton:()=>aa,ArcButtonLayouts:()=>st,ArcButtonShapes:()=>ot,ArcButtonSizes:()=>lt,ArcButtonVariants:()=>dt,ArcCheckbox:()=>sr,ArcCheckboxBar:()=>Wt,ArcCheckboxBarLayouts:()=>Ft,ArcCheckboxBarOption:()=>Yt,ArcCheckboxBarSizes:()=>Dt,ArcCheckboxLayouts:()=>Vt,ArcCheckboxSizes:()=>Nt,ArcCheckboxVariants:()=>Ut,ArcIcon:()=>f,ArcIconText:()=>ra,ArcIconTextLayouts:()=>wt,ArcIconTextSizes:()=>yt,ArcIconTextVariants:()=>kt,ArcInputAction:()=>qt,ArcLabel:()=>N,ArcLabelContent:()=>U,ArcLabelLayouts:()=>Pt,ArcLink:()=>Xt,ArcLinkLayouts:()=>Gt,ArcLinkSizes:()=>Jt,ArcLinkVariants:()=>Qt,ArcRadio:()=>dr,ArcRadioBar:()=>oe,ArcRadioBarLayouts:()=>ne,ArcRadioBarOption:()=>ce,ArcRadioBarSizes:()=>ie,ArcRadioLayouts:()=>re,ArcRadioSizes:()=>te,ArcSwitch:()=>de,ArcSwitchSizes:()=>le,ArcSwitchStates:()=>C,ArcSystemAlignments:()=>_a,ArcSystemColors:()=>da,ArcSystemLayouts:()=>j,ArcSystemLineHeights:()=>$a,ArcSystemPopoverModes:()=>Sa,ArcSystemShapes:()=>sa,ArcSystemSizes:()=>z,ArcSystemVariants:()=>E,ArcTextAlignments:()=>fe,ArcTextBodyElements:()=>pr,ArcTextBodySizes:()=>me,ArcTextBodyVariants:()=>ge,ArcTextElements:()=>hr,ArcTextHeadingElements:()=>ur,ArcTextHeadingSizes:()=>he,ArcTextHeadingVariants:()=>be,ArcTextInput:()=>qe,ArcTextInputLayouts:()=>Fe,ArcTextInputSizes:()=>De,ArcTextInputTypes:()=>We,ArcTextInputVariants:()=>Ye,ArcTextKinds:()=>ue,ArcTextLineHeights:()=>xe,ArcTextSubheadingSizes:()=>ve,ArcTextTitleSizes:()=>pe,ArcToast:()=>vr,ArcToastPlacements:()=>Xe,ArcToastPopoverModes:()=>Qe,ArcToastSizes:()=>Ge,ArcToastVariants:()=>Je,LogoArticulate:()=>Xa,LogoProductAI:()=>ar,LogoProductPeek:()=>rr,LogoProductReach:()=>tr,LogoProductReview:()=>er,LogoProductRise:()=>nr,LogoProductStoryline:()=>ir,adoptStyles:()=>g,css:()=>v,extractTextFromReactNode:()=>X,joinArray:()=>rn,makeHtmlId:()=>B,mapDeprecated:()=>gr,pickFromList:()=>h});const sa=["circle","square","narrow"],E=["inherit","common","disabled","neutral","outline","solid","ai","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","critical"],j=["hug","fill","icon","gutter","inline"],Sa=["","auto","manual"],_a=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],$a=["inherit","tight","standard","loose"],z=["inherit","xxl","xl","lg","md","sm","xs","xxs"],da=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black"],gr=(r,a)=>a[r]||r,h=(r,a)=>r.filter(t=>a.includes(t));var n=ta(50635),x=ta(59288);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ea=globalThis,ua=ea.ShadowRoot&&(ea.ShadyCSS===void 0||ea.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pa=Symbol(),Ea=new WeakMap;class ja{constructor(a,t,e){if(this._$cssResult$=!0,e!==pa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=t}get styleSheet(){let a=this.o;const t=this.t;if(ua&&a===void 0){const e=t!==void 0&&t.length===1;e&&(a=Ea.get(t)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),e&&Ea.set(t,a))}return a}toString(){return this.cssText}}const fr=r=>new ja(typeof r=="string"?r:r+"",void 0,pa),v=(r,...a)=>{const t=r.length===1?r[0]:a.reduce((e,i,c)=>e+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[c+1],r[0]);return new ja(t,r,pa)},xr=(r,a)=>{if(ua)r.adoptedStyleSheets=a.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of a){const e=document.createElement("style"),i=ea.litNonce;i!==void 0&&e.setAttribute("nonce",i),e.textContent=t.cssText,r.appendChild(e)}},Ta=ua?r=>r:r=>r instanceof CSSStyleSheet?(a=>{let t="";for(const e of a.cssRules)t+=e.cssText;return fr(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yr,defineProperty:wr,getOwnPropertyDescriptor:kr,getOwnPropertyNames:Ar,getOwnPropertySymbols:zr,getPrototypeOf:Cr}=Object,na=globalThis,Ia=na.trustedTypes,Sr=Ia?Ia.emptyScript:"",_r=na.reactiveElementPolyfillSupport,W=(r,a)=>r,ha={toAttribute(r,a){switch(a){case Boolean:r=r?Sr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,a){let t=r;switch(a){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},La=(r,a)=>!yr(r,a),Ra={attribute:!0,type:String,converter:ha,reflect:!1,hasChanged:La};Symbol.metadata??=Symbol("metadata"),na.litPropertyMetadata??=new WeakMap;class M extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??=[]).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,t=Ra){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(a,t),!t.noAccessor){const e=Symbol(),i=this.getPropertyDescriptor(a,e,t);i!==void 0&&wr(this.prototype,a,i)}}static getPropertyDescriptor(a,t,e){const{get:i,set:c}=kr(this.prototype,a)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i?.call(this)},set(o){const d=i?.call(this);c.call(this,o),this.requestUpdate(a,d,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Ra}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;const a=Cr(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){const t=this.properties,e=[...Ar(t),...zr(t)];for(const i of e)this.createProperty(i,t[i])}const a=this[Symbol.metadata];if(a!==null){const t=litPropertyMetadata.get(a);if(t!==void 0)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const t=[];if(Array.isArray(a)){const e=new Set(a.flat(1/0).reverse());for(const i of e)t.unshift(Ta(i))}else a!==void 0&&t.push(Ta(a));return t}static _$Eu(a,t){const e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(a=>this.enableUpdating=a),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(a=>a(this))}addController(a){(this._$EO??=new Set).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){const a=new Map,t=this.constructor.elementProperties;for(const e of t.keys())this.hasOwnProperty(e)&&(a.set(e,this[e]),delete this[e]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xr(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(a=>a.hostConnected?.())}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach(a=>a.hostDisconnected?.())}attributeChangedCallback(a,t,e){this._$AK(a,e)}_$EC(a,t){const e=this.constructor.elementProperties.get(a),i=this.constructor._$Eu(a,e);if(i!==void 0&&e.reflect===!0){const c=(e.converter?.toAttribute!==void 0?e.converter:ha).toAttribute(t,e.type);this._$Em=a,c==null?this.removeAttribute(i):this.setAttribute(i,c),this._$Em=null}}_$AK(a,t){const e=this.constructor,i=e._$Eh.get(a);if(i!==void 0&&this._$Em!==i){const c=e.getPropertyOptions(i),o=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:ha;this._$Em=i,this[i]=o.fromAttribute(t,c.type),this._$Em=null}}requestUpdate(a,t,e){if(a!==void 0){if(e??=this.constructor.getPropertyOptions(a),!(e.hasChanged??La)(this[a],t))return;this.P(a,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(a,t,e){this._$AL.has(a)||this._$AL.set(a,t),e.reflect===!0&&this._$Em!==a&&(this._$Ej??=new Set).add(a)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,c]of this._$Ep)this[i]=c;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[i,c]of e)c.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],c)}let a=!1;const t=this._$AL;try{a=this.shouldUpdate(t),a?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(e){throw a=!1,this._$EU(),e}a&&this._$AE(t)}willUpdate(a){}_$AE(a){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(a){}firstUpdated(a){}}M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[W("elementProperties")]=new Map,M[W("finalized")]=new Map,_r?.({ReactiveElement:M}),(na.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const va=globalThis,ia=va.trustedTypes,Pa=ia?ia.createPolicy("lit-html",{createHTML:r=>r}):void 0,ba="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,ma="?"+T,$r=`<${ma}>`,L=document,q=()=>L.createComment(""),K=r=>r===null||typeof r!="object"&&typeof r!="function",ga=Array.isArray,Oa=r=>ga(r)||typeof r?.[Symbol.iterator]=="function",fa=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ba=/-->/g,Ma=/>/g,R=RegExp(`>|${fa}(?:([^\\s"'>=/]+)(${fa}*=${fa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ha=/'/g,Va=/"/g,Na=/^(?:script|style|textarea|title)$/i,xa=r=>(a,...t)=>({_$litType$:r,strings:a,values:t}),nn=xa(1),cn=xa(2),on=xa(3),H=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Ua=new WeakMap,P=L.createTreeWalker(L,129);function Za(r,a){if(!ga(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pa!==void 0?Pa.createHTML(a):a}const Fa=(r,a)=>{const t=r.length-1,e=[];let i,c=a===2?"<svg>":a===3?"<math>":"",o=G;for(let d=0;d<t;d++){const l=r[d];let s,u,p=-1,b=0;for(;b<l.length&&(o.lastIndex=b,u=o.exec(l),u!==null);)b=o.lastIndex,o===G?u[1]==="!--"?o=Ba:u[1]!==void 0?o=Ma:u[2]!==void 0?(Na.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=R):u[3]!==void 0&&(o=R):o===R?u[0]===">"?(o=i??G,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,s=u[1],o=u[3]===void 0?R:u[3]==='"'?Va:Ha):o===Va||o===Ha?o=R:o===Ba||o===Ma?o=G:(o=R,i=void 0);const m=o===R&&r[d+1].startsWith("/>")?" ":"";c+=o===G?l+$r:p>=0?(e.push(s),l.slice(0,p)+ba+l.slice(p)+T+m):l+T+(p===-2?d:m)}return[Za(r,c+(r[t]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),e]};class J{constructor({strings:a,_$litType$:t},e){let i;this.parts=[];let c=0,o=0;const d=a.length-1,l=this.parts,[s,u]=Fa(a,t);if(this.el=J.createElement(s,e),P.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=P.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(ba)){const b=u[o++],m=i.getAttribute(p).split(T),w=/([.?@])?(.*)/.exec(b);l.push({type:1,index:c,name:w[2],strings:m,ctor:w[1]==="."?Ya:w[1]==="?"?Wa:w[1]==="@"?qa:Q}),i.removeAttribute(p)}else p.startsWith(T)&&(l.push({type:6,index:c}),i.removeAttribute(p));if(Na.test(i.tagName)){const p=i.textContent.split(T),b=p.length-1;if(b>0){i.textContent=ia?ia.emptyScript:"";for(let m=0;m<b;m++)i.append(p[m],q()),P.nextNode(),l.push({type:2,index:++c});i.append(p[b],q())}}}else if(i.nodeType===8)if(i.data===ma)l.push({type:2,index:c});else{let p=-1;for(;(p=i.data.indexOf(T,p+1))!==-1;)l.push({type:7,index:c}),p+=T.length-1}c++}}static createElement(a,t){const e=L.createElement("template");return e.innerHTML=a,e}}function O(r,a,t=r,e){if(a===H)return a;let i=e!==void 0?t.o?.[e]:t.l;const c=K(a)?void 0:a._$litDirective$;return i?.constructor!==c&&(i?._$AO?.(!1),c===void 0?i=void 0:(i=new c(r),i._$AT(r,t,e)),e!==void 0?(t.o??=[])[e]=i:t.l=i),i!==void 0&&(a=O(r,i._$AS(r,a.values),i,e)),a}class Da{constructor(a,t){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){const{el:{content:t},parts:e}=this._$AD,i=(a?.creationScope??L).importNode(t,!0);P.currentNode=i;let c=P.nextNode(),o=0,d=0,l=e[0];for(;l!==void 0;){if(o===l.index){let s;l.type===2?s=new V(c,c.nextSibling,this,a):l.type===1?s=new l.ctor(c,l.name,l.strings,this,a):l.type===6&&(s=new Ka(c,this,a)),this._$AV.push(s),l=e[++d]}o!==l?.index&&(c=P.nextNode(),o++)}return P.currentNode=L,i}p(a){let t=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(a,e,t),t+=e.strings.length-2):e._$AI(a[t])),t++}}class V{get _$AU(){return this._$AM?._$AU??this.v}constructor(a,t,e,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=a,this._$AB=t,this._$AM=e,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&a?.nodeType===11&&(a=t.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,t=this){a=O(this,a,t),K(a)?a===A||a==null||a===""?(this._$AH!==A&&this._$AR(),this._$AH=A):a!==this._$AH&&a!==H&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):Oa(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==A&&K(this._$AH)?this._$AA.nextSibling.data=a:this.T(L.createTextNode(a)),this._$AH=a}$(a){const{values:t,_$litType$:e}=a,i=typeof e=="number"?this._$AC(a):(e.el===void 0&&(e.el=J.createElement(Za(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===i)this._$AH.p(t);else{const c=new Da(i,this),o=c.u(this.options);c.p(t),this.T(o),this._$AH=c}}_$AC(a){let t=Ua.get(a.strings);return t===void 0&&Ua.set(a.strings,t=new J(a)),t}k(a){ga(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let e,i=0;for(const c of a)i===t.length?t.push(e=new V(this.O(q()),this.O(q()),this,this.options)):e=t[i],e._$AI(c),i++;i<t.length&&(this._$AR(e&&e._$AB.nextSibling,i),t.length=i)}_$AR(a=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);a&&a!==this._$AB;){const e=a.nextSibling;a.remove(),a=e}}setConnected(a){this._$AM===void 0&&(this.v=a,this._$AP?.(a))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,t,e,i,c){this.type=1,this._$AH=A,this._$AN=void 0,this.element=a,this.name=t,this._$AM=i,this.options=c,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=A}_$AI(a,t=this,e,i){const c=this.strings;let o=!1;if(c===void 0)a=O(this,a,t,0),o=!K(a)||a!==this._$AH&&a!==H,o&&(this._$AH=a);else{const d=a;let l,s;for(a=c[0],l=0;l<c.length-1;l++)s=O(this,d[e+l],t,l),s===H&&(s=this._$AH[l]),o||=!K(s)||s!==this._$AH[l],s===A?a=A:a!==A&&(a+=(s??"")+c[l+1]),this._$AH[l]=s}o&&!i&&this.j(a)}j(a){a===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}}class Ya extends Q{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===A?void 0:a}}class Wa extends Q{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==A)}}class qa extends Q{constructor(a,t,e,i,c){super(a,t,e,i,c),this.type=5}_$AI(a,t=this){if((a=O(this,a,t,0)??A)===H)return;const e=this._$AH,i=a===A&&e!==A||a.capture!==e.capture||a.once!==e.once||a.passive!==e.passive,c=a!==A&&(e===A||i);i&&this.element.removeEventListener(this.name,this,e),c&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}}class Ka{constructor(a,t,e){this.element=a,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(a){O(this,a)}}const ln={M:ba,P:T,A:ma,C:1,L:Fa,R:Da,D:Oa,V:O,I:V,H:Q,N:Wa,U:qa,B:Ya,F:Ka},Er=va.litHtmlPolyfillSupport;Er?.(J,V),(va.litHtmlVersions??=[]).push("3.2.0");const jr=(r,a,t)=>{const e=t?.renderBefore??a;let i=e._$litPart$;if(i===void 0){const c=t?.renderBefore??null;e._$litPart$=i=new V(a.insertBefore(q(),c),c,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ca extends M{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const a=super.createRenderRoot();return this.renderOptions.renderBefore??=a.firstChild,a}update(a){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this.o=jr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return H}}ca._$litElement$=!0,ca.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ca});const Tr=globalThis.litElementPolyfillSupport;Tr?.({LitElement:ca});const sn={_$AK:(r,a,t)=>{r._$AK(a,t)},_$AL:r=>r._$AL};(globalThis.litElementVersions??=[]).push("4.1.0");const Ga={};function g(r,a){if(typeof document<"u"&&a?.styleSheet){const t=Ga[r];Ga[r]=a.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(e=>e!==t),a.styleSheet]}}const Ir=r=>r?.trim().charAt(0)??void 0,Lr=(r,a)=>{let t=0;const e=Math.min(r.length,50);for(let i=0;i<e;i++)t=(t+r.charCodeAt(i))%(a??33);return t},Rr=(r,a,t)=>a?.length?r?.trim()===""?t||a[0]:a[Lr(r,a.length)]||t||a[0]:t,Ja=h(da,["blue","orange","mint","red","yellow","green","maroon","purple"]),Pr=h(da,["neutral","white","black"]),oa=h(z,["lg","md","sm","xs"]),Or=[...oa,"profile-sm","profile-md","profile-lg"],Br=oa,Mr=oa,Hr=oa,Qa=v`
/* This rule allows Avatar to acclimate to its parental size controls  */
--arc-modifier: inherit;
--arc-internal-avatar-num-size-1: inherit;
--arc-internal-avatar-num-size-2: inherit;
--arc-internal-avatar-num-size-3: inherit;
--arc-internal-avatar-size: inherit;
`,ya=v`

&[data-size=xs] {
  --arc-modifier: 10; /* unitless, desired size at 100% */
  --arc-internal-avatar-num-size-1: 10;
  --arc-internal-avatar-num-size-2: 8;
  --arc-internal-avatar-num-size-3: 6;
  --arc-internal-avatar-size: 20;
}

&[data-size=sm] {
  --arc-modifier: 12; /* unitless, desired size at 100% */
  --arc-internal-avatar-num-size-1: 12;
  --arc-internal-avatar-num-size-2: 10;
  --arc-internal-avatar-num-size-3: 8;
  --arc-internal-avatar-size: 24;
}

&:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
  --arc-modifier: 14; /* unitless, desired size at 100% */
  --arc-internal-avatar-num-size-1: 14;
  --arc-internal-avatar-num-size-2: 12;
  --arc-internal-avatar-num-size-3: 10;
  --arc-internal-avatar-size: 32;
}

&[data-size=lg] {
  --arc-modifier: 16; /* unitless, desired size at 100% */
  --arc-internal-avatar-num-size-1: 16;
  --arc-internal-avatar-num-size-2: 14;
  --arc-internal-avatar-num-size-3: 12;
  --arc-internal-avatar-size: 40;
}

`,Vr=v`
@layer arc-components {

[arc-avatar] {

  /* Colors --------------------------------------------------------• */

  --arc-internal-avatar-color: var(--arc-avatar-color, var(--arc-color-text-inverse));

  &:has([data-color=blue]) { /* @default color */
    --arc-internal-avatar-background: var(--arc-color-blue-400);
  }
  &:has([data-color=purple]) {
    --arc-internal-avatar-background: var(--arc-color-purple-400);
  }
  &:has([data-color=red]) {
    --arc-internal-avatar-background: var(--arc-color-red-400);
  }
  &:has([data-color=yellow]) {
    --arc-internal-avatar-background: var(--arc-color-yellow-400);
  }
  &:has([data-color=green]) {
    --arc-internal-avatar-background: var(--arc-color-green-400);
  }
  &:has([data-color=maroon]) {
    --arc-internal-avatar-background: var(--arc-color-maroon-400);
  }
  &:has([data-color=orange]) {
    --arc-internal-avatar-background: var(--arc-color-orange-400);
  }
  &:has([data-color=mint]) {
    --arc-internal-avatar-background: var(--arc-color-mint-400);
  }


  /* RESERVED COLORS -----------------------------------------------• */

  &:has([data-color=black]) {
    --arc-internal-avatar-background: var(--arc-color-mono-black);
  }

  &:has([data-color=neutral]) { /* @default anonymous */
    --arc-internal-avatar-color: var(--arc-internal-neutral-color, var(--arc-color-icon-secondary));
    --arc-internal-avatar-background: var(--arc-internal-neutral-background, var(--arc-color-alpha-black-10));
  }

  &:has([data-color=white]) {
    --arc-internal-avatar-color: var(--arc-color-text-primary);
    --arc-internal-avatar-background: var(--arc-color-mono-white);
  }


  /* SIZES ---------------------------------------------------------• */

  ${ya}


  /* PROFILE SIZES -------------------------------------------------• */

  &[data-size=profile-sm] {
    --arc-modifier: 28; /* unitless, desired size at 100% */
    --arc-internal-avatar-size: 64;
  }

  &[data-size=profile-md] {
    --arc-modifier: 32; /* unitless, desired size at 100% */
    --arc-internal-avatar-size: 96;
  }

  &[data-size=profile-lg] {
    --arc-modifier: 40; /* unitless, desired size at 100% */
    --arc-internal-avatar-size: 160;
  }


  /* COMPUTED -------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-avatar-font-size: calc(var(--arc-modifier-px));
    --arc-computed-avatar-size: calc(var(--arc-internal-avatar-size) / var(--arc-modifier-em));
    --arc-computed-avatar-num-size-1: calc(var(--arc-internal-avatar-num-size-1) / var(--arc-modifier-em));
    --arc-computed-avatar-num-size-2: calc(var(--arc-internal-avatar-num-size-2) / var(--arc-modifier-em));
    --arc-computed-avatar-num-size-3: calc(var(--arc-internal-avatar-num-size-3) / var(--arc-modifier-em));
  }
}

/* CORE AVATAR STYLES ----------------------------------------------• */

[arc-avatar] {
  font-size: var(--arc-avatar-font-size, var(--arc-computed-avatar-font-size));

  flex: none;
  align-self: center;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--arc-computed-avatar-size);
  aspect-ratio: 1 / 1;
  line-height: normal;

  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: var(--arc-border-radius-circle);

  &[data-is-inactive] {
    opacity: var(--arc-alpha-50);
  }

  [data-num-length] {
    font-size: var(--arc-computed-avatar-num-size-1);
  }

  [data-num-length='2'] {
    font-size: var(--arc-computed-avatar-num-size-2);
  }

  [data-num-length='3'] {
    font-size: var(--arc-computed-avatar-num-size-3);
  }


  /* INNER ELEMENTS ------------------------------------------------• */

  [data-element=counter] {
    --arc-internal-avatar-pointer-events: all;

    /* overrides ArcButton style properties */
    /** @todo provide css vars to ArcButton styles */
    padding: var(--arc-space-0);
    background: var(--arc-avatar-background, var(--arc-internal-avatar-background));
    color: var(--arc-avatar-color, var(--arc-internal-avatar-color));

    &:disabled {
      cursor: default;
    }
  }

  [data-element=image] {
    object-fit: cover;

    /* Hides problematic image */
    &:is([data-not-loaded], [data-has-error]) {
      --arc-internal-avatar-visibility: hidden;
    }

    /* Hides subsequent elements with valid image */
    &:not([data-has-error]) ~ [data-element] {
      --arc-internal-avatar-color: transparent;
      --arc-internal-avatar-background: none;
    }
  }

  :is(
    [data-element=counter],
    [data-element=initial],
    [data-element=anonymous]
   ) {
    background: var(--arc-internal-avatar-background);
    color: var(--arc-internal-avatar-color);
  }

  [data-element] {
    flex: none;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    border-radius: inherit;
    font-weight: var(--arc-font-weight-600);
    visibility: var(--arc-internal-avatar-visibility, unset);

    transition-property: visibility, background-color, color;
    transition-behavior: allow-discrete;
    transition-duration: 200ms;
    transition-timing-function: linear;

    pointer-events: var(--arc-internal-avatar-pointer-events, none);
    user-select: none;
    -webkit-user-select: none;
  }
}

}
`,Nr=({children:r,initial:a,color:t,...e})=>(0,n.jsx)("span",{...e,"data-element":"initial","data-color":t,children:r||a}),Ur=({isLoaded:r,hasError:a,onLoad:t,onError:e,...i})=>{const c=!r&&""||void 0,o=a&&""||void 0,d=!r||a||void 0;return(0,n.jsx)("img",{...i,hidden:d,"data-element":"image","data-not-loaded":c,"data-has-error":o,onLoad:t,onError:e})},Xa=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),ar=r=>(0,n.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,n.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),rr=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),tr=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),er=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),nr=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),ir=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),Zr=v`
@layer arc-components {

[arc-icon] {
  font-size: var(--arc-icon-size, 1em);
  color: var(--arc-icon-color, currentcolor);
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    --fa-display: var(--arc-icon-display, inline-flex);

    flex: none;
    display: var(--fa-display);
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

    svg {
      fill: var(--arc-icon-color, currentcolor);
      width: 100%; /* keeps Safari happy ¯\_(ツ)_/¯ */
    }
  }

  [class|=fa] {
    align-items: center;
    justify-content: center;
    line-height: var(--arc-icon-fa-line-height, 1) !important; /* fix for FontAwesome line-height oddities in certain cases */
  }
}

}
`,Fr=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,f=({children:r,icon:a="fa-regular fa-circle-dashed",color:t,size:e,style:i,...c})=>{const o={...i,"--arc-icon-size":Fr(e),"--arc-icon-color":t},d=!!(c["aria-label"]||c["aria-labelledby"]),l=typeof a=="string"&&a.length>0?(0,n.jsx)("span",{className:a}):a;return(0,n.jsx)("span",{"aria-hidden":!d||void 0,...c,"arc-icon":"",style:o,children:r||l})};f.Articulate=r=>(0,n.jsx)(f,{...r,icon:(0,n.jsx)(Xa,{})}),f.AI=r=>(0,n.jsx)(f,{...r,icon:(0,n.jsx)(ar,{})}),f.Peek=r=>(0,n.jsx)(f,{...r,icon:(0,n.jsx)(rr,{})}),f.Reach=r=>(0,n.jsx)(f,{...r,icon:(0,n.jsx)(tr,{})}),f.Review=r=>(0,n.jsx)(f,{...r,icon:(0,n.jsx)(er,{})}),f.Rise=r=>(0,n.jsx)(f,{...r,icon:(0,n.jsx)(nr,{})}),f.Storyline=r=>(0,n.jsx)(f,{...r,icon:(0,n.jsx)(ir,{})}),g("ArcIcon",Zr);const Dr=({children:r,icon:a,color:t,...e})=>(0,n.jsx)("span",{...e,"data-element":"anonymous","data-color":"neutral",children:r||(0,n.jsx)(f,{icon:a})}),cr="blue",or="neutral",Yr="fa-solid fa-user",wa=(0,x.forwardRef)(({children:r,size:a,color:t,isActive:e=!0,isAnonymous:i,alt:c,src:o,name:d,email:l,...s},u)=>{const[p,b]=(0,x.useState)(!1),[m,w]=(0,x.useState)(!1),_=Y=>{b(!0),w(!1),s.onLoad?.(Y)},$=Y=>{b(!1),w(!0),s.onError?.(Y)},I=Ir(d||l),k=!!I,y=i||(!p||m)&&!k,F=!y&&!!o&&!m||void 0,D=(y&&or||void 0)??(t||void 0)??Rr(String(l||d||void 0),Ja,cr)??cr,za={src:o,alt:c,isLoaded:p,hasError:m,onLoad:_,onError:$};return(0,x.useEffect)(()=>{y&&b(!1)},[y]),(0,n.jsx)("span",{...s,ref:u,"arc-avatar":"","data-is-inactive":!e||void 0,"data-size":a,"aria-label":(s.title??d??l)||void 0,children:r||(y?(0,n.jsx)(Dr,{icon:Yr,color:or}):(0,n.jsxs)(n.Fragment,{children:[F&&(0,n.jsx)(Ur,{...za}),k&&(0,n.jsx)(Nr,{initial:I,color:D})]}))})});g("ArcAvatar",Vr);const Wr=v`
@layer arc-components {

[arc-avatar-text] {
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  font-size: var(--arc-internal-avatar-text-font-size, inherit);
  gap: 0.5em;
  line-height: normal;

  &:has([data-size=xs]) {
    --arc-internal-avatar-text-font-size: var(--arc-font-size-12);
  }
  &:has([data-size=sm]) {
    --arc-internal-avatar-text-font-size: var(--arc-font-size-14);
  }
  &:has([data-size=md]) { /* @default size */
    --arc-internal-avatar-text-font-size: var(--arc-font-size-16);
  }
  &:has([data-size=lg]) {
    --arc-internal-avatar-text-font-size: var(--arc-font-size-16);
  }

  [data-element=text] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--arc-avatar-text-font-size, inherit);
  }
}

}
`,lr="Anonymous",qr=({children:r,avatar:a,size:t,...e})=>{const i=a.name||a.email||a.src,c=a.name||a.email||lr,o=a.isAnonymous||!i,d=r||o?lr:c;return(0,n.jsxs)("span",{...e,"arc-avatar-text":"",children:[(0,n.jsx)(wa,{...a,isAnonymous:o,size:t}),(0,n.jsx)("span",{"data-element":"text",children:d})]})};g("ArcAvatarText",Wr);const Kr=v`
@layer arc-components {

[arc-avatar-pile] {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0;


  /* SIZES ---------------------------------------------------------• */

  ${ya}

  [arc-avatar] {
    ${Qa}
  }


  /* OVERLAP MASK --------------------------------------------------• */

  /* --arc-modifier comes from avatarSizesShared */

  & {
    --arc-modifier-em: var(--arc-modifier) * 1em;
    --arc-computed-avatar-offset: calc(2 / var(--arc-modifier-em));
    --arc-computed-avatar-mask-shift: calc(-2 / var(--arc-modifier-em));

    --arc-internal-avatar-mask-position: 50% 50% at calc(-50% + var(--arc-computed-avatar-offset)) 50%;
    --arc-internal-avatar-mask-sharpness: min(var(--arc-computed-avatar-offset), 0.015em);
    --arc-internal-avatar-mask-hide: transparent calc(100% + var(--arc-computed-avatar-offset));
    --arc-internal-avatar-mask-show: black calc(100% + var(--arc-internal-avatar-mask-sharpness) + var(--arc-computed-avatar-offset));

    --arc-internal-avatar-mask: radial-gradient(
      var(--arc-internal-avatar-mask-position),
      var(--arc-internal-avatar-mask-hide),
      var(--arc-internal-avatar-mask-show)
    ) padding-box;
  }

  
  /* Cutout (mask) a portion of subsequent avatars -----------------• */
  
  [arc-avatar]+[arc-avatar] {
    margin-left: var(--arc-computed-avatar-mask-shift);
    mask: var(--arc-internal-avatar-mask); /* magic! */
  }

}

}
`,Gr=({size:r="md",...a})=>(0,n.jsx)("div",{...a,"arc-avatar-pile":"","data-size":r});g("ArcAvatarPile",Kr);const X=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(X).join(""):(0,x.isValidElement)(r)?X(r.props.children):"",Jr=()=>Math.random().toString(16).slice(-6),B=r=>`${r||"id"}-${Jr()}`,Qr=v`
  &:where([data-layout=hug]) {
    --arc-button-display: inline-flex;
    --arc-button-width: auto;
    --arc-button-content-width: fit-content;
  }

  &:where([data-layout=fill]) {
    --arc-button-display: flex;
    --arc-button-width: 100%;
    --arc-button-content-width: 0;
  }

  &:where([data-layout=icon]) {
    --arc-button-aspect-ratio: 1 / 1;
    --arc-button-flex: none;
    --arc-button-min-width: min-content;
    --arc-button-max-width: none;

    &:where([data-shape=narrow]) {
      --arc-button-aspect-ratio: auto;
    }
  }
`,Xr=v`

  &[data-size=xxl] {
    --arc-modifier: 16; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 20;
    --arc-internal-btn-height: 56;
    --arc-internal-btn-gap: 10;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-size: 32;
  }

  &[data-size=xl] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 48;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-size: 16;
  }

  &[data-size=lg] { /** @default */
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 40;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 20;
    --arc-internal-btn-spinner-size: 16;
  }

  &[data-size=md] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 14;
    --arc-internal-btn-height: 32;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 16;
    --arc-internal-btn-spinner-size: 16;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 12;
    --arc-internal-btn-height: 24;
    --arc-internal-btn-gap: 4;
    --arc-internal-btn-padding-inline: 12;
    --arc-internal-btn-spinner-size: 14;
  }

`,at=v`

&[data-variant=primary] { /** @default */
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

&[data-variant=secondary] { /** @default - when icon-only */
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

  &[data-layout=icon] {
    --arc-internal-btn-edge: var(--arc-color-border-standard);
    --arc-internal-btn-hover-edge: var(--arc-color-border-stark);
    --arc-internal-btn-focus-edge: var(--arc-color-border-standard);
  }
}

&[data-variant=tertiary] {
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

`,rt=v`

&[data-variant=primary-inverse] {
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

  &[data-layout=icon] {
    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-70);
  }
}

&[data-variant=secondary-inverse] {
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

  &[data-layout=icon] {
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

&[data-variant=tertiary-inverse] {
  --arc-internal-btn-text: var(--arc-color-alpha-white-95);
  --arc-internal-btn-fill: transparent;
  --arc-internal-btn-edge: transparent;

  --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);

  --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
  --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);

  --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);

  --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
  --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-20);

  &[data-layout=icon] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-80);

    --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

    --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
    --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
  }
}

`,tt=v`

&[data-variant=ai-primary] {
  --arc-internal-btn-text: var(--arc-color-mono-white);
  --arc-internal-btn-fill: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

  --arc-internal-btn-hover-fill: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;

  --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
  --arc-internal-btn-active-fill: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;

  --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

  --arc-internal-btn-processing-text: var(--arc-color-alpha-white-70);
  --arc-internal-btn-processing-fill: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
}

&[data-variant=ai-secondary] {
  --arc-internal-btn-text: var(--arc-color-mono-black);
  --arc-internal-btn-fill: linear-gradient(var(--arc-color-mono-white) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

  --arc-internal-btn-hover-fill: var(--arc-gradient-ai-050) padding-box, var(--arc-gradient-ai-300) border-box;

  --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
  --arc-internal-btn-active-fill: var(--arc-gradient-ai-050) padding-box, var(--arc-gradient-ai-100) border-box;

  --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);

  --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
  --arc-internal-btn-processing-fill: linear-gradient(var(--arc-color-mono-white) 0 0) padding-box, var(--arc-gradient-ai-100) border-box;
}

&[data-variant^=ai-] {
  --arc-internal-btn-edge: transparent;
  --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
  --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
}

`,et=v`

&[data-variant=critical-primary] {
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

&[data-variant=critical-secondary] {
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

`,nt=v`
  ${at}
  ${rt}
  ${et}
  ${tt}
`,it=v`
:where([arc-button=custom]) {
  --arc-button-font-weight: normal;
  --arc-button-justify-content: flex-start;
  --arc-button-disabled-opacity: var(--arc-alpha-30);

  /* Default size matches [data-size=lg] */
  --arc-modifier: 14; /* unitless, desired font size at 100% */
  --arc-modifier-unit: 0.0625em; /* 1/16th of an em for the computed calcs */
  --arc-internal-btn-icon-size: 16;
  --arc-internal-btn-gap: 8;
  --arc-internal-btn-padding-inline: 0;
  --arc-internal-btn-spinner-size: 16;
}
`,ct=v`
@layer arc-components {

[arc-button] {
  ${Xr}
  ${Qr}
  ${nt}

  --arc-button-color: var(--arc-internal-btn-text);
  --arc-button-background: var(--arc-internal-btn-fill);
  --arc-internal-btn-edge-color: var(--arc-internal-btn-edge);

  &[data-layout=icon] {
    --arc-internal-btn-padding-inline: 0;

    &[data-shape=narrow] {
      --arc-internal-btn-padding-inline: 2;
    }
  }

  --arc-modifier-base: var(--arc-modifier) * var(--arc-modifier-unit, 1px);
  --arc-modifier-em: var(--arc-modifier) * 1em;

  /* COMPUTED VARIABLES ------------------------------------------• */

  --arc-computed-btn-font-size: calc(var(--arc-modifier-base));
  --arc-computed-btn-icon-size: calc(var(--arc-internal-btn-icon-size) / var(--arc-modifier-em));
  --arc-computed-btn-border-size: max(var(--arc-border-width-sm), calc(1 / var(--arc-modifier-em)));
  --arc-computed-btn-outline-size: max(var(--arc-border-width-md), calc(2 / var(--arc-modifier-em)));
  --arc-computed-btn-border-radius-md: max(var(--arc-border-radius-md), calc(4 / var(--arc-modifier-em)));
  --arc-computed-btn-height: calc(var(--arc-internal-btn-height) / var(--arc-modifier-em));
  --arc-computed-btn-padding: 0 calc(var(--arc-internal-btn-padding-inline) / var(--arc-modifier-em));
  --arc-computed-btn-gap: calc(var(--arc-internal-btn-gap) / var(--arc-modifier-em));
  --arc-computed-btn-spinner-size: calc(var(--arc-internal-btn-spinner-size) / var(--arc-modifier-em));

  --arc-computed-btn-border: var(--arc-computed-btn-border-size) solid var(--arc-internal-btn-edge-color, transparent);
  --arc-computed-btn-outline: var(--arc-computed-btn-outline-size) solid var(--arc-internal-btn-outline-color, var(--arc-color-border-focus));

  &[data-variant^=ai-] {
    --arc-computed-btn-border-size: max(var(--arc-border-width-md), calc(2 / var(--arc-modifier-em)));
  }

  &:is(:not([data-shape]), [data-shape=circle]) {
    --arc-computed-btn-border-radius: var(--arc-border-radius-pill); /** @computed • border-radius */
  }

  &:is(
    [arc-button=custom],
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    --arc-computed-btn-border-radius: var(--arc-computed-btn-border-radius-md); /** @computed • border-radius */
  }

  /* Inter-Component Communication ---------------------------------• */
  --arc-icon-fa-line-height: 1lh;
  --arc-icon-size: var(--arc-computed-btn-icon-size); /** ArcIcon, @computed • icon-size */

  /* STATES --------------------------------------------------------- */

  &:is([is-processing], :has(input)) {
    --arc-button-position: relative;
  }

  &:is([is-disabled]) {
    --arc-button-cursor: not-allowed;
    --arc-button-opacity: var(--arc-button-disabled-opacity, unset);
    --arc-button-color: var(--arc-internal-btn-disabled-text, var(--arc-internal-btn-text));
    --arc-button-background: var(--arc-internal-btn-disabled-fill, var(--arc-internal-btn-fill));
    --arc-internal-btn-edge-color: var(--arc-internal-btn-disabled-edge, var(--arc-internal-btn-edge));
  }

  &:not([is-disabled], [is-processing]) {
    &:hover {
      --arc-button-color: var(--arc-internal-btn-hover-text, var(--arc-internal-btn-text));
      --arc-button-background: var(--arc-internal-btn-hover-fill, var(--arc-internal-btn-fill));
      --arc-internal-btn-edge-color: var(--arc-internal-btn-hover-edge, var(--arc-internal-btn-edge));
    }

    &:is(:active, [is-active]) {
      --arc-button-color: var(--arc-internal-btn-active-text, var(--arc-internal-btn-text));
      --arc-button-background: var(--arc-internal-btn-active-fill, var(--arc-internal-btn-fill));
      --arc-internal-btn-edge-color: var(--arc-internal-btn-active-edge, var(--arc-internal-btn-edge));
    }
  }

  &[is-processing] {
    --arc-button-cursor: default;
    --arc-button-content-visibility: hidden;
    --arc-button-content-opacity: 0;
    --arc-button-opacity: var(--arc-button-processing-opacity, unset);

    --arc-button-color: var(--arc-internal-btn-processing-text, var(--arc-internal-btn-text));
    --arc-button-background: var(--arc-internal-btn-processing-fill, var(--arc-internal-btn-fill));
    --arc-internal-btn-edge-color: var(--arc-internal-btn-processing-edge, var(--arc-internal-btn-edge));

    /* spinner svg style controls */
    --arc-button-spinner-opacity: var(--arc-alpha-30);
    --arc-button-spinner-circle-color: var(--arc-button-color);
    --arc-button-spinner-progress-color: var(--arc-button-color);

    &:is(
      [data-variant*=secondary], /* contains 'secondary' */
      [data-variant*=tertiary], /* contains 'tertiary' */
      [data-variant^=ai-], /* starts with 'ai-' */
      [data-variant$=-inverse] /* ends with '-inverse' */
    ) {
      --arc-button-spinner-opacity: var(--arc-alpha-100);
      --arc-button-spinner-progress-color: var(--arc-color-brand-root);
    }
  }

  &:where(:focus, :focus-within):focus-visible {
    --arc-button-color: var(--arc-internal-btn-focus-text, var(--arc-internal-btn-text));
    --arc-button-background: var(--arc-internal-btn-focus-fill, var(--arc-internal-btn-fill));
    --arc-internal-btn-edge-color: var(--arc-internal-btn-focus-edge, var(--arc-internal-btn-edge));
    --arc-internal-btn-outline-color: var(--arc-color-border-focus);


    &[data-variant$=-inverse] {
      --arc-internal-btn-outline-color: var(--arc-color-border-focus-inverse);
    }

    outline: var(--arc-button-outline, var(--arc-computed-btn-outline));
    outline-offset: var(--arc-button-outline-offset, var(--arc-computed-btn-outline-size)); /** @computed • outline-offset */

    * {
      outline: none;
    }
  }
}

/* CORE STYLES ------------------------------------------------------ */

[arc-button] {
  appearance: none;
  cursor: var(--arc-button-cursor, pointer);
  position: var(--arc-button-position, unset);
  transition: 150ms ease-out;

  /* footprint */

  font: inherit;
  font-size: var(--arc-button-font-size, var(--arc-computed-btn-font-size, inherit)); /** @computed • font-size */
  font-weight: var(--arc-button-font-weight, var(--arc-font-weight-600));
  max-width: var(--arc-button-max-width, 100%);
  min-width: var(--arc-button-min-width, unset);
  width: var(--arc-button-width, unset);
  height: var(--arc-button-height, var(--arc-computed-btn-height, unset)); /** @computed • height */
  aspect-ratio: var(--arc-button-aspect-ratio, unset);

  padding: var(--arc-button-padding, var(--arc-computed-btn-padding)); /** @computed • padding */

  /* Variant Theme Applied -----------------------------------------• */

  color: var(--arc-button-color, unset);
  background: var(--arc-button-background, transparent);
  border: var(--arc-button-border, var(--arc-computed-btn-border)); /** @computed • border */
  border-radius: var(--arc-button-border-radius, var(--arc-computed-btn-border-radius)); /** @computed • border-radius */
  opacity: var(--arc-button-opacity, 1);

  &[href] {
    text-decoration: var(--arc-button-text-decoration, none);
  }

  /* INNER-ELEMENTS ------------------------------------------------• */

  [arc-button-content] {
    flex: 1;
    width: var(--arc-button-content-width, auto);
    display: flex;
    align-items: center;
    justify-content: var(--arc-button-justify-content, center);
    gap: var(--arc-button-gap, max(var(--arc-space-0-5), var(--arc-computed-btn-gap, 0.5em))); /** @computed • gap */
    max-width: 100%;
    overflow: hidden;
    pointer-events: var(--arc-button-content-pointer-events, none);
    user-select: none;
    visibility: var(--arc-button-content-visibility, unset);
    opacity: var(--arc-button-content-opacity, unset);
    line-height: normal;
  }

  [arc-button-label] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    transition: 0.2s ease-out;
  }

  [arc-button-icon] {
    transition: 0.2s ease-out;
  }

  :is([arc-spinner], input) {
    position: absolute;
    inset: var(--arc-spinner-inset, 50% auto auto 50%);
    translate: var(--arc-spinner-translate, -50% -50%);
  }

  input {
    opacity: 0;
    scale: 0.1;
  }

  [arc-spinner] {
    display: flex;
    pointer-events: none;
    border-radius: 50%;
    width: var(--arc-spinner-size, var(--arc-computed-btn-spinner-size)); /** @computed • spinner size */
    aspect-ratio: 1 / 1;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-button-spinner-circle-color, currentcolor);
      opacity: var(--arc-button-spinner-opacity, var(--arc-alpha-40));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-button-spinner-progress-color, currentcolor);
      stroke-dasharray: 0.3334 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: 743ms arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }
}

${it}

[arc-button]:not([hidden]) {
  flex: var(--arc-button-flex, unset);
  display: var(--arc-button-display, inline-flex);
  align-items: center;
  justify-content: center;
}

@keyframes arc-spinner-rotate {
  to {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}

}
`,ot=h(sa,["circle","square","narrow"]),lt=h(z,["xxl","xl","lg","md","sm"]),st=h(j,["hug","fill","icon"]),dt=h(E,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),ut=(0,n.jsxs)("svg",{viewBox:"0 0 100 100","arc-spinner":"",children:[(0,n.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,n.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}),aa=(0,x.forwardRef)(({children:r,...a},t)=>{const{iconEnd:e,iconStart:i,icon:c,text:o,isActive:d,isDisabled:l,isProcessing:s,tag:u,href:p,type:b,title:m,layout:w,shape:_,size:$="lg",variant:I="primary",_isCustom:k,...y}=a,F=w==="icon",D=u??(p?"a":"button"),za=D==="button"?b||"button":void 0,Y=s||l||a.disabled,br=i||c,mr=!F&&(r||o),tn=!F&&e;return(0,n.jsxs)(D,{...y,ref:t,"arc-button":k?"custom":"",href:p||void 0,title:m||void 0,type:za,"data-layout":w,"data-shape":k?void 0:_,"data-size":k?void 0:$,"data-variant":k?void 0:I,"is-active":d?"":void 0,"is-processing":s?"":void 0,"is-disabled":Y?"":void 0,"aria-disabled":Y||void 0,children:[(0,n.jsxs)("span",{"arc-button-content":"",children:[!!br&&(0,n.jsx)(f,{"arc-button-icon":"",icon:br}),!!mr&&(0,n.jsx)("span",{"arc-button-label":"",children:mr}),!!tn&&(0,n.jsx)(f,{"arc-button-icon":"",icon:e})]}),s&&ut]})});aa.displayName="ArcButton",g("ArcButton",ct);const pt=(r,a)=>{if(!r||!a)return;const t=r.getBoundingClientRect(),e=document.getElementById(a);e&&(e.style.top=`${t.bottom+window.scrollY}px`,e.style.left=`${t.right+window.scrollX}px`)},ht=({children:r,popovertarget:a,popovertargetaction:t,...e})=>{const i=(0,x.useRef)(null),c=()=>pt(i.current,a);return(0,x.useEffect)(()=>(window.addEventListener("scroll",c),window.addEventListener("resize",c),()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",c)}),[a]),(0,n.jsx)(aa,{...e,ref:i,"aria-haspopup":"true",popovertarget:a,popovertargetaction:t||void 0,onClick:o=>{o.stopPropagation(),c(),e.onClick?.(o)},children:r})},vt=v`
@layer arc-components {

[arc-popover] {
  translate: var(--arc-popover-translate, -50% -50%);
  inset: var(--arc-popover-inset, auto);
  position: var(--arc-popover-position, absolute);

  font-size: var(--arc-popover-font-size, var(--arc-font-size-14));

  width: var(--arc-popover-width, auto);
  height: var(--arc-popover-height, auto);
  max-width: var(--arc-popover-max-width, 65vw);
  max-height: var(--arc-popover-max-height, 35vh);
  border-radius: var(--arc-popover-border-radius, var(--arc-border-radius-lg));
  box-shadow: var(--arc-popover-box-shadow, var(--arc-shadow-xl));

  border: var(--arc-popover-border, none);
  margin: var(--arc-popover-margin, auto);
  padding: var(--arc-popover-padding, 0);

  color: var(--arc-popover-color, var(--arc-color-mono-white));
  background: var(--arc-popover-background, var(--arc-color-alpha-black-90));

  overscroll-behavior: contain;
}

}
`,bt=({popover:r,tag:a="div",...t})=>(0,n.jsx)(a,{...t,"arc-popover":"",popover:r||""});g("ArcPopover",vt);const mt=v`
@layer arc-components {

[arc-avatar-overflow] {

  /* Inter-Component Communication • ArcPopover --------------------• */

  --arc-popover-translate: -100% 0.5em;
  --arc-popover-width: max-content;
  --arc-popover-max-width: 18em;

  /* Neutral/Anonymous avatars -------------------------------------• */

  --arc-internal-neutral-color: var(--arc-color-alpha-white-70);
  --arc-internal-neutral-background: var(--arc-color-alpha-white-20);

  [data-element="list"] {
    margin: 0;
    padding: var(--arc-space-0-5) var(--arc-space-0);
  }

  [data-element="list-item"] {
    display: flex;
    align-items: center;
    gap: var(--arc-space-0-75);
    padding: var(--arc-space-0-5) var(--arc-space-1);
  }

  /* Sizes ---------------------------------------------------------• */
  ${ya}

  [arc-avatar] {
    ${Qa}
  }
}

}
`,gt=r=>(0,n.jsx)("li",{...r,"data-element":"list-item"}),ft=({children:r,id:a,size:t="sm",overflowCount:e=0,shouldShowOverflow:i=!1,...c})=>{const o=Math.min(e,999),d=(0,x.useMemo)(()=>a||B("arc-avatar-overflow"),[a]),l=x.Children.toArray(r);return(0,n.jsxs)(n.Fragment,{children:[o>0&&(0,n.jsx)(wa,{title:`+${o}`,children:(0,n.jsx)(ht,{popovertarget:d,disabled:!i,"data-element":"counter","data-color":"black","data-num-length":o?.toString().length,children:`+${o}`})}),i&&(0,n.jsx)(bt,{...c,id:d,"arc-avatar-overflow":"","data-size":t,children:(0,n.jsx)("ul",{"data-element":"list",children:l.map((s,u)=>(0,n.jsx)(gt,{children:s},u))})})]})};g("ArcAvatarOverflow",mt);const xt=v`
@layer arc-components {

[arc-icon-text] {

  /* VARIANTS --------------------------------------------------------• */

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    --arc-internal-icontext-text-color: currentcolor;
    --arc-internal-icontext-icon-color: currentcolor;
  }

  &[data-variant=primary] {
    --arc-internal-icontext-text-color: var(--arc-color-text-primary);
    --arc-internal-icontext-icon-color: var(--arc-color-icon-primary);
  }

  &[data-variant=secondary] {
    --arc-internal-icontext-text-color: var(--arc-color-text-secondary);
    --arc-internal-icontext-icon-color: var(--arc-color-icon-secondary);
  }

  &[data-variant=inverse] {
    --arc-internal-icontext-text-color: var(--arc-color-text-inverse);
    --arc-internal-icontext-icon-color: var(--arc-color-icon-inverse);
  }

  &[data-variant=brand] {
    --arc-internal-icontext-text-color: var(--arc-color-text-brand);
    --arc-internal-icontext-icon-color: var(--arc-color-icon-brand);
  }

  &[data-variant=info] {
    --arc-internal-icontext-text-color: var(--arc-color-text-info);
    --arc-internal-icontext-icon-color: var(--arc-color-icon-info);
  }

  &[data-variant=success] {
    --arc-internal-icontext-text-color: var(--arc-color-text-success);
    --arc-internal-icontext-icon-color: var(--arc-color-icon-success);
  }

  &[data-variant=warning] {
    --arc-internal-icontext-text-color: var(--arc-color-text-warning);
    --arc-internal-icontext-icon-color: var(--arc-color-icon-warning);
  }

  &[data-variant=critical] {
    --arc-internal-icontext-text-color: var(--arc-color-text-critical);
    --arc-internal-icontext-icon-color: var(--arc-color-icon-critical);
  }


  /* SIZES -----------------------------------------------------------• */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    --arc-inherit-icontext-font-size: unset;
    --arc-inherit-icontext-gap: 0.375em; /* 6px @ 100%/16px base */
  }

  &[data-size=md] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-icontext-gap: 4;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-icontext-gap: 4;
  }


  /* COMPUTED ------------------------------------------------------• */
  & {
    --arc-modifier-px: var(--arc-icon-text-modifier, var(--arc-modifier) * 1px);
    --arc-modifier-em: var(--arc-icon-text-modifier, var(--arc-modifier) * 1em);

    --arc-computed-icontext-font-size: var(--arc-inherit-icontext-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-icontext-gap: max(var(--arc-space-0-5), var(--arc-inherit-icontext-gap, calc(var(--arc-internal-icontext-gap) / var(--arc-modifier-em))));

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-svg-align-self: flex-start; /** ArcIcon • align-self for SVGs */
    --arc-icon-color: var(--arc-icon-text-icon-color, var(--arc-internal-icontext-icon-color)); /** ArcIcon • color */

    &[data-layout=inline] {
      --arc-icon-svg-height: 0.9lh; /* ArcIcon • adjust height of SVGs for inline layout */
    }
  }

}


/* CORE STYLES -----------------------------------------------------• */

[arc-icon-text] {
  position: var(--arc-icon-text-position, relative);
  font-size: var(--arc-icon-text-font-size, var(--arc-computed-icontext-font-size));
  color: var(--arc-icon-text-text-color, var(--arc-internal-icontext-text-color));

  &[data-layout=gutter] { /* @default */
    display: inline-flex;
    align-items: var(--arc-icon-text-align-items, first baseline);
    gap: var(--arc-icon-text-gap, var(--arc-computed-icontext-gap));

    &[data-is-flipped] {
      flex-direction: row-reverse;
    }

    /* Truncation Support */
    overflow: var(--arc-icon-text-overflow, unset);

    [data-element=text] {
      overflow: var(--arc-icon-text-overflow, unset);
      text-overflow: var(--arc-icon-text-text-overflow, unset);
      white-space: var(--arc-icon-text-white-space, unset);
    }
  }

  &[data-layout=inline] {
    display: inline;

    [data-element=icon] + [data-element=text] {
      margin-inline-start: var(--arc-icon-text-gap, var(--arc-computed-icontext-gap));
    }

    [data-element=text]:has(+ [data-element=icon]) {
      margin-inline-end: var(--arc-icon-text-gap, var(--arc-computed-icontext-gap));
    }
  }

  [data-element=text] {
    position: relative;
    hyphens: auto;
  }
}

}
`,yt=h(z,["inherit","md","sm"]),wt=h(j,["gutter","inline"]),kt=h(E,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),ra=({children:r,icon:a,iconSize:t,text:e,size:i="inherit",tag:c="span",variant:o="inherit",layout:d="gutter",isFlipped:l=!1,...s})=>{const u=r||e,p=!!a&&(!l||d==="gutter"),b=!!a&&!!u&&l&&d==="inline";return(0,n.jsxs)(c,{...s,"arc-icon-text":"","data-is-flipped":l?"":void 0,"data-variant":o,"data-layout":d,"data-size":i,children:[p&&(0,n.jsx)(f,{"data-element":"icon",icon:a,size:t}),u&&(0,n.jsx)("span",{"data-element":"text",children:u}),b&&(0,n.jsx)(f,{"data-element":"icon",icon:a,size:t})]})};g("ArcIconText",xt);const At=v`
@layer arc-components {

[arc-badge-wrapper] {

  /* VARIANTS ------------------------------------------------------• */

  &:has(>[data-variant=brand-black]) {
    --arc-internal-badge-background-high: var(--arc-color-mono-black);
    --arc-internal-badge-background-low: var(--arc-color-neutral-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-text-primary);
  }

  /** @default */
  &:has(>[data-variant=brand-blue]) {
    --arc-internal-badge-background-high: var(--arc-color-brand-medium);
    --arc-internal-badge-background-low: var(--arc-color-blue-100);
    --arc-internal-badge-color-high: var(--arc-color-text-primary);
    --arc-internal-badge-color-low: var(--arc-color-blue-700);
  }

  &:has(>[data-variant=neutral]) {
    --arc-internal-badge-background-high: var(--arc-color-neutral-600);
    --arc-internal-badge-background-low: var(--arc-color-neutral-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-neutral-800);
  }

  &:has(>[data-variant=info]) {
    --arc-internal-badge-background-high: var(--arc-color-info-dark);
    --arc-internal-badge-background-low: var(--arc-color-purple-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-info-heavy);
  }

  &:has(>[data-variant=success]) {
    --arc-internal-badge-background-high: var(--arc-color-success-dark);
    --arc-internal-badge-background-low: var(--arc-color-green-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-success-heavy);
  }

  &:has(>[data-variant=warning]) {
    --arc-internal-badge-background-high: var(--arc-color-warning-root);
    --arc-internal-badge-background-low: var(--arc-color-yellow-100);
    --arc-internal-badge-color-high: var(--arc-color-text-primary);
    --arc-internal-badge-color-low: var(--arc-color-warning-heavy);
  }

  &:has(>[data-variant=critical]) {
    --arc-internal-badge-background-high: var(--arc-color-critical-root);
    --arc-internal-badge-background-low: var(--arc-color-red-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-critical-heavy);
  }

  &:has(>[data-variant=ai]) {
    --arc-internal-badge-background-high: var(--arc-gradient-ai-200);
    --arc-internal-badge-background-low: var(--arc-gradient-ai-200);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-text-inverse);
    --arc-internal-badge-mix-blend-mode-low: normal;
    --arc-internal-badge-mix-blend-mode-high: normal;
  }

  &:has(>[data-variant=overlay-light]) {
    --arc-internal-badge-background-high: var(--arc-color-alpha-white-80);
    --arc-internal-badge-background-low: var(--arc-color-alpha-white-20);
    --arc-internal-badge-color-high: var(--arc-color-text-primary);
    --arc-internal-badge-color-low: var(--arc-color-text-inverse);
    --arc-internal-badge-mix-blend-mode-low: normal;
  }

  &:has(>[data-variant=overlay-dark]) {
    --arc-internal-badge-background-high: var(--arc-color-alpha-black-70);
    --arc-internal-badge-background-low: var(--arc-color-alpha-black-40);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-text-inverse);
    --arc-internal-badge-mix-blend-mode-low: normal;
  }


  /* CONTRASTS -----------------------------------------------------• */

  &:has(>[data-contrast=high]) {
    --arc-internal-badge-color: var(--arc-internal-badge-color-high);
    --arc-internal-badge-background: var(--arc-internal-badge-background-high);
    --arc-internal-badge-mix-blend-mode: var(--arc-internal-badge-mix-blend-mode-high, normal);
  }

  &:has(>[data-contrast=low]) {
    --arc-internal-badge-color: var(--arc-internal-badge-color-low);
    --arc-internal-badge-background: var(--arc-internal-badge-background-low);
    --arc-internal-badge-mix-blend-mode: var(--arc-internal-badge-mix-blend-mode-low, multiply);
  }


  /* SIZES ---------------------------------------------------------• */

  &:has(>[data-size=lg]) {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-badge-font-size-uppercase: 12;
    --arc-internal-badge-size: 24;
    --arc-internal-badge-min-size: 30;
    --arc-internal-badge-padding-inline: 8;
    --arc-internal-badge-border-radius: 4;
  }

  &:has(>[data-size=md], >[data-size=inherit]) {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-badge-font-size-uppercase: 10;
    --arc-internal-badge-size: 20;
    --arc-internal-badge-min-size: 24;
    --arc-internal-badge-padding-inline: 6;
    --arc-internal-badge-border-radius: 4;
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    --arc-inherit-badge-font-size: 0.75em;
    --arc-inherit-badge-min-size: 1.5em;
  }

  &:has(>[data-size=sm]) {
    --arc-modifier: 10; /* unitless, desired font size at 100% */
    --arc-internal-badge-font-size-uppercase: 8;
    --arc-internal-badge-size: 16;
    --arc-internal-badge-min-size: 18;
    --arc-internal-badge-padding-inline: 4;
    --arc-internal-badge-border-radius: 4;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-badge-font-size: var(--arc-inherit-badge-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-badge-font-size-uppercase: calc(var(--arc-internal-badge-font-size-uppercase) / var(--arc-modifier-em));
    --arc-computed-badge-size: calc(var(--arc-internal-badge-size) / var(--arc-modifier-em));
    --arc-computed-badge-padding-inline: calc(var(--arc-internal-badge-padding-inline) / var(--arc-modifier-em));
    --arc-computed-badge-border-radius: calc(var(--arc-internal-badge-border-radius) / var(--arc-modifier-em));
    --arc-computed-badge-min-width: var(--arc-inherit-badge-min-size, calc(var(--arc-internal-badge-min-size) * 1px));

    --arc-internal-badge-min-width: min-content;

    /* Inter-Component Communication • ArcIconText -------------------• */

    --arc-icon-text-modifier: var(--arc-modifier);
    --arc-icon-text-align-items: center;
  }


  /* LAYOUTS -------------------------------------------------------• */

  &:has(>[data-layout=fill]) {
    --arc-internal-badge-flex: 1;
    --arc-internal-badge-display: flex;
    --arc-internal-badge-min-width: var(--arc-computed-badge-min-width);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-badge-wrapper]:not([hidden]) {
  flex: var(--arc-badge-flex, var(--arc-internal-badge-flex, unset));
  align-self: var(--arc-badge-align-self, flex-start);
  display: var(--arc-internal-badge-display, inline-flex);
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;

  &:has(>[data-is-flexible]) {
    min-width: var(--arc-badge-min-width, var(--arc-internal-badge-min-width));
  }
}


[arc-badge] {
  font-size: var(--arc-badge-font-size, var(--arc-computed-badge-font-size));
  font-weight: var(--arc-font-weight-600);

  flex: 1;
  display: var(--arc-internal-badge-display, inline-flex);
  align-items: center;
  justify-content: center;
  height: var(--arc-computed-badge-size); /** @computed • height */
  padding-inline: var(--arc-computed-badge-padding-inline); /** @computed • padding-inline */

  overflow: hidden;
  white-space: nowrap;
  line-height: 2;

  color: var(--arc-badge-color, var(--arc-internal-badge-color));
  background: var(--arc-badge-background, var(--arc-internal-badge-background));
  border-radius: var(--arc-computed-badge-border-radius); /** @computed • border-radius */
  mix-blend-mode: var(--arc-badge-mix-blend-mode, var(--arc-internal-badge-mix-blend-mode));

  &[data-is-uppercase] [data-element=text] {
    text-transform: uppercase;
    font-size: var(--arc-computed-badge-font-size-uppercase); /** @computed • font-size */
  }
}

}
`,zt=h(z,["inherit","lg","md","sm"]),Ct=h(j,["hug","fill"]),St=["high","low"],_t=h(E,["brand-black","brand-blue","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),$t=({children:r,icon:a,text:t,isFlipped:e,isFlexible:i,isUppercase:c,variant:o="brand-blue",size:d="inherit",layout:l="hug",contrast:s="high",...u})=>{const p=r||(0,n.jsx)(ra,{icon:a,text:t,isFlipped:e,layout:"gutter"}),b=l==="fill"&&i;return(0,n.jsx)("span",{...u,"arc-badge-wrapper":"",children:(0,n.jsx)("span",{"arc-badge":"","data-contrast":s,"data-variant":o,"data-layout":l,"data-size":d,"data-is-flexible":b?"":void 0,"data-is-uppercase":c?"":void 0,children:p})})};g("ArcBadge",At);const Et=v`
@layer arc-components {

[arc-badge-count] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=neutral] { /** @default */
    --arc-internal-badgecount-color: var(--arc-color-neutral-800);
    --arc-internal-badgecount-background: var(--arc-color-neutral-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=brand] {
    --arc-internal-badgecount-color: var(--arc-color-blue-700);
    --arc-internal-badgecount-background: var(--arc-color-blue-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=success] {
    --arc-internal-badgecount-color: var(--arc-color-success-heavy);
    --arc-internal-badgecount-background: var(--arc-color-green-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=warning] {
    --arc-internal-badgecount-color: var(--arc-color-warning-heavy);
    --arc-internal-badgecount-background: var(--arc-color-yellow-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=critical] {
    --arc-internal-badgecount-color: var(--arc-color-text-inverse);
    --arc-internal-badgecount-background: var(--arc-color-critical-root);
    --arc-internal-badgecount-mix-blend-mode: normal;
  }

  &[data-variant=inverse] {
    --arc-internal-badgecount-color: var(--arc-color-text-primary);
    --arc-internal-badgecount-background: var(--arc-color-mono-white);
    --arc-internal-badgecount-mix-blend-mode: normal;
  }


  /* SIZES ---------------------------------------------------------• */

  &[data-size=lg] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-badgecount-size: 24;
    --arc-internal-badgecount-padding-inline: 4;
  }

  &:is([data-size=md], [data-size=inherit]) {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-badgecount-size: 20;
    --arc-internal-badgecount-padding-inline: 4;
  }

  &[data-size=sm] {
    --arc-modifier: 10; /* unitless, desired font size at 100% */
    --arc-internal-badgecount-size: 16;
    --arc-internal-badgecount-padding-inline: 4;
  }

  &[data-size=inherit] { /** @default • scalable based on 'md' size */
    --arc-inherit-badgecount-font-size: 0.75em;
  }


  /* SHAPES ------------------------------------------------------• */

  &[data-shape=square] {
    --arc-internal-badgecount-border-radius: 4;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-badgecount-font-size: var(--arc-inherit-badgecount-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-badgecount-size: calc(var(--arc-internal-badgecount-size) / var(--arc-modifier-em));
    --arc-computed-badgecount-padding-inline: calc(var(--arc-internal-badgecount-padding-inline) / var(--arc-modifier-em));
    --arc-computed-badgecount-border-radius: calc(var(--arc-internal-badgecount-border-radius) / var(--arc-modifier-em));
  }

  &[data-shape=circle] {
    --arc-computed-badgecount-border-radius: var(--arc-border-radius-pill);
  }
}


/* CORE STYLES ------------------------------------------------------ */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, var(--arc-internal-badgecount-mix-blend-mode));
  font-size: var(--arc-badge-count-font-size, var(--arc-computed-badgecount-font-size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--arc-computed-badgecount-size); /** @computed • height */
  min-width: var(--arc-computed-badgecount-size); /** @computed • min-width */
  padding-inline: var(--arc-computed-badgecount-padding-inline); /** @computed • padding-inline */

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(--arc-internal-badgecount-color));
  background: var(--arc-badge-count-background, var(--arc-internal-badgecount-background));
  border-radius: var(--arc-computed-badgecount-border-radius); /** @computed • border-radius */
}

`,jt=h(z,["inherit","lg","md","sm"]),Tt=h(E,["neutral","brand","critical","warning","success","inverse"]),It=h(sa,["square","circle"]),Lt=({children:r,text:a,variant:t="neutral",size:e="inherit",shape:i="square",...c})=>{const o=r||a;return(0,n.jsx)("span",{...c,"arc-badge-count-wrapper":"",children:(0,n.jsx)("span",{"arc-badge-count":"","data-variant":t,"data-shape":i,"data-size":e,children:o})})};g("ArcBadgeCount",Et);const Rt=v`
@layer arc-components {

[arc-label] {

  /* Inter-Component Communication ---------------------------------• */

  /* also to: ArcLabelContent */
  --arc-internal-label-opacity: var(--arc-label-opacity, unset);
  --arc-internal-label-opacity-disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-60));


  /* Internal STYLES -----------------------------------------------• */

  --arc-internal-label-cursor: var(--arc-label-cursor, pointer);
  --arc-internal-label-cursor-disabled: var(--arc-label-cursor-disabled, not-allowed);

  &:has(:disabled) {
    --arc-internal-label-cursor: var(--arc-internal-label-cursor-disabled);
    --arc-internal-label-opacity: var(--arc-internal-label-opacity-disabled);
  }

  &[data-layout=fill] {
    --arc-internal-label-display: flex;
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-label]:not([hidden]) {
  display: var(--arc-internal-label-display, inline-flex);
  align-items: var(--arc-label-align-items, baseline);
  gap: var(--arc-label-gap, max(var(--arc-space-1), 0.5em));
  cursor: var(--arc-internal-label-cursor);
}

}
`,Pt=h(j,["hug","fill"]),N=({layout:r,...a})=>(0,n.jsx)("label",{...a,"arc-label":"","data-layout":r});g("ArcLabel",Rt);const Ot=v`
@layer arc-components {

[arc-label-content] {
  opacity: var(--arc-label-opacity, var(--arc-internal-label-opacity, unset));
  transition: var(--arc-label-transition, opacity 100ms ease-out);
  user-select: var(--arc-label-user-select, none);
  -webkit-user-select: var(--arc-label-user-select, none);
}

}
`,U=r=>(0,n.jsx)("span",{...r,"arc-label-content":""});g("LabelContent",Ot);const Bt={checkbox:"checkbox",radio:"radio",switch:"radio"},la=({id:r,indeterminate:a,type:t,onChange:e,...i})=>{const c=t==="checkbox"&&!!a,o=(0,x.useRef)(null),d=(0,x.useMemo)(()=>r||B(`arc-${t}`),[r]),l=s=>u=>{if(!(u?.target instanceof HTMLInputElement))return;const p={checked:u?.target.checked,indeterminate:u?.target?.indeterminate,name:u?.target?.name,value:i?.value};s?.(p,u)};return(0,x.useEffect)(()=>{o.current?.type==="checkbox"&&(o.current.indeterminate=!!a)},[a]),(0,n.jsx)("input",{...i,id:d,ref:o,type:Bt[t],"arc-input-type":t,"aria-disabled":i?.disabled||void 0,"data-is-disabled":i?.disabled||void 0,"data-is-checked":i?.checked||void 0,"data-is-indeterminate":c||void 0,onChange:l(e)})},Mt=v`
@layer arc-components {

[arc-input-mask] {

  /* Inter-Component Communication ---------------------------------• */

  --arc-icon-size: var(--arc-internal-inputmask-icon-size); /* ArcIcon */


  /* --arc-internal- Tokens • NOT FOR CONSUMER USE -----------------• */

  --arc-internal-inputmask-border-width: max(var(--arc-border-width-sm), 0.0625em);
  --arc-internal-inputmask-border: var(--arc-internal-inputmask-border-width) solid var(--arc-internal-inputmask-border-color);


  &:has(:disabled) {
    --arc-internal-inputmask-cursor: not-allowed;
  }

  &:has(:focus:focus-visible) {
    --arc-internal-inputmask-outline: var(--arc-internal-inputmask-border-width) solid var(--arc-color-border-focus);
  }
}

[arc-input-mask-wrapper] {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 1lh;
}

[arc-input-mask] {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--arc-internal-inputmask-width);
  height: var(--arc-internal-inputmask-height);
  opacity: var(--arc-internal-inputmask-opacity, var(--arc-alpha-100));

  color: var(--arc-internal-inputmask-color, transparent);
  background: var(--arc-internal-inputmask-background);
  border: var(--arc-internal-inputmask-border);
  border-radius: var(--arc-internal-inputmask-border-radius);
  text-shadow: var(--arc-internal-inputmask-text-shadow, unset);
  translate: var(--arc-internal-inputmask-translate, unset);

  outline: var(--arc-internal-inputmask-outline, none);
  outline-offset: var(--arc-internal-inputmask-border-width);

  transition-property: opacity, background, color, border-color, outline;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;
  transition-behavior: allow-discrete;

  [arc-input-type] {
    flex: none;
    outline: none;
    appearance: none;
    position: absolute;
    inset: calc(var(--arc-internal-inputmask-border-width) * -1);
    cursor: var(--arc-internal-inputmask-cursor, pointer);
    margin: 0;
    padding: 0;
    border: 0;
    z-index: var(--arc-internal-input-z-index, unset);
  }

}

}
`,ka=({type:r,...a})=>(0,n.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,n.jsx)("span",{...a,"arc-input-mask":r})});g("ArcBooleanInputMask",Mt);const Ht=v`
@layer arc-components {

[arc-checkbox] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=inherit] { /* font-size base or parent context @ 100% */
    --arc-inherit-checkbox-font-size: 1em;
    --arc-inherit-checkbox-gap: 0.5em;
    --arc-inherit-checkbox-size: 1.125em; /* 18px @ 100% */
    --arc-inherit-checkbox-icon-size: 0.625em; /* 10px @ 100% */
  }

  &[data-size=md] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-checkbox-gap: 8;
    --arc-internal-checkbox-size: 18;
    --arc-internal-checkbox-icon-size: 10;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-checkbox-gap: 6;
    --arc-internal-checkbox-size: 16;
    --arc-internal-checkbox-icon-size: 10;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-checkbox-font-size: var(--arc-inherit-checkbox-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-checkbox-gap:  var(--arc-inherit-checkbox-gap, calc(var(--arc-internal-checkbox-gap) / var(--arc-modifier-em)));
    --arc-computed-checkbox-size:  var(--arc-inherit-checkbox-size, calc(var(--arc-internal-checkbox-size) / var(--arc-modifier-em)));
    --arc-computed-checkbox-icon-size:  var(--arc-inherit-checkbox-icon-size, calc(var(--arc-internal-checkbox-icon-size) / var(--arc-modifier-em)));


    /* Inter-Component Communication -------------------------------• */

    /* for: ArcBooleanInputMask */
    --arc-internal-inputmask-color: var(--arc-color-alpha-white-0);
    --arc-internal-inputmask-background: var(--arc-color-alpha-white-50);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-40);
    --arc-internal-inputmask-border-radius: 0.25em; /* 4px @ 100% */
    --arc-internal-inputmask-size: var(--arc-computed-checkbox-size);
    --arc-internal-inputmask-icon-size: var(--arc-computed-checkbox-icon-size);
    --arc-internal-inputmask-width: var(--arc-computed-checkbox-size);
    --arc-internal-inputmask-height: var(--arc-computed-checkbox-size);
    --arc-internal-inputmask-translate: 0 -0.0625em; /* 1px @ 100% */
    --arc-internal-inputmask-text-shadow: 0 0.025em 0 currentcolor;

    /* for: ArcLabel */
    --arc-label-gap: var(--arc-computed-checkbox-gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                       to stay inline with the label text
                                       regardless of applied line-height */
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-checkbox]:not([hidden]) {
  display: var(--arc-checkbox-display, inline-flex);
  font-size: var(--arc-computed-checkbox-font-size);
  min-height: 1lh;

  &:not(:has(:disabled, :checked, :indeterminate)) {
    &:hover {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-10);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);
    }
  }

  &:has(:disabled) {
    &:not(:has(:checked, :indeterminate)) {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
    }
  }

  &:has(:checked, :indeterminate) {
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-opacity: var(--arc-alpha-60);
    }

    &[data-variant=primary] {
      --arc-internal-inputmask-color: var(--arc-color-alpha-white-100);
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-100);

      &:has(:disabled) {
        --arc-internal-inputmask-opacity: var(--arc-alpha-30);
      }
    }

    &[data-variant=secondary] {
      --arc-internal-inputmask-color: var(--arc-color-alpha-black-100);
      --arc-internal-inputmask-background: var(--arc-color-alpha-white-50);

      &:has(:disabled) {
        --arc-internal-inputmask-color: var(--arc-color-alpha-black-30);
        --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
      }
    }
  }
}

}
`,Vt=h(j,["hug","fill"]),Nt=h(z,["inherit","md","sm"]),Ut=h(E,["primary","secondary"]),sr=({children:r,label:a,layout:t,size:e="md",variant:i="primary",useMask:c=!0,...o})=>{const{className:d,title:l,...s}=o,u={className:d,title:l},p=r??a,b=(0,n.jsx)(la,{...s,type:"checkbox"}),m=c&&(0,n.jsxs)(ka,{type:"checkbox",children:[b,(0,n.jsx)(f,{icon:s?.indeterminate?"fa-solid fa-minus fa-fw":"fa-solid fa-check fa-fw"})]}),w=!!p&&(0,n.jsxs)(N,{layout:t,children:[m||b,(0,n.jsx)(U,{children:p})]});return(0,n.jsx)("span",{...u,"arc-checkbox":"","data-size":e,"data-variant":i,children:w||m||b})};g("ArcCheckbox",Ht);const Zt=v`
@layer arc-components {

[arc-checkbox-bar] {

  /* --arc-internal/modifier/computed • NOT FOR CONSUMER USE -------• */

  --arc-internal-cb-space: 2;
  --arc-internal-cb-space-subtract: 0;
  --arc-internal-cb-border-radius: 8;
  --arc-internal-cb-background: var(--arc-color-alpha-black-0);

  --arc-internal-cbo-color: var(--arc-color-text-secondary);
  --arc-internal-cbo-background: var(--arc-color-alpha-white-0);
  --arc-internal-cbo-border-color: var(--arc-color-alpha-black-0);
  --arc-internal-cbo-border-width: 1;
  --arc-internal-cbo-border-width-subtract: 2;

  --arc-modifier: var(--arc-checkboxbar-modifier, 14); /* used for size calculations */
  --arc-modifier-px: var(--arc-modifier) * 1px;
  --arc-modifier-em: var(--arc-modifier) * 1em;


  /* SIZES ---------------------------------------------------------- */

  &[data-size=lg] { /* @default */
    --arc-internal-cbo-size: 40;
    --arc-internal-cbo-icon-padding: 8;
    --arc-internal-cbo-text-padding: 12;
  }

  &[data-size=md] {
    --arc-internal-cbo-size: 32;
    --arc-internal-cbo-icon-padding: 6;
    --arc-internal-cbo-text-padding: 8;
  }


  /* COMPUTED --------------------------------------------------------- */

  & {
    --arc-computed-cb-font-size: calc(var(--arc-modifier-px)); /* 14px */
    --arc-computed-cb-space: calc(var(--arc-internal-cb-space) / var(--arc-modifier-em));
    --arc-computed-cb-border-radius: calc(var(--arc-internal-cb-border-radius) / var(--arc-modifier-em));

    --arc-computed-cbo-size: calc((var(--arc-internal-cbo-size) - var(--arc-internal-cb-space-subtract)) / var(--arc-modifier-em));
    --arc-computed-cbo-line-height: calc((var(--arc-internal-cbo-size) - var(--arc-internal-cbo-border-width-subtract)) / var(--arc-modifier));
    --arc-computed-cbo-border-radius: calc((var(--arc-internal-cb-border-radius) - var(--arc-internal-cb-space)) / var(--arc-modifier-em));
    --arc-computed-cbo-border-width: calc(var(--arc-internal-cbo-border-width) / var(--arc-modifier-em));
    --arc-computed-cbo-icon-padding: calc(var(--arc-internal-cbo-icon-padding) / var(--arc-modifier-em));
    --arc-computed-cbo-text-padding: calc(var(--arc-internal-cbo-text-padding) / var(--arc-modifier-em));
  }


  /* LAYOUTS -------------------------------------------------------- */

  &[data-layout=hug] { /* @default */
    --arc-internal-cb-display: inline-flex;
  }

  &[data-layout=fill] {
    --arc-internal-cb-display: flex;
  }
}


[arc-checkbox-bar-option] {

  /* Inter-Component Communication ---------------------------------• */

  --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                       allows long label text to wrap
                                       without compromising option's
                                       visual border */


  /* STATES --------------------------------------------------------- */

  &:not(:has(:disabled, :checked)) {
    &:hover {
      --arc-internal-cbo-color: var(--arc-color-text-secondary);
      --arc-internal-cbo-background: var(--arc-color-alpha-black-05);
      --arc-internal-cbo-border-color: var(--arc-color-alpha-black-0);
    }
  }

  &:has(:checked) {
    --arc-internal-cbo-color: var(--arc-color-text-primary);
    --arc-internal-cbo-background: var(--arc-color-alpha-black-05);
    --arc-internal-cbo-border-color: var(--arc-color-alpha-black-0);
    --arc-internal-cbo-font-weight: var(--arc-font-weight-500);
  }

  &:has(:focus-within:focus-visible) {
    --arc-internal-cbo-outline: var(--arc-computed-cbo-border-width) solid var(--arc-color-border-focus);
  }
}


/* CORE STYLES ------------------------------------------------------ */

[arc-checkbox-bar-option] {
  flex: 1 1 auto;
  display: flex;
  position: relative;
}

[arc-checkbox-bar] {
  font-size: var(--arc-computed-cb-font-size);
  display: var(--arc-internal-cb-display);
  gap: var(--arc-computed-cb-space);
  border-radius: var(--arc-computed-cb-border-radius);
  background: var(--arc-internal-cb-background);

  padding: 0;
  margin: 0;


  /* Inter-Component Communication ---------------------------------• */

  [arc-input-type=checkbox] {
    opacity: var(--arc-alpha-0);
    appearance: none;
    pointer-events: none;
    position: absolute;
  }

  [arc-checkbox] {
    flex: 1;
    display: flex;
    justify-content: center;
    border-radius: var(--arc-computed-cbo-border-radius);
    outline: var(--arc-internal-cbo-outline, none);
    outline-offset: var(--arc-computed-cbo-border-width);
  }

  [arc-label] {
    flex: 1;
    line-height: var(--arc-computed-cbo-line-height);
    overflow: hidden;
  }

  [arc-label-content] {
    flex: 1;
    display: flex;
    align-items: safe center;
    justify-content: center;

    height: var(--arc-computed-cbo-size);
    min-width: var(--arc-computed-cbo-size);

    border-radius: var(--arc-computed-cbo-border-radius);
    border: var(--arc-computed-cbo-border-width) solid var(--arc-internal-cbo-border-color);
    background: var(--arc-internal-cbo-background);
    color: var(--arc-internal-cbo-color);
    font-weight: var(--arc-internal-cbo-font-weight, unset);

    transition-property: border, background, color, font-weight;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    &:has([data-element=text]) {
      padding: 0 var(--arc-computed-cbo-text-padding);
    }

    &:not(:has([data-element=text])) {
      padding: 0 var(--arc-computed-cbo-icon-padding);
    }
  }

  [arc-icon-text] [data-element] {
    min-width: min-content;
    overflow: hidden;
    overflow-wrap: break-word;
  }
}

}
`,Ft=h(j,["hug","fill"]),Dt=h(z,["lg","md"]),Yt=({children:r,label:a,icon:t,...e})=>{const i=r||(0,n.jsx)(ra,{icon:t,text:a});return(0,n.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":e?.checked||void 0,children:(0,n.jsx)(sr,{...e,label:i,layout:"fill",useMask:!1})})},Wt=({children:r,size:a="lg",layout:t="hug",...e})=>(0,n.jsx)("ul",{...e,"arc-checkbox-bar":"","data-size":a,"data-layout":t,role:"group",children:r});g("ArcCheckboxBar",Zt);const qt=r=>(0,n.jsx)(aa,{layout:"icon",size:"md",variant:"tertiary",...r}),Kt=v`
@layer arc-components {

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    --arc-internal-link-icon-color: currentcolor;
    --arc-internal-link-icon-color-hover: color-mix(in srgb, currentcolor, transparent 38.75%);
    --arc-internal-link-icon-color-disabled: color-mix(in srgb, currentcolor, transparent 70%);

    --arc-internal-link-text-color: currentcolor;
    --arc-internal-link-text-color-hover: color-mix(in srgb, currentcolor, transparent 38.75%);
    --arc-internal-link-text-color-disabled: color-mix(in srgb, currentcolor, transparent 70%);

    --arc-internal-link-focus-color: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    --arc-internal-link-icon-color: var(--arc-color-icon-primary);
    --arc-internal-link-text-color: var(--arc-color-text-primary);
    --arc-internal-link-icon-color-hover: var(--arc-color-icon-primary-hover);
    --arc-internal-link-text-color-hover: var(--arc-color-text-primary-hover);
    --arc-internal-link-icon-color-disabled: var(--arc-color-icon-disabled);
    --arc-internal-link-text-color-disabled: var(--arc-color-text-disabled);
    --arc-internal-link-focus-color: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    --arc-internal-link-icon-color: var(--arc-color-icon-secondary);
    --arc-internal-link-text-color: var(--arc-color-text-secondary);
    --arc-internal-link-icon-color-hover: var(--arc-color-icon-secondary-hover);
    --arc-internal-link-text-color-hover: var(--arc-color-text-secondary-hover);
    --arc-internal-link-icon-color-disabled: var(--arc-color-icon-disabled);
    --arc-internal-link-text-color-disabled: var(--arc-color-text-disabled);
    --arc-internal-link-focus-color: var(--arc-color-border-focus);
  }

  &[data-variant=inverse] {
    --arc-internal-link-icon-color: var(--arc-color-icon-inverse);
    --arc-internal-link-text-color: var(--arc-color-text-inverse);
    --arc-internal-link-icon-color-hover: var(--arc-color-icon-inverse-hover);
    --arc-internal-link-text-color-hover: var(--arc-color-text-inverse-hover);
    --arc-internal-link-icon-color-disabled: var(--arc-color-icon-inverse-disabled);
    --arc-internal-link-text-color-disabled: var(--arc-color-text-inverse-disabled);
    --arc-internal-link-focus-color: var(--arc-color-border-focus-inverse);
  }

  & {
    --arc-internal-link-outline-size: 0.125em; /* 2px */
    --arc-internal-link-outline-offset: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    --arc-internal-link-text-color: var(--arc-link-color-hover, var(--arc-internal-link-text-color-hover));
    --arc-internal-link-icon-color: var(--arc-link-color-hover, var(--arc-internal-link-icon-color-hover));
  }

  &:where(:focus, :focus-within):focus-visible {
    --arc-internal-link-outline: var(--arc-internal-link-outline-size) solid var(--arc-link-color-focus, var(--arc-internal-link-focus-color));
    --arc-internal-link-outline-offset: var(--arc-internal-link-outline-offset);

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    --arc-internal-link-text-color: var(--arc-link-color-disabled, var(--arc-internal-link-text-color-disabled));
    --arc-internal-link-icon-color: var(--arc-link-color-disabled, var(--arc-internal-link-icon-color-disabled));
    --arc-internal-link-cursor: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(--arc-internal-link-icon-color));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(--arc-internal-link-text-color));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Gt=h(j,["gutter","inline"]),Jt=h(z,["inherit","md","sm"]),Qt=h(E,["inherit","primary","secondary","inverse"]),Xt=({children:r,layout:a="gutter",size:t="inherit",variant:e="inherit",tag:i="a",href:c,icon:o,text:d,isFlipped:l,isDisabled:s,...u})=>(0,n.jsx)(i,{...u,href:s?void 0:c,"arc-link":"","data-variant":e,"aria-disabled":s,"data-is-disabled":s?"":void 0,children:r||(0,n.jsx)(ra,{icon:o,text:d,size:t,layout:a,isFlipped:l})});g("ArcLink",Kt);const ae=v`
@layer arc-components {

[arc-radio] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=inherit] { /* font-size base or parent context @ 100% */
    --arc-inherit-radio-font-size: 1em;
    --arc-inherit-radio-gap: 0.5em;
    --arc-inherit-radio-size: 1.125em; /* 18px @ 100% */
    --arc-inherit-radio-icon-size: 0.625em; /* 10px @ 100% */
  }

  &[data-size=md] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-radio-gap: 8;
    --arc-internal-radio-size: 18;
    --arc-internal-radio-icon-size: 10;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-radio-gap: 6;
    --arc-internal-radio-size: 16;
    --arc-internal-radio-icon-size: 10;
  }

  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-radio-font-size: var(--arc-inherit-radio-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-radio-gap:  var(--arc-inherit-radio-gap, calc(var(--arc-internal-radio-gap) / var(--arc-modifier-em)));
    --arc-computed-radio-size:  var(--arc-inherit-radio-size, calc(var(--arc-internal-radio-size) / var(--arc-modifier-em)));
    --arc-computed-radio-icon-size:  var(--arc-inherit-radio-icon-size, calc(var(--arc-internal-radio-icon-size) / var(--arc-modifier-em)));


    /* Inter-Component Communication -------------------------------• */

    /* for: ArcBooleanInputMask */
    --arc-internal-inputmask-color: var(--arc-color-alpha-white-0);
    --arc-internal-inputmask-background: var(--arc-color-alpha-white-50);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-40);
    --arc-internal-inputmask-border-radius: var(--arc-border-radius-circle);
    --arc-internal-inputmask-size: var(--arc-computed-radio-size);
    --arc-internal-inputmask-icon-size: var(--arc-computed-radio-icon-size);
    --arc-internal-inputmask-width: var(--arc-computed-radio-size);
    --arc-internal-inputmask-height: var(--arc-computed-radio-size);
    --arc-internal-inputmask-translate: 0 -0.0625em; /* 1px @ 100% */


    /* for: ArcLabel */
    --arc-label-gap: var(--arc-computed-radio-gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                       to stay inline with the label text
                                       regardless of applied line-height */
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-radio]:not([hidden]) {
  display: var(--arc-radio-display, flex);
  font-size: var(--arc-computed-radio-font-size);
  min-height: 1lh;

  &:not(:has(:disabled, :checked)) {
    &:hover {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-10);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);
    }
  }

  &:has(:disabled) {
    &:not(:has(:checked)) {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
    }
  }

  &:has(:checked) {
    --arc-internal-inputmask-color: var(--arc-color-alpha-white-100);
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-100);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-opacity: var(--arc-alpha-60);
    }

    &:has(:disabled) {
      --arc-internal-inputmask-opacity: var(--arc-alpha-30);
    }
  }
}

}
`,re=h(j,["hug","fill"]),te=h(z,["inherit","md","sm"]),dr=({children:r,label:a,layout:t,size:e="md",useMask:i=!0,...c})=>{const{className:o,title:d,...l}=c,s={className:o,title:d},u=r??a,p=(0,n.jsx)(la,{...l,type:"radio"}),b=i&&(0,n.jsxs)(ka,{type:"radio",children:[p,(0,n.jsx)(f,{icon:"fa-solid fa-circle-small fa-fw"})]}),m=!!u&&(0,n.jsxs)(N,{layout:t,children:[b||p,(0,n.jsx)(U,{children:u})]});return(0,n.jsx)("span",{...s,"arc-radio":"","data-size":e,children:m||b||p})};g("ArcRadio",ae);const ee=v`
@layer arc-components {

[arc-radio-bar] {

  /* --arc-internal/modifier/computed • NOT FOR CONSUMER USE -------- */

  --arc-internal-rb-space: 2;
  --arc-internal-rb-space-subtract: 4;
  --arc-internal-rb-space-border-subtract: 6;
  --arc-internal-rb-border-radius: 8;
  --arc-internal-rb-background: var(--arc-color-alpha-black-03);

  --arc-internal-rbo-color: var(--arc-color-text-secondary);
  --arc-internal-rbo-background: var(--arc-color-alpha-white-0);
  --arc-internal-rbo-border-color: var(--arc-color-alpha-black-0);
  --arc-internal-rbo-border-width: 1;
  --arc-internal-rbo-border-width-subtract: 2;

  --arc-modifier: var(--arc-radiobar-modifier, 14); /* used for size calculations */
  --arc-modifier-px: var(--arc-modifier) * 1px;
  --arc-modifier-em: var(--arc-modifier) * 1em;


  /* SIZES ---------------------------------------------------------• */

  &[data-size=lg] { /** @default */
    --arc-internal-rbo-size: 40;
    --arc-internal-rbo-icon-padding: 8;
    --arc-internal-rbo-text-padding: 12;
  }

  &[data-size=md] {
    --arc-internal-rbo-size: 32;
    --arc-internal-rbo-icon-padding: 6;
    --arc-internal-rbo-text-padding: 8;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-computed-rb-font-size: calc(var(--arc-modifier-px)); /* 14px */
    --arc-computed-rb-space: calc(var(--arc-internal-rb-space) / var(--arc-modifier-em));
    --arc-computed-rb-border-radius: calc(var(--arc-internal-rb-border-radius) / var(--arc-modifier-em));

    --arc-computed-rbo-size: calc((var(--arc-internal-rbo-size) - var(--arc-internal-rb-space-subtract)) / var(--arc-modifier-em));
    --arc-computed-rbo-line-height: calc((var(--arc-internal-rbo-size) - var(--arc-internal-rb-space-border-subtract)) / var(--arc-modifier));
    --arc-computed-rbo-border-radius: calc((var(--arc-internal-rb-border-radius) - var(--arc-internal-rb-space)) / var(--arc-modifier-em));
    --arc-computed-rbo-border-width: calc(var(--arc-internal-rbo-border-width) / var(--arc-modifier-em));
    --arc-computed-rbo-icon-padding: calc(var(--arc-internal-rbo-icon-padding) / var(--arc-modifier-em));
    --arc-computed-rbo-text-padding: calc(var(--arc-internal-rbo-text-padding) / var(--arc-modifier-em));
  }


  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=hug] { /** @default */
    --arc-internal-rb-display: inline-flex;
  }

  &[data-layout=fill] {
    --arc-internal-rb-display: flex;
  }
}


[arc-radio-bar-option] {

  /* Inter-Component Communication ---------------------------------• */

  --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                       allows long label text to wrap
                                       without compromising option's
                                       visual border */


  /* STATES --------------------------------------------------------• */

  &:not(:has(:disabled, :checked)) {
    &:hover {
      --arc-internal-rbo-color: var(--arc-color-text-primary);
      --arc-internal-rbo-background: var(--arc-color-alpha-black-05);
      --arc-internal-rbo-border-color: var(--arc-color-border-standard);
    }
  }

  &:has(:checked) {
      --arc-internal-rbo-color: var(--arc-color-text-primary);
      --arc-internal-rbo-background: var(--arc-color-alpha-white-100);
      --arc-internal-rbo-border-color: var(--arc-color-border-stark);
      --arc-internal-rbo-font-weight: var(--arc-font-weight-500);
  }

  &:has(:focus-within:focus-visible) {
    --arc-internal-rbo-outline: var(--arc-computed-rbo-border-width) solid var(--arc-color-border-focus);
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-radio-bar-option] {
  flex: 1 1 auto;
  display: flex;
  position: relative;
}

[arc-radio-bar] {
  font-size: var(--arc-computed-rb-font-size);
  display: var(--arc-internal-rb-display);
  gap: var(--arc-computed-rb-space);
  border-radius: var(--arc-computed-rb-border-radius);
  background: var(--arc-internal-rb-background);

  padding: var(--arc-computed-rb-space);
  margin: 0;


  /* Inter-Component Communication ---------------------------------• */

  [arc-input-type=radio] {
    opacity: var(--arc-alpha-0);
    appearance: none;
    pointer-events: none;
    position: absolute;
  }

  [arc-radio] {
    flex: 1;
    display: flex;
    justify-content: center;
    border-radius: var(--arc-computed-rbo-border-radius);
    outline: var(--arc-internal-rbo-outline, none);
    outline-offset: var(--arc-computed-rbo-border-width);
  }

  [arc-label] {
    flex: 1;
    line-height: var(--arc-computed-rbo-line-height);
    overflow: hidden;
  }

  [arc-label-content] {
    flex: 1;
    display: flex;
    align-items: safe center;
    justify-content: center;

    height: var(--arc-computed-rbo-size);
    min-width: var(--arc-computed-rbo-size);

    border-radius: var(--arc-computed-rbo-border-radius);
    border: var(--arc-computed-rbo-border-width) solid var(--arc-internal-rbo-border-color);
    background: var(--arc-internal-rbo-background);
    color: var(--arc-internal-rbo-color);
    font-weight: var(--arc-internal-rbo-font-weight, unset);

    transition-property: border, background, color, font-weight;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    &:has([data-element=text]) {
      padding: 0 var(--arc-computed-rbo-text-padding);
    }

    &:not(:has([data-element=text])) {
      padding: 0 var(--arc-computed-rbo-icon-padding);
    }
  }

  [arc-icon-text] [data-element] {
    min-width: min-content;
    overflow: hidden;
    overflow-wrap: break-word;
  }
}

}
`,ne=h(j,["hug","fill"]),ie=h(z,["lg","md"]),ce=({children:r,label:a,icon:t,...e})=>{const i=r||(0,n.jsx)(ra,{icon:t,text:a});return(0,n.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":e?.checked||void 0,children:(0,n.jsx)(dr,{...e,label:i,layout:"fill",useMask:!1})})},oe=({children:r,size:a="lg",layout:t="hug",...e})=>(0,n.jsx)("ul",{...e,"arc-radio-bar":"","data-size":a,"data-layout":t,role:"radiogroup",children:r});g("ArcRadioBar",ee);const le=h(z,["inherit","md","sm"]),C={On:"on",Off:"off"},se=v`
@layer arc-components {

[arc-switch] {
  --arc-internal-switch-background: var(--arc-color-alpha-white-100);
  --arc-internal-switch-shadow: var(--arc-shadow-md);

  --arc-internal-inputmask-border-radius: var(--arc-border-radius-pill);

  --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                      stay inline with the label text
                                      regardless of applied line-height */


  /* COLORS via STATES ---------------------------------------------• */

  &:has(:disabled) {
    --arc-internal-switch-background: var(--arc-color-alpha-white-70);
    --arc-internal-switch-shadow: 0 0 1em max(1px, 0.0625em) var(--arc-color-alpha-white-50) inset;

    [arc-switch-label] {
      --arc-label-cursor: not-allowed;
      --arc-label-opacity: var(--arc-alpha-60);
    }
  }

  &[data-state=off] {
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-30);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-10);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);
    }

    &:has(:disabled) {
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
    }
  }

  &[data-state=on] {
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-100);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-opacity: var(--arc-alpha-60);
    }

    &:has(:disabled) {
      --arc-internal-inputmask-opacity: var(--arc-alpha-30);
    }
  }


  /* SIZES  --------------------------------------------------------• */

  &[data-size=inherit] {
    --arc-inherit-switch-font-size: 1em;
    --arc-inherit-switch-gap: 0.5em;  /* 8px @ 100%/16px base */
    --arc-inherit-switch-width: 2.5em; /* 40px @ 100% */
    --arc-inherit-switch-height: 1.5em; /* 24px @ 100% */
    --arc-inherit-switch-x-shift: 0.25em; /* 4px @ 100% */
    --arc-inherit-switch-size: 1.5em; /* 24px @ 100% */
    --arc-inherit-switch-gap: 0.5em; /* 8px @ 100% */
  }

  &[data-size=md] { /* @default */
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-switch-width: 40;
    --arc-internal-switch-height: 24;
    --arc-internal-switch-x-shift: 4;
    --arc-internal-switch-size: 24;
    --arc-internal-switch-gap: 8;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-switch-width: 30;
    --arc-internal-switch-height: 14;
    --arc-internal-switch-x-shift: 1;
    --arc-internal-switch-size: 16;
    --arc-internal-switch-gap: 8;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-switch-font-size: var(--arc-inherit-switch-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-switch-gap: var(--arc-inherit-switch-gap, calc(var(--arc-internal-switch-gap) / var(--arc-modifier-em)));
    --arc-computed-switch-width: var(--arc-inherit-switch-width, calc(var(--arc-internal-switch-width) / var(--arc-modifier-em)));
    --arc-computed-switch-height: var(--arc-inherit-switch-height, calc(var(--arc-internal-switch-height) / var(--arc-modifier-em)));
    --arc-computed-switch-x-shift: var(--arc-inherit-switch-x-shift, calc(var(--arc-internal-switch-x-shift) / var(--arc-modifier-em)));
    --arc-computed-switch-size: var(--arc-inherit-switch-size, calc(var(--arc-internal-switch-size) / var(--arc-modifier-em)));


    /* Intern-Component Communication -------------------------------• to ArcBooleanInputMask */
    --arc-internal-inputmask-width: var(--arc-computed-switch-width);
    --arc-internal-inputmask-height: var(--arc-computed-switch-height);
    --arc-internal-inputmask-x-shift: var(--arc-computed-switch-x-shift);
    --arc-internal-inputmask-size: var(--arc-computed-switch-size);
  }


  /* SWITCH PLACEMENT ----------------------------------------------• */

  &[data-state=off] {
    --arc-internal-switch-mask-translate-x: calc(-100% + var(--arc-computed-switch-x-shift));
  }

  &[data-state=on] {
    --arc-internal-switch-mask-translate-x: calc(0% - var(--arc-computed-switch-x-shift));
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-switch] {
  font-size: var(--arc-switch-font-size, var(--arc-computed-switch-font-size));
  display: inline-flex;
  align-items: baseline;
  gap: var(--arc-computed-switch-gap);

  [arc-switch-label] {
    font-size: inherit;
    hyphens: auto;
  }

  [arc-input-type=switch] {
    &:where(:not(:checked)) {
      --arc-internal-input-z-index: 1;
    }
  }

  [arc-input-mask-wrapper] {
    align-self: flex-start;
    height: 1lh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  [data-element=mask] {
  }

  [data-element=mask] {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: var(--arc-internal-switch-mask-translate-x) -50%;

    display: inline-flex;
    width: var(--arc-computed-switch-size);
    height: var(--arc-computed-switch-size);

    transition-property: opacity, background, color, border-color, outline, translate;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
    transition-behavior: allow-discrete;
    transition-behavior: allow-discrete;

    background: var(--arc-internal-switch-background);
    box-shadow: var(--arc-internal-switch-shadow);
    border: var(--arc-internal-inputmask-border);
    border-radius: var(--arc-border-radius-circle);
    pointer-events: none;
  }
}

}
`,de=({disabled:r,id:a,name:t,size:e="md",value:i,labelOff:c,labelOn:o,onChange:d,...l})=>{const s=(0,x.useMemo)(()=>t||B("arc-switch-name"),[t]),u=(0,x.useMemo)(()=>a&&`${a}-off`||B("arc-switch-off"),[a]),p=(0,x.useMemo)(()=>a&&`${a}-on`||B("arc-switch-on"),[a]),b=k=>{if(k.code==="Space"){k.preventDefault(),k.stopPropagation();const y=i===C.On?C.Off:C.On;d?.({value:y},k)}},m=k=>{const y={on:X(o),off:X(c)};return y?.on&&y?.off?y[k]:!y?.on&&y?.off?`${y.off}: ${k}`:y?.on&&!y?.off?`${y.on}: ${k}`:k},w=(0,n.jsxs)(ka,{type:"switch",onKeyDown:b,children:[(0,n.jsx)(la,{type:"switch",name:s,id:u,value:C.Off,checked:i===C.Off,disabled:r,"aria-label":m(C.Off)?.trim(),onChange:d}),(0,n.jsx)(la,{type:"switch",name:s,id:p,value:C.On,checked:i===C.On,disabled:r,"aria-label":m(C.On)?.trim(),onChange:d}),(0,n.jsx)("span",{"data-element":"mask"})]}),_=!o&&i===C.Off?p:u,$=!c&&i===C.On?u:p,I=!!(o||c)&&(0,n.jsxs)(n.Fragment,{children:[!!c&&(0,n.jsx)(N,{htmlFor:_,"arc-switch-label":o?C.Off:"",children:(0,n.jsx)(U,{children:c})}),w,!!o&&(0,n.jsx)(N,{htmlFor:$,"arc-switch-label":c?C.On:"",children:(0,n.jsx)(U,{children:o})})]});return(0,n.jsx)("span",{...l,"arc-switch":"","data-state":i,"data-size":e,role:"radiogroup",children:I||w})};g("ArcSwitch",se);const ue=["title","heading","subheading","body"],ur=["h1","h2","h3","h4","h5","h6"],pr=["code","div","li","p","pre","span"],hr=[...ur,...pr],pe=["title-inherit","title-lg","title-md","title-sm"],he=["heading-inherit","heading-lg","heading-md","heading-sm"],ve=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],be=h(E,["inherit","primary","primary-inverse"]),me=["body-inherit","body-lg","body-md","body-sm","body-xs"],ge=h(E,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),fe=h(_a,["inherit","start","center","justify","end"]),xe=h($a,["inherit","loose","standard","tight"]),ye={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},we=r=>{const{align:a,lineHeight:t,size:e,variant:i,isMonospace:c,tag:o,...d}=r,l=ye?.[o]??"body",s=e?.includes("inherit")?e?.split("-")?.[0]:e;return{...d,"arc-text":s||l,"data-is-monospace":c?"":void 0,"data-align":a?.includes("inherit")?void 0:a,"data-variant":i?.includes("inherit")?void 0:i,"data-line-height":t?.includes("inherit")?void 0:t}},ke=v`
@layer arc-components {

[arc-text] {

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    --arc-text-line-height: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    --arc-text-line-height: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    --arc-text-line-height: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    --arc-text-align: start;
  }

  &[data-align=center] {
    --arc-text-align: center;
  }

  &[data-align=justify] {
    --arc-text-align: justify;
  }

  &[data-align=end] {
    --arc-text-align: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    --arc-text-color: var(--arc-color-text-primary);
  }

  &[data-variant=primary-inverse] {
    --arc-text-color: var(--arc-color-text-inverse);
  }

  &[data-variant=secondary] {
    --arc-text-color: var(--arc-color-text-secondary);
  }

  &[data-variant=secondary-inverse] {
    --arc-text-color: var(--arc-color-alpha-white-60);
  }

  &[data-variant=critical] {
    --arc-text-color: var(--arc-color-text-critical);
  }

  &[data-variant=warning] {
    --arc-text-color: var(--arc-color-text-warning);
  }

  &[data-variant=success] {
    --arc-text-color: var(--arc-color-text-success);
  }

  &[data-variant=info] {
    --arc-text-color: var(--arc-color-text-info);
  }
}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  --arc-text-font-family: var(--arc-font-family-title);
  --arc-text-font-weight: var(--arc-font-weight-title);
  --arc-text-letter-spacing: var(--arc-letter-spacing-title);
  --arc-text-line-height: var(--arc-line-height-title);

  --arc-text-font-size: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  --arc-text-font-family: var(--arc-font-family-heading);
  --arc-text-font-weight: var(--arc-font-weight-heading);
  --arc-text-letter-spacing: var(--arc-letter-spacing-heading);
  --arc-text-line-height: var(--arc-line-height-heading);

  --arc-text-font-size: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  --arc-text-font-family: var(--arc-font-family-subheading);
  --arc-text-font-weight: var(--arc-font-weight-subheading);
  --arc-text-letter-spacing: unset;
  --arc-text-line-height: var(--arc-line-height-subheading);

  --arc-text-font-size: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  --arc-text-font-family: var(--arc-font-family-body);
  --arc-text-font-weight: var(--arc-font-weight-body);
  --arc-text-line-height: var(--arc-line-height-body);
  --arc-text-font-size: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    --arc-text-font-size: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  --arc-text-font-size: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  --arc-text-font-family: var(--arc-font-family-mono);
  --arc-text-line-height: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, unset);
  hyphens: var(--arc-text-hyphens, auto); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, unset);
  text-align: var(--arc-text-align, unset);
  white-space: var(--arc-text-white-space, unset);

  color: var(--arc-text-color, unset);

  font-size: var(--arc-text-font-size, unset);
  font-family: var(--arc-text-font-family, unset);
  font-weight: var(--arc-text-font-weight, unset);
  line-height: var(--arc-text-line-height, unset);
  letter-spacing: var(--arc-text-letter-spacing, unset);

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,Ae=r=>(0,x.forwardRef)((a,t)=>(0,x.createElement)(r,{...we({...a,tag:r}),ref:t})),ze=[...hr].reduce((r,a)=>({...r,[a]:Ae(a)}),{});g("Arc",ke);const Z=r=>(0,n.jsx)(n.Fragment,{children:!!r.children&&(0,n.jsx)("span",{...r})}),Ce=r=>(0,n.jsx)(n.Fragment,{children:!!r.children&&(0,n.jsx)("span",{...r})}),Aa=({children:r,...a})=>(0,n.jsx)(n.Fragment,{children:!!r&&(0,n.jsx)(N,{...a,children:(0,n.jsx)(U,{children:r})})}),Se=({children:r,layout:a,size:t,variant:e,tag:i="span",...c})=>(0,n.jsx)(i,{...c,"data-layout":a,"data-size":t,"data-variant":e,children:r}),_e=()=>(0,n.jsx)("span",{"input-element":"spacer"}),$e=r=>(0,n.jsx)(Z,{...r,"input-element":"header"}),Ee=r=>(0,n.jsx)(Aa,{...r,"input-element":"header-label"}),je=r=>(0,n.jsx)(Z,{...r,"input-element":"header-slot"}),Te=r=>(0,n.jsx)(Z,{...r,"input-element":"body"}),Ie=r=>(0,n.jsx)(Aa,{...r,"input-element":"input-prefix"}),Le=r=>(0,n.jsx)(Aa,{...r,"input-element":"input-suffix"}),Re=r=>(0,n.jsx)(Ce,{...r,"input-element":"input-action"}),Pe=r=>(0,n.jsx)(Z,{...r,"input-element":"footer"}),Oe=r=>(0,n.jsx)(Z,{...r,"input-element":"footer-caption"}),Be=r=>(0,n.jsx)(Z,{...r,"input-element":"footer-slot"}),Me=r=>a=>{if(!(a?.target instanceof HTMLInputElement))return;const t={name:a?.target?.name,value:a?.target?.value};r?.(t,a)},He=v`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    --arc-internal-input-height: 48;
    --arc-internal-input-padding-inline-end: 8;
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    --arc-internal-input-height: 40;
  }

  &[data-size=md] {
    --arc-internal-input-height: 32;
    --arc-internal-input-border-radius: 4;
    --arc-internal-input-action-max-height: 80%;
  }

  & {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-modifier-slot: 12; /* unitless, desired font size at 100% */
    --arc-internal-input-gap: 6;
    --arc-internal-input-slot-gap: 4;
    --arc-internal-input-padding-inline: 12;
    --arc-internal-input-padding-inline-end: 3;
    --arc-internal-input-border-radius: 8;
    --arc-internal-input-border-width: 1;
    --arc-internal-input-outline-size: 2;
    --arc-internal-input-outline-offset: -1;

    /* COMPUTED VARIABLES ------------------------------------------• */

    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;
    --arc-modifier-slot-px: var(--arc-modifier-slot) * 1px;
    --arc-modifier-slot-em: var(--arc-modifier-slot) * 1em;

    --arc-computed-input-font-size: calc(var(--arc-modifier-px));
    --arc-computed-input-slot-font-size: calc(var(--arc-modifier-slot-px));

    --arc-computed-input-border-radius: calc(var(--arc-internal-input-border-radius) / var(--arc-modifier-em));
    --arc-computed-input-border-width: calc(var(--arc-internal-input-border-width) / var(--arc-modifier-em)); /* 1px at 100% */
    --arc-computed-input-outline-size: calc(var(--arc-internal-input-outline-size) / var(--arc-modifier-em)); /* 2px at 100% */
    --arc-computed-input-outline-offset: calc(var(--arc-internal-input-outline-offset) / var(--arc-modifier-em)); /* -1px at 100% */

    --arc-computed-input-height: calc(var(--arc-internal-input-height) / var(--arc-modifier-em));
    --arc-computed-input-gap: calc(var(--arc-internal-input-gap) / var(--arc-modifier-em));
    --arc-computed-input-padding-inline: calc(var(--arc-internal-input-padding-inline) / var(--arc-modifier-em));
    --arc-computed-input-padding-inline-end: calc(var(--arc-internal-input-padding-inline-end) / var(--arc-modifier-em));
    --arc-computed-input-slot-gap: calc(var(--arc-internal-input-slot-gap) / var(--arc-modifier-slot-em));


    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(--arc-internal-input-cursor, inherit); /* ArcLabel • cursor syncing */
    --arc-icon-text-modifier: var(--arc-modifier-slot); /* ArcIconText • modifier for font-size */

    &[data-size=inherit] {
      --arc-computed-input-font-size: 0.875em; /* 14px at 100% */
      --arc-computed-input-slot-font-size: 0.75em; /* 12px at 100% */
    }

    &[data-size=md] {
      /* Inter-Component Communication -------------------------------• */
      --arc-button-border-radius: var(--arc-border-radius-sm);
      --arc-button-outline-offset: 0;
      --arc-button-font-size: 0.8em; /* ArcButton • the input size 'md' needs
                                        a slightly smaller "input-action" button
                                        footprint; there's no direct access to
                                        ArcButton['size'] prop in this context */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    --arc-internal-input-color: var(--arc-color-text-primary);
    --arc-internal-input-header-label-color: inherit;
    --arc-internal-input-header-slot-color: var(--arc-color-text-secondary);
    --arc-internal-input-footer-caption-color: var(--arc-color-text-secondary);
    --arc-internal-input-footer-slot-color: var(--arc-color-text-secondary);

    &[data-variant=outline] { /* @default */
      --arc-internal-input-background: var(--arc-color-mono-white);
      --arc-internal-input-border-color: var(--arc-color-border-stark);
      --arc-internal-input-border-color-hover: var(--arc-color-border-full);

      --arc-internal-input-color-disabled: var(--arc-color-text-secondary);
      --arc-internal-input-background-disabled: var(--arc-color-background-secondary);
      --arc-internal-input-border-color-disabled: var(--arc-color-border-standard);

      --arc-internal-input-color-readonly: var(--arc-color-text-primary);
      --arc-internal-input-background-readonly: var(--arc-color-background-secondary);
      --arc-internal-input-border-color-readonly: var(--arc-color-border-standard);

      --arc-internal-input-color-invalid: var(--arc-color-text-critical);
      --arc-internal-input-background-invalid: var(--arc-color-mono-white);
      --arc-internal-input-border-color-invalid: var(--arc-color-text-critical);
    }

    &[data-variant=solid] {
      --arc-internal-input-background: var(--arc-color-alpha-black-03);
      --arc-internal-input-border-color: transparent;
      --arc-internal-input-border-color-hover: var(--arc-color-border-stark);

      --arc-internal-input-color-invalid: var(--arc-color-text-critical);
      --arc-internal-input-background-invalid: var(--arc-color-critical-light);
      --arc-internal-input-border-color-invalid: transparent;

      --arc-internal-input-color-disabled: var(--arc-color-text-secondary);
      --arc-internal-input-background-disabled: var(--arc-color-alpha-black-05);
      --arc-internal-input-border-color-disabled: transparent;

      --arc-internal-input-color-readonly: var(--arc-color-text-primary);
      --arc-internal-input-background-readonly: var(--arc-color-alpha-black-05);
      --arc-internal-input-border-color-readonly: transparent;
    }
  }


  /* STATES --------------------------------------------------------• */

  &:not(:has(input:read-only, input:disabled)) {
    &:has([input-element=header-label]:hover, [input-element=body]:hover) {
      --arc-internal-input-border-color: var(--arc-input-border-color-hover, var(--arc-internal-input-border-color-hover));
    }

    &:has([input-element=body]:where(:focus-within, :has(:focus, :active))) {
      --arc-internal-input-outline-color: var(--arc-color-border-focus);
    }
  }

  &:has(input:read-only) {
    --arc-internal-input-cursor: default;
    --arc-internal-input-color: var(--arc-internal-input-color-readonly);
    --arc-internal-input-background: var(--arc-internal-input-background-readonly);
    --arc-internal-input-border-color: var(--arc-internal-input-border-color-readonly);
  }

  &:has(input:disabled) {
    --arc-internal-input-cursor: not-allowed;
    --arc-internal-input-color: var(--arc-internal-input-color-disabled);
    --arc-internal-input-background: var(--arc-internal-input-background-disabled);
    --arc-internal-input-border-color: var(--arc-internal-input-border-color-disabled);
  }

  &:has(input:user-invalid:not(:focus)) {
    --arc-internal-input-color: var(--arc-internal-input-color-invalid);
    --arc-internal-input-background: var(--arc-internal-input-background-invalid);
    --arc-internal-input-border-color: var(--arc-internal-input-border-color-invalid);
    --arc-internal-input-footer-caption-color: var(--arc-internal-input-color-invalid);
  }


  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    --arc-internal-input-display: flex;
  }

  &[data-layout=hug] {
    --arc-internal-input-display: inline-flex;
  }

  & {
    --arc-internal-input-border: var(--arc-border-width-sm) solid var(--arc-internal-input-border-color);
    --arc-internal-input-outline: var(--arc-computed-input-outline-size) solid var(--arc-internal-input-outline-color, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(--arc-internal-input-display, flex);
  flex-direction: var(--arc-internal-input-flex-direction, column);
  gap: var(--arc-computed-input-slot-gap);

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(--arc-computed-input-slot-font-size));
    gap: var(--arc-computed-input-slot-gap);
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(--arc-internal-input-header-label-color));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(--arc-internal-input-header-slot-color));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(--arc-internal-input-footer-caption-color));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(--arc-internal-input-footer-slot-color));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: center;
    gap: var(--arc-computed-input-gap);
    height: var(--arc-computed-input-height);
    font-size: var(--arc-computed-input-font-size);

    color: var(--arc-input-color, var(--arc-internal-input-color));
    background: var(--arc-input-background, var(--arc-internal-input-background));
    border: var(--arc-input-border, var(--arc-internal-input-border));
    border-radius: var(--arc-input-border-radius, var(--arc-computed-input-border-radius));
    outline: var(--arc-internal-input-outline, none);
    outline-offset: var(--arc-computed-input-outline-offset);

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(--arc-internal-input-cursor, unset);

    padding-inline: var(--arc-computed-input-padding-inline);

    &:has([input-element=input-action]) {
      padding-inline-end: var(--arc-computed-input-padding-inline-end);
    }

    input {
      cursor: inherit;
      apprearance: none;
      -webkit-apprearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      min-width: 1em;
      max-width: 100%;
      text-align: var(--arc-input-text-align, unset);
    }
  }

  [input-element=input-prefix] {
    flex: none;
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-height: var(--arc-internal-input-action-max-height, unset);
    }
  }
}

}
`,Ve={onChangeHandler:Me,Wrapper:Se,Spacer:_e,Header:$e,HeaderLabel:Ee,HeaderSlot:je,InputBody:Te,InputPrefix:Ie,InputSuffix:Le,InputAction:Re,Footer:Pe,FooterCaption:Oe,FooterSlot:Be};g("ArcInput",He);const S=Ve,Ne=h(j,["fill","hug"]),Ue=h(z,["inherit","xl","lg","md"]),Ze=h(E,["outline","solid"]),Fe=Ne,De=Ue,Ye=Ze,We=["text","number","password","email","url"],qe=(0,x.forwardRef)(({layout:r="hug",size:a="inherit",variant:t="outline",inputProps:e,headerLabel:i,headerSlot:c,inputPrefix:o,inputAction:d,inputSuffix:l,footerCaption:s,footerSlot:u,...p},b)=>{const{id:m,onChange:w,..._}=e,$=_?.type||"text",I=_?.disabled||void 0,k=_?.readOnly||void 0,y=_?.required||void 0,F=!!(i||c),D=!!(s||u);return(0,n.jsxs)(S.Wrapper,{...p,"arc-text-input":"","arc-input":$,layout:r,size:a,variant:t,children:[F&&(0,n.jsxs)(S.Header,{children:[(0,n.jsx)(S.HeaderLabel,{htmlFor:m,children:i}),!!c&&(0,n.jsx)(S.Spacer,{}),(0,n.jsx)(S.HeaderSlot,{children:c})]}),(0,n.jsxs)(S.InputBody,{children:[(0,n.jsx)(S.InputPrefix,{htmlFor:m,children:o}),(0,n.jsx)("input",{..._,ref:b,id:m,"arc-input-type":$,onChange:S.onChangeHandler(w),"aria-disabled":I,"aria-readonly":k,"aria-required":y}),(0,n.jsx)(S.InputSuffix,{htmlFor:m,children:l}),(0,n.jsx)(S.InputAction,{children:d})]}),D&&(0,n.jsxs)(S.Footer,{children:[(0,n.jsx)(S.FooterCaption,{children:s}),!!u&&(0,n.jsx)(S.Spacer,{}),(0,n.jsx)(S.FooterSlot,{children:u})]})]})}),Ke=v`
@layer arc-components {

  [arc-toast] {
    --arc-toast-padding: 0.75em 0.75em 0.75em 1em;
    --arc-toast-transition-duration: 300ms;
    --arc-toast-offset: 1em;

    --arc-modifier: 14;
    --arc-toast-content-gap: max(0.125em, calc(2 / var(--arc-modifier) * 1em));

    /* SIZES ----------------------------------------------------------------• */

    &[data-size=md] { /* @default */
      --arc-toast-font-size: var(--arc-font-size-body-lg);
      --arc-toast-content-font-size: var(--arc-font-size-body-md); /* 14px @ 100% */
    }

    &[data-size=inherit] {
      --arc-toast-font-size: 1em;
      --arc-toast-content-font-size: 0.875em;
    }
    
    /* VARIANTS -------------------------------------------------------------• */

    &[data-variant=common] { /* @default */
      --arc-toast-background: var(--arc-color-text-primary);
      --arc-toast-color: var(--arc-color-text-inverse);
    }
  }

  /* CORE STYLES --------------------------------------------------• */

  [arc-toast] {
    inset: var(--arc-toast-inset, 
      var(--top, auto) 
      var(--right, auto) 
      var(--bottom, auto) 
      var(--left, auto)
    );

    &[data-placement*=top-] {
      --top: var(--arc-toast-offset);
    }

    &[data-placement*=bottom-] {
      --bottom: var(--arc-toast-offset);
    }

    &[data-placement=center] {
      --arc-toast-inset: 0;
    }

    &[data-placement*=-left] {
      --left: var(--arc-toast-offset);
    }

    &[data-placement*=-right] {
      --right: var(--arc-toast-offset);
    }

    &[data-placement*=-center] {
      --left: 50%;
      translate: -50% 0;
    }
  }

  [arc-toast] {
    font-size: var(--arc-toast-font-size);
    content-visibility: hidden;
    align-items: center;
    color: var(--arc-toast-color);
    background-color: var(--arc-toast-background);
    border-radius: var(--arc-toast-border-radius, 0.5em);
    padding: var(--arc-toast-padding);
    gap: 1em;
    box-shadow: var(--arc-shadow-dark-lg);
    min-width: var(--arc-toast-min-width, 25em);
    min-height: var(--arc-toast-min-height, 3.5em);
    border: none;

    &:has([arc-toast-heading]):has([arc-toast-subtext]) {
      --arc-toast-min-height: 5em;
      --arc-toast-content-display: flex;
    }
    
    [arc-toast-body] {
      flex: 1;
      display: flex;
      align-items: baseline;
      gap: 0.5em;
      padding: 0.25em 0; /* vertical padding to align with action button text */
    }

    [arc-toast-icon] {
      height: 1lh;
      padding: 0 0.125em;
    }
    
    [arc-toast-content] {
      line-height: var(--arc-line-height-loose);
      flex: 1;
      font-size: var(--arc-toast-content-font-size);
      hyphens: auto;
      display: var(--arc-toast-content-display, block);
      flex-direction: column;
      gap: var(--arc-toast-content-gap);

      p {
        margin: 0;
      }
    }

    [arc-toast-actions] {
      display: flex;
      gap: 0.5em;
      align-items: center;
      align-self: baseline;
    }
  }
  
  /* POPOVER + state ---------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    transition:
      display var(--arc-toast-transition-duration) allow-discrete,
      overlay var(--arc-toast-transition-duration) allow-discrete,
      opacity var(--arc-toast-transition-duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
    }
  }
}
`,Ge=h(z,["inherit","md"]),Je=h(E,["common"]),Qe=h(Sa,["","auto","manual"]),Xe=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],an=(r,a="toggle")=>{const t=document.getElementById(r);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[a]()},vr=({id:r,children:a,icon:t,heading:e,subtext:i,dismissProps:c,showDismiss:o=!0,onClose:d,actionSlot:l,size:s="md",variant:u="common",placement:p="bottom-left",getToastId:b,...m})=>{const w=()=>{d?.()},_=!!l||o,$=(0,x.useMemo)(()=>r||B("arc-toast"),[r]);return(0,x.useEffect)(()=>{b?.($)},[b,$]),(0,n.jsxs)("div",{...m,"arc-toast":"","data-size":s,"data-variant":u,"data-placement":p,id:$,children:[(0,n.jsxs)("div",{"arc-toast-body":"",children:[t&&(0,n.jsx)(f,{icon:t,"arc-toast-icon":""}),(0,n.jsx)("div",{"arc-toast-content":"",children:a||(0,n.jsxs)(n.Fragment,{children:[e&&(0,n.jsx)("header",{"arc-toast-heading":"",children:(0,n.jsx)("strong",{children:e})}),i&&(0,n.jsx)("p",{"arc-toast-subtext":"",children:i})]})})]}),_&&(0,n.jsxs)("div",{"arc-toast-actions":"",children:[l,o&&(0,n.jsx)(aa,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"tertiary-inverse",size:"md",shape:"square","aria-label":"Dismiss",...c,popovertarget:$,onClick:w})]})]})};vr.handleToast=an,g("ArcToast",Ke);const rn=(r,a=1/0,t=" ")=>[...r].flat(a)?.filter(Boolean)?.join(t)}}]);
