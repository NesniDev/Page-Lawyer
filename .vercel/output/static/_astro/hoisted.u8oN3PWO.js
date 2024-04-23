const x=document.querySelector(".menuview"),P=document.querySelector(".menuclose"),B=document.querySelector("#menu");x.addEventListener("click",()=>{x.classList.toggle("opacity-0"),P.classList.toggle("opacity-0"),B.classList.toggle("hidden"),window.removeEventListener("wheel",E),window.removeEventListener("touchmove",E),document.body.classList.toggle("overflow-hidden")});P.addEventListener("click",()=>{P.classList.toggle("opacity-0"),x.classList.toggle("opacity-0"),B.classList.toggle("hidden"),window.addEventListener("wheel",E,{passive:!1}),window.addEventListener("touchmove",E,{passive:!1}),document.body.classList.toggle("overflow-hidden")});function E(e){e.preventDefault()}const ne="astro:before-preparation",oe="astro:after-preparation",re="astro:before-swap",ie="astro:after-swap",se=e=>document.dispatchEvent(new Event(e));class V extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,r,a,l,f,i,m){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=l,this.sourceElement=f,this.info=i,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class ae extends V{formData;loader;constructor(t,n,o,r,a,l,f,i,m){super(ne,{cancelable:!0},t,n,o,r,a,l,f),this.formData=i,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ce extends V{direction;viewTransition;swap;constructor(t,n,o){super(re,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function le(e,t,n,o,r,a,l,f){const i=new ae(e,t,n,o,r,a,window.document,l,f);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(se(oe),i.navigationType!=="traverse"&&O({scrollX,scrollY}))),i}async function ue(e,t,n){const o=new ce(e,t,n);return document.dispatchEvent(o),o.swap(),o}const fe=history.pushState.bind(history),A=history.replaceState.bind(history),O=e=>{history.state&&(history.scrollRestoration="manual",A({...history.state,...e},""))},H=!!document.startViewTransition,M=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),W=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let D,g,L=!1,X;const Y=e=>document.dispatchEvent(new Event(e)),j=()=>Y("astro:page-load"),de=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},w="data-astro-transition-persist",K="data-astro-transition",G="data-astro-transition-fallback";let $,b=0;history.state?(b=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):M()&&(A({index:b,scrollX,scrollY},""),history.scrollRestoration="manual");const me=(e,t)=>{let n=!1,o=!1;return(...r)=>{if(n){o=!0;return}e(...r),n=!0,setTimeout(()=>{o&&(o=!1,e(...r)),n=!1},t)}};async function he(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function z(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function we(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const a=new Promise(l=>{o.onload=o.onerror=l});e=e.then(()=>a)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const J=(e,t,n,o,r)=>{const a=W(t,e),l=document.title;document.title=o;let f=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const i=history.state;A({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",e.href)}else fe({...n.state,index:++b,scrollX:0,scrollY:0},"",e.href);if(D=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),f=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const i=history.state;location.href=e.href,history.state||A(i,"")}else f||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=l};function ye(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${w}="${n.getAttribute(w)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function F(e,t,n,o){const r=(s,d)=>{const h=s.getAttribute(w),p=h&&d.head.querySelector(`[${w}="${h}"]`);if(p)return p;if(s.matches("link[rel=stylesheet]")){const v=s.getAttribute("href");return d.head.querySelector(`link[rel=stylesheet][href="${v}"]`)}return null},a=()=>{const s=document.activeElement;if(s?.closest(`[${w}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const d=s.selectionStart,h=s.selectionEnd;return{activeElement:s,start:d,end:h}}return{activeElement:s}}else return{activeElement:null}},l=({activeElement:s,start:d,end:h})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=d,s.selectionEnd=h))},f=s=>{const d=document.documentElement,h=[...d.attributes].filter(({name:c})=>(d.removeAttribute(c),c.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...h].forEach(({name:c,value:u})=>d.setAttribute(c,u));for(const c of document.scripts)for(const u of s.newDocument.scripts)if(!c.src&&c.textContent===u.textContent||c.src&&c.type===u.type&&c.src===u.src){u.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const u=r(c,s.newDocument);u?u.remove():c.remove()}document.head.append(...s.newDocument.head.children);const p=document.body,v=a();document.body.replaceWith(s.newDocument.body);for(const c of p.querySelectorAll(`[${w}]`)){const u=c.getAttribute(w),k=document.querySelector(`[${w}="${u}"]`);k&&k.replaceWith(c)}l(v)};async function i(s){function d(c){const u=c.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(G,s);const v=document.getAnimations().filter(c=>!h.includes(c)&&!d(c));return Promise.all(v.map(c=>c.finished))}if(!L)document.documentElement.setAttribute(K,e.direction),o==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const m=document.title,y=await ue(e,g,f);J(y.to,y.from,t,m,n),Y(ie),o==="animate"&&!L&&i("new").then(()=>X())}async function Q(e,t,n,o,r){if(!M()||location.origin!==n.origin){location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&O({scrollX,scrollY}),W(t,n)&&n.hash){J(n,t,o,document.title,r);return}const l=await le(t,n,e,a,o.sourceElement,o.info,o.formData,f);if(l.defaultPrevented){location.href=n.href;return}async function f(i){const m=i.to.href,y={};if(i.formData){y.method="POST";const h=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");y.body=h?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const s=await he(m,y);if(s===null){i.preventDefault();return}if(s.redirected&&(i.to=new URL(s.redirected)),$??=new DOMParser,i.newDocument=$.parseFromString(s.html,s.mediaType),i.newDocument.querySelectorAll("noscript").forEach(h=>h.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const d=ye(i.newDocument);d.length&&await Promise.all(d)}if(L=!1,H)g=document.startViewTransition(async()=>await F(l,o,r));else{const i=(async()=>{await new Promise(m=>setTimeout(m)),await F(l,o,r,z())})();g={updateCallbackDone:i,ready:i,finished:new Promise(m=>X=m),skipTransition:()=>{L=!0}}}g.ready.then(async()=>{await we(),j(),de()}),g.finished.then(()=>{document.documentElement.removeAttribute(K),document.documentElement.removeAttribute(G)}),await g.ready}async function q(e,t){await Q("forward",D,new URL(e,location.href),t??{})}function ge(e){if(!M()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>b?"forward":"back";b=n,Q(o,D,new URL(location.href),{},t)}const C=()=>{O({scrollX,scrollY})};{(H||z()!=="none")&&(D=new URL(location.href),addEventListener("popstate",ge),addEventListener("load",j),"onscrollend"in window?addEventListener("scrollend",C):addEventListener("scroll",me(C,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const Z=new Set,S=new WeakSet;let I,ee,_=!1;function pe(e){_||(_=!0,I??=e?.prefetchAll??!1,ee??=e?.defaultStrategy??"hover",ve(),be(),Te(),Ae())}function ve(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{T(t.target,"tap")&&R(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function be(){let e;document.body.addEventListener("focusin",o=>{T(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),N(()=>{for(const o of document.getElementsByTagName("a"))S.has(o)||T(o,"hover")&&(S.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{R(r,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function Te(){let e;N(()=>{for(const t of document.getElementsByTagName("a"))S.has(t)||T(t,"viewport")&&(S.add(t),e??=Ee(),e.observe(t))})}function Ee(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),R(r.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(r))}})}function Ae(){N(()=>{for(const e of document.getElementsByTagName("a"))T(e,"load")&&R(e.href,{with:"link"})})}function R(e,t){const n=t?.ignoreSlowConnection??!1;if(!Le(e,n))return;if(Z.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function Le(e,t){if(!navigator.onLine||!t&&te())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!Z.has(e)}catch{}return!1}function T(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||I)&&te()?!0:n==null&&I||n===""?t===ee:n===t}function te(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function N(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Se(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function U(e){return e.dataset.astroReload!==void 0}(H||Se()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;U(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),q(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||U(t))return;const n=t,o=e.submitter,r=new FormData(n,o);let a=o?.getAttribute("formaction")??n.action??location.pathname;const l=o?.getAttribute("formmethod")??n.method;if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(l==="get"){const i=new URLSearchParams(r),m=new URL(a);m.search=i.toString(),a=m.toString()}else f.formData=r;e.preventDefault(),q(a,f)}),pe({prefetchAll:!0}));