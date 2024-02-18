import{r as o,j as n,u as ue,L as fe,S as ye,R as be,a as je,b as _e,c as Se}from"./vendor-BqLZH308.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function r(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerPolicy&&(l.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?l.credentials="include":c.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(c){if(c.ep)return;c.ep=!0;const l=r(c);fetch(c.href,l)}})();const Ce=t=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",...t},o.createElement("path",{d:"M500,250c0,120.2399902-84.8900146,220.6599731-198,244.5799561v-89.3099976 c0-10.6900024-5.9299927-34-13.5300293-40.5999756c59.1100464-6.6599731,108.2600098-40.5999756,108.2600098-108.2700195 s-13.5299683-81.1999512-27.0599976-94.7299805C372.4000244,154.9899902,383.7299805,130.3399658,369.25,94 c0,0-26.6500244,0-53.7199707,40.5999756c-13.4100342-13.4099731-54.1300049-13.5299683-67.6500244-13.5299683 c-13.5499878,0-54.2700195,0.1199951-67.6799927,13.5299683C153.1300049,94,126.539978,94,126.539978,94 c-14.4799805,36.3399658-3.1499634,60.9899902-0.4199829,67.6699829C112.5900269,175.2000122,99,188.7299805,99,256.3999634 s49.210022,101.6100464,108.3200073,108.2700195c-7.6000366,6.5999756-13.5300293,27.0599976-13.5300293,40.5999756 c-15.1900024,6.7800293-57.4499512,13.2700195-81.1999512-27.0699463c0,0-13.5400391-27.0700073-40.6000366-27.0700073 c0,0-27.0700073-2.5400391,0,13.539978c0,0,13.5300293,13.5300293,27.0599976,40.5999756 c0,0,20.6699829,56.5400391,94.7399902,40.6000366c0.1100464,16.0100098,0.0599976,37.3300171,0.0200195,47.789978 C82.7999878,468.1599731,0,368.75,0,250C0,111.9299927,111.9299927,0,250,0S500,111.9299927,500,250z",fill:"currentColor"})),ke=t=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...t},o.createElement("path",{d:"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",fill:"currentColor"})),Me="_button_1w6as_1",ze={button:Me};function he({onClick:t,children:e}){return n.jsx("button",{className:ze.button,onClick:t,children:e})}const Le="_page_vilz3_1",Ae="_head_vilz3_7",Re="_content_vilz3_16",Fe="_box_vilz3_20",Ne="_container_vilz3_26",Pe="_layout_vilz3_29",T={page:Le,head:Ae,content:Re,box:Fe,container:Ne,layout:Pe};function Te({children:t}){return n.jsx("div",{className:T.page,children:t})}function Be({children:t}){return n.jsx("div",{className:T.head,children:t})}function Ee({children:t}){return n.jsx("div",{className:T.content,children:t})}function me({children:t}){return n.jsx("div",{className:T.box,children:n.jsx("div",{className:T.container,children:t})})}function V({children:t}){return n.jsx("div",{className:T.layout,children:t})}const pe=t=>t.filter(Boolean).join(" "),He="_menu_1hqby_1",Ie="_item_1hqby_12",We="_active_1hqby_31",O={menu:He,item:Ie,active:We};function De({routes:t}){const[e]=ue();return n.jsx("div",{className:O.menu,children:t.filter(r=>!r.hidden).map(r=>n.jsx(fe,{className:pe([O.item,e===r.path&&O.active]),to:r.path??"",children:r.title},r.path))})}const Oe="_social_t5yvl_1",$e="_icon_t5yvl_13",qe="_title_t5yvl_21",$={social:Oe,icon:$e,title:qe};function ee({Icon:t,title:e,link:r,blank:a}){return n.jsxs("a",{href:r,target:a?"_blank":void 0,className:$.social,rel:"noreferrer",children:[n.jsx(t,{className:$.icon}),n.jsx("span",{className:$.title,children:e})]})}const te=()=>typeof window>"u"?"desktop":window.devicePixelRatio>=2&&window.innerWidth>=768&&window.innerWidth<=1024?"tablet":window.innerWidth<768?"mobile":"desktop";function ve(){const[t,e]=o.useState(te),r=o.useCallback(()=>{e(te())},[]);return o.useEffect(()=>(r(),window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}),[r]),t}const Xe="_background_1h1m1_1",Ye="_transparent_1h1m1_9",ne={background:Xe,transparent:Ye};function I({transparent:t,context:e}){const r=o.useRef(null),a=o.useCallback(()=>{r.current&&e.current&&(r.current.width=window.innerWidth*window.devicePixelRatio,r.current.height=window.innerHeight*window.devicePixelRatio,r.current.style.width=`${window.innerWidth}px`,r.current.style.height=`${window.innerHeight}px`,e.current.scale(window.devicePixelRatio,window.devicePixelRatio))},[e]);return o.useEffect(()=>(r.current&&(e.current=r.current.getContext("2d")),a(),window.addEventListener("resize",a,!1),()=>{window.removeEventListener("resize",a,!1)}),[a,e]),n.jsx("div",{className:pe([ne.background,t&&ne.transparent]),children:n.jsx("canvas",{ref:r})})}const L=6,Ge=Math.PI*2/L,Ue=(t,e)=>[(t[0]+e[0])/2,(t[1]+e[1])/2];function Ve(t,e){const r=Math.random()+.5,a=Array.from({length:L}).map(()=>Math.random()),c=Array.from({length:L*2}).map(()=>Math.random()>.5?1:-1),l=Array.from({length:L}),f=Array.from({length:L}),d=[],u=i=>`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${i})`,g=i=>`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${i})`;let v=0,w=0,m=0;const y=(i,S)=>{const k=f[i];if(k)return k;const s=(a[i]??0)*w,C=Math.sin(S)*s*(c[i]??0),b=Math.cos(S)*s*(c[i+1]??0);return f[i]=[C,b],[C,b]},h=(i,S,k,s,C)=>{const b=l[i];if(b)return b;const x=Ge*i,[z,j]=y(i,k),N=Math.cos(x)*S+z+s,B=Math.sin(x)*S+j+C;return l[i]=[N,B],[N,B]};return{resize:(i,S)=>{w=i,m=S},draw:(i,S,k,s)=>{const C=v/180*Math.PI;for(let b=0;b<m;b+=1){const x=d.at(b)??[];for(let j=0;j<L;j+=1){const N=s-b*20,B=j===L-1?0:j+1,[p,_]=h(j,N,C,S,k),[M,A]=h(B,N,C,S,k),[W,P]=Ue([p,_],[M,A]);x[j]=[p,_,W,P]}for(let j=0;j<L;j+=1)l[j]=void 0;i.beginPath(),i.fillStyle=u(b/m),i.shadowColor=g(.5),i.shadowBlur=15;const z=x.at(-1);z&&i.moveTo(z[2],z[3]);for(const j of x)i.quadraticCurveTo(j[0],j[1],j[2],j[3]);i.closePath(),i.fill()}for(let b=0;b<L;b+=1)f[b]=void 0;v=(v+r)%360}}}const Qe=Ve([206,39,96],[106,17,48]);function Je({transparent:t}){const e=o.useRef(null),r=o.useRef(Qe),a=o.useRef({centerX:0,centerY:0,radius:0}),c=o.useRef(0),l=o.useCallback(()=>{const d=e.current;if(!d)return;const{offsetWidth:u,offsetHeight:g}=d.canvas;a.current={centerX:u/2,centerY:g/2,radius:Math.min(u,g)/3},r.current.resize(a.current.radius/6,Math.min(Math.round(a.current.radius/30),14))},[]),f=o.useCallback(()=>{e.current&&(e.current.clearRect(0,0,e.current.canvas.offsetWidth,e.current.canvas.offsetHeight),r.current.draw(e.current,a.current.centerX,a.current.centerY,a.current.radius),c.current=window.requestAnimationFrame(f))},[]);return o.useEffect(()=>(l(),f(),window.addEventListener("resize",l,!1),()=>{window.cancelAnimationFrame(c.current),window.removeEventListener("resize",l,!1)}),[l,f]),n.jsx(I,{transparent:t,context:e})}const Ke=15e3,re=3500,Ze=t=>{t.setFloat32(0,t.getFloat32(0)+t.getFloat32(8)),t.setFloat32(4,t.getFloat32(4)+t.getFloat32(12))};function et({transparent:t}){const e=o.useRef(null),r=o.useRef([]),a=o.useRef(0),c=o.useRef(0),l=o.useRef(),f=o.useRef(0),d=o.useCallback(()=>{e.current&&(c.current=Math.min(e.current.canvas.offsetWidth,e.current.canvas.offsetHeight)/2)},[e]),u=o.useCallback(()=>{if(e.current){window.clearTimeout(l.current),e.current.clearRect(0,0,e.current.canvas.offsetWidth,e.current.canvas.offsetHeight),e.current.canvas.style.opacity="",e.current.canvas.style.transition="",a.current=Math.round(Math.log2(window.innerWidth*window.innerHeight)),r.current=[];const v=16,w=new ArrayBuffer(v*a.current);for(let m=0;m<a.current;m++){const y=m*v,h=new DataView(w,y,v);h.setFloat32(0,Math.random()*e.current.canvas.offsetWidth),h.setFloat32(4,Math.random()*e.current.canvas.offsetHeight),h.setFloat32(8,Math.random()*1.5*(Math.random()<.5?-1:1)),h.setFloat32(12,Math.random()*1.5*(Math.random()<.5?-1:1)),r.current.push(h)}l.current=window.setTimeout(()=>{e.current&&(e.current.canvas.style.opacity="0",e.current.canvas.style.transition=`opacity ${re/1e3}s ease-out`,setTimeout(u,re))},Ke)}},[e]),g=o.useCallback(()=>{for(const v of r.current)Ze(v);if(e.current){for(let v=0;v<a.current-1;v++){const w=r.current[v];if(w)for(let m=v+1;m<a.current;m++){const y=r.current[m];if(!y)continue;const h=Math.hypot(w.getFloat32(0)-y.getFloat32(0),w.getFloat32(4)-y.getFloat32(4));if(h<=c.current){const i=h/c.current;e.current.strokeStyle=`rgba(30, 30, ${i*180}, 0.015)`,e.current.beginPath(),e.current.lineWidth=1-i,e.current.moveTo(w.getFloat32(0),w.getFloat32(4)),e.current.lineTo(y.getFloat32(0),y.getFloat32(4)),e.current.stroke()}}}f.current=window.requestAnimationFrame(g)}},[e]);return o.useEffect(()=>(d(),u(),g(),window.addEventListener("resize",d,!1),window.addEventListener("resize",u,!1),()=>{window.cancelAnimationFrame(f.current),window.removeEventListener("resize",d,!1),window.removeEventListener("resize",u,!1)}),[u,g,d]),n.jsx(I,{transparent:t,context:e})}function tt(){const t={angle:2*Math.PI*Math.random(),speed:(-.5+Math.random())/20,radius:0,x:0,y:0};return{data:t,update:(r,a,c)=>{t.radius=r,t.angle+=t.speed,t.x=a/2+t.radius*Math.cos(t.angle),t.y=c/2+t.radius*Math.sin(t.angle)}}}const ge=t=>t<.5?2*t*t:-1+(4-2*t)*t,q=16,se=30,nt=8;function rt({transparent:t}){const e=o.useRef(null),r=o.useRef(se),a=o.useRef(0),c=o.useRef(1),l=o.useRef([]),f=o.useRef(300),d=o.useRef(.25),u=o.useRef(0),g=o.useCallback(()=>{for(let m=0;m<q;m+=1)l.current.push(tt())},[]),v=o.useCallback(()=>{if(e.current){const{offsetWidth:m,offsetHeight:y}=e.current.canvas;a.current=Math.min(m,y)/2;for(const h of l.current)h.update(r.current,m,y)}},[]),w=o.useCallback(()=>{if(e.current){const m=l.current.at(0),y=l.current.at(-1);if(!m||!y)return;const{offsetWidth:h,offsetHeight:i}=e.current.canvas;e.current.fillStyle="rgba(242, 242, 242, 0.2)",e.current.fillRect(0,0,h,i),e.current.beginPath(),e.current.moveTo((m.data.x+y.data.x)/2,(m.data.y+y.data.y)/2);for(let C=0;C<q;C+=1){const b=C+1===q?0:C+1,x=l.current[C],z=l.current[b];if(!x||!z)break;e.current.quadraticCurveTo(x.data.x,x.data.y,(x.data.x+z.data.x)/2,(x.data.y+z.data.y)/2),x.update(r.current,h,i)}const S=Math.round(f.current);e.current.globalAlpha=.5,e.current.strokeStyle=`hsla(${S}, 68%, 48%, 0.6)`,e.current.shadowColor=`hsla(${S}, 68%, 28%, 0.6)`,e.current.shadowBlur=r.current*30/432,e.current.lineWidth=1,e.current.stroke(),e.current.shadowColor="transparent",f.current+=d.current,(f.current>=320||f.current<=280)&&(d.current*=-1);const k=1-ge(r.current/a.current),s=Math.max(k,.01)*c.current*nt;r.current+=s,r.current>=a.current?c.current=-1:r.current<=se&&(c.current=1),u.current=window.requestAnimationFrame(w)}},[]);return o.useEffect(()=>(g(),v(),w(),window.addEventListener("resize",v,!1),()=>{window.cancelAnimationFrame(u.current),window.removeEventListener("resize",v,!1)}),[v,g,w]),n.jsx(I,{transparent:t,context:e})}const E=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,H=6,oe=360/H*Math.PI/180,ae=Array.from({length:H}).map((t,e)=>({x:+Math.cos(e*oe).toFixed(2),y:+Math.sin(e*oe).toFixed(2)})),st=(t,e,r,a,c)=>{const l=[t,e];let f=E(0,H-1),d=0,u=E(300,340);return{move:()=>{var w,m;if(d%c===0&&(f+=Math.random()>.5?1:-1,f=Math.abs(f%H),Math.random()*Math.exp(d/160)>100)){l[0]=t,l[1]=e,f=E(0,H-1),d=0;return}l[0]+=((w=ae[f])==null?void 0:w.x)??0,l[1]+=((m=ae[f])==null?void 0:m.y)??0,d++,u++,u>=340&&(u=300)},draw:()=>{a.beginPath(),a.globalAlpha=.5,a.fillStyle=`hsl(${u}, 68%, 48%)`,a.fillRect(...l,r,r)}}};function ot({transparent:t}){const e=o.useRef(null),r=o.useRef({centerX:0,centerY:0,maxCount:0,stepsAway:0}),a=o.useRef([]),c=o.useRef(0),l=o.useCallback(()=>{const u=e.current;u&&(r.current.centerX=u.canvas.offsetWidth/2,r.current.centerY=u.canvas.offsetHeight/2,r.current.maxCount=Math.round(Math.log2(window.innerWidth*window.innerHeight)),r.current.stepsAway=r.current.maxCount*2,a.current=[])},[]),f=o.useCallback(()=>{a.current.length<r.current.maxCount&&e.current&&Math.random()>.8&&a.current.push(st(r.current.centerX,r.current.centerY,2,e.current,r.current.stepsAway))},[]),d=o.useCallback(()=>{if(e.current){e.current.fillStyle="rgba(242, 242, 242, 0.1)",e.current.fillRect(0,0,e.current.canvas.offsetWidth,e.current.canvas.offsetHeight),f();for(const u of a.current)u.move(),u.draw();c.current=window.requestAnimationFrame(d)}},[f]);return o.useEffect(()=>(l(),d(),window.addEventListener("resize",l,!1),()=>{window.cancelAnimationFrame(c.current),window.removeEventListener("resize",l,!1)}),[l,d]),n.jsx(I,{transparent:t,context:e})}const X=(t,e)=>{const m=new ArrayBuffer(78),y=new DataView(m,0,48),h=p=>y.getFloat32(p*4),i=(p,_)=>y.setFloat32(p*4,_),S=new DataView(m,48,24);for(let p=0;p<6;p+=1)S.setFloat32(4*p,Math.random()/5);const k=new DataView(m,72,6);for(let p=0;p<6;p+=1)k.setInt8(1*p,Math.random()<.5?-1:1);const s={canvasWidth:0,canvasHeight:0,screenSideOffset:0,canvasXCenter:0,canvasYCenter:0,offsetTop:0,offsetLeft:0},C=(p,_)=>{s.canvasWidth=p[0],s.canvasHeight=p[1],s.screenSideOffset=s.canvasWidth/5,s.canvasXCenter=s.canvasWidth/2,s.canvasYCenter=s.canvasHeight/2,s.offsetLeft=_[0],s.offsetTop=_[1]},b=(p,_)=>{C(p,_);const M=s.canvasWidth/4;i(0,-s.screenSideOffset),i(1,s.canvasYCenter),i(2,M),i(3,0),i(4,s.canvasXCenter+M),i(5,0),i(6,s.canvasWidth+s.screenSideOffset),i(7,s.canvasYCenter),i(8,s.canvasWidth+s.screenSideOffset),i(9,s.canvasHeight),i(10,M),i(11,s.canvasHeight)},x=(p,_,M,A=!0,W=!1)=>{const P=(p-1)/2,J=h(p);let K=S.getFloat32(P*4);if(A){const Z=ge((J-_)/(M-_)),xe=(W?1-Z:Z)/2;K+=xe}const D=J+K*k.getInt8(P*1);D<=_?k.setInt8(P*1,1):D>=M&&k.setInt8(P*1,-1),i(p,D)},z=()=>{const p=[1,3,5,7,9,11].map(h),_=Math.min(...p),M=Math.max(...p),A=t.createLinearGradient(s.canvasXCenter+s.offsetLeft,_+s.offsetTop,s.canvasXCenter+s.offsetLeft,M+s.offsetTop);return A.addColorStop(0,e[0]),A.addColorStop(.5,"rgba(242, 242, 242, 0.5)"),A.addColorStop(1,e[1]),A},j=()=>{t.beginPath(),t.moveTo(h(0)+s.offsetLeft,h(1)+s.offsetTop),t.bezierCurveTo(h(2)+s.offsetLeft,h(3)+s.offsetTop,h(4)+s.offsetLeft,h(5)+s.offsetTop,h(6)+s.offsetLeft,h(7)+s.offsetTop),t.bezierCurveTo(h(8)+s.offsetLeft,h(9)+s.offsetTop,h(10)+s.offsetLeft,h(11)+s.offsetTop,h(0)+s.offsetLeft,h(1)+s.offsetTop),t.globalAlpha=.7,t.globalCompositeOperation="lighter",t.fillStyle=z(),t.fill()};return{init:b,execute:()=>{x(1,0,s.canvasHeight,!1),x(3,0,s.canvasYCenter),x(5,0,s.canvasYCenter),x(7,0,s.canvasHeight,!1),x(9,s.canvasYCenter,s.canvasHeight,!0,!0),x(11,s.canvasYCenter,s.canvasHeight,!0,!0),j()},resize:(p,_)=>{C(p,_);const M=s.canvasWidth/4;i(0,-s.screenSideOffset),i(2,M),i(4,s.canvasXCenter+M),i(6,s.canvasWidth+s.screenSideOffset),i(8,s.canvasWidth+s.screenSideOffset),i(10,M)}}};function at({transparent:t}){const e=o.useRef(null),r=o.useRef([]),a=o.useRef(0),c=o.useCallback(()=>{const d=e.current;if(!d)return;const u=d.canvas.offsetHeight/3;for(const g of r.current)g.resize([d.canvas.offsetWidth,u],[0,d.canvas.offsetHeight-u])},[]),l=o.useCallback(()=>{const d=e.current;if(!d)return;r.current=[X(d,["hsla(240, 21%, 52%, 1)","hsla(240, 19%, 23%, 1)"]),X(d,["hsla(360, 68%, 48%, 0.5)","hsla(0, 68%, 35%, 1)"]),X(d,["hsla(187, 93%, 57%, 0.5)","hsla(187, 93%, 57%, 1)"])];const u=d.canvas.offsetHeight/3;for(const g of r.current)g.init([d.canvas.offsetWidth,u],[0,d.canvas.offsetHeight-u])},[]),f=o.useCallback(()=>{if(e.current){e.current.clearRect(0,0,e.current.canvas.offsetWidth,e.current.canvas.offsetHeight);for(const d of r.current)d.execute();a.current=window.requestAnimationFrame(f)}},[]);return o.useEffect(()=>(l(),f(),window.addEventListener("resize",c,!1),()=>{window.cancelAnimationFrame(a.current),window.removeEventListener("resize",c,!1)}),[c,f,l]),n.jsx(I,{transparent:t,context:e})}const G=[et,at,ot,rt,Je],we=o.createContext(void 0);function it({children:t}){const[e,r]=o.useState(E(0,G.length-1)),a=()=>{r(c=>c===G.length-1?0:c+1)};return n.jsx(we.Provider,{value:{index:e,indexNext:a},children:t})}function Q(){const t=o.useContext(we);if(!t)throw new Error("useAnimation should use inside of AnimationProvider");return t}const ct="_header_1m5uo_1",lt="_cell_1m5uo_16",dt="_item_1m5uo_28",R={header:ct,cell:lt,item:dt};function ut({routes:t}){const{indexNext:e}=Q(),r=ve();return n.jsx(V,{children:n.jsxs("div",{className:R.header,children:[n.jsx("div",{className:R.cell,children:n.jsx("div",{className:R.item,children:n.jsx(De,{routes:t})})}),n.jsxs("div",{className:R.cell,children:[["desktop","tablet"].includes(r)?n.jsx("div",{className:R.item,children:n.jsx(he,{onClick:()=>e(),children:"Next animation"})}):null,n.jsx("div",{className:R.item,children:n.jsx(ee,{Icon:ke,title:"Linkedin",link:"https://www.linkedin.com/in/lnx/",blank:!0})}),n.jsx("div",{className:R.item,children:n.jsx(ee,{Icon:Ce,title:"GitHub",link:"https://github.com/codeshake",blank:!0})})]})]})})}const ie="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",ce=400,ft=()=>ie[E(0,ie.length-1)]??"";function ht({text:t}){const e=o.useRef(null);return o.useEffect(()=>{const r=t.length,a=Array.from({length:r}).map((f,d)=>{const u=d/r;return Math.random()*(1-u)+u}),c=performance.now(),l=f=>{if(!e.current)return;const d=f-c;if(d>=ce){e.current.textContent=t;return}const u=d/ce;let g="";for(let v=0;v<r;v+=1){const w=a.at(v)??0;u>=w?g+=t[v]:u<w/3?g+=" ":g+=ft()}e.current.textContent=g,window.requestAnimationFrame(l)};window.requestAnimationFrame(l)},[t]),n.jsx("h1",{ref:e})}const mt="_experience_136sk_1",pt="_item_136sk_17",vt="_cell_136sk_28",gt="_bar_136sk_38",wt="_date_136sk_50",xt="_line_136sk_67",F={experience:mt,item:pt,cell:vt,bar:gt,date:wt,line:xt},yt=[{dateFrom:"Feb 2020",dateTo:"May 2023",organization:"Leroy Merlin",link:"https://leroymerlin.ru/",details:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Team Lead position in sector of strategic market analysis and in sector of product analysis. Developed UX and UI for admin panels to manage a numerous of products using React, Redux and TypeScript. Skilled in developing RestApi and WebSocket using GoLang in conjunction with ClickHouse and Redis. Proficient in describing Jenkins pipelines, delivering products to Kubernetes using Werf and Helm. And a little bit of GitHub Actions."}),n.jsxs("p",{children:["Established rules for frontend development, including:",n.jsx("br",{}),n.jsx("span",{className:"point"}),"Codestyle by ESLint, Stylelint and Prettier",n.jsx("br",{}),n.jsx("span",{className:"point"}),"Implementation of Swagger into projects",n.jsx("br",{}),n.jsx("span",{className:"point"}),"Git flow and pull request checking"]}),n.jsx("p",{children:"Created environment for frontend development using Webpack and Express.js for server side rendering, departing from boilerplate and Next.js to improve building (compilation) speed."}),n.jsx("p",{children:"Monitored team pulse by correcting and orchestrating work processes and load balance."})]})},{dateFrom:"Sep 2018",dateTo:"Dec 2019",organization:"ADICT",link:"https://adict.ru/",details:n.jsxs("p",{children:["Developed Single Page Applications (SPA) using Angular 8, written npm packages for organizations, and collaborated with designers. I have also created animations using SVG and Canvas, as well as optimized large landing pages. I am highly experienced in TypeScript and have written some components for CI/CD using BitBucket. Additionally, created a visual chart for a ",n.jsx("a",{href:"https://bitbucket.org/Lunix38/telegram-chart/",target:"_blank",rel:"noreferrer",children:"Telegram contest"})," ","using Canvas, which was able to process up to 2 million data inputs. Also accustomed to leading projects and managing junior developers, as well as selecting the appropriate stack for the job."]})},{dateFrom:"Jun 2017",dateTo:"Aug 2018",organization:"ITSumma",link:"https://www.itsumma.ru/",details:n.jsxs("p",{children:["Worked with backend development, particularly with the Laravel framework. Also worked with MySQL, caching, selections, and big data manipulation. Furthermore, have experience configuring web servers such as NGINX and transitioning from Homestead to Docker. Developed a number of projects, including"," ",n.jsx("a",{href:"https://thebell.io/",target:"_blank",rel:"noreferrer",children:"thebell.io"}),", caramba.tv,"," ",n.jsx("a",{href:"https://postnauka.ru/",target:"_blank",rel:"noreferrer",children:"postnauka.ru"}),", and"," ",n.jsx("a",{href:"https://project1917.ru/",target:"_blank",rel:"noreferrer",children:"1917"}),"."]})},{dateFrom:"Nov 2014",dateTo:"May 2017",organization:"Freelance",details:n.jsxs("p",{children:["Gained expertise in development architecture and quickly mastered new technologies and solutions.",n.jsx("br",{}),"Developed a working knowledge of PHP/MySQL and several frameworks, such as Yii.",n.jsx("br",{}),"Acquired a basic understanding of design, typography, and font selection."]})},{dateFrom:"Oct 2013",dateTo:"Oct 2014",organization:"Medvedev Marketing",link:"http://medvedevmarketing.ru/",details:n.jsx("p",{children:"Extensive experience in web development, utilizing tools such as npm, node, bundlers, and style preprocessors."})}];function bt(){return n.jsxs(V,{children:[n.jsx(ht,{text:"Experience"}),n.jsx("h4",{children:"Skills roadmap"}),n.jsx("div",{className:F.experience,children:yt.map(t=>n.jsxs("div",{className:F.item,children:[n.jsx("div",{className:F.cell,children:n.jsxs("div",{className:F.bar,children:[n.jsx("div",{className:F.date,children:n.jsxs("span",{children:[t.dateFrom,n.jsx("br",{}),t.dateTo]})}),n.jsx("div",{className:F.line})]})}),n.jsxs("div",{className:F.cell,children:[n.jsx("p",{children:t.link?n.jsx("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.organization}):t.organization}),t.details]})]},t.dateFrom))})]})}const jt="_home_1om3j_1",_t="_line_1om3j_18",St="_footer_1om3j_33",Y={home:jt,"home-intro":"_home-intro_1om3j_1",line:_t,"home-intro-line":"_home-intro-line_1om3j_1",footer:St};function Ct(){const t=ve(),{indexNext:e}=Q();return n.jsxs(n.Fragment,{children:[n.jsx(me,{children:n.jsx(V,{children:n.jsxs("div",{className:Y.home,children:[n.jsx("div",{className:Y.line}),n.jsx("h1",{children:"Sergei Lutov"}),n.jsx("h2",{children:"Frontend developer"}),n.jsx("h4",{children:"React // CSS // TS // UX"})]})})}),t==="mobile"?n.jsx("div",{className:Y.footer,children:n.jsx(he,{onClick:()=>e(),children:"Next animation"})}):null]})}const kt="_notfound_qjrvf_1",Mt={notfound:kt};function zt(){return n.jsx(me,{children:n.jsxs("div",{className:Mt.notfound,children:[n.jsx("h1",{children:"404"}),n.jsx("h2",{children:"Page not found"}),n.jsxs("p",{children:["Back to ",n.jsx(fe,{to:"/",children:"main page"})]})]})})}const U=[{path:"/",title:"Home",element:Ct},{path:"/experience",title:"Experience",element:bt},{path:"*",title:"404",hidden:!0,element:zt}];function Lt(){return n.jsx(ye,{children:U.map(({path:t,element:e})=>n.jsx(be,{path:t,component:e},t))})}const le="Sergei Lutov";function At(){const[t]=ue(),{index:e}=Q(),r=G[e];return o.useEffect(()=>{const a=U.find(c=>c.path===t);a?document.title=`${le} — ${a.title}`:document.title=le},[t]),n.jsxs(n.Fragment,{children:[!!r&&n.jsx(r,{transparent:t!=="/"}),n.jsxs(Te,{children:[n.jsx(Be,{children:n.jsx(ut,{routes:U})}),n.jsx(Ee,{children:n.jsx(Lt,{})})]})]})}function Rt(){return n.jsx(je,{hook:_e,children:n.jsx(it,{children:n.jsx(At,{})})})}const de=document.querySelector("#root");de&&Se(de).render(n.jsx(Rt,{}));