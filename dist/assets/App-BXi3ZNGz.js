const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B7K89E-u.js","assets/hooks-BWlgxfag.js","assets/Container-DAXyd3cS.js","assets/Grid-DoNr8ZW3.js","assets/index-Crojux0P.js","assets/index-tn0RQdqM.css","assets/index-DeM_htbW.js","assets/useNotifications-BpYlB5BH.js","assets/NotificationsContext-BH5vbCom.js","assets/Alert-C_YSVmH4.js","assets/TextField-CWBJaELZ.js","assets/index-CHY6eshE.js","assets/ProtectedRoute-BDlj4639.js","assets/index-3CsBnHOB.js","assets/ContentCopy-BG2QJnER.js","assets/index-Ba3E3BNI.js","assets/qr-generator-CB3jYnl5.js","assets/clipboard-handler-AfVuizbM.js","assets/index-BeUW_rAL.js","assets/index-SCQZcIyO.js","assets/index-zou_Fl4o.js"])))=>i.map(i=>d[i]);
import{N as ly,O as uy,Q as hy,s as dy,b as w,S as nf,j as O,n as Ee,U as fy,V as py,z as _t,W as my,X as gy,w as Ct,Y as yy,Z as _y,_ as Bu,$ as Pa,a0 as vy,a1 as Ey,a2 as wy,q as at,k as ct,a3 as $u,G as Ty,f as rf,a4 as Iy,i as lt,l as Xe,o as Te,p as it,t as Tt,v as sf,P as Vc,x as ci,d as _r,a5 as Za,a6 as Lc,E as li,a7 as of,a8 as Ks,a9 as af,m as tt,aa as by,g as Ay,y as mr,B as Ry,ab as Mc,ac as Sy,ad as Br,A as $i,c as Py,ae as Cy,F as xy,af as ju,H as nn,I as qu,ag as ky,ah as Dy,ai as Fc,aj as no,L as Ny,J as Ca}from"./hooks-BWlgxfag.js";import{e as Hu,l as Oy,_ as xn,t as Vy}from"./index-Crojux0P.js";const Ly=n=>{var r;const e={systemProps:{},otherProps:{}},t=((r=n==null?void 0:n.theme)==null?void 0:r.unstable_sxConfig)??uy;return Object.keys(n).forEach(s=>{t[s]?e.systemProps[s]=n[s]:e.otherProps[s]=n[s]}),e};function Uc(n){const{sx:e,...t}=n,{systemProps:r,otherProps:s}=Ly(t);let i;return Array.isArray(e)?i=[r,...e]:typeof e=="function"?i=(...o)=>{const c=e(...o);return ly(c)?{...r,...c}:r}:i={...r,...e},{...s,sx:i}}function My(n={}){const{themeId:e,defaultTheme:t,defaultClassName:r="MuiBox-root",generateClassName:s}=n,i=hy("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(dy);return w.forwardRef(function(l,u){const d=nf(t),{className:p,component:m="div",...T}=Uc(l);return O.jsx(i,{as:m,ref:u,className:Ee(p,s?s(r):r),theme:e&&d[e]||d,...T})})}const Fy=fy();function Uy(n){const{theme:e,name:t,props:r}=n;return!e||!e.components||!e.components[t]||!e.components[t].defaultProps?r:py(e.components[t].defaultProps,r)}function By({props:n,name:e,defaultTheme:t,themeId:r}){let s=nf(t);return r&&(s=s[r]||s),Uy({theme:s,name:e,props:n})}function zu(...n){return n.reduce((e,t)=>t==null?e:function(...s){e.apply(this,s),t.apply(this,s)},()=>{})}function $y(n,e=166){let t;function r(...s){const i=()=>{n.apply(this,s)};clearTimeout(t),t=setTimeout(i,e)}return r.clear=()=>{clearTimeout(t)},r}function jy(n,e){var t,r,s;return w.isValidElement(n)&&e.indexOf(n.type.muiName??((s=(r=(t=n.type)==null?void 0:t._payload)==null?void 0:r.value)==null?void 0:s.muiName))!==-1}function zt(n){return _t(n).defaultView||window}function Wu(n,e){typeof n=="function"?n(e):n&&(n.current=e)}function qy({controlled:n,default:e,name:t,state:r="value"}){const{current:s}=w.useRef(n!==void 0),[i,o]=w.useState(e),c=s?n:i,l=w.useCallback(u=>{s||o(u)},[]);return[c,l]}function Hy(n=window){const e=n.document.documentElement.clientWidth;return n.innerWidth-e}function zy(n){var p;const{elementType:e,externalSlotProps:t,ownerState:r,skipResolvingSlotProps:s=!1,...i}=n,o=s?{}:my(t,r),{props:c,internalRef:l}=gy({...i,externalSlotProps:o}),u=Ct(l,o==null?void 0:o.ref,(p=n.additionalProps)==null?void 0:p.ref);return yy(e,{...c,ref:u},r)}const Wy=_y(),Gy=Fy("div",{name:"MuiStack",slot:"Root",overridesResolver:(n,e)=>e.root});function Ky(n){return By({props:n,name:"MuiStack",defaultTheme:Wy})}function Qy(n,e){const t=w.Children.toArray(n).filter(Boolean);return t.reduce((r,s,i)=>(r.push(s),i<t.length-1&&r.push(w.cloneElement(e,{key:`separator-${i}`})),r),[])}const Yy=n=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[n],Xy=({ownerState:n,theme:e})=>{let t={display:"flex",flexDirection:"column",...Bu({theme:e},Pa({values:n.direction,breakpoints:e.breakpoints.values}),r=>({flexDirection:r}))};if(n.spacing){const r=vy(e),s=Object.keys(e.breakpoints.values).reduce((l,u)=>((typeof n.spacing=="object"&&n.spacing[u]!=null||typeof n.direction=="object"&&n.direction[u]!=null)&&(l[u]=!0),l),{}),i=Pa({values:n.direction,base:s}),o=Pa({values:n.spacing,base:s});typeof i=="object"&&Object.keys(i).forEach((l,u,d)=>{if(!i[l]){const m=u>0?i[d[u-1]]:"column";i[l]=m}}),t=Ey(t,Bu({theme:e},o,(l,u)=>n.useFlexGap?{gap:$u(r,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Yy(u?i[u]:n.direction)}`]:$u(r,l)}}))}return t=wy(e.breakpoints,t),t};function Jy(n={}){const{createStyledComponent:e=Gy,useThemeProps:t=Ky,componentName:r="MuiStack"}=n,s=()=>at({root:["root"]},l=>ct(r,l),{}),i=e(Xy);return w.forwardRef(function(l,u){const d=t(l),p=Uc(d),{component:m="div",direction:T="column",spacing:S=0,divider:P,children:A,className:k,useFlexGap:D=!1,...C}=p,V={direction:T,spacing:S,useFlexGap:D},F=s();return O.jsx(i,{as:m,ownerState:V,ref:u,className:Ee(F.root,k),...C,children:P?Qy(A,P):A})})}function Zy(n){return O.jsx(Ty,{...n,defaultTheme:Iy,themeId:rf})}function cf(n){return function(t){return O.jsx(Zy,{styles:typeof n=="function"?r=>n({theme:r,...t}):n})}}function e_(){return Uc}function ec(n,e){if(!n)return e;if(typeof n=="function"||typeof e=="function")return s=>{const i=typeof e=="function"?e(s):e,o=typeof n=="function"?n({...s,...i}):n,c=Ee(s==null?void 0:s.className,i==null?void 0:i.className,o==null?void 0:o.className);return{...i,...o,...!!c&&{className:c},...(i==null?void 0:i.style)&&(o==null?void 0:o.style)&&{style:{...i.style,...o.style}},...(i==null?void 0:i.sx)&&(o==null?void 0:o.sx)&&{sx:[...Array.isArray(i.sx)?i.sx:[i.sx],...Array.isArray(o.sx)?o.sx:[o.sx]]}}};const t=e,r=Ee(t==null?void 0:t.className,n==null?void 0:n.className);return{...e,...n,...!!r&&{className:r},...(t==null?void 0:t.style)&&(n==null?void 0:n.style)&&{style:{...t.style,...n.style}},...(t==null?void 0:t.sx)&&(n==null?void 0:n.sx)&&{sx:[...Array.isArray(t.sx)?t.sx:[t.sx],...Array.isArray(n.sx)?n.sx:[n.sx]]}}}function t_(n){return ct("MuiTypography",n)}const Gu=lt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),n_={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},r_=e_(),s_=n=>{const{align:e,gutterBottom:t,noWrap:r,paragraph:s,variant:i,classes:o}=n,c={root:["root",i,n.align!=="inherit"&&`align${it(e)}`,t&&"gutterBottom",r&&"noWrap",s&&"paragraph"]};return at(c,t_,o)},i_=Te("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.variant&&e[t.variant],t.align!=="inherit"&&e[`align${it(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})(Tt(({theme:n})=>{var e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(n.typography).filter(([t,r])=>t!=="inherit"&&r&&typeof r=="object").map(([t,r])=>({props:{variant:t},style:r})),...Object.entries(n.palette).filter(sf()).map(([t])=>({props:{color:t},style:{color:(n.vars||n).palette[t].main}})),...Object.entries(((e=n.palette)==null?void 0:e.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${it(t)}`},style:{color:(n.vars||n).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),Ku={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},hr=w.forwardRef(function(e,t){const{color:r,...s}=Xe({props:e,name:"MuiTypography"}),i=!n_[r],o=r_({...s,...i&&{color:r}}),{align:c="inherit",className:l,component:u,gutterBottom:d=!1,noWrap:p=!1,paragraph:m=!1,variant:T="body1",variantMapping:S=Ku,...P}=o,A={...o,align:c,color:r,className:l,component:u,gutterBottom:d,noWrap:p,paragraph:m,variant:T,variantMapping:S},k=u||(m?"p":S[T]||Ku[T])||"span",D=s_(A);return O.jsx(i_,{as:k,ref:t,className:Ee(D.root,l),...P,ownerState:A,style:{...c!=="inherit"&&{"--Typography-textAlign":c},...P.style}})});function o_(n){return ct("MuiAppBar",n)}lt("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const a_=n=>{const{color:e,position:t,classes:r}=n,s={root:["root",`color${it(e)}`,`position${it(t)}`]};return at(s,o_,r)},Qu=(n,e)=>n?`${n==null?void 0:n.replace(")","")}, ${e})`:e,c_=Te(Vc,{name:"MuiAppBar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[`position${it(t.position)}`],e[`color${it(t.color)}`]]}})(Tt(({theme:n})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":n.vars?n.vars.palette.AppBar.defaultBg:n.palette.grey[100],"--AppBar-color":n.vars?n.vars.palette.text.primary:n.palette.getContrastText(n.palette.grey[100]),...n.applyStyles("dark",{"--AppBar-background":n.vars?n.vars.palette.AppBar.defaultBg:n.palette.grey[900],"--AppBar-color":n.vars?n.vars.palette.text.primary:n.palette.getContrastText(n.palette.grey[900])})}},...Object.entries(n.palette).filter(sf(["contrastText"])).map(([e])=>({props:{color:e},style:{"--AppBar-background":(n.vars??n).palette[e].main,"--AppBar-color":(n.vars??n).palette[e].contrastText}})),{props:e=>e.enableColorOnDark===!0&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:e=>e.enableColorOnDark===!1&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...n.applyStyles("dark",{backgroundColor:n.vars?Qu(n.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:n.vars?Qu(n.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...n.applyStyles("dark",{backgroundImage:"none"})}}]}))),l_=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiAppBar"}),{className:s,color:i="primary",enableColorOnDark:o=!1,position:c="fixed",...l}=r,u={...r,color:i,position:c,enableColorOnDark:o},d=a_(u);return O.jsx(c_,{square:!0,component:"header",ownerState:u,elevation:4,className:Ee(d.root,s,c==="fixed"&&"mui-fixed"),ref:t,...l})});var ft="top",xt="bottom",kt="right",pt="left",Bc="auto",ui=[ft,xt,kt,pt],Gr="start",Qs="end",u_="clippingParents",lf="viewport",Ss="popper",h_="reference",Yu=ui.reduce(function(n,e){return n.concat([e+"-"+Gr,e+"-"+Qs])},[]),uf=[].concat(ui,[Bc]).reduce(function(n,e){return n.concat([e,e+"-"+Gr,e+"-"+Qs])},[]),d_="beforeRead",f_="read",p_="afterRead",m_="beforeMain",g_="main",y_="afterMain",__="beforeWrite",v_="write",E_="afterWrite",w_=[d_,f_,p_,m_,g_,y_,__,v_,E_];function Zt(n){return n?(n.nodeName||"").toLowerCase():null}function Et(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function vr(n){var e=Et(n).Element;return n instanceof e||n instanceof Element}function St(n){var e=Et(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function $c(n){if(typeof ShadowRoot>"u")return!1;var e=Et(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function T_(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var r=e.styles[t]||{},s=e.attributes[t]||{},i=e.elements[t];!St(i)||!Zt(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(o){var c=s[o];c===!1?i.removeAttribute(o):i.setAttribute(o,c===!0?"":c)}))})}function I_(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],i=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:t[r]),c=o.reduce(function(l,u){return l[u]="",l},{});!St(s)||!Zt(s)||(Object.assign(s.style,c),Object.keys(i).forEach(function(l){s.removeAttribute(l)}))})}}const b_={name:"applyStyles",enabled:!0,phase:"write",fn:T_,effect:I_,requires:["computeStyles"]};function Wt(n){return n.split("-")[0]}var gr=Math.max,vo=Math.min,Kr=Math.round;function tc(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function hf(){return!/^((?!chrome|android).)*safari/i.test(tc())}function Qr(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=n.getBoundingClientRect(),s=1,i=1;e&&St(n)&&(s=n.offsetWidth>0&&Kr(r.width)/n.offsetWidth||1,i=n.offsetHeight>0&&Kr(r.height)/n.offsetHeight||1);var o=vr(n)?Et(n):window,c=o.visualViewport,l=!hf()&&t,u=(r.left+(l&&c?c.offsetLeft:0))/s,d=(r.top+(l&&c?c.offsetTop:0))/i,p=r.width/s,m=r.height/i;return{width:p,height:m,top:d,right:u+p,bottom:d+m,left:u,x:u,y:d}}function jc(n){var e=Qr(n),t=n.offsetWidth,r=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:r}}function df(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&$c(t)){var r=e;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function pn(n){return Et(n).getComputedStyle(n)}function A_(n){return["table","td","th"].indexOf(Zt(n))>=0}function Kn(n){return((vr(n)?n.ownerDocument:n.document)||window.document).documentElement}function jo(n){return Zt(n)==="html"?n:n.assignedSlot||n.parentNode||($c(n)?n.host:null)||Kn(n)}function Xu(n){return!St(n)||pn(n).position==="fixed"?null:n.offsetParent}function R_(n){var e=/firefox/i.test(tc()),t=/Trident/i.test(tc());if(t&&St(n)){var r=pn(n);if(r.position==="fixed")return null}var s=jo(n);for($c(s)&&(s=s.host);St(s)&&["html","body"].indexOf(Zt(s))<0;){var i=pn(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function hi(n){for(var e=Et(n),t=Xu(n);t&&A_(t)&&pn(t).position==="static";)t=Xu(t);return t&&(Zt(t)==="html"||Zt(t)==="body"&&pn(t).position==="static")?e:t||R_(n)||e}function qc(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Us(n,e,t){return gr(n,vo(e,t))}function S_(n,e,t){var r=Us(n,e,t);return r>t?t:r}function ff(){return{top:0,right:0,bottom:0,left:0}}function pf(n){return Object.assign({},ff(),n)}function mf(n,e){return e.reduce(function(t,r){return t[r]=n,t},{})}var P_=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,pf(typeof e!="number"?e:mf(e,ui))};function C_(n){var e,t=n.state,r=n.name,s=n.options,i=t.elements.arrow,o=t.modifiersData.popperOffsets,c=Wt(t.placement),l=qc(c),u=[pt,kt].indexOf(c)>=0,d=u?"height":"width";if(!(!i||!o)){var p=P_(s.padding,t),m=jc(i),T=l==="y"?ft:pt,S=l==="y"?xt:kt,P=t.rects.reference[d]+t.rects.reference[l]-o[l]-t.rects.popper[d],A=o[l]-t.rects.reference[l],k=hi(i),D=k?l==="y"?k.clientHeight||0:k.clientWidth||0:0,C=P/2-A/2,V=p[T],F=D-m[d]-p[S],U=D/2-m[d]/2+C,E=Us(V,U,F),_=l;t.modifiersData[r]=(e={},e[_]=E,e.centerOffset=E-U,e)}}function x_(n){var e=n.state,t=n.options,r=t.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||df(e.elements.popper,s)&&(e.elements.arrow=s))}const k_={name:"arrow",enabled:!0,phase:"main",fn:C_,effect:x_,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Yr(n){return n.split("-")[1]}var D_={top:"auto",right:"auto",bottom:"auto",left:"auto"};function N_(n,e){var t=n.x,r=n.y,s=e.devicePixelRatio||1;return{x:Kr(t*s)/s||0,y:Kr(r*s)/s||0}}function Ju(n){var e,t=n.popper,r=n.popperRect,s=n.placement,i=n.variation,o=n.offsets,c=n.position,l=n.gpuAcceleration,u=n.adaptive,d=n.roundOffsets,p=n.isFixed,m=o.x,T=m===void 0?0:m,S=o.y,P=S===void 0?0:S,A=typeof d=="function"?d({x:T,y:P}):{x:T,y:P};T=A.x,P=A.y;var k=o.hasOwnProperty("x"),D=o.hasOwnProperty("y"),C=pt,V=ft,F=window;if(u){var U=hi(t),E="clientHeight",_="clientWidth";if(U===Et(t)&&(U=Kn(t),pn(U).position!=="static"&&c==="absolute"&&(E="scrollHeight",_="scrollWidth")),U=U,s===ft||(s===pt||s===kt)&&i===Qs){V=xt;var v=p&&U===F&&F.visualViewport?F.visualViewport.height:U[E];P-=v-r.height,P*=l?1:-1}if(s===pt||(s===ft||s===xt)&&i===Qs){C=kt;var I=p&&U===F&&F.visualViewport?F.visualViewport.width:U[_];T-=I-r.width,T*=l?1:-1}}var b=Object.assign({position:c},u&&D_),R=d===!0?N_({x:T,y:P},Et(t)):{x:T,y:P};if(T=R.x,P=R.y,l){var g;return Object.assign({},b,(g={},g[V]=D?"0":"",g[C]=k?"0":"",g.transform=(F.devicePixelRatio||1)<=1?"translate("+T+"px, "+P+"px)":"translate3d("+T+"px, "+P+"px, 0)",g))}return Object.assign({},b,(e={},e[V]=D?P+"px":"",e[C]=k?T+"px":"",e.transform="",e))}function O_(n){var e=n.state,t=n.options,r=t.gpuAcceleration,s=r===void 0?!0:r,i=t.adaptive,o=i===void 0?!0:i,c=t.roundOffsets,l=c===void 0?!0:c,u={placement:Wt(e.placement),variation:Yr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ju(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ju(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const V_={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:O_,data:{}};var ji={passive:!0};function L_(n){var e=n.state,t=n.instance,r=n.options,s=r.scroll,i=s===void 0?!0:s,o=r.resize,c=o===void 0?!0:o,l=Et(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(d){d.addEventListener("scroll",t.update,ji)}),c&&l.addEventListener("resize",t.update,ji),function(){i&&u.forEach(function(d){d.removeEventListener("scroll",t.update,ji)}),c&&l.removeEventListener("resize",t.update,ji)}}const M_={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:L_,data:{}};var F_={left:"right",right:"left",bottom:"top",top:"bottom"};function ro(n){return n.replace(/left|right|bottom|top/g,function(e){return F_[e]})}var U_={start:"end",end:"start"};function Zu(n){return n.replace(/start|end/g,function(e){return U_[e]})}function Hc(n){var e=Et(n),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function zc(n){return Qr(Kn(n)).left+Hc(n).scrollLeft}function B_(n,e){var t=Et(n),r=Kn(n),s=t.visualViewport,i=r.clientWidth,o=r.clientHeight,c=0,l=0;if(s){i=s.width,o=s.height;var u=hf();(u||!u&&e==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}return{width:i,height:o,x:c+zc(n),y:l}}function $_(n){var e,t=Kn(n),r=Hc(n),s=(e=n.ownerDocument)==null?void 0:e.body,i=gr(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=gr(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),c=-r.scrollLeft+zc(n),l=-r.scrollTop;return pn(s||t).direction==="rtl"&&(c+=gr(t.clientWidth,s?s.clientWidth:0)-i),{width:i,height:o,x:c,y:l}}function Wc(n){var e=pn(n),t=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+r)}function gf(n){return["html","body","#document"].indexOf(Zt(n))>=0?n.ownerDocument.body:St(n)&&Wc(n)?n:gf(jo(n))}function Bs(n,e){var t;e===void 0&&(e=[]);var r=gf(n),s=r===((t=n.ownerDocument)==null?void 0:t.body),i=Et(r),o=s?[i].concat(i.visualViewport||[],Wc(r)?r:[]):r,c=e.concat(o);return s?c:c.concat(Bs(jo(o)))}function nc(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function j_(n,e){var t=Qr(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function eh(n,e,t){return e===lf?nc(B_(n,t)):vr(e)?j_(e,t):nc($_(Kn(n)))}function q_(n){var e=Bs(jo(n)),t=["absolute","fixed"].indexOf(pn(n).position)>=0,r=t&&St(n)?hi(n):n;return vr(r)?e.filter(function(s){return vr(s)&&df(s,r)&&Zt(s)!=="body"}):[]}function H_(n,e,t,r){var s=e==="clippingParents"?q_(n):[].concat(e),i=[].concat(s,[t]),o=i[0],c=i.reduce(function(l,u){var d=eh(n,u,r);return l.top=gr(d.top,l.top),l.right=vo(d.right,l.right),l.bottom=vo(d.bottom,l.bottom),l.left=gr(d.left,l.left),l},eh(n,o,r));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function yf(n){var e=n.reference,t=n.element,r=n.placement,s=r?Wt(r):null,i=r?Yr(r):null,o=e.x+e.width/2-t.width/2,c=e.y+e.height/2-t.height/2,l;switch(s){case ft:l={x:o,y:e.y-t.height};break;case xt:l={x:o,y:e.y+e.height};break;case kt:l={x:e.x+e.width,y:c};break;case pt:l={x:e.x-t.width,y:c};break;default:l={x:e.x,y:e.y}}var u=s?qc(s):null;if(u!=null){var d=u==="y"?"height":"width";switch(i){case Gr:l[u]=l[u]-(e[d]/2-t[d]/2);break;case Qs:l[u]=l[u]+(e[d]/2-t[d]/2);break}}return l}function Ys(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=r===void 0?n.placement:r,i=t.strategy,o=i===void 0?n.strategy:i,c=t.boundary,l=c===void 0?u_:c,u=t.rootBoundary,d=u===void 0?lf:u,p=t.elementContext,m=p===void 0?Ss:p,T=t.altBoundary,S=T===void 0?!1:T,P=t.padding,A=P===void 0?0:P,k=pf(typeof A!="number"?A:mf(A,ui)),D=m===Ss?h_:Ss,C=n.rects.popper,V=n.elements[S?D:m],F=H_(vr(V)?V:V.contextElement||Kn(n.elements.popper),l,d,o),U=Qr(n.elements.reference),E=yf({reference:U,element:C,placement:s}),_=nc(Object.assign({},C,E)),v=m===Ss?_:U,I={top:F.top-v.top+k.top,bottom:v.bottom-F.bottom+k.bottom,left:F.left-v.left+k.left,right:v.right-F.right+k.right},b=n.modifiersData.offset;if(m===Ss&&b){var R=b[s];Object.keys(I).forEach(function(g){var H=[kt,xt].indexOf(g)>=0?1:-1,z=[ft,xt].indexOf(g)>=0?"y":"x";I[g]+=R[z]*H})}return I}function z_(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=t.boundary,i=t.rootBoundary,o=t.padding,c=t.flipVariations,l=t.allowedAutoPlacements,u=l===void 0?uf:l,d=Yr(r),p=d?c?Yu:Yu.filter(function(S){return Yr(S)===d}):ui,m=p.filter(function(S){return u.indexOf(S)>=0});m.length===0&&(m=p);var T=m.reduce(function(S,P){return S[P]=Ys(n,{placement:P,boundary:s,rootBoundary:i,padding:o})[Wt(P)],S},{});return Object.keys(T).sort(function(S,P){return T[S]-T[P]})}function W_(n){if(Wt(n)===Bc)return[];var e=ro(n);return[Zu(n),e,Zu(e)]}function G_(n){var e=n.state,t=n.options,r=n.name;if(!e.modifiersData[r]._skip){for(var s=t.mainAxis,i=s===void 0?!0:s,o=t.altAxis,c=o===void 0?!0:o,l=t.fallbackPlacements,u=t.padding,d=t.boundary,p=t.rootBoundary,m=t.altBoundary,T=t.flipVariations,S=T===void 0?!0:T,P=t.allowedAutoPlacements,A=e.options.placement,k=Wt(A),D=k===A,C=l||(D||!S?[ro(A)]:W_(A)),V=[A].concat(C).reduce(function(ce,Ie){return ce.concat(Wt(Ie)===Bc?z_(e,{placement:Ie,boundary:d,rootBoundary:p,padding:u,flipVariations:S,allowedAutoPlacements:P}):Ie)},[]),F=e.rects.reference,U=e.rects.popper,E=new Map,_=!0,v=V[0],I=0;I<V.length;I++){var b=V[I],R=Wt(b),g=Yr(b)===Gr,H=[ft,xt].indexOf(R)>=0,z=H?"width":"height",B=Ys(e,{placement:b,boundary:d,rootBoundary:p,altBoundary:m,padding:u}),Z=H?g?kt:pt:g?xt:ft;F[z]>U[z]&&(Z=ro(Z));var G=ro(Z),ne=[];if(i&&ne.push(B[R]<=0),c&&ne.push(B[Z]<=0,B[G]<=0),ne.every(function(ce){return ce})){v=b,_=!1;break}E.set(b,ne)}if(_)for(var fe=S?3:1,Fe=function(Ie){var We=V.find(function(W){var le=E.get(W);if(le)return le.slice(0,Ie).every(function(ue){return ue})});if(We)return v=We,"break"},Ne=fe;Ne>0;Ne--){var Re=Fe(Ne);if(Re==="break")break}e.placement!==v&&(e.modifiersData[r]._skip=!0,e.placement=v,e.reset=!0)}}const K_={name:"flip",enabled:!0,phase:"main",fn:G_,requiresIfExists:["offset"],data:{_skip:!1}};function th(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function nh(n){return[ft,kt,xt,pt].some(function(e){return n[e]>=0})}function Q_(n){var e=n.state,t=n.name,r=e.rects.reference,s=e.rects.popper,i=e.modifiersData.preventOverflow,o=Ys(e,{elementContext:"reference"}),c=Ys(e,{altBoundary:!0}),l=th(o,r),u=th(c,s,i),d=nh(l),p=nh(u);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}const Y_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Q_};function X_(n,e,t){var r=Wt(n),s=[pt,ft].indexOf(r)>=0?-1:1,i=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,o=i[0],c=i[1];return o=o||0,c=(c||0)*s,[pt,kt].indexOf(r)>=0?{x:c,y:o}:{x:o,y:c}}function J_(n){var e=n.state,t=n.options,r=n.name,s=t.offset,i=s===void 0?[0,0]:s,o=uf.reduce(function(d,p){return d[p]=X_(p,e.rects,i),d},{}),c=o[e.placement],l=c.x,u=c.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}const Z_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:J_};function ev(n){var e=n.state,t=n.name;e.modifiersData[t]=yf({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const tv={name:"popperOffsets",enabled:!0,phase:"read",fn:ev,data:{}};function nv(n){return n==="x"?"y":"x"}function rv(n){var e=n.state,t=n.options,r=n.name,s=t.mainAxis,i=s===void 0?!0:s,o=t.altAxis,c=o===void 0?!1:o,l=t.boundary,u=t.rootBoundary,d=t.altBoundary,p=t.padding,m=t.tether,T=m===void 0?!0:m,S=t.tetherOffset,P=S===void 0?0:S,A=Ys(e,{boundary:l,rootBoundary:u,padding:p,altBoundary:d}),k=Wt(e.placement),D=Yr(e.placement),C=!D,V=qc(k),F=nv(V),U=e.modifiersData.popperOffsets,E=e.rects.reference,_=e.rects.popper,v=typeof P=="function"?P(Object.assign({},e.rects,{placement:e.placement})):P,I=typeof v=="number"?{mainAxis:v,altAxis:v}:Object.assign({mainAxis:0,altAxis:0},v),b=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,R={x:0,y:0};if(U){if(i){var g,H=V==="y"?ft:pt,z=V==="y"?xt:kt,B=V==="y"?"height":"width",Z=U[V],G=Z+A[H],ne=Z-A[z],fe=T?-_[B]/2:0,Fe=D===Gr?E[B]:_[B],Ne=D===Gr?-_[B]:-E[B],Re=e.elements.arrow,ce=T&&Re?jc(Re):{width:0,height:0},Ie=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ff(),We=Ie[H],W=Ie[z],le=Us(0,E[B],ce[B]),ue=C?E[B]/2-fe-le-We-I.mainAxis:Fe-le-We-I.mainAxis,ye=C?-E[B]/2+fe+le+W+I.mainAxis:Ne+le+W+I.mainAxis,he=e.elements.arrow&&hi(e.elements.arrow),oe=he?V==="y"?he.clientTop||0:he.clientLeft||0:0,Oe=(g=b==null?void 0:b[V])!=null?g:0,Se=Z+ue-Oe-oe,rt=Z+ye-Oe,be=Us(T?vo(G,Se):G,Z,T?gr(ne,rt):ne);U[V]=be,R[V]=be-Z}if(c){var ke,ut=V==="x"?ft:pt,Pe=V==="x"?xt:kt,me=U[F],bt=F==="y"?"height":"width",Jn=me+A[ut],wn=me-A[Pe],Zn=[ft,pt].indexOf(k)!==-1,$t=(ke=b==null?void 0:b[F])!=null?ke:0,er=Zn?Jn:me-E[bt]-_[bt]-$t+I.altAxis,rn=Zn?me+E[bt]+_[bt]-$t-I.altAxis:wn,Tn=T&&Zn?S_(er,me,rn):Us(T?er:Jn,me,T?rn:wn);U[F]=Tn,R[F]=Tn-me}e.modifiersData[r]=R}}const sv={name:"preventOverflow",enabled:!0,phase:"main",fn:rv,requiresIfExists:["offset"]};function iv(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function ov(n){return n===Et(n)||!St(n)?Hc(n):iv(n)}function av(n){var e=n.getBoundingClientRect(),t=Kr(e.width)/n.offsetWidth||1,r=Kr(e.height)/n.offsetHeight||1;return t!==1||r!==1}function cv(n,e,t){t===void 0&&(t=!1);var r=St(e),s=St(e)&&av(e),i=Kn(e),o=Qr(n,s,t),c={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!t)&&((Zt(e)!=="body"||Wc(i))&&(c=ov(e)),St(e)?(l=Qr(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=zc(i))),{x:o.left+c.scrollLeft-l.x,y:o.top+c.scrollTop-l.y,width:o.width,height:o.height}}function lv(n){var e=new Map,t=new Set,r=[];n.forEach(function(i){e.set(i.name,i)});function s(i){t.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(c){if(!t.has(c)){var l=e.get(c);l&&s(l)}}),r.push(i)}return n.forEach(function(i){t.has(i.name)||s(i)}),r}function uv(n){var e=lv(n);return w_.reduce(function(t,r){return t.concat(e.filter(function(s){return s.phase===r}))},[])}function hv(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function dv(n){var e=n.reduce(function(t,r){var s=t[r.name];return t[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,t},{});return Object.keys(e).map(function(t){return e[t]})}var rh={placement:"bottom",modifiers:[],strategy:"absolute"};function sh(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function fv(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,r=t===void 0?[]:t,s=e.defaultOptions,i=s===void 0?rh:s;return function(c,l,u){u===void 0&&(u=i);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},rh,i),modifiersData:{},elements:{reference:c,popper:l},attributes:{},styles:{}},p=[],m=!1,T={state:d,setOptions:function(k){var D=typeof k=="function"?k(d.options):k;P(),d.options=Object.assign({},i,d.options,D),d.scrollParents={reference:vr(c)?Bs(c):c.contextElement?Bs(c.contextElement):[],popper:Bs(l)};var C=uv(dv([].concat(r,d.options.modifiers)));return d.orderedModifiers=C.filter(function(V){return V.enabled}),S(),T.update()},forceUpdate:function(){if(!m){var k=d.elements,D=k.reference,C=k.popper;if(sh(D,C)){d.rects={reference:cv(D,hi(C),d.options.strategy==="fixed"),popper:jc(C)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(I){return d.modifiersData[I.name]=Object.assign({},I.data)});for(var V=0;V<d.orderedModifiers.length;V++){if(d.reset===!0){d.reset=!1,V=-1;continue}var F=d.orderedModifiers[V],U=F.fn,E=F.options,_=E===void 0?{}:E,v=F.name;typeof U=="function"&&(d=U({state:d,options:_,name:v,instance:T})||d)}}}},update:hv(function(){return new Promise(function(A){T.forceUpdate(),A(d)})}),destroy:function(){P(),m=!0}};if(!sh(c,l))return T;T.setOptions(u).then(function(A){!m&&u.onFirstUpdate&&u.onFirstUpdate(A)});function S(){d.orderedModifiers.forEach(function(A){var k=A.name,D=A.options,C=D===void 0?{}:D,V=A.effect;if(typeof V=="function"){var F=V({state:d,name:k,instance:T,options:C}),U=function(){};p.push(F||U)}})}function P(){p.forEach(function(A){return A()}),p=[]}return T}}var pv=[M_,tv,V_,b_,Z_,K_,sv,k_,Y_],mv=fv({defaultModifiers:pv});function gv(n){return typeof n=="function"?n():n}const _f=w.forwardRef(function(e,t){const{children:r,container:s,disablePortal:i=!1}=e,[o,c]=w.useState(null),l=Ct(w.isValidElement(r)?ci(r):null,t);if(_r(()=>{i||c(gv(s)||document.body)},[s,i]),_r(()=>{if(o&&!i)return Wu(t,o),()=>{Wu(t,null)}},[t,o,i]),i){if(w.isValidElement(r)){const u={ref:l};return w.cloneElement(r,u)}return r}return o&&Za.createPortal(r,o)});function yv(n){return ct("MuiPopper",n)}lt("MuiPopper",["root"]);function _v(n,e){if(e==="ltr")return n;switch(n){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return n}}function rc(n){return typeof n=="function"?n():n}function vv(n){return n.nodeType!==void 0}const Ev=n=>{const{classes:e}=n;return at({root:["root"]},yv,e)},wv={},Tv=w.forwardRef(function(e,t){const{anchorEl:r,children:s,direction:i,disablePortal:o,modifiers:c,open:l,placement:u,popperOptions:d,popperRef:p,slotProps:m={},slots:T={},TransitionProps:S,ownerState:P,...A}=e,k=w.useRef(null),D=Ct(k,t),C=w.useRef(null),V=Ct(C,p),F=w.useRef(V);_r(()=>{F.current=V},[V]),w.useImperativeHandle(p,()=>C.current,[]);const U=_v(u,i),[E,_]=w.useState(U),[v,I]=w.useState(rc(r));w.useEffect(()=>{C.current&&C.current.forceUpdate()}),w.useEffect(()=>{r&&I(rc(r))},[r]),_r(()=>{if(!v||!l)return;const z=G=>{_(G.placement)};let B=[{name:"preventOverflow",options:{altBoundary:o}},{name:"flip",options:{altBoundary:o}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:G})=>{z(G)}}];c!=null&&(B=B.concat(c)),d&&d.modifiers!=null&&(B=B.concat(d.modifiers));const Z=mv(v,k.current,{placement:U,...d,modifiers:B});return F.current(Z),()=>{Z.destroy(),F.current(null)}},[v,o,c,l,d,U]);const b={placement:E};S!==null&&(b.TransitionProps=S);const R=Ev(e),g=T.root??"div",H=zy({elementType:g,externalSlotProps:m.root,externalForwardedProps:A,additionalProps:{role:"tooltip",ref:D},ownerState:e,className:R.root});return O.jsx(g,{...H,children:typeof s=="function"?s(b):s})}),Iv=w.forwardRef(function(e,t){const{anchorEl:r,children:s,container:i,direction:o="ltr",disablePortal:c=!1,keepMounted:l=!1,modifiers:u,open:d,placement:p="bottom",popperOptions:m=wv,popperRef:T,style:S,transition:P=!1,slotProps:A={},slots:k={},...D}=e,[C,V]=w.useState(!0),F=()=>{V(!1)},U=()=>{V(!0)};if(!l&&!d&&(!P||C))return null;let E;if(i)E=i;else if(r){const I=rc(r);E=I&&vv(I)?_t(I).body:_t(null).body}const _=!d&&l&&(!P||C)?"none":void 0,v=P?{in:d,onEnter:F,onExited:U}:void 0;return O.jsx(_f,{disablePortal:c,container:E,children:O.jsx(Tv,{anchorEl:r,direction:o,disablePortal:c,modifiers:u,ref:t,open:P?!C:d,placement:p,popperOptions:m,popperRef:T,slotProps:A,slots:k,...D,style:{position:"fixed",top:0,left:0,display:_,...S},TransitionProps:v,children:s})})}),bv=Te(Iv,{name:"MuiPopper",slot:"Root",overridesResolver:(n,e)=>e.root})({}),vf=w.forwardRef(function(e,t){const r=Lc(),s=Xe({props:e,name:"MuiPopper"}),{anchorEl:i,component:o,components:c,componentsProps:l,container:u,disablePortal:d,keepMounted:p,modifiers:m,open:T,placement:S,popperOptions:P,popperRef:A,transition:k,slots:D,slotProps:C,...V}=s,F=(D==null?void 0:D.root)??(c==null?void 0:c.Root),U={anchorEl:i,container:u,disablePortal:d,keepMounted:p,modifiers:m,open:T,placement:S,popperOptions:P,popperRef:A,transition:k,...V};return O.jsx(bv,{as:o,direction:r?"rtl":"ltr",slots:{root:F},slotProps:C??l,...U,ref:t})});function ih(n){return typeof n=="string"}const Av={entering:{opacity:1},entered:{opacity:1}},Rv=w.forwardRef(function(e,t){const r=li(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:o=!0,children:c,easing:l,in:u,onEnter:d,onEntered:p,onEntering:m,onExit:T,onExited:S,onExiting:P,style:A,timeout:k=s,TransitionComponent:D=of,...C}=e,V=w.useRef(null),F=Ct(V,ci(c),t),U=H=>z=>{if(H){const B=V.current;z===void 0?H(B):H(B,z)}},E=U(m),_=U((H,z)=>{af(H);const B=Ks({style:A,timeout:k,easing:l},{mode:"enter"});H.style.webkitTransition=r.transitions.create("opacity",B),H.style.transition=r.transitions.create("opacity",B),d&&d(H,z)}),v=U(p),I=U(P),b=U(H=>{const z=Ks({style:A,timeout:k,easing:l},{mode:"exit"});H.style.webkitTransition=r.transitions.create("opacity",z),H.style.transition=r.transitions.create("opacity",z),T&&T(H)}),R=U(S),g=H=>{i&&i(V.current,H)};return O.jsx(D,{appear:o,in:u,nodeRef:V,onEnter:_,onEntered:v,onEntering:E,onExit:b,onExited:R,onExiting:I,addEndListener:g,timeout:k,...C,children:(H,{ownerState:z,...B})=>w.cloneElement(c,{style:{opacity:0,visibility:H==="exited"&&!u?"hidden":void 0,...Av[H],...A,...c.props.style},ref:F,...B})})});function Sv(n){return ct("MuiBackdrop",n)}lt("MuiBackdrop",["root","invisible"]);const Pv=n=>{const{classes:e,invisible:t}=n;return at({root:["root",t&&"invisible"]},Sv,e)},Cv=Te("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.invisible&&e.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),xv=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiBackdrop"}),{children:s,className:i,component:o="div",invisible:c=!1,open:l,components:u={},componentsProps:d={},slotProps:p={},slots:m={},TransitionComponent:T,transitionDuration:S,...P}=r,A={...r,component:o,invisible:c},k=Pv(A),D={transition:T,root:u.Root,...m},C={...d,...p},V={slots:D,slotProps:C},[F,U]=tt("root",{elementType:Cv,externalForwardedProps:V,className:Ee(k.root,i),ownerState:A}),[E,_]=tt("transition",{elementType:Rv,externalForwardedProps:V,ownerState:A});return O.jsx(E,{in:l,timeout:S,...P,..._,children:O.jsx(F,{"aria-hidden":!0,...U,classes:k,ref:t,children:s})})}),kv=lt("MuiBox",["root"]),Dv=Ay(),Ef=My({themeId:rf,defaultTheme:Dv,defaultClassName:kv.root,generateClassName:by.generate}),sc=typeof cf({})=="function",Nv=(n,e)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...e&&!n.vars&&{colorScheme:n.palette.mode}}),Ov=n=>({color:(n.vars||n).palette.text.primary,...n.typography.body1,backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}}),wf=(n,e=!1)=>{var i,o;const t={};e&&n.colorSchemes&&typeof n.getColorSchemeSelector=="function"&&Object.entries(n.colorSchemes).forEach(([c,l])=>{var d,p;const u=n.getColorSchemeSelector(c);u.startsWith("@")?t[u]={":root":{colorScheme:(d=l.palette)==null?void 0:d.mode}}:t[u.replace(/\s*&/,"")]={colorScheme:(p=l.palette)==null?void 0:p.mode}});let r={html:Nv(n,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:{margin:0,...Ov(n),"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}},...t};const s=(o=(i=n.components)==null?void 0:i.MuiCssBaseline)==null?void 0:o.styleOverrides;return s&&(r=[r,s]),r},so="mui-ecs",Vv=n=>{const e=wf(n,!1),t=Array.isArray(e)?e[0]:e;return!n.vars&&t&&(t.html[`:root:has(${so})`]={colorScheme:n.palette.mode}),n.colorSchemes&&Object.entries(n.colorSchemes).forEach(([r,s])=>{var o,c;const i=n.getColorSchemeSelector(r);i.startsWith("@")?t[i]={[`:root:not(:has(.${so}))`]:{colorScheme:(o=s.palette)==null?void 0:o.mode}}:t[i.replace(/\s*&/,"")]={[`&:not(:has(.${so}))`]:{colorScheme:(c=s.palette)==null?void 0:c.mode}}}),e},Lv=cf(sc?({theme:n,enableColorScheme:e})=>wf(n,e):({theme:n})=>Vv(n));function Mv(n){const e=Xe({props:n,name:"MuiCssBaseline"}),{children:t,enableColorScheme:r=!1}=e;return O.jsxs(w.Fragment,{children:[sc&&O.jsx(Lv,{enableColorScheme:r}),!sc&&!r&&O.jsx("span",{className:so,style:{display:"none"}}),t]})}function Fv(n){const e=_t(n);return e.body===n?zt(n).innerWidth>e.documentElement.clientWidth:n.scrollHeight>n.clientHeight}function $s(n,e){e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden")}function oh(n){return parseInt(zt(n).getComputedStyle(n).paddingRight,10)||0}function Uv(n){const t=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(n.tagName),r=n.tagName==="INPUT"&&n.getAttribute("type")==="hidden";return t||r}function ah(n,e,t,r,s){const i=[e,t,...r];[].forEach.call(n.children,o=>{const c=!i.includes(o),l=!Uv(o);c&&l&&$s(o,s)})}function xa(n,e){let t=-1;return n.some((r,s)=>e(r)?(t=s,!0):!1),t}function Bv(n,e){const t=[],r=n.container;if(!e.disableScrollLock){if(Fv(r)){const o=Hy(zt(r));t.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${oh(r)+o}px`;const c=_t(r).querySelectorAll(".mui-fixed");[].forEach.call(c,l=>{t.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${oh(l)+o}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=_t(r).body;else{const o=r.parentElement,c=zt(r);i=(o==null?void 0:o.nodeName)==="HTML"&&c.getComputedStyle(o).overflowY==="scroll"?o:r}t.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{t.forEach(({value:i,el:o,property:c})=>{i?o.style.setProperty(c,i):o.style.removeProperty(c)})}}function $v(n){const e=[];return[].forEach.call(n.children,t=>{t.getAttribute("aria-hidden")==="true"&&e.push(t)}),e}class jv{constructor(){this.modals=[],this.containers=[]}add(e,t){let r=this.modals.indexOf(e);if(r!==-1)return r;r=this.modals.length,this.modals.push(e),e.modalRef&&$s(e.modalRef,!1);const s=$v(t);ah(t,e.mount,e.modalRef,s,!0);const i=xa(this.containers,o=>o.container===t);return i!==-1?(this.containers[i].modals.push(e),r):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:s}),r)}mount(e,t){const r=xa(this.containers,i=>i.modals.includes(e)),s=this.containers[r];s.restore||(s.restore=Bv(s,t))}remove(e,t=!0){const r=this.modals.indexOf(e);if(r===-1)return r;const s=xa(this.containers,o=>o.modals.includes(e)),i=this.containers[s];if(i.modals.splice(i.modals.indexOf(e),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),e.modalRef&&$s(e.modalRef,t),ah(i.container,e.mount,e.modalRef,i.hiddenSiblings,!1),this.containers.splice(s,1);else{const o=i.modals[i.modals.length-1];o.modalRef&&$s(o.modalRef,!1)}return r}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}const qv=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Hv(n){const e=parseInt(n.getAttribute("tabindex")||"",10);return Number.isNaN(e)?n.contentEditable==="true"||(n.nodeName==="AUDIO"||n.nodeName==="VIDEO"||n.nodeName==="DETAILS")&&n.getAttribute("tabindex")===null?0:n.tabIndex:e}function zv(n){if(n.tagName!=="INPUT"||n.type!=="radio"||!n.name)return!1;const e=r=>n.ownerDocument.querySelector(`input[type="radio"]${r}`);let t=e(`[name="${n.name}"]:checked`);return t||(t=e(`[name="${n.name}"]`)),t!==n}function Wv(n){return!(n.disabled||n.tagName==="INPUT"&&n.type==="hidden"||zv(n))}function Gv(n){const e=[],t=[];return Array.from(n.querySelectorAll(qv)).forEach((r,s)=>{const i=Hv(r);i===-1||!Wv(r)||(i===0?e.push(r):t.push({documentOrder:s,tabIndex:i,node:r}))}),t.sort((r,s)=>r.tabIndex===s.tabIndex?r.documentOrder-s.documentOrder:r.tabIndex-s.tabIndex).map(r=>r.node).concat(e)}function Kv(){return!0}function Qv(n){const{children:e,disableAutoFocus:t=!1,disableEnforceFocus:r=!1,disableRestoreFocus:s=!1,getTabbable:i=Gv,isEnabled:o=Kv,open:c}=n,l=w.useRef(!1),u=w.useRef(null),d=w.useRef(null),p=w.useRef(null),m=w.useRef(null),T=w.useRef(!1),S=w.useRef(null),P=Ct(ci(e),S),A=w.useRef(null);w.useEffect(()=>{!c||!S.current||(T.current=!t)},[t,c]),w.useEffect(()=>{if(!c||!S.current)return;const C=_t(S.current);return S.current.contains(C.activeElement)||(S.current.hasAttribute("tabIndex")||S.current.setAttribute("tabIndex","-1"),T.current&&S.current.focus()),()=>{s||(p.current&&p.current.focus&&(l.current=!0,p.current.focus()),p.current=null)}},[c]),w.useEffect(()=>{if(!c||!S.current)return;const C=_t(S.current),V=E=>{A.current=E,!(r||!o()||E.key!=="Tab")&&C.activeElement===S.current&&E.shiftKey&&(l.current=!0,d.current&&d.current.focus())},F=()=>{var v,I;const E=S.current;if(E===null)return;if(!C.hasFocus()||!o()||l.current){l.current=!1;return}if(E.contains(C.activeElement)||r&&C.activeElement!==u.current&&C.activeElement!==d.current)return;if(C.activeElement!==m.current)m.current=null;else if(m.current!==null)return;if(!T.current)return;let _=[];if((C.activeElement===u.current||C.activeElement===d.current)&&(_=i(S.current)),_.length>0){const b=!!((v=A.current)!=null&&v.shiftKey&&((I=A.current)==null?void 0:I.key)==="Tab"),R=_[0],g=_[_.length-1];typeof R!="string"&&typeof g!="string"&&(b?g.focus():R.focus())}else E.focus()};C.addEventListener("focusin",F),C.addEventListener("keydown",V,!0);const U=setInterval(()=>{C.activeElement&&C.activeElement.tagName==="BODY"&&F()},50);return()=>{clearInterval(U),C.removeEventListener("focusin",F),C.removeEventListener("keydown",V,!0)}},[t,r,s,o,c,i]);const k=C=>{p.current===null&&(p.current=C.relatedTarget),T.current=!0,m.current=C.target;const V=e.props.onFocus;V&&V(C)},D=C=>{p.current===null&&(p.current=C.relatedTarget),T.current=!0};return O.jsxs(w.Fragment,{children:[O.jsx("div",{tabIndex:c?0:-1,onFocus:D,ref:u,"data-testid":"sentinelStart"}),w.cloneElement(e,{ref:P,onFocus:k}),O.jsx("div",{tabIndex:c?0:-1,onFocus:D,ref:d,"data-testid":"sentinelEnd"})]})}function Yv(n){return typeof n=="function"?n():n}function Xv(n){return n?n.props.hasOwnProperty("in"):!1}const ch=()=>{},qi=new jv;function Jv(n){const{container:e,disableEscapeKeyDown:t=!1,disableScrollLock:r=!1,closeAfterTransition:s=!1,onTransitionEnter:i,onTransitionExited:o,children:c,onClose:l,open:u,rootRef:d}=n,p=w.useRef({}),m=w.useRef(null),T=w.useRef(null),S=Ct(T,d),[P,A]=w.useState(!u),k=Xv(c);let D=!0;(n["aria-hidden"]==="false"||n["aria-hidden"]===!1)&&(D=!1);const C=()=>_t(m.current),V=()=>(p.current.modalRef=T.current,p.current.mount=m.current,p.current),F=()=>{qi.mount(V(),{disableScrollLock:r}),T.current&&(T.current.scrollTop=0)},U=mr(()=>{const z=Yv(e)||C().body;qi.add(V(),z),T.current&&F()}),E=()=>qi.isTopModal(V()),_=mr(z=>{m.current=z,z&&(u&&E()?F():T.current&&$s(T.current,D))}),v=w.useCallback(()=>{qi.remove(V(),D)},[D]);w.useEffect(()=>()=>{v()},[v]),w.useEffect(()=>{u?U():(!k||!s)&&v()},[u,v,k,s,U]);const I=z=>B=>{var Z;(Z=z.onKeyDown)==null||Z.call(z,B),!(B.key!=="Escape"||B.which===229||!E())&&(t||(B.stopPropagation(),l&&l(B,"escapeKeyDown")))},b=z=>B=>{var Z;(Z=z.onClick)==null||Z.call(z,B),B.target===B.currentTarget&&l&&l(B,"backdropClick")};return{getRootProps:(z={})=>{const B=Ry(n);delete B.onTransitionEnter,delete B.onTransitionExited;const Z={...B,...z};return{role:"presentation",...Z,onKeyDown:I(Z),ref:S}},getBackdropProps:(z={})=>{const B=z;return{"aria-hidden":!0,...B,onClick:b(B),open:u}},getTransitionProps:()=>{const z=()=>{A(!1),i&&i()},B=()=>{A(!0),o&&o(),s&&v()};return{onEnter:zu(z,(c==null?void 0:c.props.onEnter)??ch),onExited:zu(B,(c==null?void 0:c.props.onExited)??ch)}},rootRef:S,portalRef:_,isTopModal:E,exited:P,hasTransition:k}}function Zv(n){return ct("MuiModal",n)}lt("MuiModal",["root","hidden","backdrop"]);const eE=n=>{const{open:e,exited:t,classes:r}=n;return at({root:["root",!e&&t&&"hidden"],backdrop:["backdrop"]},Zv,r)},tE=Te("div",{name:"MuiModal",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,!t.open&&t.exited&&e.hidden]}})(Tt(({theme:n})=>({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:e})=>!e.open&&e.exited,style:{visibility:"hidden"}}]}))),nE=Te(xv,{name:"MuiModal",slot:"Backdrop",overridesResolver:(n,e)=>e.backdrop})({zIndex:-1}),rE=w.forwardRef(function(e,t){const r=Xe({name:"MuiModal",props:e}),{BackdropComponent:s=nE,BackdropProps:i,classes:o,className:c,closeAfterTransition:l=!1,children:u,container:d,component:p,components:m={},componentsProps:T={},disableAutoFocus:S=!1,disableEnforceFocus:P=!1,disableEscapeKeyDown:A=!1,disablePortal:k=!1,disableRestoreFocus:D=!1,disableScrollLock:C=!1,hideBackdrop:V=!1,keepMounted:F=!1,onBackdropClick:U,onClose:E,onTransitionEnter:_,onTransitionExited:v,open:I,slotProps:b={},slots:R={},theme:g,...H}=r,z={...r,closeAfterTransition:l,disableAutoFocus:S,disableEnforceFocus:P,disableEscapeKeyDown:A,disablePortal:k,disableRestoreFocus:D,disableScrollLock:C,hideBackdrop:V,keepMounted:F},{getRootProps:B,getBackdropProps:Z,getTransitionProps:G,portalRef:ne,isTopModal:fe,exited:Fe,hasTransition:Ne}=Jv({...z,rootRef:t}),Re={...z,exited:Fe},ce=eE(Re),Ie={};if(u.props.tabIndex===void 0&&(Ie.tabIndex="-1"),Ne){const{onEnter:he,onExited:oe}=G();Ie.onEnter=he,Ie.onExited=oe}const We={slots:{root:m.Root,backdrop:m.Backdrop,...R},slotProps:{...T,...b}},[W,le]=tt("root",{ref:t,elementType:tE,externalForwardedProps:{...We,...H,component:p},getSlotProps:B,ownerState:Re,className:Ee(c,ce==null?void 0:ce.root,!Re.open&&Re.exited&&(ce==null?void 0:ce.hidden))}),[ue,ye]=tt("backdrop",{ref:i==null?void 0:i.ref,elementType:s,externalForwardedProps:We,shouldForwardComponentProp:!0,additionalProps:i,getSlotProps:he=>Z({...he,onClick:oe=>{U&&U(oe),he!=null&&he.onClick&&he.onClick(oe)}}),className:Ee(i==null?void 0:i.className,ce==null?void 0:ce.backdrop),ownerState:Re});return!F&&!I&&(!Ne||Fe)?null:O.jsx(_f,{ref:ne,container:d,disablePortal:k,children:O.jsxs(W,{...le,children:[!V&&s?O.jsx(ue,{...ye}):null,O.jsx(Qv,{disableEnforceFocus:P,disableAutoFocus:S,disableRestoreFocus:D,isEnabled:fe,open:I,children:w.cloneElement(u,Ie)})]})})});function sE(n,e,t){const r=e.getBoundingClientRect(),s=t&&t.getBoundingClientRect(),i=zt(e);let o;if(e.fakeTransform)o=e.fakeTransform;else{const u=i.getComputedStyle(e);o=u.getPropertyValue("-webkit-transform")||u.getPropertyValue("transform")}let c=0,l=0;if(o&&o!=="none"&&typeof o=="string"){const u=o.split("(")[1].split(")")[0].split(",");c=parseInt(u[4],10),l=parseInt(u[5],10)}return n==="left"?s?`translateX(${s.right+c-r.left}px)`:`translateX(${i.innerWidth+c-r.left}px)`:n==="right"?s?`translateX(-${r.right-s.left-c}px)`:`translateX(-${r.left+r.width-c}px)`:n==="up"?s?`translateY(${s.bottom+l-r.top}px)`:`translateY(${i.innerHeight+l-r.top}px)`:s?`translateY(-${r.top-s.top+r.height-l}px)`:`translateY(-${r.top+r.height-l}px)`}function iE(n){return typeof n=="function"?n():n}function Hi(n,e,t){const r=iE(t),s=sE(n,e,r);s&&(e.style.webkitTransform=s,e.style.transform=s)}const oE=w.forwardRef(function(e,t){const r=li(),s={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:o,appear:c=!0,children:l,container:u,direction:d="down",easing:p=s,in:m,onEnter:T,onEntered:S,onEntering:P,onExit:A,onExited:k,onExiting:D,style:C,timeout:V=i,TransitionComponent:F=of,...U}=e,E=w.useRef(null),_=Ct(ci(l),E,t),v=G=>ne=>{G&&(ne===void 0?G(E.current):G(E.current,ne))},I=v((G,ne)=>{Hi(d,G,u),af(G),T&&T(G,ne)}),b=v((G,ne)=>{const fe=Ks({timeout:V,style:C,easing:p},{mode:"enter"});G.style.webkitTransition=r.transitions.create("-webkit-transform",{...fe}),G.style.transition=r.transitions.create("transform",{...fe}),G.style.webkitTransform="none",G.style.transform="none",P&&P(G,ne)}),R=v(S),g=v(D),H=v(G=>{const ne=Ks({timeout:V,style:C,easing:p},{mode:"exit"});G.style.webkitTransition=r.transitions.create("-webkit-transform",ne),G.style.transition=r.transitions.create("transform",ne),Hi(d,G,u),A&&A(G)}),z=v(G=>{G.style.webkitTransition="",G.style.transition="",k&&k(G)}),B=G=>{o&&o(E.current,G)},Z=w.useCallback(()=>{E.current&&Hi(d,E.current,u)},[d,u]);return w.useEffect(()=>{if(m||d==="down"||d==="right")return;const G=$y(()=>{E.current&&Hi(d,E.current,u)}),ne=zt(E.current);return ne.addEventListener("resize",G),()=>{G.clear(),ne.removeEventListener("resize",G)}},[d,m,u]),w.useEffect(()=>{m||Z()},[m,Z]),O.jsx(F,{nodeRef:E,onEnter:I,onEntered:R,onEntering:b,onExit:H,onExited:z,onExiting:g,addEndListener:B,appear:c,in:m,timeout:V,...U,children:(G,{ownerState:ne,...fe})=>w.cloneElement(l,{ref:_,style:{visibility:G==="exited"&&!m?"hidden":void 0,...C,...l.props.style},...fe})})});function aE(n){return ct("MuiDrawer",n)}lt("MuiDrawer",["root","docked","paper","anchorLeft","anchorRight","anchorTop","anchorBottom","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Tf=(n,e)=>{const{ownerState:t}=n;return[e.root,(t.variant==="permanent"||t.variant==="persistent")&&e.docked,e.modal]},cE=n=>{const{classes:e,anchor:t,variant:r}=n,s={root:["root",`anchor${it(t)}`],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${it(t)}`,r!=="temporary"&&`paperAnchorDocked${it(t)}`]};return at(s,aE,e)},lE=Te(rE,{name:"MuiDrawer",slot:"Root",overridesResolver:Tf})(Tt(({theme:n})=>({zIndex:(n.vars||n).zIndex.drawer}))),uE=Te("div",{shouldForwardProp:Mc,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Tf})({flex:"0 0 auto"}),hE=Te(Vc,{name:"MuiDrawer",slot:"Paper",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.paper,e[`paperAnchor${it(t.anchor)}`],t.variant!=="temporary"&&e[`paperAnchorDocked${it(t.anchor)}`]]}})(Tt(({theme:n})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(n.vars||n).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:e})=>e.anchor==="left"&&e.variant!=="temporary",style:{borderRight:`1px solid ${(n.vars||n).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="top"&&e.variant!=="temporary",style:{borderBottom:`1px solid ${(n.vars||n).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="right"&&e.variant!=="temporary",style:{borderLeft:`1px solid ${(n.vars||n).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="bottom"&&e.variant!=="temporary",style:{borderTop:`1px solid ${(n.vars||n).palette.divider}`}}]}))),If={left:"right",right:"left",top:"down",bottom:"up"};function ur(n){return["left","right"].includes(n)}function Ds({direction:n},e){return n==="rtl"&&ur(e)?If[e]:e}const dE=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiDrawer"}),s=li(),i=Lc(),o={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:c="left",BackdropProps:l,children:u,className:d,elevation:p=16,hideBackdrop:m=!1,ModalProps:{BackdropProps:T,...S}={},onClose:P,open:A=!1,PaperProps:k={},SlideProps:D,TransitionComponent:C,transitionDuration:V=o,variant:F="temporary",slots:U={},slotProps:E={},..._}=r,v=w.useRef(!1);w.useEffect(()=>{v.current=!0},[]);const I=Ds({direction:i?"rtl":"ltr"},c),R={...r,anchor:c,elevation:p,open:A,variant:F,..._},g=cE(R),H={slots:{transition:C,...U},slotProps:{paper:k,transition:D,...E,backdrop:ec(E.backdrop||{...l,...T},{transitionDuration:V})}},[z,B]=tt("root",{ref:t,elementType:lE,className:Ee(g.root,g.modal,d),shouldForwardComponentProp:!0,ownerState:R,externalForwardedProps:{...H,..._,...S},additionalProps:{open:A,onClose:P,hideBackdrop:m,slots:{backdrop:H.slots.backdrop},slotProps:{backdrop:H.slotProps.backdrop}}}),[Z,G]=tt("paper",{elementType:hE,shouldForwardComponentProp:!0,className:Ee(g.paper,k.className),ownerState:R,externalForwardedProps:H,additionalProps:{elevation:F==="temporary"?p:0,square:!0}}),[ne,fe]=tt("docked",{elementType:uE,ref:t,className:Ee(g.root,g.docked,d),ownerState:R,externalForwardedProps:H,additionalProps:_}),[Fe,Ne]=tt("transition",{elementType:oE,ownerState:R,externalForwardedProps:H,additionalProps:{in:A,direction:If[I],timeout:V,appear:v.current}}),Re=O.jsx(Z,{...G,children:u});if(F==="permanent")return O.jsx(ne,{...fe,children:Re});const ce=O.jsx(Fe,{...Ne,children:Re});return F==="persistent"?O.jsx(ne,{...fe,children:ce}):O.jsx(z,{...B,children:ce})}),un=w.createContext({});function fE(n){return ct("MuiList",n)}lt("MuiList",["root","padding","dense","subheader"]);const pE=n=>{const{classes:e,disablePadding:t,dense:r,subheader:s}=n;return at({root:["root",!t&&"padding",r&&"dense",s&&"subheader"]},fE,e)},mE=Te("ul",{name:"MuiList",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:n})=>!n.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:n})=>n.subheader,style:{paddingTop:0}}]}),gE=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiList"}),{children:s,className:i,component:o="ul",dense:c=!1,disablePadding:l=!1,subheader:u,...d}=r,p=w.useMemo(()=>({dense:c}),[c]),m={...r,component:o,dense:c,disablePadding:l},T=pE(m);return O.jsx(un.Provider,{value:p,children:O.jsxs(mE,{as:o,className:Ee(T.root,i),ref:t,ownerState:m,...d,children:[u,s]})})});function yE(n){return ct("MuiListItem",n)}lt("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function _E(n){return ct("MuiListItemButton",n)}const Vr=lt("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),vE=(n,e)=>{const{ownerState:t}=n;return[e.root,t.dense&&e.dense,t.alignItems==="flex-start"&&e.alignItemsFlexStart,t.divider&&e.divider,!t.disableGutters&&e.gutters]},EE=n=>{const{alignItems:e,classes:t,dense:r,disabled:s,disableGutters:i,divider:o,selected:c}=n,u=at({root:["root",r&&"dense",!i&&"gutters",o&&"divider",s&&"disabled",e==="flex-start"&&"alignItemsFlexStart",c&&"selected"]},_E,t);return{...t,...u}},wE=Te(Sy,{shouldForwardProp:n=>Mc(n)||n==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:vE})(Tt(({theme:n})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Vr.selected}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:Br(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${Vr.focusVisible}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:Br(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${Vr.selected}:hover`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:Br(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:Br(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${Vr.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${Vr.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]}))),TE=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:i=!1,component:o="div",children:c,dense:l=!1,disableGutters:u=!1,divider:d=!1,focusVisibleClassName:p,selected:m=!1,className:T,...S}=r,P=w.useContext(un),A=w.useMemo(()=>({dense:l||P.dense||!1,alignItems:s,disableGutters:u}),[s,P.dense,l,u]),k=w.useRef(null);_r(()=>{i&&k.current&&k.current.focus()},[i]);const D={...r,alignItems:s,dense:A.dense,disableGutters:u,divider:d,selected:m},C=EE(D),V=Ct(k,t);return O.jsx(un.Provider,{value:A,children:O.jsx(wE,{ref:V,href:S.href||S.to,component:(S.href||S.to)&&o==="div"?"button":o,focusVisibleClassName:Ee(C.focusVisible,p),ownerState:D,className:Ee(C.root,T),...S,classes:C,children:c})})});function IE(n){return ct("MuiListItemSecondaryAction",n)}lt("MuiListItemSecondaryAction",["root","disableGutters"]);const bE=n=>{const{disableGutters:e,classes:t}=n;return at({root:["root",e&&"disableGutters"]},IE,t)},AE=Te("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.disableGutters&&e.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:n})=>n.disableGutters,style:{right:0}}]}),bf=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiListItemSecondaryAction"}),{className:s,...i}=r,o=w.useContext(un),c={...r,disableGutters:o.disableGutters},l=bE(c);return O.jsx(AE,{className:Ee(l.root,s),ownerState:c,ref:t,...i})});bf.muiName="ListItemSecondaryAction";const RE=(n,e)=>{const{ownerState:t}=n;return[e.root,t.dense&&e.dense,t.alignItems==="flex-start"&&e.alignItemsFlexStart,t.divider&&e.divider,!t.disableGutters&&e.gutters,!t.disablePadding&&e.padding,t.hasSecondaryAction&&e.secondaryAction]},SE=n=>{const{alignItems:e,classes:t,dense:r,disableGutters:s,disablePadding:i,divider:o,hasSecondaryAction:c}=n;return at({root:["root",r&&"dense",!s&&"gutters",!i&&"padding",o&&"divider",e==="flex-start"&&"alignItemsFlexStart",c&&"secondaryAction"],container:["container"]},yE,t)},PE=Te("div",{name:"MuiListItem",slot:"Root",overridesResolver:RE})(Tt(({theme:n})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${Vr.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),CE=Te("li",{name:"MuiListItem",slot:"Container",overridesResolver:(n,e)=>e.container})({position:"relative"}),xE=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiListItem"}),{alignItems:s="center",children:i,className:o,component:c,components:l={},componentsProps:u={},ContainerComponent:d="li",ContainerProps:{className:p,...m}={},dense:T=!1,disableGutters:S=!1,disablePadding:P=!1,divider:A=!1,secondaryAction:k,slotProps:D={},slots:C={},...V}=r,F=w.useContext(un),U=w.useMemo(()=>({dense:T||F.dense||!1,alignItems:s,disableGutters:S}),[s,F.dense,T,S]),E=w.useRef(null),_=w.Children.toArray(i),v=_.length&&jy(_[_.length-1],["ListItemSecondaryAction"]),I={...r,alignItems:s,dense:U.dense,disableGutters:S,disablePadding:P,divider:A,hasSecondaryAction:v},b=SE(I),R=Ct(E,t),g=C.root||l.Root||PE,H=D.root||u.root||{},z={className:Ee(b.root,H.className,o),...V};let B=c||"li";return v?(B=!z.component&&!c?"div":B,d==="li"&&(B==="li"?B="div":z.component==="li"&&(z.component="div")),O.jsx(un.Provider,{value:U,children:O.jsxs(CE,{as:d,className:Ee(b.container,p),ref:R,ownerState:I,...m,children:[O.jsx(g,{...H,...!ih(g)&&{as:B,ownerState:{...I,...H.ownerState}},...z,children:_}),_.pop()]})})):O.jsx(un.Provider,{value:U,children:O.jsxs(g,{...H,as:B,ref:R,...!ih(g)&&{ownerState:{...I,...H.ownerState}},...z,children:[_,k&&O.jsx(bf,{children:k})]})})});function kE(n){return ct("MuiListItemIcon",n)}const tk=lt("MuiListItemIcon",["root","alignItemsFlexStart"]),DE=n=>{const{alignItems:e,classes:t}=n;return at({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},kE,t)},NE=Te("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(Tt(({theme:n})=>({minWidth:56,color:(n.vars||n).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),OE=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiListItemIcon"}),{className:s,...i}=r,o=w.useContext(un),c={...r,alignItems:o.alignItems},l=DE(c);return O.jsx(NE,{className:Ee(l.root,s),ownerState:c,ref:t,...i})});function VE(n){return ct("MuiListItemText",n)}const zi=lt("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),LE=n=>{const{classes:e,inset:t,primary:r,secondary:s,dense:i}=n;return at({root:["root",t&&"inset",i&&"dense",r&&s&&"multiline"],primary:["primary"],secondary:["secondary"]},VE,e)},ME=Te("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[{[`& .${zi.primary}`]:e.primary},{[`& .${zi.secondary}`]:e.secondary},e.root,t.inset&&e.inset,t.primary&&t.secondary&&e.multiline,t.dense&&e.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${Gu.root}:where(& .${zi.primary})`]:{display:"block"},[`.${Gu.root}:where(& .${zi.secondary})`]:{display:"block"},variants:[{props:({ownerState:n})=>n.primary&&n.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:n})=>n.inset,style:{paddingLeft:56}}]}),FE=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiListItemText"}),{children:s,className:i,disableTypography:o=!1,inset:c=!1,primary:l,primaryTypographyProps:u,secondary:d,secondaryTypographyProps:p,slots:m={},slotProps:T={},...S}=r,{dense:P}=w.useContext(un);let A=l??s,k=d;const D={...r,disableTypography:o,inset:c,primary:!!A,secondary:!!k,dense:P},C=LE(D),V={slots:m,slotProps:{primary:u,secondary:p,...T}},[F,U]=tt("root",{className:Ee(C.root,i),elementType:ME,externalForwardedProps:{...V,...S},ownerState:D,ref:t}),[E,_]=tt("primary",{className:C.primary,elementType:hr,externalForwardedProps:V,ownerState:D}),[v,I]=tt("secondary",{className:C.secondary,elementType:hr,externalForwardedProps:V,ownerState:D});return A!=null&&A.type!==hr&&!o&&(A=O.jsx(E,{variant:P?"body2":"body1",component:_!=null&&_.variant?void 0:"span",..._,children:A})),k!=null&&k.type!==hr&&!o&&(k=O.jsx(v,{variant:"body2",color:"textSecondary",...I,children:k})),O.jsxs(F,{...U,children:[A,k]})});function UE(n){const{children:e,defer:t=!1,fallback:r=null}=n,[s,i]=w.useState(!1);return _r(()=>{t||i(!0)},[t]),w.useEffect(()=>{t&&i(!0)},[t]),s?e:r}function BE(n){return ct("MuiTooltip",n)}const xe=lt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function $E(n){return Math.round(n*1e5)/1e5}const jE=n=>{const{classes:e,disableInteractive:t,arrow:r,touch:s,placement:i}=n,o={popper:["popper",!t&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",s&&"touch",`tooltipPlacement${it(i.split("-")[0])}`],arrow:["arrow"]};return at(o,BE,e)},qE=Te(vf,{name:"MuiTooltip",slot:"Popper",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.popper,!t.disableInteractive&&e.popperInteractive,t.arrow&&e.popperArrow,!t.open&&e.popperClose]}})(Tt(({theme:n})=>({zIndex:(n.vars||n).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${xe.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${xe.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${xe.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${xe.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${xe.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${xe.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${xe.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${xe.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),HE=Te("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.tooltip,t.touch&&e.touch,t.arrow&&e.tooltipArrow,e[`tooltipPlacement${it(t.placement.split("-")[0])}`]]}})(Tt(({theme:n})=>({backgroundColor:n.vars?n.vars.palette.Tooltip.bg:Br(n.palette.grey[700],.92),borderRadius:(n.vars||n).shape.borderRadius,color:(n.vars||n).palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium,[`.${xe.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${xe.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${xe.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${xe.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:`${$E(16/14)}em`,fontWeight:n.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${xe.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${xe.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${xe.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${xe.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${xe.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${xe.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${xe.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${xe.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${xe.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${xe.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),zE=Te("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(n,e)=>e.arrow})(Tt(({theme:n})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:n.vars?n.vars.palette.Tooltip.bg:Br(n.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Wi=!1;const lh=new Cy;let Ps={x:0,y:0};function Gi(n,e){return(t,...r)=>{e&&e(t,...r),n(t,...r)}}const uh=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiTooltip"}),{arrow:s=!1,children:i,classes:o,components:c={},componentsProps:l={},describeChild:u=!1,disableFocusListener:d=!1,disableHoverListener:p=!1,disableInteractive:m=!1,disableTouchListener:T=!1,enterDelay:S=100,enterNextDelay:P=0,enterTouchDelay:A=700,followCursor:k=!1,id:D,leaveDelay:C=0,leaveTouchDelay:V=1500,onClose:F,onOpen:U,open:E,placement:_="bottom",PopperComponent:v,PopperProps:I={},slotProps:b={},slots:R={},title:g,TransitionComponent:H,TransitionProps:z,...B}=r,Z=w.isValidElement(i)?i:O.jsx("span",{children:i}),G=li(),ne=Lc(),[fe,Fe]=w.useState(),[Ne,Re]=w.useState(null),ce=w.useRef(!1),Ie=m||k,We=$i(),W=$i(),le=$i(),ue=$i(),[ye,he]=qy({controlled:E,default:!1,name:"Tooltip",state:"open"});let oe=ye;const Oe=Py(D),Se=w.useRef(),rt=mr(()=>{Se.current!==void 0&&(document.body.style.WebkitUserSelect=Se.current,Se.current=void 0),ue.clear()});w.useEffect(()=>rt,[rt]);const be=ee=>{lh.clear(),Wi=!0,he(!0),U&&!oe&&U(ee)},ke=mr(ee=>{lh.start(800+C,()=>{Wi=!1}),he(!1),F&&oe&&F(ee),We.start(G.transitions.duration.shortest,()=>{ce.current=!1})}),ut=ee=>{ce.current&&ee.type!=="touchstart"||(fe&&fe.removeAttribute("title"),W.clear(),le.clear(),S||Wi&&P?W.start(Wi?P:S,()=>{be(ee)}):be(ee))},Pe=ee=>{W.clear(),le.start(C,()=>{ke(ee)})},[,me]=w.useState(!1),bt=ee=>{ju(ee.target)||(me(!1),Pe(ee))},Jn=ee=>{fe||Fe(ee.currentTarget),ju(ee.target)&&(me(!0),ut(ee))},wn=ee=>{ce.current=!0;const je=Z.props;je.onTouchStart&&je.onTouchStart(ee)},Zn=ee=>{wn(ee),le.clear(),We.clear(),rt(),Se.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ue.start(A,()=>{document.body.style.WebkitUserSelect=Se.current,ut(ee)})},$t=ee=>{Z.props.onTouchEnd&&Z.props.onTouchEnd(ee),rt(),le.start(V,()=>{ke(ee)})};w.useEffect(()=>{if(!oe)return;function ee(je){je.key==="Escape"&&ke(je)}return document.addEventListener("keydown",ee),()=>{document.removeEventListener("keydown",ee)}},[ke,oe]);const er=Ct(ci(Z),Fe,t);!g&&g!==0&&(oe=!1);const rn=w.useRef(),Tn=ee=>{const je=Z.props;je.onMouseMove&&je.onMouseMove(ee),Ps={x:ee.clientX,y:ee.clientY},rn.current&&rn.current.update()},tr={},ps=typeof g=="string";u?(tr.title=!oe&&ps&&!p?g:null,tr["aria-describedby"]=oe?Oe:null):(tr["aria-label"]=ps?g:null,tr["aria-labelledby"]=oe&&!ps?Oe:null);const ht={...tr,...B,...Z.props,className:Ee(B.className,Z.props.className),onTouchStart:wn,ref:er,...k?{onMouseMove:Tn}:{}},In={};T||(ht.onTouchStart=Zn,ht.onTouchEnd=$t),p||(ht.onMouseOver=Gi(ut,ht.onMouseOver),ht.onMouseLeave=Gi(Pe,ht.onMouseLeave),Ie||(In.onMouseOver=ut,In.onMouseLeave=Pe)),d||(ht.onFocus=Gi(Jn,ht.onFocus),ht.onBlur=Gi(bt,ht.onBlur),Ie||(In.onFocus=Jn,In.onBlur=bt));const mt={...r,isRtl:ne,arrow:s,disableInteractive:Ie,placement:_,PopperComponentProp:v,touch:ce.current},st=typeof b.popper=="function"?b.popper(mt):b.popper,ms=w.useMemo(()=>{var je,xi;let ee=[{name:"arrow",enabled:!!Ne,options:{element:Ne,padding:4}}];return(je=I.popperOptions)!=null&&je.modifiers&&(ee=ee.concat(I.popperOptions.modifiers)),(xi=st==null?void 0:st.popperOptions)!=null&&xi.modifiers&&(ee=ee.concat(st.popperOptions.modifiers)),{...I.popperOptions,...st==null?void 0:st.popperOptions,modifiers:ee}},[Ne,I.popperOptions,st==null?void 0:st.popperOptions]),Nt=jE(mt),Ri=typeof b.transition=="function"?b.transition(mt):b.transition,sn={slots:{popper:c.Popper,transition:c.Transition??H,tooltip:c.Tooltip,arrow:c.Arrow,...R},slotProps:{arrow:b.arrow??l.arrow,popper:{...I,...st??l.popper},tooltip:b.tooltip??l.tooltip,transition:{...z,...Ri??l.transition}}},[Si,nr]=tt("popper",{elementType:qE,externalForwardedProps:sn,ownerState:mt,className:Ee(Nt.popper,I==null?void 0:I.className)}),[Pi,Ge]=tt("transition",{elementType:xy,externalForwardedProps:sn,ownerState:mt}),[Ci,rr]=tt("tooltip",{elementType:HE,className:Nt.tooltip,externalForwardedProps:sn,ownerState:mt}),[sr,fa]=tt("arrow",{elementType:zE,className:Nt.arrow,externalForwardedProps:sn,ownerState:mt,ref:Re});return O.jsxs(w.Fragment,{children:[w.cloneElement(Z,ht),O.jsx(Si,{as:v??vf,placement:_,anchorEl:k?{getBoundingClientRect:()=>({top:Ps.y,left:Ps.x,right:Ps.x,bottom:Ps.y,width:0,height:0})}:fe,popperRef:rn,open:fe?oe:!1,id:Oe,transition:!0,...In,...nr,popperOptions:ms,children:({TransitionProps:ee})=>O.jsx(Pi,{timeout:G.transitions.duration.shorter,...ee,...Ge,children:O.jsxs(Ci,{...rr,children:[g,s?O.jsx(sr,{...fa}):null]})})})]})}),io=Jy({createStyledComponent:Te("div",{name:"MuiStack",slot:"Root",overridesResolver:(n,e)=>e.root}),useThemeProps:n=>Xe({props:n,name:"MuiStack"})}),WE=Te("div",{name:"MuiSwipeArea",shouldForwardProp:Mc})(Tt(({theme:n})=>({position:"fixed",top:0,left:0,bottom:0,zIndex:n.zIndex.drawer-1,variants:[{props:{anchor:"left"},style:{right:"auto"}},{props:{anchor:"right"},style:{left:"auto",right:0}},{props:{anchor:"top"},style:{bottom:"auto",right:0}},{props:{anchor:"bottom"},style:{top:"auto",bottom:0,right:0}}]}))),GE=w.forwardRef(function(e,t){const{anchor:r,classes:s={},className:i,width:o,style:c,...l}=e,u=e;return O.jsx(WE,{className:Ee("PrivateSwipeArea-root",s.root,s[`anchor${it(r)}`],i),ref:t,style:{[ur(r)?"width":"height"]:o,...c},ownerState:u,...l})}),Ki=3,ka=20;let on=null;function Da(n,e,t){return n==="right"?t.body.offsetWidth-e[0].pageX:e[0].pageX}function Na(n,e,t){return n==="bottom"?t.innerHeight-e[0].clientY:e[0].clientY}function Cs(n,e){return n?e.clientWidth:e.clientHeight}function hh(n,e,t,r){return Math.min(Math.max(t?e-n:r+e-n,0),r)}function KE(n,e){const t=[];for(;n&&n!==e.parentElement;){const r=zt(e).getComputedStyle(n);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"||(n.clientWidth>0&&n.scrollWidth>n.clientWidth||n.clientHeight>0&&n.scrollHeight>n.clientHeight)&&t.push(n),n=n.parentElement}return t}function QE({domTreeShapes:n,start:e,current:t,anchor:r}){const s={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return n.some(i=>{let o=t>=e;(r==="top"||r==="left")&&(o=!o);const c=r==="left"||r==="right"?"x":"y",l=Math.round(i[s.scrollPosition[c]]),u=l>0,d=l+i[s.clientLength[c]]<i[s.scrollLength[c]];return!!(o&&d||!o&&u)})}const YE=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent),XE=w.forwardRef(function(e,t){const r=Xe({name:"MuiSwipeableDrawer",props:e}),s=li(),i={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:o="left",disableBackdropTransition:c=!1,disableDiscovery:l=!1,disableSwipeToOpen:u=YE,hideBackdrop:d,hysteresis:p=.52,allowSwipeInChildren:m=!1,minFlingVelocity:T=450,ModalProps:{BackdropProps:S,...P}={},onClose:A,onOpen:k,open:D=!1,PaperProps:C={},SwipeAreaProps:V,swipeAreaWidth:F=20,transitionDuration:U=i,variant:E="temporary",slots:_={},slotProps:v={},...I}=r,[b,R]=w.useState(!1),g=w.useRef({isSwiping:null}),H=w.useRef(),z=w.useRef(),B=w.useRef(),Z=Ct(C.ref,B),G=w.useRef(!1),ne=w.useRef();_r(()=>{ne.current=null},[D]);const fe=w.useCallback((W,le={})=>{const{mode:ue=null,changeTransition:ye=!0}=le,he=Ds(s,o),oe=["right","bottom"].includes(he)?1:-1,Oe=ur(o),Se=Oe?`translate(${oe*W}px, 0)`:`translate(0, ${oe*W}px)`,rt=B.current.style;rt.webkitTransform=Se,rt.transform=Se;let be="";if(ue&&(be=s.transitions.create("all",Ks({easing:void 0,style:void 0,timeout:U},{mode:ue}))),ye&&(rt.webkitTransition=be,rt.transition=be),!c&&!d){const ke=z.current.style;ke.opacity=1-W/Cs(Oe,B.current),ye&&(ke.webkitTransition=be,ke.transition=be)}},[o,c,d,s,U]),Fe=mr(W=>{if(!G.current)return;if(on=null,G.current=!1,Za.flushSync(()=>{R(!1)}),!g.current.isSwiping){g.current.isSwiping=null;return}g.current.isSwiping=null;const le=Ds(s,o),ue=ur(o);let ye;ue?ye=Da(le,W.changedTouches,_t(W.currentTarget)):ye=Na(le,W.changedTouches,zt(W.currentTarget));const he=ue?g.current.startX:g.current.startY,oe=Cs(ue,B.current),Oe=hh(ye,he,D,oe),Se=Oe/oe;if(Math.abs(g.current.velocity)>T&&(ne.current=Math.abs((oe-Oe)/g.current.velocity)*1e3),D){g.current.velocity>T||Se>p?A():fe(0,{mode:"exit"});return}g.current.velocity<-T||1-Se>p?k():fe(Cs(ue,B.current),{mode:"enter"})}),Ne=(W=!1)=>{if(!b){(W||!(l&&m))&&Za.flushSync(()=>{R(!0)});const le=ur(o);!D&&B.current&&fe(Cs(le,B.current)+(l?15:-ka),{changeTransition:!1}),g.current.velocity=0,g.current.lastTime=null,g.current.lastTranslate=null,g.current.paperHit=!1,G.current=!0}},Re=mr(W=>{if(!B.current||!G.current||on!==null&&on!==g.current)return;Ne(!0);const le=Ds(s,o),ue=ur(o),ye=Da(le,W.touches,_t(W.currentTarget)),he=Na(le,W.touches,zt(W.currentTarget));if(D&&B.current.contains(W.target)&&on===null){const be=KE(W.target,B.current);if(QE({domTreeShapes:be,start:ue?g.current.startX:g.current.startY,current:ue?ye:he,anchor:o})){on=!0;return}on=g.current}if(g.current.isSwiping==null){const be=Math.abs(ye-g.current.startX),ke=Math.abs(he-g.current.startY),ut=ue?be>ke&&be>Ki:ke>be&&ke>Ki;if(ut&&W.cancelable&&W.preventDefault(),ut===!0||(ue?ke>Ki:be>Ki)){if(g.current.isSwiping=ut,!ut){Fe(W);return}g.current.startX=ye,g.current.startY=he,!l&&!D&&(ue?g.current.startX-=ka:g.current.startY-=ka)}}if(!g.current.isSwiping)return;const oe=Cs(ue,B.current);let Oe=ue?g.current.startX:g.current.startY;D&&!g.current.paperHit&&(Oe=Math.min(Oe,oe));const Se=hh(ue?ye:he,Oe,D,oe);if(D)if(g.current.paperHit)Se===0&&(g.current.startX=ye,g.current.startY=he);else if(ue?ye<oe:he<oe)g.current.paperHit=!0,g.current.startX=ye,g.current.startY=he;else return;g.current.lastTranslate===null&&(g.current.lastTranslate=Se,g.current.lastTime=performance.now()+1);const rt=(Se-g.current.lastTranslate)/(performance.now()-g.current.lastTime)*1e3;g.current.velocity=g.current.velocity*.4+rt*.6,g.current.lastTranslate=Se,g.current.lastTime=performance.now(),W.cancelable&&W.preventDefault(),fe(Se)}),ce=mr(W=>{var oe;if(W.defaultPrevented||W.defaultMuiPrevented||D&&(d||!z.current.contains(W.target))&&!B.current.contains(W.target))return;const le=Ds(s,o),ue=ur(o),ye=Da(le,W.touches,_t(W.currentTarget)),he=Na(le,W.touches,zt(W.currentTarget));if(!D){if(u||!(W.target===H.current||(oe=B.current)!=null&&oe.contains(W.target)&&(typeof m=="function"?m(W,H.current,B.current):m)))return;if(ue){if(ye>F)return}else if(he>F)return}W.defaultMuiPrevented=!0,on=null,g.current.startX=ye,g.current.startY=he,Ne()});w.useEffect(()=>{if(E==="temporary"){const W=_t(B.current);return W.addEventListener("touchstart",ce),W.addEventListener("touchmove",Re,{passive:!D}),W.addEventListener("touchend",Fe),()=>{W.removeEventListener("touchstart",ce),W.removeEventListener("touchmove",Re,{passive:!D}),W.removeEventListener("touchend",Fe)}}},[E,D,ce,Re,Fe]),w.useEffect(()=>()=>{on===g.current&&(on=null)},[]),w.useEffect(()=>{D||R(!1)},[D]);const[Ie,We]=tt("swipeArea",{ref:H,elementType:GE,ownerState:r,externalForwardedProps:{slots:_,slotProps:{swipeArea:V,...v}},additionalProps:{width:F,anchor:o}});return O.jsxs(w.Fragment,{children:[O.jsx(dE,{open:E==="temporary"&&b?!0:D,variant:E,ModalProps:{BackdropProps:{...S,ref:z},...E==="temporary"&&{keepMounted:!0},...P},hideBackdrop:d,anchor:o,transitionDuration:ne.current||U,onClose:A,ref:t,slots:_,slotProps:{...v,backdrop:ec(v.backdrop??S,{ref:z}),paper:ec(v.paper??C,{style:{pointerEvents:E==="temporary"&&!D&&!m?"none":""},ref:Z})},...I}),!u&&E==="temporary"&&O.jsx(UE,{children:O.jsx(Ie,{...We})})]})});function JE(n){return ct("MuiToolbar",n)}lt("MuiToolbar",["root","gutters","regular","dense"]);const ZE=n=>{const{classes:e,disableGutters:t,variant:r}=n;return at({root:["root",!t&&"gutters",r]},JE,e)},ew=Te("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,!t.disableGutters&&e.gutters,e[t.variant]]}})(Tt(({theme:n})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:n.mixins.toolbar}]}))),tw=w.forwardRef(function(e,t){const r=Xe({props:e,name:"MuiToolbar"}),{className:s,component:i="div",disableGutters:o=!1,variant:c="regular",...l}=r,u={...r,component:i,disableGutters:o,variant:c},d=ZE(u);return O.jsx(ew,{as:i,className:Ee(d.root,s),ref:t,ownerState:u,...l})});/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var dh="popstate";function nw(n={}){function e(r,s){let{pathname:i,search:o,hash:c}=r.location;return ic("",{pathname:i,search:o,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:Xs(s)}return sw(e,t,null,n)}function we(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function wt(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rw(){return Math.random().toString(36).substring(2,10)}function fh(n,e){return{usr:n.state,key:n.key,idx:e}}function ic(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?rs(e):e,state:t,key:e&&e.key||r||rw()}}function Xs({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function rs(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function sw(n,e,t,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,c="POP",l=null,u=d();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function d(){return(o.state||{idx:null}).idx}function p(){c="POP";let A=d(),k=A==null?null:A-u;u=A,l&&l({action:c,location:P.location,delta:k})}function m(A,k){c="PUSH";let D=ic(P.location,A,k);u=d()+1;let C=fh(D,u),V=P.createHref(D);try{o.pushState(C,"",V)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;s.location.assign(V)}i&&l&&l({action:c,location:P.location,delta:1})}function T(A,k){c="REPLACE";let D=ic(P.location,A,k);u=d();let C=fh(D,u),V=P.createHref(D);o.replaceState(C,"",V),i&&l&&l({action:c,location:P.location,delta:0})}function S(A){return iw(A)}let P={get action(){return c},get location(){return n(s,o)},listen(A){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(dh,p),l=A,()=>{s.removeEventListener(dh,p),l=null}},createHref(A){return e(s,A)},createURL:S,encodeLocation(A){let k=S(A);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:m,replace:T,go(A){return o.go(A)}};return P}function iw(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),we(t,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:Xs(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function Af(n,e,t="/"){return ow(n,e,t,!1)}function ow(n,e,t,r){let s=typeof e=="string"?rs(e):e,i=mn(s.pathname||"/",t);if(i==null)return null;let o=Rf(n);aw(o);let c=null;for(let l=0;c==null&&l<o.length;++l){let u=_w(i);c=gw(o[l],u,r)}return c}function Rf(n,e=[],t=[],r="",s=!1){let i=(o,c,l=s,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&l)return;we(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let p=hn([r,d.relativePath]),m=t.concat(d);o.children&&o.children.length>0&&(we(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Rf(o.children,e,m,p,l)),!(o.path==null&&!o.index)&&e.push({path:p,score:pw(p,o.index),routesMeta:m})};return n.forEach((o,c)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,c);else for(let u of Sf(o.path))i(o,c,!0,u)}),e}function Sf(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=Sf(r.join("/")),c=[];return c.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&c.push(...o),c.map(l=>n.startsWith("/")&&l===""?"/":l)}function aw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:mw(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var cw=/^:[\w-]+$/,lw=3,uw=2,hw=1,dw=10,fw=-2,ph=n=>n==="*";function pw(n,e){let t=n.split("/"),r=t.length;return t.some(ph)&&(r+=fw),e&&(r+=uw),t.filter(s=>!ph(s)).reduce((s,i)=>s+(cw.test(i)?lw:i===""?hw:dw),r)}function mw(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function gw(n,e,t=!1){let{routesMeta:r}=n,s={},i="/",o=[];for(let c=0;c<r.length;++c){let l=r[c],u=c===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",p=Eo({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),m=l.route;if(!p&&u&&t&&!r[r.length-1].route.index&&(p=Eo({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:hn([i,p.pathname]),pathnameBase:Tw(hn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=hn([i,p.pathnameBase]))}return o}function Eo(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=yw(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:p},m)=>{if(d==="*"){let S=c[m]||"";o=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const T=c[m];return p&&!T?u[d]=void 0:u[d]=(T||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:n}}function yw(n,e=!1,t=!0){wt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function _w(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function mn(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}var Pf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vw=n=>Pf.test(n);function Ew(n,e="/"){let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?rs(n):n,i;if(t)if(vw(t))i=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),wt(!1,`Pathnames cannot have embedded double slashes - normalizing ${o} -> ${t}`)}t.startsWith("/")?i=mh(t.substring(1),"/"):i=mh(t,e)}else i=e;return{pathname:i,search:Iw(r),hash:bw(s)}}function mh(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Oa(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ww(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Gc(n){let e=ww(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Kc(n,e,t,r=!1){let s;typeof n=="string"?s=rs(n):(s={...n},we(!s.pathname||!s.pathname.includes("?"),Oa("?","pathname","search",s)),we(!s.pathname||!s.pathname.includes("#"),Oa("#","pathname","hash",s)),we(!s.search||!s.search.includes("#"),Oa("#","search","hash",s)));let i=n===""||s.pathname==="",o=i?"/":s.pathname,c;if(o==null)c=t;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;s.pathname=m.join("/")}c=p>=0?e[p]:"/"}let l=Ew(s,c),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var hn=n=>n.join("/").replace(/\/\/+/g,"/"),Tw=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Iw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,bw=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,Aw=class{constructor(n,e,t,r=!1){this.status=n,this.statusText=e||"",this.internal=r,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Rw(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function Sw(n){return n.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Cf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xf(n,e){let t=n;if(typeof t!="string"||!Pf.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let r=t,s=!1;if(Cf)try{let i=new URL(window.location.href),o=t.startsWith("//")?new URL(i.protocol+t):new URL(t),c=mn(o.pathname,e);o.origin===i.origin&&c!=null?t=c+o.search+o.hash:s=!0}catch{wt(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:s,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var kf=["POST","PUT","PATCH","DELETE"];new Set(kf);var Pw=["GET",...kf];new Set(Pw);var ss=w.createContext(null);ss.displayName="DataRouter";var qo=w.createContext(null);qo.displayName="DataRouterState";var Cw=w.createContext(!1),Df=w.createContext({isTransitioning:!1});Df.displayName="ViewTransition";var xw=w.createContext(new Map);xw.displayName="Fetchers";var kw=w.createContext(null);kw.displayName="Await";var It=w.createContext(null);It.displayName="Navigation";var di=w.createContext(null);di.displayName="Location";var Ut=w.createContext({outlet:null,matches:[],isDataRoute:!1});Ut.displayName="Route";var Qc=w.createContext(null);Qc.displayName="RouteError";var Nf="REACT_ROUTER_ERROR",Dw="REDIRECT",Nw="ROUTE_ERROR_RESPONSE";function Ow(n){if(n.startsWith(`${Nf}:${Dw}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Vw(n){if(n.startsWith(`${Nf}:${Nw}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Aw(e.status,e.statusText,e.data)}catch{}}function Lw(n,{relative:e}={}){we(is(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=w.useContext(It),{hash:s,pathname:i,search:o}=fi(n,{relative:e}),c=i;return t!=="/"&&(c=i==="/"?t:hn([t,i])),r.createHref({pathname:c,search:o,hash:s})}function is(){return w.useContext(di)!=null}function En(){return we(is(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(di).location}var Of="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vf(n){w.useContext(It).static||w.useLayoutEffect(n)}function Ho(){let{isDataRoute:n}=w.useContext(Ut);return n?Qw():Mw()}function Mw(){we(is(),"useNavigate() may be used only in the context of a <Router> component.");let n=w.useContext(ss),{basename:e,navigator:t}=w.useContext(It),{matches:r}=w.useContext(Ut),{pathname:s}=En(),i=JSON.stringify(Gc(r)),o=w.useRef(!1);return Vf(()=>{o.current=!0}),w.useCallback((l,u={})=>{if(wt(o.current,Of),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=Kc(l,JSON.parse(i),s,u.relative==="path");n==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:hn([e,d.pathname])),(u.replace?t.replace:t.push)(d,u.state,u)},[e,t,i,s,n])}w.createContext(null);function nk(){let{matches:n}=w.useContext(Ut),e=n[n.length-1];return e?e.params:{}}function fi(n,{relative:e}={}){let{matches:t}=w.useContext(Ut),{pathname:r}=En(),s=JSON.stringify(Gc(t));return w.useMemo(()=>Kc(n,JSON.parse(s),r,e==="path"),[n,s,r,e])}function Fw(n,e){return Lf(n,e)}function Lf(n,e,t,r,s){var D;we(is(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=w.useContext(It),{matches:o}=w.useContext(Ut),c=o[o.length-1],l=c?c.params:{},u=c?c.pathname:"/",d=c?c.pathnameBase:"/",p=c&&c.route;{let C=p&&p.path||"";Ff(u,!p||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let m=En(),T;if(e){let C=typeof e=="string"?rs(e):e;we(d==="/"||((D=C.pathname)==null?void 0:D.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${C.pathname}" was given in the \`location\` prop.`),T=C}else T=m;let S=T.pathname||"/",P=S;if(d!=="/"){let C=d.replace(/^\//,"").split("/");P="/"+S.replace(/^\//,"").split("/").slice(C.length).join("/")}let A=Af(n,{pathname:P});wt(p||A!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),wt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=qw(A&&A.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:hn([d,i.encodeLocation?i.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?d:hn([d,i.encodeLocation?i.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),o,t,r,s);return e&&k?w.createElement(di.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},k):k}function Uw(){let n=Kw(),e=Rw(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",n),o=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:i},"ErrorBoundary")," or"," ",w.createElement("code",{style:i},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),t?w.createElement("pre",{style:s},t):null,o)}var Bw=w.createElement(Uw,null),Mf=class extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=Vw(n.digest);t&&(n=t)}let e=n!==void 0?w.createElement(Ut.Provider,{value:this.props.routeContext},w.createElement(Qc.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?w.createElement($w,{error:n},e):e}};Mf.contextType=Cw;var Va=new WeakMap;function $w({children:n,error:e}){let{basename:t}=w.useContext(It);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=Ow(e.digest);if(r){let s=Va.get(e);if(s)throw s;let i=xf(r.location,t);if(Cf&&!Va.get(e))if(i.isExternal||r.reloadDocument)window.location.href=i.absoluteURL||i.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:r.replace}));throw Va.set(e,o),o}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return n}function jw({routeContext:n,match:e,children:t}){let r=w.useContext(ss);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),w.createElement(Ut.Provider,{value:n},t)}function qw(n,e=[],t=null,r=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,o=t==null?void 0:t.errors;if(o!=null){let d=i.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);we(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let c=!1,l=-1;if(t)for(let d=0;d<i.length;d++){let p=i[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(l=d),p.route.id){let{loaderData:m,errors:T}=t,S=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!T||T[p.route.id]===void 0);if(p.route.lazy||S){c=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}let u=t&&r?(d,p)=>{var m,T;r(d,{location:t.location,params:((T=(m=t.matches)==null?void 0:m[0])==null?void 0:T.params)??{},unstable_pattern:Sw(t.matches),errorInfo:p})}:void 0;return i.reduceRight((d,p,m)=>{let T,S=!1,P=null,A=null;t&&(T=o&&p.route.id?o[p.route.id]:void 0,P=p.route.errorElement||Bw,c&&(l<0&&m===0?(Ff("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,A=null):l===m&&(S=!0,A=p.route.hydrateFallbackElement||null)));let k=e.concat(i.slice(0,m+1)),D=()=>{let C;return T?C=P:S?C=A:p.route.Component?C=w.createElement(p.route.Component,null):p.route.element?C=p.route.element:C=d,w.createElement(jw,{match:p,routeContext:{outlet:d,matches:k,isDataRoute:t!=null},children:C})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?w.createElement(Mf,{location:t.location,revalidation:t.revalidation,component:P,error:T,children:D(),routeContext:{outlet:null,matches:k,isDataRoute:!0},onError:u}):D()},null)}function Yc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hw(n){let e=w.useContext(ss);return we(e,Yc(n)),e}function zw(n){let e=w.useContext(qo);return we(e,Yc(n)),e}function Ww(n){let e=w.useContext(Ut);return we(e,Yc(n)),e}function Xc(n){let e=Ww(n),t=e.matches[e.matches.length-1];return we(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Gw(){return Xc("useRouteId")}function Kw(){var r;let n=w.useContext(Qc),e=zw("useRouteError"),t=Xc("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function Qw(){let{router:n}=Hw("useNavigate"),e=Xc("useNavigate"),t=w.useRef(!1);return Vf(()=>{t.current=!0}),w.useCallback(async(s,i={})=>{wt(t.current,Of),t.current&&(typeof s=="number"?await n.navigate(s):await n.navigate(s,{fromRouteId:e,...i}))},[n,e])}var gh={};function Ff(n,e,t){!e&&!gh[n]&&(gh[n]=!0,wt(!1,t))}w.memo(Yw);function Yw({routes:n,future:e,state:t,onError:r}){return Lf(n,void 0,t,r,e)}function rk({to:n,replace:e,state:t,relative:r}){we(is(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=w.useContext(It);wt(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=w.useContext(Ut),{pathname:o}=En(),c=Ho(),l=Kc(n,Gc(i),o,r==="path"),u=JSON.stringify(l);return w.useEffect(()=>{c(JSON.parse(u),{replace:e,state:t,relative:r})},[c,u,r,e,t]),null}function Uf(n){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Xw({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:s,static:i=!1,unstable_useTransitions:o}){we(!is(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:c,navigator:s,static:i,unstable_useTransitions:o,future:{}}),[c,s,i,o]);typeof t=="string"&&(t=rs(t));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:T="default"}=t,S=w.useMemo(()=>{let P=mn(u,c);return P==null?null:{location:{pathname:P,search:d,hash:p,state:m,key:T},navigationType:r}},[c,u,d,p,m,T,r]);return wt(S!=null,`<Router basename="${c}"> is not able to match the URL "${u}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:w.createElement(It.Provider,{value:l},w.createElement(di.Provider,{children:e,value:S}))}function Jw({children:n,location:e}){return Fw(oc(n),e)}function oc(n,e=[]){let t=[];return w.Children.forEach(n,(r,s)=>{if(!w.isValidElement(r))return;let i=[...e,s];if(r.type===w.Fragment){t.push.apply(t,oc(r.props.children,i));return}we(r.type===Uf,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=oc(r.props.children,i)),t.push(o)}),t}var oo="get",ao="application/x-www-form-urlencoded";function zo(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function Zw(n){return zo(n)&&n.tagName.toLowerCase()==="button"}function eT(n){return zo(n)&&n.tagName.toLowerCase()==="form"}function tT(n){return zo(n)&&n.tagName.toLowerCase()==="input"}function nT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function rT(n,e){return n.button===0&&(!e||e==="_self")&&!nT(n)}function ac(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let r=n[t];return e.concat(Array.isArray(r)?r.map(s=>[t,s]):[[t,r]])},[]))}function sT(n,e){let t=ac(n);return e&&e.forEach((r,s)=>{t.has(s)||e.getAll(s).forEach(i=>{t.append(s,i)})}),t}var Qi=null;function iT(){if(Qi===null)try{new FormData(document.createElement("form"),0),Qi=!1}catch{Qi=!0}return Qi}var oT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function La(n){return n!=null&&!oT.has(n)?(wt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ao}"`),null):n}function aT(n,e){let t,r,s,i,o;if(eT(n)){let c=n.getAttribute("action");r=c?mn(c,e):null,t=n.getAttribute("method")||oo,s=La(n.getAttribute("enctype"))||ao,i=new FormData(n)}else if(Zw(n)||tT(n)&&(n.type==="submit"||n.type==="image")){let c=n.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=n.getAttribute("formaction")||c.getAttribute("action");if(r=l?mn(l,e):null,t=n.getAttribute("formmethod")||c.getAttribute("method")||oo,s=La(n.getAttribute("formenctype"))||La(c.getAttribute("enctype"))||ao,i=new FormData(c,n),!iT()){let{name:u,type:d,value:p}=n;if(d==="image"){let m=u?`${u}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else u&&i.append(u,p)}}else{if(zo(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=oo,r=null,s=ao,o=n}return i&&s==="text/plain"&&(o=i,i=void 0),{action:r,method:t.toLowerCase(),encType:s,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jc(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function cT(n,e,t){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname=`_root.${t}`:e&&mn(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${t}`,r}async function lT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function hT(n,e,t){let r=await Promise.all(n.map(async s=>{let i=e.routes[s.route.id];if(i){let o=await lT(i,t);return o.links?o.links():[]}return[]}));return mT(r.flat(1).filter(uT).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function yh(n,e,t,r,s,i){let o=(l,u)=>t[u]?l.route.id!==t[u].route.id:!0,c=(l,u)=>{var d;return t[u].pathname!==l.pathname||((d=t[u].route.path)==null?void 0:d.endsWith("*"))&&t[u].params["*"]!==l.params["*"]};return i==="assets"?e.filter((l,u)=>o(l,u)||c(l,u)):i==="data"?e.filter((l,u)=>{var p;let d=r.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(o(l,u)||c(l,u))return!0;if(l.route.shouldRevalidate){let m=l.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((p=t[0])==null?void 0:p.params)||{},nextUrl:new URL(n,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function dT(n,e,{includeHydrateFallback:t}={}){return fT(n.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function fT(n){return[...new Set(n)]}function pT(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function mT(n,e){let t=new Set;return new Set(e),n.reduce((r,s)=>{let i=JSON.stringify(pT(s));return t.has(i)||(t.add(i),r.push({key:i,link:s})),r},[])}function Bf(){let n=w.useContext(ss);return Jc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function gT(){let n=w.useContext(qo);return Jc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Zc=w.createContext(void 0);Zc.displayName="FrameworkContext";function $f(){let n=w.useContext(Zc);return Jc(n,"You must render this element inside a <HydratedRouter> element"),n}function yT(n,e){let t=w.useContext(Zc),[r,s]=w.useState(!1),[i,o]=w.useState(!1),{onFocus:c,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=e,m=w.useRef(null);w.useEffect(()=>{if(n==="render"&&o(!0),n==="viewport"){let P=k=>{k.forEach(D=>{o(D.isIntersecting)})},A=new IntersectionObserver(P,{threshold:.5});return m.current&&A.observe(m.current),()=>{A.disconnect()}}},[n]),w.useEffect(()=>{if(r){let P=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(P)}}},[r]);let T=()=>{s(!0)},S=()=>{s(!1),o(!1)};return t?n!=="intent"?[i,m,{}]:[i,m,{onFocus:xs(c,T),onBlur:xs(l,S),onMouseEnter:xs(u,T),onMouseLeave:xs(d,S),onTouchStart:xs(p,T)}]:[!1,m,{}]}function xs(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function _T({page:n,...e}){let{router:t}=Bf(),r=w.useMemo(()=>Af(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?w.createElement(ET,{page:n,matches:r,...e}):null}function vT(n){let{manifest:e,routeModules:t}=$f(),[r,s]=w.useState([]);return w.useEffect(()=>{let i=!1;return hT(n,e,t).then(o=>{i||s(o)}),()=>{i=!0}},[n,e,t]),r}function ET({page:n,matches:e,...t}){let r=En(),{manifest:s,routeModules:i}=$f(),{basename:o}=Bf(),{loaderData:c,matches:l}=gT(),u=w.useMemo(()=>yh(n,e,l,s,r,"data"),[n,e,l,s,r]),d=w.useMemo(()=>yh(n,e,l,s,r,"assets"),[n,e,l,s,r]),p=w.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let S=new Set,P=!1;if(e.forEach(k=>{var C;let D=s.routes[k.route.id];!D||!D.hasLoader||(!u.some(V=>V.route.id===k.route.id)&&k.route.id in c&&((C=i[k.route.id])!=null&&C.shouldRevalidate)||D.hasClientLoader?P=!0:S.add(k.route.id))}),S.size===0)return[];let A=cT(n,o,"data");return P&&S.size>0&&A.searchParams.set("_routes",e.filter(k=>S.has(k.route.id)).map(k=>k.route.id).join(",")),[A.pathname+A.search]},[o,c,r,s,u,e,n,i]),m=w.useMemo(()=>dT(d,s),[d,s]),T=vT(d);return w.createElement(w.Fragment,null,p.map(S=>w.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),m.map(S=>w.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),T.map(({key:S,link:P})=>w.createElement("link",{key:S,nonce:t.nonce,...P})))}function wT(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var TT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{TT&&(window.__reactRouterVersion="7.11.0")}catch{}function IT({basename:n,children:e,unstable_useTransitions:t,window:r}){let s=w.useRef();s.current==null&&(s.current=nw({window:r,v5Compat:!0}));let i=s.current,[o,c]=w.useState({action:i.action,location:i.location}),l=w.useCallback(u=>{t===!1?c(u):w.startTransition(()=>c(u))},[t]);return w.useLayoutEffect(()=>i.listen(l),[i,l]),w.createElement(Xw,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:i,unstable_useTransitions:t})}var jf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,el=w.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:s,reloadDocument:i,replace:o,state:c,target:l,to:u,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,...T},S){let{basename:P,unstable_useTransitions:A}=w.useContext(It),k=typeof u=="string"&&jf.test(u),D=xf(u,P);u=D.to;let C=Lw(u,{relative:s}),[V,F,U]=yT(r,T),E=ST(u,{replace:o,state:c,target:l,preventScrollReset:d,relative:s,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:A});function _(I){e&&e(I),I.defaultPrevented||E(I)}let v=w.createElement("a",{...T,...U,href:D.absoluteURL||C,onClick:D.isExternal||i?e:_,ref:wT(S,F),target:l,"data-discover":!k&&t==="render"?"true":void 0});return V&&!k?w.createElement(w.Fragment,null,v,w.createElement(_T,{page:C})):v});el.displayName="Link";var bT=w.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:s=!1,style:i,to:o,viewTransition:c,children:l,...u},d){let p=fi(o,{relative:u.relative}),m=En(),T=w.useContext(qo),{navigator:S,basename:P}=w.useContext(It),A=T!=null&&DT(p)&&c===!0,k=S.encodeLocation?S.encodeLocation(p).pathname:p.pathname,D=m.pathname,C=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;t||(D=D.toLowerCase(),C=C?C.toLowerCase():null,k=k.toLowerCase()),C&&P&&(C=mn(C,P)||C);const V=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let F=D===k||!s&&D.startsWith(k)&&D.charAt(V)==="/",U=C!=null&&(C===k||!s&&C.startsWith(k)&&C.charAt(k.length)==="/"),E={isActive:F,isPending:U,isTransitioning:A},_=F?e:void 0,v;typeof r=="function"?v=r(E):v=[r,F?"active":null,U?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let I=typeof i=="function"?i(E):i;return w.createElement(el,{...u,"aria-current":_,className:v,ref:d,style:I,to:o,viewTransition:c},typeof l=="function"?l(E):l)});bT.displayName="NavLink";var AT=w.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:s,state:i,method:o=oo,action:c,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,...T},S)=>{let{unstable_useTransitions:P}=w.useContext(It),A=xT(),k=kT(c,{relative:u}),D=o.toLowerCase()==="get"?"get":"post",C=typeof c=="string"&&jf.test(c),V=F=>{if(l&&l(F),F.defaultPrevented)return;F.preventDefault();let U=F.nativeEvent.submitter,E=(U==null?void 0:U.getAttribute("formmethod"))||o,_=()=>A(U||F.currentTarget,{fetcherKey:e,method:E,navigate:t,replace:s,state:i,relative:u,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m});P&&t!==!1?w.startTransition(()=>_()):_()};return w.createElement("form",{ref:S,method:D,action:k,onSubmit:r?l:V,...T,"data-discover":!C&&n==="render"?"true":void 0})});AT.displayName="Form";function RT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qf(n){let e=w.useContext(ss);return we(e,RT(n)),e}function ST(n,{target:e,replace:t,state:r,preventScrollReset:s,relative:i,viewTransition:o,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=Ho(),d=En(),p=fi(n,{relative:i});return w.useCallback(m=>{if(rT(m,e)){m.preventDefault();let T=t!==void 0?t:Xs(d)===Xs(p),S=()=>u(n,{replace:T,state:r,preventScrollReset:s,relative:i,viewTransition:o,unstable_defaultShouldRevalidate:c});l?w.startTransition(()=>S()):S()}},[d,u,p,t,r,e,n,s,i,o,c,l])}function sk(n){wt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=w.useRef(ac(n)),t=w.useRef(!1),r=En(),s=w.useMemo(()=>sT(r.search,t.current?null:e.current),[r.search]),i=Ho(),o=w.useCallback((c,l)=>{const u=ac(typeof c=="function"?c(new URLSearchParams(s)):c);t.current=!0,i("?"+u,l)},[i,s]);return[s,o]}var PT=0,CT=()=>`__${String(++PT)}__`;function xT(){let{router:n}=qf("useSubmit"),{basename:e}=w.useContext(It),t=Gw(),r=n.fetch,s=n.navigate;return w.useCallback(async(i,o={})=>{let{action:c,method:l,encType:u,formData:d,body:p}=aT(i,e);if(o.navigate===!1){let m=o.fetcherKey||CT();await r(m,t,o.action||c,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||l,formEncType:o.encType||u,flushSync:o.flushSync})}else await s(o.action||c,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||l,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,s,e,t])}function kT(n,{relative:e}={}){let{basename:t}=w.useContext(It),r=w.useContext(Ut);we(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...fi(n||".",{relative:e})},o=En();if(n==null){i.search=o.search;let c=new URLSearchParams(i.search),l=c.getAll("index");if(l.some(d=>d==="")){c.delete("index"),l.filter(p=>p).forEach(p=>c.append("index",p));let d=c.toString();i.search=d?`?${d}`:""}}return(!n||n===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(i.pathname=i.pathname==="/"?t:hn([t,i.pathname])),Xs(i)}function DT(n,{relative:e}={}){let t=w.useContext(Df);we(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qf("useViewTransitionState"),s=fi(n,{relative:e});if(!t.isTransitioning)return!1;let i=mn(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=mn(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Eo(s.pathname,o)!=null||Eo(s.pathname,i)!=null}const NT=w.createContext(null),Ma={didCatch:!1,error:null};class OT extends w.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Ma}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var t,r,s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];(t=(r=this.props).onReset)===null||t===void 0||t.call(r,{args:i,reason:"imperative-api"}),this.setState(Ma)}}componentDidCatch(e,t){var r,s;(r=(s=this.props).onError)===null||r===void 0||r.call(s,e,t)}componentDidUpdate(e,t){const{didCatch:r}=this.state,{resetKeys:s}=this.props;if(r&&t.error!==null&&VT(e.resetKeys,s)){var i,o;(i=(o=this.props).onReset)===null||i===void 0||i.call(o,{next:s,prev:e.resetKeys,reason:"keys"}),this.setState(Ma)}}render(){const{children:e,fallbackRender:t,FallbackComponent:r,fallback:s}=this.props,{didCatch:i,error:o}=this.state;let c=e;if(i){const l={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof t=="function")c=t(l);else if(r)c=w.createElement(r,l);else if(s!==void 0)c=s;else throw o}return w.createElement(NT.Provider,{value:{didCatch:i,error:o,resetErrorBoundary:this.resetErrorBoundary}},c)}}function VT(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.length!==e.length||n.some((t,r)=>!Object.is(t,e[r]))}function LT(n){return n.displayName||n.name||"Component"}function MT(n,e){function t(r){return O.jsx(OT,{FallbackComponent:e,children:O.jsx(n,{...r})})}return t.displayName=`WithErrorHandling${LT(n)}`,t}const FT=nn(O.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email"),UT=nn(O.jsx("path",{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"}),"RestartAlt"),BT=Te(io)({justifyContent:"center",alignItems:"center"}),Hf=Te(BT)({width:"100%",height:"100%"});function $T(){return window.location.reload()}function jT(){return O.jsx(Ef,{height:400,children:O.jsx(Hf,{children:O.jsxs(Vc,{sx:{p:5},children:[O.jsx(hr,{variant:"h5",component:"h3",children:"Sorry, I guess, something went wrong. You can:"}),O.jsxs(qu,{startIcon:O.jsx(FT,{}),variant:"outlined",target:"_blank",rel:"noreferrer",href:`mailto: ${Hu}`,sx:{my:3},children:["contact with author by this email - ",Hu]}),O.jsx(hr,{component:"h6",children:"or"}),O.jsx(qu,{startIcon:O.jsx(UT,{}),sx:{mt:3},variant:"outlined",onClick:$T,children:"Press here to reset the application"})]})})})}const qT=nn(O.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"}),"AddCard"),HT=nn(O.jsx("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard"),zT=nn(O.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),WT=nn(O.jsx("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8z"}),"Login");function GT(){return O.jsx(Hf,{children:O.jsx(ky,{})})}function KT(n){return new Promise(e=>setTimeout(e,n))}function QT(n,e){return function(r){const[s,i]=w.useState(!1);return w.useEffect(()=>{const o=setTimeout(()=>i(!0),e);return()=>clearTimeout(o)},[]),s?O.jsx(n,{...r}):null}}const YT=(n,e)=>w.lazy(()=>{const t=performance.now();return n().then(r=>{const i=performance.now()-t,{delay:o,minimumLoading:c}=e;return i<o||i>o&&i>o+c?r:KT(o+c-i).then(()=>r)})});function XT(n,e,t,r){const s=t.delay?QT(r,t.delay):r,i=YT(n,t);return function(c){return O.jsx(w.Suspense,{fallback:O.jsx(s,{}),children:O.jsx(i,{...e,...c})})}}const kn=(n,e={},t=Oy,r=GT)=>XT(n,e,t,r),zf=[{component:kn(()=>xn(()=>import("./index-B7K89E-u.js"),__vite__mapDeps([0,1,2,3,4,5]))),path:"/",title:"Inicio",icon:zT},{component:kn(()=>xn(()=>import("./index-DeM_htbW.js"),__vite__mapDeps([6,1,7,8,2,9,10,4,5]))),path:"/login",title:"Iniciar Sesión",icon:WT},{component:kn(()=>xn(()=>import("./index-CHY6eshE.js"),__vite__mapDeps([11,1,12,2,9,3,7,8,4,5]))),path:"/dashboard",title:"Mis Cuentas",icon:HT},{component:kn(()=>xn(()=>import("./index-3CsBnHOB.js"),__vite__mapDeps([13,1,14,12,2,10,9,7,8,4,5]))),path:"/add-account",title:"Agregar Cuenta",icon:qT},{component:kn(()=>xn(()=>import("./index-Ba3E3BNI.js"),__vite__mapDeps([15,1,14,16,17,12,2,9,7,8,4,5]))),path:"/qr/:accountId"},{component:kn(()=>xn(()=>import("./index-BeUW_rAL.js"),__vite__mapDeps([18,1,17,2,9,4,5]))),path:"/scan"},{component:kn(()=>xn(()=>import("./index-SCQZcIyO.js"),__vite__mapDeps([19,1,16,17,14,2,9,7,8,4,5]))),path:"/claim/:token"},{component:kn(()=>xn(()=>import("./index-zou_Fl4o.js"),__vite__mapDeps([20,1,4,5]))),path:"*"}];function JT(n){return`calc(100vh - ${Number(n.mixins.toolbar.minHeight)+parseInt(n.spacing(1))}px)`}function Wf(n){return n.map(({path:e,component:t,routes:r})=>O.jsx(Uf,{path:e,element:O.jsx(t,{}),...r&&{children:Wf(r)}},e))}function ZT(){return O.jsx(Ef,{sx:{height:n=>JT(n)},children:O.jsx(Jw,{children:Wf(zf)})})}const eI=nn(O.jsx("path",{d:"M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14zM6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12 2z"}),"InvertColors"),tI=nn(O.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout"),nI=nn(O.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=()=>{};var _h={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sI=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,T=u&63;l||(T=64,o||(m=64)),r.push(t[d],t[p],t[m],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new iI;const m=i<<2|c>>4;if(r.push(m),u!==64){const T=c<<4&240|u>>2;if(r.push(T),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oI=function(n){const e=Gf(n);return Kf.encodeByteArray(e,!0)},wo=function(n){return oI(n).replace(/\./g,"")},Qf=function(n){try{return Kf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cI=()=>aI().__FIREBASE_DEFAULTS__,lI=()=>{if(typeof process>"u"||typeof _h>"u")return;const n=_h.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qf(n[1]);return e&&JSON.parse(e)},Wo=()=>{try{return rI()||cI()||lI()||uI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yf=n=>{var e,t;return(t=(e=Wo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},hI=n=>{const e=Yf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xf=()=>{var n;return(n=Wo())==null?void 0:n.config},Jf=n=>{var e;return(e=Wo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zf(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function fI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[wo(JSON.stringify(t)),wo(JSON.stringify(o)),""].join(".")}const js={};function pI(){const n={prod:[],emulator:[]};for(const e of Object.keys(js))js[e]?n.emulator.push(e):n.prod.push(e);return n}function mI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let vh=!1;function ep(n,e){if(typeof window>"u"||typeof document>"u"||!os(window.location.host)||js[n]===e||js[n]||vh)return;js[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=pI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,T){m.setAttribute("width","24"),m.setAttribute("id",T),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{vh=!0,o()},m}function d(m,T){m.setAttribute("id",T),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=mI(r),T=t("text"),S=document.getElementById(T)||document.createElement("span"),P=t("learnmore"),A=document.getElementById(P)||document.createElement("a"),k=t("preprendIcon"),D=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const C=m.element;c(C),d(A,P);const V=u();l(D,k),C.append(D,S,A,V),document.body.appendChild(C)}i?(S.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function yI(){var e;const n=(e=Wo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _I(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EI(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wI(){return!yI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function np(){try{return typeof indexedDB=="object"}catch{return!1}}function rp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function TI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=II,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sr.prototype.create)}}class Sr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,c,r)}}function bI(n,e){return n.replace(AI,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const AI=/\{\$([^}]+)}/g;function RI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $n(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Eh(i)&&Eh(o)){if(!$n(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Eh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function SI(n,e){const t=new PI(n,e);return t.subscribe.bind(t)}class PI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");CI(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Fa),s.error===void 0&&(s.error=Fa),s.complete===void 0&&(s.complete=Fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fa(){}/**
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
 */const xI=1e3,kI=2,DI=14400*1e3,NI=.5;function wh(n,e=xI,t=kI){const r=e*Math.pow(t,n),s=Math.round(NI*r*(Math.random()-.5)*2);return Math.min(DI,r+s)}/**
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
 */function ze(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lr="[DEFAULT]";/**
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
 */class OI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new dI;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LI(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VI(n){return n===lr?void 0:n}function LI(n){return n.instantiationMode==="EAGER"}/**
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
 */class MI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new OI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const FI={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},UI=re.INFO,BI={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},$I=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=BI[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Go{constructor(e){this.name=e,this._logLevel=UI,this._logHandler=$I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const jI=(n,e)=>e.some(t=>n instanceof t);let Th,Ih;function qI(){return Th||(Th=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sp=new WeakMap,cc=new WeakMap,ip=new WeakMap,Ua=new WeakMap,tl=new WeakMap;function zI(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Mn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&sp.set(t,n)}).catch(()=>{}),tl.set(e,n),e}function WI(n){if(cc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});cc.set(n,e)}let lc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return cc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ip.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function GI(n){lc=n(lc)}function KI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ba(this),e,...t);return ip.set(r,e.sort?e.sort():[e]),Mn(r)}:HI().includes(n)?function(...e){return n.apply(Ba(this),e),Mn(sp.get(this))}:function(...e){return Mn(n.apply(Ba(this),e))}}function QI(n){return typeof n=="function"?KI(n):(n instanceof IDBTransaction&&WI(n),jI(n,qI())?new Proxy(n,lc):n)}function Mn(n){if(n instanceof IDBRequest)return zI(n);if(Ua.has(n))return Ua.get(n);const e=QI(n);return e!==n&&(Ua.set(n,e),tl.set(e,n)),e}const Ba=n=>tl.get(n);function op(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mn(o.result),l.oldVersion,l.newVersion,Mn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const YI=["get","getKey","getAll","getAllKeys","count"],XI=["put","add","delete","clear"],$a=new Map;function bh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=XI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||YI.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return $a.set(e,i),i}GI(n=>({...n,get:(e,t,r)=>bh(e,t)||n.get(e,t,r),has:(e,t)=>!!bh(e,t)||n.has(e,t)}));/**
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
 */class JI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ZI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ZI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uc="@firebase/app",Ah="0.14.6";/**
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
 */const gn=new Go("@firebase/app"),eb="@firebase/app-compat",tb="@firebase/analytics-compat",nb="@firebase/analytics",rb="@firebase/app-check-compat",sb="@firebase/app-check",ib="@firebase/auth",ob="@firebase/auth-compat",ab="@firebase/database",cb="@firebase/data-connect",lb="@firebase/database-compat",ub="@firebase/functions",hb="@firebase/functions-compat",db="@firebase/installations",fb="@firebase/installations-compat",pb="@firebase/messaging",mb="@firebase/messaging-compat",gb="@firebase/performance",yb="@firebase/performance-compat",_b="@firebase/remote-config",vb="@firebase/remote-config-compat",Eb="@firebase/storage",wb="@firebase/storage-compat",Tb="@firebase/firestore",Ib="@firebase/ai",bb="@firebase/firestore-compat",Ab="firebase",Rb="12.6.0";/**
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
 */const hc="[DEFAULT]",Sb={[uc]:"fire-core",[eb]:"fire-core-compat",[nb]:"fire-analytics",[tb]:"fire-analytics-compat",[sb]:"fire-app-check",[rb]:"fire-app-check-compat",[ib]:"fire-auth",[ob]:"fire-auth-compat",[ab]:"fire-rtdb",[cb]:"fire-data-connect",[lb]:"fire-rtdb-compat",[ub]:"fire-fn",[hb]:"fire-fn-compat",[db]:"fire-iid",[fb]:"fire-iid-compat",[pb]:"fire-fcm",[mb]:"fire-fcm-compat",[gb]:"fire-perf",[yb]:"fire-perf-compat",[_b]:"fire-rc",[vb]:"fire-rc-compat",[Eb]:"fire-gcs",[wb]:"fire-gcs-compat",[Tb]:"fire-fst",[bb]:"fire-fst-compat",[Ib]:"fire-vertex","fire-js":"fire-js",[Ab]:"fire-js-all"};/**
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
 */const To=new Map,Pb=new Map,dc=new Map;function Rh(n,e){try{n.container.addComponent(e)}catch(t){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function en(n){const e=n.name;if(dc.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;dc.set(e,n);for(const t of To.values())Rh(t,n);for(const t of Pb.values())Rh(t,n);return!0}function Pr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Cb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new Sr("app","Firebase",Cb);/**
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
 */class xb{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const as=Rb;function ap(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:hc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Fn.create("bad-app-name",{appName:String(s)});if(t||(t=Xf()),!t)throw Fn.create("no-options");const i=To.get(s);if(i){if($n(t,i.options)&&$n(r,i.config))return i;throw Fn.create("duplicate-app",{appName:s})}const o=new MI(s);for(const l of dc.values())o.addComponent(l);const c=new xb(t,r,o);return To.set(s,c),c}function nl(n=hc){const e=To.get(n);if(!e&&n===hc&&Xf())return ap();if(!e)throw Fn.create("no-app",{appName:n});return e}function Pt(n,e,t){let r=Sb[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(o.join(" "));return}en(new Mt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kb="firebase-heartbeat-database",Db=1,Js="firebase-heartbeat-store";let ja=null;function cp(){return ja||(ja=op(kb,Db,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Js)}catch(t){console.warn(t)}}}}).catch(n=>{throw Fn.create("idb-open",{originalErrorMessage:n.message})})),ja}async function Nb(n){try{const t=(await cp()).transaction(Js),r=await t.objectStore(Js).get(lp(n));return await t.done,r}catch(e){if(e instanceof Bt)gn.warn(e.message);else{const t=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(t.message)}}}async function Sh(n,e){try{const r=(await cp()).transaction(Js,"readwrite");await r.objectStore(Js).put(e,lp(n)),await r.done}catch(t){if(t instanceof Bt)gn.warn(t.message);else{const r=Fn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gn.warn(r.message)}}}function lp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ob=1024,Vb=30;class Lb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ph();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Vb){const o=Ub(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ph(),{heartbeatsToSend:r,unsentEntries:s}=Mb(this._heartbeatsCache.heartbeats),i=wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gn.warn(t),""}}}function Ph(){return new Date().toISOString().substring(0,10)}function Mb(n,e=Ob){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ch(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ch(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Fb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return np()?rp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Nb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ch(n){return wo(JSON.stringify({version:2,heartbeats:n})).length}function Ub(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Bb(n){en(new Mt("platform-logger",e=>new JI(e),"PRIVATE")),en(new Mt("heartbeat",e=>new Lb(e),"PRIVATE")),Pt(uc,Ah,n),Pt(uc,Ah,"esm2020"),Pt("fire-js","")}Bb("");function up(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $b=up,hp=new Sr("auth","Firebase",up());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Go("@firebase/auth");function jb(n,...e){Io.logLevel<=re.WARN&&Io.warn(`Auth (${as}): ${n}`,...e)}function co(n,...e){Io.logLevel<=re.ERROR&&Io.error(`Auth (${as}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,...e){throw sl(n,...e)}function Lt(n,...e){return sl(n,...e)}function rl(n,e,t){const r={...$b(),[e]:t};return new Sr("auth","Firebase",r).create(e,{appName:n.name})}function dn(n){return rl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qb(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(n,"argument-error"),rl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return hp.create(n,...e)}function Q(n,e,...t){if(!n)throw sl(e,...t)}function cn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw co(e),new Error(e)}function yn(n,e){n||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Hb(){return xh()==="http:"||xh()==="https:"}function xh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hb()||tp()||"connection"in navigator)?navigator.onLine:!0}function Wb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.shortDelay=e,this.longDelay=t,yn(t>e,"Short delay should be less than long delay!"),this.isMobile=gI()||vI()}get(){return zb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n,e){yn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qb=new mi(3e4,6e4);function Qn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Yn(n,e,t,r,s={}){return fp(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=pi({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return _I()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&os(n.emulatorConfig.host)&&(u.credentials="include"),dp.fetch()(await pp(n,n.config.apiHost,t,c),u)})}async function fp(n,e,t){n._canInitEmulator=!1;const r={...Gb,...e};try{const s=new Xb(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yi(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rl(n,d,u);Dt(n,d)}}catch(s){if(s instanceof Bt)throw s;Dt(n,"network-request-failed",{message:String(s)})}}async function gi(n,e,t,r,s={}){const i=await Yn(n,e,t,r,s);return"mfaPendingCredential"in i&&Dt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function pp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?il(n.config,s):`${n.config.apiScheme}://${s}`;return Kb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Yb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),Qb.get())})}}function Yi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Lt(n,e,r);return s.customData._tokenResponse=t,s}function kh(n){return n!==void 0&&n.enterprise!==void 0}class Jb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Yb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Zb(n,e){return Yn(n,"GET","/v2/recaptchaConfig",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(n,e){return Yn(n,"POST","/v1/accounts:delete",e)}async function bo(n,e){return Yn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(n,e=!1){const t=ze(n),r=await t.getIdToken(e),s=ol(r);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qs(qa(s.auth_time)),issuedAtTime:qs(qa(s.iat)),expirationTime:qs(qa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qa(n){return Number(n)*1e3}function ol(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qf(t);return s?JSON.parse(s):(co("Failed to decode base64 JWT payload"),null)}catch(s){return co("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dh(n){const e=ol(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&nA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function nA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ao(n){var p;const e=n.auth,t=await n.getIdToken(),r=await Zs(n,bo(e,{idToken:t}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?mp(s.providerUserInfo):[],o=iA(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new pc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function sA(n){const e=ze(n);await Ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(n,e){const t=await fp(n,{},async()=>{const r=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await pp(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&os(n.emulatorConfig.host)&&(l.credentials="include"),dp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aA(n,e){return Yn(n,"POST","/v2/accounts:revokeToken",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=Dh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await oA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new $r;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await Zs(this,eA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:T,providerData:S,stsTokenManager:P}=t;Q(p&&P,e,"internal-error");const A=$r.fromJSON(this.name,P);Q(typeof p=="string",e,"internal-error"),Dn(r,e.name),Dn(s,e.name),Q(typeof m=="boolean",e,"internal-error"),Q(typeof T=="boolean",e,"internal-error"),Dn(i,e.name),Dn(o,e.name),Dn(c,e.name),Dn(l,e.name),Dn(u,e.name),Dn(d,e.name);const k=new Ot({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:A,createdAt:u,lastLoginAt:d});return S&&Array.isArray(S)&&(k.providerData=S.map(D=>({...D}))),l&&(k._redirectEventId=l),k}static async _fromIdTokenResponse(e,t,r=!1){const s=new $r;s.updateFromServerResponse(t);const i=new Ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ao(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?mp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new $r;c.updateFromIdToken(r);const l=new Ot({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=new Map;function ln(n){yn(n instanceof Function,"Expected a class definition");let e=Nh.get(n);return e?(yn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nh.set(n,e),e)}/**
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
 */class gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gp.type="NONE";const Oh=gp;/**
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
 */function lo(n,e,t){return`firebase:${n}:${e}:${t}`}class jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=lo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bo(this.auth,{idToken:e}).catch(()=>{});return t?Ot._fromGetAccountInfoResponse(this.auth,t,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jr(ln(Oh),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ln(Oh);const o=lo(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await bo(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Ot._fromGetAccountInfoResponse(e,m,d)}else p=Ot._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new jr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ep(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tp(e))return"Blackberry";if(Ip(e))return"Webos";if(_p(e))return"Safari";if((e.includes("chrome/")||vp(e))&&!e.includes("edge/"))return"Chrome";if(wp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yp(n=nt()){return/firefox\//i.test(n)}function _p(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vp(n=nt()){return/crios\//i.test(n)}function Ep(n=nt()){return/iemobile/i.test(n)}function wp(n=nt()){return/android/i.test(n)}function Tp(n=nt()){return/blackberry/i.test(n)}function Ip(n=nt()){return/webos/i.test(n)}function al(n=nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cA(n=nt()){var e;return al(n)&&!!((e=window.navigator)!=null&&e.standalone)}function lA(){return EI()&&document.documentMode===10}function bp(n=nt()){return al(n)||wp(n)||Ip(n)||Tp(n)||/windows phone/i.test(n)||Ep(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n,e=[]){let t;switch(n){case"Browser":t=Vh(nt());break;case"Worker":t=`${Vh(nt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${as}/${r}`}/**
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
 */class uA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hA(n,e={}){return Yn(n,"GET","/v2/passwordPolicy",Qn(n,e))}/**
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
 */const dA=6;class fA{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??dA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lh(this),this.idTokenSubscription=new Lh(this),this.beforeStateQueue=new uA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bo(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ao(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(dn(this));const t=e?ze(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hA(this),t=new fA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await aA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ln(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&jb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xn(n){return ze(n)}class Lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(n){Ko=n}function Rp(n){return Ko.loadJS(n)}function gA(){return Ko.recaptchaEnterpriseScript}function yA(){return Ko.gapiScript}function _A(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class vA{constructor(){this.enterprise=new EA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wA="recaptcha-enterprise",Sp="NO_RECAPTCHA";class TA{constructor(e){this.type=wA,this.auth=Xn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Zb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Jb(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;kh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Sp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&kh(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gA();l.length!==0&&(l+=c),Rp(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Mh(n,e,t,r=!1,s=!1){const i=new TA(n);let o;if(s)o=Sp;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function mc(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Mh(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Mh(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(n,e){const t=Pr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if($n(i,e??{}))return s;Dt(s,"already-initialized")}return t.initialize({options:e})}function bA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ln);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AA(n,e,t){const r=Xn(n);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Pp(e),{host:o,port:c}=RA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q($n(u,r.config.emulator)&&$n(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,os(o)?(Zf(`${i}//${o}${l}`),ep("Auth",!0)):SA()}function Pp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function RA(n){const e=Pp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fh(o)}}}function Fh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function SA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,t){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function PA(n,e){return Yn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(n,e){return gi(n,"POST","/v1/accounts:signInWithPassword",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(n,e){return gi(n,"POST","/v1/accounts:signInWithEmailLink",Qn(n,e))}async function kA(n,e){return gi(n,"POST","/v1/accounts:signInWithEmailLink",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends cl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ei(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ei(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mc(e,t,"signInWithPassword",CA);case"emailLink":return xA(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mc(e,r,"signUpPassword",PA);case"emailLink":return kA(e,{idToken:t,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(n,e){return gi(n,"POST","/v1/accounts:signInWithIdp",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="http://localhost";class Er extends cl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Er(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return qr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,qr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qr(e,t)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(n){const e=Ns(Os(n)).link,t=e?Ns(Os(e)).deep_link_id:null,r=Ns(Os(n)).deep_link_id;return(r?Ns(Os(r)).link:null)||r||t||e||n}class ll{constructor(e){const t=Ns(Os(e)),r=t.apiKey??null,s=t.oobCode??null,i=NA(t.mode??null);Q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=OA(e);try{return new ll(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,t){return ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ll.parseLink(t);return Q(r,"argument-error"),ei._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yi extends ul{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends yi{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Er._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return an.credential(t,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends yi{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends yi{constructor(){super("twitter.com")}static credential(e,t){return Er._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vn.credential(t,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(n,e){return gi(n,"POST","/v1/accounts:signUp",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),o=Uh(r);return new wr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Uh(r);return new wr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Uh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Bt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ro.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ro(e,t,r,s)}}function Cp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ro._fromErrorAndOperation(n,i,e,r):i})}async function LA(n,e,t=!1){const r=await Zs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wr._forOperation(n,"link",r)}/**
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
 */async function MA(n,e,t=!1){const{auth:r}=n;if(yt(r.app))return Promise.reject(dn(r));const s="reauthenticate";try{const i=await Zs(n,Cp(r,s,e,n),t);Q(i.idToken,r,"internal-error");const o=ol(i.idToken);Q(o,r,"internal-error");const{sub:c}=o;return Q(n.uid===c,r,"user-mismatch"),wr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(n,e,t=!1){if(yt(n.app))return Promise.reject(dn(n));const r="signIn",s=await Cp(n,r,e),i=await wr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function FA(n,e){return xp(Xn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(n){const e=Xn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UA(n,e,t){if(yt(n.app))return Promise.reject(dn(n));const r=Xn(n),o=await mc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&kp(n),l}),c=await wr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function BA(n,e,t){return yt(n.app)?Promise.reject(dn(n)):FA(ze(n),cs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kp(n),r})}function $A(n,e,t,r){return ze(n).onIdTokenChanged(e,t,r)}function jA(n,e,t){return ze(n).beforeAuthStateChanged(e,t)}function qA(n,e,t,r){return ze(n).onAuthStateChanged(e,t,r)}function HA(n){return ze(n).signOut()}const So="__sak";/**
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
 */class Dp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=1e3,WA=10;class Np extends Dp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,WA):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Np.type="LOCAL";const GA=Np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends Dp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Op.type="SESSION";const Vp=Op;/**
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
 */function KA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await KA(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class QA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=hl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function YA(n){Gt().location.href=n}/**
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
 */function Lp(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function XA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function ZA(){return Lp()?self:null}/**
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
 */const Mp="firebaseLocalStorageDb",eR=1,Po="firebaseLocalStorage",Fp="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yo(n,e){return n.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function tR(){const n=indexedDB.deleteDatabase(Mp);return new _i(n).toPromise()}function gc(){const n=indexedDB.open(Mp,eR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Po,{keyPath:Fp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Po)?e(r):(r.close(),await tR(),e(await gc()))})})}async function Bh(n,e,t){const r=Yo(n,!0).put({[Fp]:e,value:t});return new _i(r).toPromise()}async function nR(n,e){const t=Yo(n,!1).get(e),r=await new _i(t).toPromise();return r===void 0?null:r.value}function $h(n,e){const t=Yo(n,!0).delete(e);return new _i(t).toPromise()}const rR=800,sR=3;class Up{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(ZA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await XA(),!this.activeServiceWorker)return;this.sender=new QA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gc();return await Bh(e,So,"1"),await $h(e,So),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>nR(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$h(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Yo(s,!1).getAll();return new _i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Up.type="LOCAL";const iR=Up;new mi(3e4,6e4);/**
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
 */function Bp(n,e){return e?ln(e):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class dl extends cl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oR(n){return xp(n.auth,new dl(n),n.bypassAuthState)}function aR(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),MA(t,new dl(n),n.bypassAuthState)}async function cR(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),LA(t,new dl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oR;case"linkViaPopup":case"linkViaRedirect":return cR;case"reauthViaPopup":case"reauthViaRedirect":return aR;default:Dt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new mi(2e3,1e4);async function uR(n,e,t){if(yt(n.app))return Promise.reject(Lt(n,"operation-not-supported-in-this-environment"));const r=Xn(n);qb(n,e,ul);const s=Bp(r,t);return new dr(r,"signInViaPopup",e,s).executeNotNull()}class dr extends $p{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lR.get())};e()}}dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="pendingRedirect",uo=new Map;class dR extends $p{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{const r=await fR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fR(n,e){const t=gR(e),r=mR(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function pR(n,e){uo.set(n._key(),e)}function mR(n){return ln(n._redirectPersistence)}function gR(n){return lo(hR,n.config.apiKey,n.name)}async function yR(n,e,t=!1){if(yt(n.app))return Promise.reject(dn(n));const r=Xn(n),s=Bp(r,e),o=await new dR(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=600*1e3;class vR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ER(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Lt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_R&&this.cachedEventUids.clear(),this.cachedEventUids.has(jh(e))}saveEventToCache(e){this.cachedEventUids.add(jh(e)),this.lastProcessedEventTime=Date.now()}}function jh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ER(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(n,e={}){return Yn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IR=/^https?/;async function bR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wR(n);for(const t of e)try{if(AR(t))return}catch{}Dt(n,"unauthorized-domain")}function AR(n){const e=fc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!IR.test(t))return!1;if(TR.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const RR=new mi(3e4,6e4);function qh(){const n=Gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function SR(n){return new Promise((e,t)=>{var s,i,o;function r(){qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qh(),t(Lt(n,"network-request-failed"))},timeout:RR.get()})}if((i=(s=Gt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Gt().gapi)!=null&&o.load)r();else{const c=_A("iframefcb");return Gt()[c]=()=>{gapi.load?r():t(Lt(n,"network-request-failed"))},Rp(`${yA()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ho=null,e})}let ho=null;function PR(n){return ho=ho||SR(n),ho}/**
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
 */const CR=new mi(5e3,15e3),xR="__/auth/iframe",kR="emulator/auth/iframe",DR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OR(n){const e=n.config;Q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?il(e,kR):`https://${n.config.authDomain}/${xR}`,r={apiKey:e.apiKey,appName:n.name,v:as},s=NR.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${pi(r).slice(1)}`}async function VR(n){const e=await PR(n),t=Gt().gapi;return Q(t,n,"internal-error"),e.open({where:document.body,url:OR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(n,"network-request-failed"),c=Gt().setTimeout(()=>{i(o)},CR.get());function l(){Gt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const LR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MR=500,FR=600,UR="_blank",BR="http://localhost";class Hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $R(n,e,t,r=MR,s=FR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...LR,width:r.toString(),height:s.toString(),top:i,left:o},u=nt().toLowerCase();t&&(c=vp(u)?UR:t),yp(u)&&(e=e||BR,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[T,S])=>`${m}${T}=${S},`,"");if(cA(u)&&c!=="_self")return jR(e||"",c),new Hh(null);const p=window.open(e||"",c,d);Q(p,n,"popup-blocked");try{p.focus()}catch{}return new Hh(p)}function jR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const qR="__/auth/handler",HR="emulator/auth/handler",zR=encodeURIComponent("fac");async function zh(n,e,t,r,s,i){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:as,eventId:s};if(e instanceof ul){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",RI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof yi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),u=l?`#${zR}=${encodeURIComponent(l)}`:"";return`${WR(n)}?${pi(c).slice(1)}${u}`}function WR({config:n}){return n.emulator?il(n,HR):`https://${n.authDomain}/${qR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="webStorageSupport";class GR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vp,this._completeRedirectFn=yR,this._overrideRedirectResult=pR}async _openPopup(e,t,r,s){var o;yn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await zh(e,t,r,fc(),s);return $R(e,i,hl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await zh(e,t,r,fc(),s);return YA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await VR(e),r=new vR(e);return t.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ha,{type:Ha},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ha];i!==void 0&&t(!!i),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bp()||_p()||al()}}const KR=GR;var Wh="@firebase/auth",Gh="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XR(n){en(new Mt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ap(n)},u=new pA(r,s,i,l);return bA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),en(new Mt("auth-internal",e=>{const t=Xn(e.getProvider("auth").getImmediate());return(r=>new QR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Wh,Gh,YR(n)),Pt(Wh,Gh,"esm2020")}/**
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
 */const JR=300,ZR=Jf("authIdTokenMaxAge")||JR;let Kh=null;const eS=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ZR)return;const s=t==null?void 0:t.token;Kh!==s&&(Kh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tS(n=nl()){const e=Pr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=IA(n,{popupRedirectResolver:KR,persistence:[iR,GA,Vp]}),r=Jf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=eS(i.toString());jA(t,o,()=>o(t.currentUser)),$A(t,c=>o(c))}}const s=Yf("auth");return s&&AA(t,`http://${s}`),t}function nS(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}mA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Lt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",nS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XR("Browser");var rS="firebase",sS="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(rS,sS,"app");var Qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Un,qp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function v(){}v.prototype=_.prototype,E.F=_.prototype,E.prototype=new v,E.prototype.constructor=E,E.D=function(I,b,R){for(var g=Array(arguments.length-2),H=2;H<arguments.length;H++)g[H-2]=arguments[H];return _.prototype[b].apply(I,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,v){v||(v=0);const I=Array(16);if(typeof _=="string")for(var b=0;b<16;++b)I[b]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(b=0;b<16;++b)I[b]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=E.g[0],v=E.g[1],b=E.g[2];let R=E.g[3],g;g=_+(R^v&(b^R))+I[0]+3614090360&4294967295,_=v+(g<<7&4294967295|g>>>25),g=R+(b^_&(v^b))+I[1]+3905402710&4294967295,R=_+(g<<12&4294967295|g>>>20),g=b+(v^R&(_^v))+I[2]+606105819&4294967295,b=R+(g<<17&4294967295|g>>>15),g=v+(_^b&(R^_))+I[3]+3250441966&4294967295,v=b+(g<<22&4294967295|g>>>10),g=_+(R^v&(b^R))+I[4]+4118548399&4294967295,_=v+(g<<7&4294967295|g>>>25),g=R+(b^_&(v^b))+I[5]+1200080426&4294967295,R=_+(g<<12&4294967295|g>>>20),g=b+(v^R&(_^v))+I[6]+2821735955&4294967295,b=R+(g<<17&4294967295|g>>>15),g=v+(_^b&(R^_))+I[7]+4249261313&4294967295,v=b+(g<<22&4294967295|g>>>10),g=_+(R^v&(b^R))+I[8]+1770035416&4294967295,_=v+(g<<7&4294967295|g>>>25),g=R+(b^_&(v^b))+I[9]+2336552879&4294967295,R=_+(g<<12&4294967295|g>>>20),g=b+(v^R&(_^v))+I[10]+4294925233&4294967295,b=R+(g<<17&4294967295|g>>>15),g=v+(_^b&(R^_))+I[11]+2304563134&4294967295,v=b+(g<<22&4294967295|g>>>10),g=_+(R^v&(b^R))+I[12]+1804603682&4294967295,_=v+(g<<7&4294967295|g>>>25),g=R+(b^_&(v^b))+I[13]+4254626195&4294967295,R=_+(g<<12&4294967295|g>>>20),g=b+(v^R&(_^v))+I[14]+2792965006&4294967295,b=R+(g<<17&4294967295|g>>>15),g=v+(_^b&(R^_))+I[15]+1236535329&4294967295,v=b+(g<<22&4294967295|g>>>10),g=_+(b^R&(v^b))+I[1]+4129170786&4294967295,_=v+(g<<5&4294967295|g>>>27),g=R+(v^b&(_^v))+I[6]+3225465664&4294967295,R=_+(g<<9&4294967295|g>>>23),g=b+(_^v&(R^_))+I[11]+643717713&4294967295,b=R+(g<<14&4294967295|g>>>18),g=v+(R^_&(b^R))+I[0]+3921069994&4294967295,v=b+(g<<20&4294967295|g>>>12),g=_+(b^R&(v^b))+I[5]+3593408605&4294967295,_=v+(g<<5&4294967295|g>>>27),g=R+(v^b&(_^v))+I[10]+38016083&4294967295,R=_+(g<<9&4294967295|g>>>23),g=b+(_^v&(R^_))+I[15]+3634488961&4294967295,b=R+(g<<14&4294967295|g>>>18),g=v+(R^_&(b^R))+I[4]+3889429448&4294967295,v=b+(g<<20&4294967295|g>>>12),g=_+(b^R&(v^b))+I[9]+568446438&4294967295,_=v+(g<<5&4294967295|g>>>27),g=R+(v^b&(_^v))+I[14]+3275163606&4294967295,R=_+(g<<9&4294967295|g>>>23),g=b+(_^v&(R^_))+I[3]+4107603335&4294967295,b=R+(g<<14&4294967295|g>>>18),g=v+(R^_&(b^R))+I[8]+1163531501&4294967295,v=b+(g<<20&4294967295|g>>>12),g=_+(b^R&(v^b))+I[13]+2850285829&4294967295,_=v+(g<<5&4294967295|g>>>27),g=R+(v^b&(_^v))+I[2]+4243563512&4294967295,R=_+(g<<9&4294967295|g>>>23),g=b+(_^v&(R^_))+I[7]+1735328473&4294967295,b=R+(g<<14&4294967295|g>>>18),g=v+(R^_&(b^R))+I[12]+2368359562&4294967295,v=b+(g<<20&4294967295|g>>>12),g=_+(v^b^R)+I[5]+4294588738&4294967295,_=v+(g<<4&4294967295|g>>>28),g=R+(_^v^b)+I[8]+2272392833&4294967295,R=_+(g<<11&4294967295|g>>>21),g=b+(R^_^v)+I[11]+1839030562&4294967295,b=R+(g<<16&4294967295|g>>>16),g=v+(b^R^_)+I[14]+4259657740&4294967295,v=b+(g<<23&4294967295|g>>>9),g=_+(v^b^R)+I[1]+2763975236&4294967295,_=v+(g<<4&4294967295|g>>>28),g=R+(_^v^b)+I[4]+1272893353&4294967295,R=_+(g<<11&4294967295|g>>>21),g=b+(R^_^v)+I[7]+4139469664&4294967295,b=R+(g<<16&4294967295|g>>>16),g=v+(b^R^_)+I[10]+3200236656&4294967295,v=b+(g<<23&4294967295|g>>>9),g=_+(v^b^R)+I[13]+681279174&4294967295,_=v+(g<<4&4294967295|g>>>28),g=R+(_^v^b)+I[0]+3936430074&4294967295,R=_+(g<<11&4294967295|g>>>21),g=b+(R^_^v)+I[3]+3572445317&4294967295,b=R+(g<<16&4294967295|g>>>16),g=v+(b^R^_)+I[6]+76029189&4294967295,v=b+(g<<23&4294967295|g>>>9),g=_+(v^b^R)+I[9]+3654602809&4294967295,_=v+(g<<4&4294967295|g>>>28),g=R+(_^v^b)+I[12]+3873151461&4294967295,R=_+(g<<11&4294967295|g>>>21),g=b+(R^_^v)+I[15]+530742520&4294967295,b=R+(g<<16&4294967295|g>>>16),g=v+(b^R^_)+I[2]+3299628645&4294967295,v=b+(g<<23&4294967295|g>>>9),g=_+(b^(v|~R))+I[0]+4096336452&4294967295,_=v+(g<<6&4294967295|g>>>26),g=R+(v^(_|~b))+I[7]+1126891415&4294967295,R=_+(g<<10&4294967295|g>>>22),g=b+(_^(R|~v))+I[14]+2878612391&4294967295,b=R+(g<<15&4294967295|g>>>17),g=v+(R^(b|~_))+I[5]+4237533241&4294967295,v=b+(g<<21&4294967295|g>>>11),g=_+(b^(v|~R))+I[12]+1700485571&4294967295,_=v+(g<<6&4294967295|g>>>26),g=R+(v^(_|~b))+I[3]+2399980690&4294967295,R=_+(g<<10&4294967295|g>>>22),g=b+(_^(R|~v))+I[10]+4293915773&4294967295,b=R+(g<<15&4294967295|g>>>17),g=v+(R^(b|~_))+I[1]+2240044497&4294967295,v=b+(g<<21&4294967295|g>>>11),g=_+(b^(v|~R))+I[8]+1873313359&4294967295,_=v+(g<<6&4294967295|g>>>26),g=R+(v^(_|~b))+I[15]+4264355552&4294967295,R=_+(g<<10&4294967295|g>>>22),g=b+(_^(R|~v))+I[6]+2734768916&4294967295,b=R+(g<<15&4294967295|g>>>17),g=v+(R^(b|~_))+I[13]+1309151649&4294967295,v=b+(g<<21&4294967295|g>>>11),g=_+(b^(v|~R))+I[4]+4149444226&4294967295,_=v+(g<<6&4294967295|g>>>26),g=R+(v^(_|~b))+I[11]+3174756917&4294967295,R=_+(g<<10&4294967295|g>>>22),g=b+(_^(R|~v))+I[2]+718787259&4294967295,b=R+(g<<15&4294967295|g>>>17),g=v+(R^(b|~_))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(b+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const v=_-this.blockSize,I=this.C;let b=this.h,R=0;for(;R<_;){if(b==0)for(;R<=v;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<_;)if(I[b++]=E.charCodeAt(R++),b==this.blockSize){s(this,I),b=0;break}}else for(;R<_;)if(I[b++]=E[R++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var v=E.length-8;v<E.length;++v)E[v]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,v=0;v<4;++v)for(let I=0;I<32;I+=8)E[_++]=this.g[v]>>>I&255;return E};function i(E,_){var v=c;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=_(E)}function o(E,_){this.h=_;const v=[];let I=!0;for(let b=E.length-1;b>=0;b--){const R=E[b]|0;I&&R==_||(v[b]=R,I=!1)}this.g=v}var c={};function l(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return A(u(-E));const _=[];let v=1;for(let I=0;E>=v;I++)_[I]=E/v|0,v*=4294967296;return new o(_,0)}function d(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return A(d(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(_,8));let I=p;for(let R=0;R<E.length;R+=8){var b=Math.min(8,E.length-R);const g=parseInt(E.substring(R,R+b),_);b<8?(b=u(Math.pow(_,b)),I=I.j(b).add(u(g))):(I=I.j(v),I=I.add(u(g)))}return I}var p=l(0),m=l(1),T=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-A(this).m();let E=0,_=1;for(let v=0;v<this.g.length;v++){const I=this.i(v);E+=(I>=0?I:4294967296+I)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(P(this))return"-"+A(this).toString(E);const _=u(Math.pow(E,6));var v=this;let I="";for(;;){const b=V(v,_).g;v=k(v,b.j(_));let R=((v.g.length>0?v.g[0]:v.h)>>>0).toString(E);if(v=b,S(v))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function P(E){return E.h==-1}n.l=function(E){return E=k(this,E),P(E)?-1:S(E)?0:1};function A(E){const _=E.g.length,v=[];for(let I=0;I<_;I++)v[I]=~E.g[I];return new o(v,~E.h).add(m)}n.abs=function(){return P(this)?A(this):this},n.add=function(E){const _=Math.max(this.g.length,E.g.length),v=[];let I=0;for(let b=0;b<=_;b++){let R=I+(this.i(b)&65535)+(E.i(b)&65535),g=(R>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);I=g>>>16,R&=65535,g&=65535,v[b]=g<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function k(E,_){return E.add(A(_))}n.j=function(E){if(S(this)||S(E))return p;if(P(this))return P(E)?A(this).j(A(E)):A(A(this).j(E));if(P(E))return A(this.j(A(E)));if(this.l(T)<0&&E.l(T)<0)return u(this.m()*E.m());const _=this.g.length+E.g.length,v=[];for(var I=0;I<2*_;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(let b=0;b<E.g.length;b++){const R=this.i(I)>>>16,g=this.i(I)&65535,H=E.i(b)>>>16,z=E.i(b)&65535;v[2*I+2*b]+=g*z,D(v,2*I+2*b),v[2*I+2*b+1]+=R*z,D(v,2*I+2*b+1),v[2*I+2*b+1]+=g*H,D(v,2*I+2*b+1),v[2*I+2*b+2]+=R*H,D(v,2*I+2*b+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new o(v,0)};function D(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function C(E,_){this.g=E,this.h=_}function V(E,_){if(S(_))throw Error("division by zero");if(S(E))return new C(p,p);if(P(E))return _=V(A(E),_),new C(A(_.g),A(_.h));if(P(_))return _=V(E,A(_)),new C(A(_.g),_.h);if(E.g.length>30){if(P(E)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=_;I.l(E)<=0;)v=F(v),I=F(I);var b=U(v,1),R=U(I,1);for(I=U(I,2),v=U(v,2);!S(I);){var g=R.add(I);g.l(E)<=0&&(b=b.add(v),R=g),I=U(I,1),v=U(v,1)}return _=k(E,b.j(_)),new C(b,_)}for(b=p;E.l(_)>=0;){for(v=Math.max(1,Math.floor(E.m()/_.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=u(v),g=R.j(_);P(g)||g.l(E)>0;)v-=I,R=u(v),g=R.j(_);S(R)&&(R=m),b=b.add(R),E=k(E,g)}return new C(b,E)}n.B=function(E){return V(this,E).h},n.and=function(E){const _=Math.max(this.g.length,E.g.length),v=[];for(let I=0;I<_;I++)v[I]=this.i(I)&E.i(I);return new o(v,this.h&E.h)},n.or=function(E){const _=Math.max(this.g.length,E.g.length),v=[];for(let I=0;I<_;I++)v[I]=this.i(I)|E.i(I);return new o(v,this.h|E.h)},n.xor=function(E){const _=Math.max(this.g.length,E.g.length),v=[];for(let I=0;I<_;I++)v[I]=this.i(I)^E.i(I);return new o(v,this.h^E.h)};function F(E){const _=E.g.length+1,v=[];for(let I=0;I<_;I++)v[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(v,E.h)}function U(E,_){const v=_>>5;_%=32;const I=E.g.length-v,b=[];for(let R=0;R<I;R++)b[R]=_>0?E.i(R+v)>>>_|E.i(R+v+1)<<32-_:E.i(R+v);return new o(b,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,qp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Un=o}).apply(typeof Qh<"u"?Qh:typeof self<"u"?self:typeof window<"u"?window:{});var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hp,Vs,zp,fo,yc,Wp,Gp,Kp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xi=="object"&&Xi];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var x=a[y];if(!(x in f))break e;f=f[x]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,f){return a.call.apply(a.bind,arguments)}function u(a,h,f){return u=l,u.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,x,N){for(var $=Array(arguments.length-2),te=2;te<arguments.length;te++)$[te-2]=arguments[te];return h.prototype[x].apply(y,$)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function S(a,h){for(let y=1;y<arguments.length;y++){const x=arguments[y];var f=typeof x;if(f=f!="object"?f:x?Array.isArray(x)?"array":f:"null",f=="array"||f=="object"&&typeof x.length=="number"){f=a.length||0;const N=x.length||0;a.length=f+N;for(let $=0;$<N;$++)a[f+$]=x[$]}else a.push(x)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function A(a){o.setTimeout(()=>{throw a},0)}function k(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class D{constructor(){this.h=this.g=null}add(h,f){const y=C.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var C=new P(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let F,U=!1,E=new D,_=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(v)}};function v(){for(var a;a=k();){try{a.h.call(a.g)}catch(f){A(f)}var h=C;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a})();function g(a){return/^[\s\xa0]*$/.test(a)}function H(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(H,b),H.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&H.Z.h.call(this)},H.prototype.h=function(){H.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var z="closure_listenable_"+(Math.random()*1e6|0),B=0;function Z(a,h,f,y,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=x,this.key=++B,this.da=this.fa=!1}function G(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ne(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function fe(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Fe(a){const h={};for(const f in a)h[f]=a[f];return h}const Ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Re(a,h){let f,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(f in y)a[f]=y[f];for(let N=0;N<Ne.length;N++)f=Ne[N],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function ce(a){this.src=a,this.g={},this.h=0}ce.prototype.add=function(a,h,f,y,x){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const $=We(a,h,y,x);return $>-1?(h=a[$],f||(h.fa=!1)):(h=new Z(h,this.src,N,!!y,x),h.fa=f,a.push(h)),h};function Ie(a,h){const f=h.type;if(f in a.g){var y=a.g[f],x=Array.prototype.indexOf.call(y,h,void 0),N;(N=x>=0)&&Array.prototype.splice.call(y,x,1),N&&(G(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function We(a,h,f,y){for(let x=0;x<a.length;++x){const N=a[x];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==y)return x}return-1}var W="closure_lm_"+(Math.random()*1e6|0),le={};function ue(a,h,f,y,x){if(Array.isArray(h)){for(let N=0;N<h.length;N++)ue(a,h[N],f,y,x);return null}return f=ut(f),a&&a[z]?a.J(h,f,c(y)?!!y.capture:!1,x):ye(a,h,f,!1,y,x)}function ye(a,h,f,y,x,N){if(!h)throw Error("Invalid event type");const $=c(x)?!!x.capture:!!x;let te=be(a);if(te||(a[W]=te=new ce(a)),f=te.add(h,f,y,$,N),f.proxy)return f;if(y=he(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)R||(x=$),x===void 0&&(x=!1),a.addEventListener(h.toString(),y,x);else if(a.attachEvent)a.attachEvent(Se(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function he(){function a(f){return h.call(a.src,a.listener,f)}const h=rt;return a}function oe(a,h,f,y,x){if(Array.isArray(h))for(var N=0;N<h.length;N++)oe(a,h[N],f,y,x);else y=c(y)?!!y.capture:!!y,f=ut(f),a&&a[z]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],f=We(h,f,y,x),f>-1&&(G(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=be(a))&&(h=a.g[h.toString()],a=-1,h&&(a=We(h,f,y,x)),(f=a>-1?h[a]:null)&&Oe(f))}function Oe(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[z])Ie(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Se(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=be(h))?(Ie(f,a),f.h==0&&(f.src=null,h[W]=null)):G(a)}}}function Se(a){return a in le?le[a]:le[a]="on"+a}function rt(a,h){if(a.da)a=!0;else{h=new H(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&Oe(a),a=f.call(y,h)}return a}function be(a){return a=a[W],a instanceof ce?a:null}var ke="__closure_events_fn_"+(Math.random()*1e9>>>0);function ut(a){return typeof a=="function"?a:(a[ke]||(a[ke]=function(h){return a.handleEvent(h)}),a[ke])}function Pe(){I.call(this),this.i=new ce(this),this.M=this,this.G=null}p(Pe,I),Pe.prototype[z]=!0,Pe.prototype.removeEventListener=function(a,h,f,y){oe(this,a,h,f,y)};function me(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var x=h;h=new b(y,a),Re(h,x)}x=!0;let N,$;if(f)for($=f.length-1;$>=0;$--)N=h.g=f[$],x=bt(N,y,!0,h)&&x;if(N=h.g=a,x=bt(N,y,!0,h)&&x,x=bt(N,y,!1,h)&&x,f)for($=0;$<f.length;$++)N=h.g=f[$],x=bt(N,y,!1,h)&&x}Pe.prototype.N=function(){if(Pe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)G(f[y]);delete a.g[h],a.h--}}this.G=null},Pe.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Pe.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function bt(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let N=0;N<h.length;++N){const $=h[N];if($&&!$.da&&$.capture==f){const te=$.listener,Ue=$.ha||$.src;$.fa&&Ie(a.i,$),x=te.call(Ue,y)!==!1&&x}}return x&&!y.defaultPrevented}function Jn(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function wn(a){a.g=Jn(()=>{a.g=null,a.i&&(a.i=!1,wn(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Zn extends I{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:wn(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(a){I.call(this),this.h=a,this.g={}}p($t,I);var er=[];function rn(a){ne(a.g,function(h,f){this.g.hasOwnProperty(f)&&Oe(h)},a),a.g={}}$t.prototype.N=function(){$t.Z.N.call(this),rn(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tn=o.JSON.stringify,tr=o.JSON.parse,ps=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ht(){}function In(){}var mt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function st(){b.call(this,"d")}p(st,b);function ms(){b.call(this,"c")}p(ms,b);var Nt={},Ri=null;function sn(){return Ri=Ri||new Pe}Nt.Ia="serverreachability";function Si(a){b.call(this,Nt.Ia,a)}p(Si,b);function nr(a){const h=sn();me(h,new Si(h))}Nt.STAT_EVENT="statevent";function Pi(a,h){b.call(this,Nt.STAT_EVENT,a),this.stat=h}p(Pi,b);function Ge(a){const h=sn();me(h,new Pi(h,a))}Nt.Ja="timingevent";function Ci(a,h){b.call(this,Nt.Ja,a),this.size=h}p(Ci,b);function rr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function sr(){this.g=!0}sr.prototype.ua=function(){this.g=!1};function fa(a,h,f,y,x,N){a.info(function(){if(a.g)if(N){var $="",te=N.split("&");for(let pe=0;pe<te.length;pe++){var Ue=te[pe].split("=");if(Ue.length>1){const qe=Ue[0];Ue=Ue[1];const qt=qe.split("_");$=qt.length>=2&&qt[1]=="type"?$+(qe+"="+Ue+"&"):$+(qe+"=redacted&")}}}else $=null;else $=N;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+h+`
`+f+`
`+$})}function ee(a,h,f,y,x,N,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+h+`
`+f+`
`+N+" "+$})}function je(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Hg(a,f)+(y?" "+y:"")})}function xi(a,h){a.info(function(){return"TIMEOUT: "+h})}sr.prototype.info=function(){};function Hg(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var f=N[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var x=y[0];if(x!="noop"&&x!="stop"&&x!="close")for(let $=1;$<y.length;$++)y[$]=""}}}}return Tn(N)}catch{return h}}var ki={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},nu;function pa(){}p(pa,ht),pa.prototype.g=function(){return new XMLHttpRequest},nu=new pa;function gs(a){return encodeURIComponent(String(a))}function zg(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function bn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new $t(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ru}function ru(){this.i=null,this.g="",this.h=!1}var su={},ma={};function ga(a,h,f){a.M=1,a.A=Ni(jt(h)),a.u=f,a.R=!0,iu(a,null)}function iu(a,h){a.F=Date.now(),Di(a),a.B=jt(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),_u(f.i,"t",y),a.C=0,f=a.j.L,a.h=new ru,a.g=Lu(a.j,f?h:null,!a.u),a.P>0&&(a.O=new Zn(u(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(er[0]=x.toString()),x=er);for(let N=0;N<x.length;N++){const $=ue(f,x[N],y||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.J?Fe(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),nr(),fa(a.i,a.v,a.B,a.l,a.S,a.u)}bn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Sn(a)==3?h.j():this.Y(a)},bn.prototype.Y=function(a){try{if(a==this.g)e:{const te=Sn(this.g),Ue=this.g.ya(),pe=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Au(this.g)))){this.K||te!=4||Ue==7||(Ue==8||pe<=0?nr(3):nr(2)),ya(this);var h=this.g.ca();this.X=h;var f=Wg(this);if(this.o=h==200,ee(this.i,this.v,this.B,this.l,this.S,te,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,x=this.g;if((y=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(y)){var N=y;break t}}N=null}if(a=N)je(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_a(this,a);else{this.o=!1,this.m=3,Ge(12),ir(this),ys(this);break e}}if(this.R){a=!0;let qe;for(;!this.K&&this.C<f.length;)if(qe=Gg(this,f),qe==ma){te==4&&(this.m=4,Ge(14),a=!1),je(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==su){this.m=4,Ge(15),je(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else je(this.i,this.l,qe,null),_a(this,qe);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||f.length!=0||this.h.h||(this.m=1,Ge(16),a=!1),this.o=this.o&&a,!a)je(this.i,this.l,f,"[Invalid Chunked Response]"),ir(this),ys(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ra($),$.P=!0,Ge(11))}}else je(this.i,this.l,f,null),_a(this,f);te==4&&ir(this),this.o&&!this.K&&(te==4?Du(this.j,this):(this.o=!1,Di(this)))}else ay(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ge(12)):(this.m=0,Ge(13)),ir(this),ys(this)}}}catch{}finally{}};function Wg(a){if(!ou(a))return a.g.la();const h=Au(a.g);if(h==="")return"";let f="";const y=h.length,x=Sn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ir(a),ys(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<y;N++)a.h.h=!0,f+=a.h.i.decode(h[N],{stream:!(x&&N==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function ou(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Gg(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?ma:(f=Number(h.substring(f,y)),isNaN(f)?su:(y+=1,y+f>h.length?ma:(h=h.slice(y,y+f),a.C=y+f,h)))}bn.prototype.cancel=function(){this.K=!0,ir(this)};function Di(a){a.T=Date.now()+a.H,au(a,a.H)}function au(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=rr(u(a.aa,a),h)}function ya(a){a.D&&(o.clearTimeout(a.D),a.D=null)}bn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(xi(this.i,this.B),this.M!=2&&(nr(),Ge(17)),ir(this),this.m=2,ys(this)):au(this,this.T-a)};function ys(a){a.j.I==0||a.K||Du(a.j,a)}function ir(a){ya(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,rn(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function _a(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||va(f.h,a))){if(!a.L&&va(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Fi(f),Li(f);else break e;Aa(f),Ge(18)}}else f.xa=x[1],0<f.xa-f.K&&x[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=rr(u(f.Va,f),6e3));uu(f.h)<=1&&f.ta&&(f.ta=void 0)}else ar(f,11)}else if((a.L||f.g==a)&&Fi(f),!g(h))for(x=f.Ba.g.parse(h),h=0;h<x.length;h++){let pe=x[h];const qe=pe[0];if(!(qe<=f.K))if(f.K=qe,pe=pe[1],f.I==2)if(pe[0]=="c"){f.M=pe[1],f.ba=pe[2];const qt=pe[3];qt!=null&&(f.ka=qt,f.j.info("VER="+f.ka));const cr=pe[4];cr!=null&&(f.za=cr,f.j.info("SVER="+f.za));const Pn=pe[5];Pn!=null&&typeof Pn=="number"&&Pn>0&&(y=1.5*Pn,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Cn=a.g;if(Cn){const Bi=Cn.g?Cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var N=y.h;N.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ea(N,N.h),N.h=null))}if(y.G){const Sa=Cn.g?Cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Sa&&(y.wa=Sa,_e(y.J,y.G,Sa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var $=a;if(y.na=Vu(y,y.L?y.ba:null,y.W),$.L){hu(y.h,$);var te=$,Ue=y.O;Ue&&(te.H=Ue),te.D&&(ya(te),Di(te)),y.g=$}else xu(y);f.i.length>0&&Mi(f)}else pe[0]!="stop"&&pe[0]!="close"||ar(f,7);else f.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?ar(f,7):ba(f):pe[0]!="noop"&&f.l&&f.l.qa(pe),f.A=0)}}nr(4)}catch{}}var Kg=class{constructor(a,h){this.g=a,this.map=h}};function cu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function uu(a){return a.h?1:a.g?a.g.size:0}function va(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ea(a,h){a.g?a.g.add(h):a.h=h}function hu(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}cu.prototype.cancel=function(){if(this.i=du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function du(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return T(a.i)}var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qg(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let x,N=null;y>=0?(x=a[f].substring(0,y),N=a[f].substring(y+1)):x=a[f],h(x,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function An(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof An?(this.l=a.l,_s(this,a.j),this.o=a.o,this.g=a.g,vs(this,a.u),this.h=a.h,wa(this,vu(a.i)),this.m=a.m):a&&(h=String(a).match(fu))?(this.l=!1,_s(this,h[1]||"",!0),this.o=Es(h[2]||""),this.g=Es(h[3]||"",!0),vs(this,h[4]),this.h=Es(h[5]||"",!0),wa(this,h[6]||"",!0),this.m=Es(h[7]||"")):(this.l=!1,this.i=new Ts(null,this.l))}An.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ws(h,pu,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ws(h,pu,!0),"@"),a.push(gs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ws(f,f.charAt(0)=="/"?Jg:Xg,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ws(f,ey)),a.join("")},An.prototype.resolve=function(a){const h=jt(this);let f=!!a.j;f?_s(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)vs(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var x=h.h.lastIndexOf("/");x!=-1&&(y=h.h.slice(0,x+1)+y)}if(x=y,x==".."||x==".")y="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){y=x.lastIndexOf("/",0)==0,x=x.split("/");const N=[];for(let $=0;$<x.length;){const te=x[$++];te=="."?y&&$==x.length&&N.push(""):te==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),y&&$==x.length&&N.push("")):(N.push(te),y=!0)}y=N.join("/")}else y=x}return f?h.h=y:f=a.i.toString()!=="",f?wa(h,vu(a.i)):f=!!a.m,f&&(h.m=a.m),h};function jt(a){return new An(a)}function _s(a,h,f){a.j=f?Es(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function vs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function wa(a,h,f){h instanceof Ts?(a.i=h,ty(a.i,a.l)):(f||(h=ws(h,Zg)),a.i=new Ts(h,a.l))}function _e(a,h,f){a.i.set(h,f)}function Ni(a){return _e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Es(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ws(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Yg),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Yg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pu=/[#\/\?@]/g,Xg=/[#\?:]/g,Jg=/[#\?]/g,Zg=/[#\?@]/g,ey=/#/g;function Ts(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&Qg(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Ts.prototype,n.add=function(a,h){or(this),this.i=null,a=Nr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function mu(a,h){or(a),h=Nr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function gu(a,h){return or(a),h=Nr(a,h),a.g.has(h)}n.forEach=function(a,h){or(this),this.g.forEach(function(f,y){f.forEach(function(x){a.call(h,x,y,this)},this)},this)};function yu(a,h){or(a);let f=[];if(typeof h=="string")gu(a,h)&&(f=f.concat(a.g.get(Nr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return or(this),this.i=null,a=Nr(this,a),gu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=yu(this,a),a.length>0?String(a[0]):h):h};function _u(a,h,f){mu(a,h),f.length>0&&(a.i=null,a.g.set(Nr(a,h),T(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const x=gs(f);f=yu(this,f);for(let N=0;N<f.length;N++){let $=x;f[N]!==""&&($+="="+gs(f[N])),a.push($)}}return this.i=a.join("&")};function vu(a){const h=new Ts;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Nr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ty(a,h){h&&!a.j&&(or(a),a.i=null,a.g.forEach(function(f,y){const x=y.toLowerCase();y!=x&&(mu(this,y),_u(this,x,f))},a)),a.j=h}function ny(a,h){const f=new sr;if(o.Image){const y=new Image;y.onload=d(Rn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=d(Rn,f,"TestLoadImage: error",!1,h,y),y.onabort=d(Rn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(Rn,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function ry(a,h){const f=new sr,y=new AbortController,x=setTimeout(()=>{y.abort(),Rn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(N=>{clearTimeout(x),N.ok?Rn(f,"TestPingServer: ok",!0,h):Rn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Rn(f,"TestPingServer: error",!1,h)})}function Rn(a,h,f,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(f)}catch{}}function sy(){this.g=new ps}function Ta(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ta,ht),Ta.prototype.g=function(){return new Oi(this.i,this.h)};function Oi(a,h){Pe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Oi,Pe),n=Oi.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,bs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Eu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Eu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Is(this):bs(this),this.readyState==3&&Eu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Is(this))},n.Na=function(a){this.g&&(this.response=a,Is(this))},n.ga=function(){this.g&&Is(this)};function Is(a){a.readyState=4,a.l=null,a.j=null,a.B=null,bs(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function bs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wu(a){let h="";return ne(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Ia(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=wu(f),typeof a=="string"?f!=null&&gs(f):_e(a,h,f))}function Ce(a){Pe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ce,Pe);var iy=/^https?$/i,oy=["POST","PUT"];n=Ce.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():nu.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Tu(this,N);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)f.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const N of y.keys())f.set(N,y.get(N));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(oy,h,void 0)>=0)||y||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,$]of f)this.g.setRequestHeader(N,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Tu(this,N)}};function Tu(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Iu(a),Vi(a)}function Iu(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,me(this,"complete"),me(this,"abort"),Vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vi(this,!0)),Ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?bu(this):this.Xa())},n.Xa=function(){bu(this)};function bu(a){if(a.h&&typeof i<"u"){if(a.v&&Sn(a)==4)setTimeout(a.Ca.bind(a),0);else if(me(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=N===0){let $=String(a.D).match(fu)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),y=!iy.test($?$.toLowerCase():"")}f=y}if(f)me(a,"complete"),me(a,"success");else{a.o=6;try{var x=Sn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",Iu(a)}}finally{Vi(a)}}}}function Vi(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||me(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Sn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),tr(h)}};function Au(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ay(a){const h={};a=(a.g&&Sn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(g(a[y]))continue;var f=zg(a[y]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[x]||[];h[x]=N,N.push(f)}fe(h,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Ru(a){this.za=0,this.i=[],this.j=new sr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=As("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=As("baseRetryDelayMs",5e3,a),this.Za=As("retryDelaySeedMs",1e4,a),this.Ta=As("forwardChannelMaxRetries",2,a),this.va=As("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new cu(a&&a.concurrentRequestLimit),this.Ba=new sy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ru.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,y){Ge(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=Vu(this,null,this.W),Mi(this)};function ba(a){if(Su(a),a.I==3){var h=a.V++,f=jt(a.J);if(_e(f,"SID",a.M),_e(f,"RID",h),_e(f,"TYPE","terminate"),Rs(a,f),h=new bn(a,a.j,h),h.M=2,h.A=Ni(jt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Lu(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Di(h)}Ou(a)}function Li(a){a.g&&(Ra(a),a.g.cancel(),a.g=null)}function Su(a){Li(a),a.v&&(o.clearTimeout(a.v),a.v=null),Fi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Mi(a){if(!lu(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||_(),U||(F(),U=!0),E.add(h,a),a.D=0}}function cy(a,h){return uu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=rr(u(a.Ea,a,h),Nu(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new bn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=Fe(N),Re(N,this.U)):N=this.U),this.u!==null||this.R||(x.J=N,N=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Cu(this,x,h),f=jt(this.J),_e(f,"RID",a),_e(f,"CVER",22),this.G&&_e(f,"X-HTTP-Session-Id",this.G),Rs(this,f),N&&(this.R?h="headers="+gs(wu(N))+"&"+h:this.u&&Ia(f,this.u,N)),Ea(this.h,x),this.Ra&&_e(f,"TYPE","init"),this.S?(_e(f,"$req",h),_e(f,"SID","null"),x.U=!0,ga(x,f,null)):ga(x,f,h),this.I=2}}else this.I==3&&(a?Pu(this,a):this.i.length==0||lu(this.h)||Pu(this))};function Pu(a,h){var f;h?f=h.l:f=a.V++;const y=jt(a.J);_e(y,"SID",a.M),_e(y,"RID",f),_e(y,"AID",a.K),Rs(a,y),a.u&&a.o&&Ia(y,a.u,a.o),f=new bn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Cu(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ea(a.h,f),ga(f,y,h)}function Rs(a,h){a.H&&ne(a.H,function(f,y){_e(h,y,f)}),a.l&&ne({},function(f,y){_e(h,y,f)})}function Cu(a,h,f){f=Math.min(a.i.length,f);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var x=a.i;let te=-1;for(;;){const Ue=["count="+f];te==-1?f>0?(te=x[0].g,Ue.push("ofs="+te)):te=0:Ue.push("ofs="+te);let pe=!0;for(let qe=0;qe<f;qe++){var N=x[qe].g;const qt=x[qe].map;if(N-=te,N<0)te=Math.max(0,x[qe].g-100),pe=!1;else try{N="req"+N+"_"||"";try{var $=qt instanceof Map?qt:Object.entries(qt);for(const[cr,Pn]of $){let Cn=Pn;c(Pn)&&(Cn=Tn(Pn)),Ue.push(N+cr+"="+encodeURIComponent(Cn))}}catch(cr){throw Ue.push(N+"type="+encodeURIComponent("_badmap")),cr}}catch{y&&y(qt)}}if(pe){$=Ue.join("&");break e}}$=void 0}return a=a.i.splice(0,f),h.G=a,$}function xu(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||_(),U||(F(),U=!0),E.add(h,a),a.A=0}}function Aa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=rr(u(a.Da,a),Nu(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,ku(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=rr(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ge(10),Li(this),ku(this))};function Ra(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ku(a){a.g=new bn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=jt(a.na);_e(h,"RID","rpc"),_e(h,"SID",a.M),_e(h,"AID",a.K),_e(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&_e(h,"TO",a.ia),_e(h,"TYPE","xmlhttp"),Rs(a,h),a.u&&a.o&&Ia(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ni(jt(h)),f.u=null,f.R=!0,iu(f,a)}n.Va=function(){this.C!=null&&(this.C=null,Li(this),Aa(this),Ge(19))};function Fi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Du(a,h){var f=null;if(a.g==h){Fi(a),Ra(a),a.g=null;var y=2}else if(va(a.h,h))f=h.G,hu(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var x=a.D;y=sn(),me(y,new Ci(y,f)),Mi(a)}else xu(a);else if(x=h.m,x==3||x==0&&h.X>0||!(y==1&&cy(a,h)||y==2&&Aa(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),x){case 1:ar(a,5);break;case 4:ar(a,10);break;case 3:ar(a,6);break;default:ar(a,2)}}}function Nu(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function ar(a,h){if(a.j.info("Error code "+h),h==2){var f=u(a.bb,a),y=a.Ua;const x=!y;y=new An(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||_s(y,"https"),Ni(y),x?ny(y.toString(),f):ry(y.toString(),f)}else Ge(2);a.I=0,a.l&&a.l.pa(h),Ou(a),Su(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function Ou(a){if(a.I=0,a.ja=[],a.l){const h=du(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ja,h),S(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function Vu(a,h,f){var y=f instanceof An?jt(f):new An(f);if(y.g!="")h&&(y.g=h+"."+y.g),vs(y,y.u);else{var x=o.location;y=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const N=new An(null);y&&_s(N,y),h&&(N.g=h),x&&vs(N,x),f&&(N.h=f),y=N}return f=a.G,h=a.wa,f&&h&&_e(y,f,h),_e(y,"VER",a.ka),Rs(a,y),y}function Lu(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ce(new Ta({ab:f})):new Ce(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}n=Mu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ui(){}Ui.prototype.g=function(a,h){return new gt(a,h)};function gt(a,h){Pe.call(this),this.g=new Ru(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!g(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!g(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Or(this)}p(gt,Pe),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){ba(this.g)},gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Tn(a),a=f);h.i.push(new Kg(h.Ya++,a)),h.I==3&&Mi(h)},gt.prototype.N=function(){this.g.l=null,delete this.j,ba(this.g),delete this.g,gt.Z.N.call(this)};function Fu(a){st.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Fu,st);function Uu(){ms.call(this),this.status=1}p(Uu,ms);function Or(a){this.g=a}p(Or,Mu),Or.prototype.ra=function(){me(this.g,"a")},Or.prototype.qa=function(a){me(this.g,new Fu(a))},Or.prototype.pa=function(a){me(this.g,new Uu)},Or.prototype.oa=function(){me(this.g,"b")},Ui.prototype.createWebChannel=Ui.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Kp=function(){return new Ui},Gp=function(){return sn()},Wp=Nt,yc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ki.NO_ERROR=0,ki.TIMEOUT=8,ki.HTTP_ERROR=6,fo=ki,tu.COMPLETE="complete",zp=tu,In.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",Pe.prototype.listen=Pe.prototype.J,Vs=In,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,Hp=Ce}).apply(typeof Xi<"u"?Xi:typeof self<"u"?self:typeof window<"u"?window:{});const Yh="@firebase/firestore",Xh="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Go("@firebase/firestore");function Lr(){return Tr.logLevel}function q(n,...e){if(Tr.logLevel<=re.DEBUG){const t=e.map(fl);Tr.debug(`Firestore (${ls}): ${n}`,...t)}}function _n(n,...e){if(Tr.logLevel<=re.ERROR){const t=e.map(fl);Tr.error(`Firestore (${ls}): ${n}`,...t)}}function Xr(n,...e){if(Tr.logLevel<=re.WARN){const t=e.map(fl);Tr.warn(`Firestore (${ls}): ${n}`,...t)}}function fl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Qp(n,r,t)}function Qp(n,e,t){let r=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _n(r),new Error(r)}function de(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Qp(e,s,r)}function J(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ze.UNAUTHENTICATED)))}shutdown(){}}class oS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class aS{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fn)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new Yp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class cS{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lS{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new cS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Jh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){de(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Jh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(de(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Jh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function _c(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return za(s)===za(i)?se(s,i):za(s)?1:-1}return se(n.length,e.length)}const dS=55296,fS=57343;function za(n){const e=n.charCodeAt(0);return e>=dS&&e<=fS}function Jr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="__name__";class Ht{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Y(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ht?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ht.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return se(e.length,t.length)}static compareSegments(e,t){const r=Ht.isNumericId(e),s=Ht.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ht.extractNumericId(e).compare(Ht.extractNumericId(t)):_c(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Un.fromString(e.substring(4,e.length-2))}}class ge extends Ht{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ge(t)}static emptyPath(){return new ge([])}}const pS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Ht{construct(e,t,r){return new Qe(e,t,r)}static isValidIdentifier(e){return pS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zh}static keyField(){return new Qe([Zh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new j(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(t)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ge.fromString(e))}static fromName(e){return new K(ge.fromString(e).popFirst(5))}static empty(){return new K(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n,e,t){if(!t)throw new j(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mS(n,e,t,r){if(e===!0&&r===!0)throw new j(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ed(n){if(!K.isDocumentKey(n))throw new j(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function td(n){if(K.isDocumentKey(n))throw new j(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Jp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function Ir(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xo(n);throw new j(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n,e){const t={typeString:n};return e&&(t.value=e),t}function vi(n,e){if(!Jp(n))throw new j(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new j(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=-62135596800,rd=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*rd);return new ve(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<nd)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rd}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vi(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:Me("string",ve._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ve(0,0))}static max(){return new X(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ti=-1;function gS(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new ve(t+1,0):new ve(t,r));return new jn(s,K.empty(),e)}function yS(n){return new jn(n.readTime,n.key,ti)}class jn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new jn(X.min(),K.empty(),ti)}static max(){return new jn(X.max(),K.empty(),ti)}}function _S(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ES{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==vS)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):M.reject(t)}static resolve(e){return new M(((t,r)=>{t(e)}))}static reject(e){return new M(((t,r)=>{r(e)}))}static waitFor(e){return new M(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next((s=>s?M.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new M(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((d=>{o[u]=d,++c,c===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,t){return new M(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function wS(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Jo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=-1;function Zo(n){return n==null}function Co(n){return n===0&&1/n==-1/0}function TS(n){return typeof n=="number"&&Number.isInteger(n)&&!Co(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="";function IS(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sd(e)),e=bS(n.get(t),e);return sd(e)}function bS(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Zp:t+="";break;default:t+=i}}return t}function sd(n){return n+Zp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Cr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function em(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){this.comparator=e,this.root=t||Ke.EMPTY}insert(e,t){return new Ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ke(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new od(this.data.getIterator())}getIteratorFrom(e){return new od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $e(this.comparator);return t.data=e,t}}class od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Vt([])}unionWith(e){let t=new $e(Qe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class tm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tm("Invalid base64 string: "+i):i}})(e);return new Ye(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const AS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(n){if(de(!!n,39018),typeof n=="string"){let e=0;const t=AS.exec(n);if(de(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hn(n){return typeof n=="string"?Ye.fromBase64String(n):Ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="server_timestamp",rm="__type__",sm="__previous_value__",im="__local_write_time__";function gl(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[rm])==null?void 0:r.stringValue)===nm}function ea(n){const e=n.mapValue.fields[sm];return gl(e)?ea(e):e}function ni(n){const e=qn(n.mapValue.fields[im].timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,t,r,s,i,o,c,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d}}const xo="(default)";class ri{constructor(e,t){this.projectId=e,this.database=t||xo}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database===xo}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="__type__",SS="__max__",Zi={mapValue:{}},am="__vector__",ko="value";function zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gl(n)?4:CS(n)?9007199254740991:PS(n)?10:11:Y(28295,{value:n})}function tn(n,e){if(n===e)return!0;const t=zn(n);if(t!==zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ni(n).isEqual(ni(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=qn(s.timestampValue),c=qn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Hn(s.bytesValue).isEqual(Hn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),c=De(i.doubleValue);return o===c?Co(o)===Co(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Jr(n.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(id(o)!==id(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!tn(o[l],c[l])))return!1;return!0})(n,e);default:return Y(52216,{left:n})}}function si(n,e){return(n.values||[]).find((t=>tn(t,e)))!==void 0}function Zr(n,e){if(n===e)return 0;const t=zn(n),r=zn(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=De(i.integerValue||i.doubleValue),l=De(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return ad(n.timestampValue,e.timestampValue);case 4:return ad(ni(n),ni(e));case 5:return _c(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=Hn(i),l=Hn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=se(c[u],l[u]);if(d!==0)return d}return se(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=se(De(i.latitude),De(o.latitude));return c!==0?c:se(De(i.longitude),De(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return cd(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,T,S,P;const c=i.fields||{},l=o.fields||{},u=(m=c[ko])==null?void 0:m.arrayValue,d=(T=l[ko])==null?void 0:T.arrayValue,p=se(((S=u==null?void 0:u.values)==null?void 0:S.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:cd(u,d)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Zi.mapValue&&o===Zi.mapValue)return 0;if(i===Zi.mapValue)return 1;if(o===Zi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=_c(l[p],d[p]);if(m!==0)return m;const T=Zr(c[l[p]],u[d[p]]);if(T!==0)return T}return se(l.length,d.length)})(n.mapValue,e.mapValue);default:throw Y(23264,{he:t})}}function ad(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=qn(n),r=qn(e),s=se(t.seconds,r.seconds);return s!==0?s:se(t.nanos,r.nanos)}function cd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Zr(t[s],r[s]);if(i)return i}return se(t.length,r.length)}function es(n){return vc(n)}function vc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=qn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Hn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return K.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=vc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vc(t.fields[o])}`;return s+"}"})(n.mapValue):Y(61005,{value:n})}function po(n){switch(zn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ea(n);return e?16+po(e):16;case 5:return 2*n.stringValue.length;case 6:return Hn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+po(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Cr(r.fields,((i,o)=>{s+=i.length+po(o)})),s})(n.mapValue);default:throw Y(13486,{value:n})}}function ld(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ec(n){return!!n&&"integerValue"in n}function yl(n){return!!n&&"arrayValue"in n}function ud(n){return!!n&&"nullValue"in n}function hd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mo(n){return!!n&&"mapValue"in n}function PS(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[om])==null?void 0:r.stringValue)===am}function Hs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Cr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Hs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hs(n.arrayValue.values[t]);return e}return{...n}}function CS(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===SS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(t)}setAll(e){let t=Qe.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Hs(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Cr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new At(Hs(this.value))}}function cm(n){const e=[];return Cr(n.fields,((t,r)=>{const s=new Qe([t]);if(mo(r)){const i=cm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new et(e,0,X.min(),X.min(),X.min(),At.empty(),0)}static newFoundDocument(e,t,r,s){return new et(e,1,t,X.min(),r,s,0)}static newNoDocument(e,t){return new et(e,2,t,X.min(),X.min(),At.empty(),0)}static newUnknownDocument(e,t){return new et(e,3,t,X.min(),X.min(),At.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Do{constructor(e,t){this.position=e,this.inclusive=t}}function dd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),t.key):r=Zr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class No{constructor(e,t="asc"){this.field=e,this.dir=t}}function xS(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class lm{}class Le extends lm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new DS(e,t,r):t==="array-contains"?new VS(e,r):t==="in"?new LS(e,r):t==="not-in"?new MS(e,r):t==="array-contains-any"?new FS(e,r):new Le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new NS(e,r):new OS(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zr(t,this.value)):t!==null&&zn(this.value)===zn(t)&&this.matchesComparison(Zr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends lm{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ft(e,t)}matches(e){return um(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function um(n){return n.op==="and"}function hm(n){return kS(n)&&um(n)}function kS(n){for(const e of n.filters)if(e instanceof Ft)return!1;return!0}function wc(n){if(n instanceof Le)return n.field.canonicalString()+n.op.toString()+es(n.value);if(hm(n))return n.filters.map((e=>wc(e))).join(",");{const e=n.filters.map((t=>wc(t))).join(",");return`${n.op}(${e})`}}function dm(n,e){return n instanceof Le?(function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)})(n,e):n instanceof Ft?(function(r,s){return s instanceof Ft&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&dm(o,s.filters[c])),!0):!1})(n,e):void Y(19439)}function fm(n){return n instanceof Le?(function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`})(n):n instanceof Ft?(function(t){return t.op.toString()+" {"+t.getFilters().map(fm).join(" ,")+"}"})(n):"Filter"}class DS extends Le{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class NS extends Le{constructor(e,t){super(e,"in",t),this.keys=pm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class OS extends Le{constructor(e,t){super(e,"not-in",t),this.keys=pm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function pm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>K.fromName(r.referenceValue)))}class VS extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yl(t)&&si(t.arrayValue,this.value)}}class LS extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&si(this.value.arrayValue,t)}}class MS extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!si(this.value.arrayValue,t)}}class FS extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>si(this.value.arrayValue,r)))}}/**
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
 */class US{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function pd(n,e=null,t=[],r=[],s=null,i=null,o=null){return new US(n,e,t,r,s,i,o)}function _l(n){const e=J(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>wc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Zo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>es(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>es(r))).join(",")),e.Te=t}return e.Te}function vl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!xS(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!fd(n.startAt,e.startAt)&&fd(n.endAt,e.endAt)}function Tc(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function BS(n,e,t,r,s,i,o,c){return new Ei(n,e,t,r,s,i,o,c)}function El(n){return new Ei(n)}function md(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mm(n){return n.collectionGroup!==null}function zs(n){const e=J(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new $e(Qe.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new No(i,r))})),t.has(Qe.keyField().canonicalString())||e.Ie.push(new No(Qe.keyField(),r))}return e.Ie}function Kt(n){const e=J(n);return e.Ee||(e.Ee=$S(e,zs(n))),e.Ee}function $S(n,e){if(n.limitType==="F")return pd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new No(s.field,i)}));const t=n.endAt?new Do(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Do(n.startAt.position,n.startAt.inclusive):null;return pd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ic(n,e){const t=n.filters.concat([e]);return new Ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function bc(n,e,t){return new Ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ta(n,e){return vl(Kt(n),Kt(e))&&n.limitType===e.limitType}function gm(n){return`${_l(Kt(n))}|lt:${n.limitType}`}function Mr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>fm(s))).join(", ")}]`),Zo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>es(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>es(s))).join(",")),`Target(${r})`})(Kt(n))}; limitType=${n.limitType})`}function na(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=dd(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,zs(r),s)||r.endAt&&!(function(o,c,l){const u=dd(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,zs(r),s))})(n,e)}function jS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ym(n){return(e,t)=>{let r=!1;for(const s of zs(n)){const i=qS(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qS(n,e,t){const r=n.field.isKeyField()?K.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Zr(l,u):Y(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return em(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new Ae(K.comparator);function vn(){return HS}const _m=new Ae(K.comparator);function Ls(...n){let e=_m;for(const t of n)e=e.insert(t.key,t);return e}function vm(n){let e=_m;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function fr(){return Ws()}function Em(){return Ws()}function Ws(){return new xr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const zS=new Ae(K.comparator),WS=new $e(K.comparator);function ie(...n){let e=WS;for(const t of n)e=e.add(t);return e}const GS=new $e(se);function KS(){return GS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(e)?"-0":e}}function wm(n){return{integerValue:""+n}}function QS(n,e){return TS(e)?wm(e):wl(n,e)}/**
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
 */class ra{constructor(){this._=void 0}}function YS(n,e,t){return n instanceof ii?(function(s,i){const o={fields:{[rm]:{stringValue:nm},[im]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gl(i)&&(i=ea(i)),i&&(o.fields[sm]=i),{mapValue:o}})(t,e):n instanceof oi?Im(n,e):n instanceof ai?bm(n,e):(function(s,i){const o=Tm(s,i),c=gd(o)+gd(s.Ae);return Ec(o)&&Ec(s.Ae)?wm(c):wl(s.serializer,c)})(n,e)}function XS(n,e,t){return n instanceof oi?Im(n,e):n instanceof ai?bm(n,e):t}function Tm(n,e){return n instanceof Oo?(function(r){return Ec(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ii extends ra{}class oi extends ra{constructor(e){super(),this.elements=e}}function Im(n,e){const t=Am(e);for(const r of n.elements)t.some((s=>tn(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ai extends ra{constructor(e){super(),this.elements=e}}function bm(n,e){let t=Am(e);for(const r of n.elements)t=t.filter((s=>!tn(s,r)));return{arrayValue:{values:t}}}class Oo extends ra{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function gd(n){return De(n.integerValue||n.doubleValue)}function Am(n){return yl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,t){this.field=e,this.transform=t}}function ZS(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof oi&&s instanceof oi||r instanceof ai&&s instanceof ai?Jr(r.elements,s.elements,tn):r instanceof Oo&&s instanceof Oo?tn(r.Ae,s.Ae):r instanceof ii&&s instanceof ii})(n.transform,e.transform)}class eP{constructor(e,t){this.version=e,this.transformResults=t}}class Qt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function go(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class sa{}function Rm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Tl(n.key,Qt.none()):new wi(n.key,n.data,Qt.none());{const t=n.data,r=At.empty();let s=new $e(Qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new kr(n.key,r,new Vt(s.toArray()),Qt.none())}}function tP(n,e,t){n instanceof wi?(function(s,i,o){const c=s.value.clone(),l=_d(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof kr?(function(s,i,o){if(!go(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=_d(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Sm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Gs(n,e,t,r){return n instanceof wi?(function(i,o,c,l){if(!go(i.precondition,o))return c;const u=i.value.clone(),d=vd(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof kr?(function(i,o,c,l){if(!go(i.precondition,o))return c;const u=vd(i.fieldTransforms,l,o),d=o.data;return d.setAll(Sm(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return go(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function nP(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Tm(r.transform,s||null);i!=null&&(t===null&&(t=At.empty()),t.set(r.field,i))}return t||null}function yd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jr(r,s,((i,o)=>ZS(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wi extends sa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kr extends sa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function _d(n,e,t){const r=new Map;de(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,XS(o,c,t[s]))}return r}function vd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,YS(i,o,e))}return r}class Tl extends sa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rP extends sa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&tP(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Gs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Gs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Em();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Rm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ie())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,((t,r)=>yd(t,r)))&&Jr(this.baseMutations,e.baseMutations,((t,r)=>yd(t,r)))}}class Il{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return zS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Il(e,t,r,s)}}/**
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
 */class iP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ae;function aP(n){switch(n){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function Pm(n){if(n===void 0)return _n("GRPC error has no .code"),L.UNKNOWN;switch(n){case Ve.OK:return L.OK;case Ve.CANCELLED:return L.CANCELLED;case Ve.UNKNOWN:return L.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return L.INTERNAL;case Ve.UNAVAILABLE:return L.UNAVAILABLE;case Ve.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ve.NOT_FOUND:return L.NOT_FOUND;case Ve.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ve.ABORTED:return L.ABORTED;case Ve.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ve.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:n})}}(ae=Ve||(Ve={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cP(){return new TextEncoder}/**
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
 */const lP=new Un([4294967295,4294967295],0);function Ed(n){const e=cP().encode(n),t=new qp;return t.update(e),new Uint8Array(t.digest())}function wd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Un([t,r],0),new Un([s,i],0)]}class bl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ms(`Invalid padding: ${t}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Un.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Un.fromNumber(r)));return s.compare(lP)===1&&(s=new Un([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ed(e),[r,s]=wd(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bl(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Ed(e),[r,s]=wd(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ti.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ia(X.min(),s,new Ae(se),vn(),ie())}}class Ti{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ti(r,t,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Cm{constructor(e,t){this.targetId=e,this.Ce=t}}class xm{constructor(e,t,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Td{constructor(){this.ve=0,this.Fe=Id(),this.Me=Ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),t=ie(),r=ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}})),new Ti(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Id()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class uP{constructor(e){this.Ge=e,this.ze=new Map,this.je=vn(),this.Je=eo(),this.He=eo(),this.Ye=new Ae(se)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Tc(i))if(r===0){const o=new K(i.path);this.et(t,o,et.newNoDocument(o,X.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Hn(r).toUint8Array()}catch(l){if(l instanceof tm)return Xr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new bl(o,s,i)}catch(l){return Xr(l instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Tc(c.target)){const l=new K(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,et.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let r=ie();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ia(e,t,this.Ye,this.je,r);return this.je=vn(),this.Je=eo(),this.He=eo(),this.Ye=new Ae(se),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Td,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new $e(se),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new $e(se),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Td),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function eo(){return new Ae(K.comparator)}function Id(){return new Ae(K.comparator)}const hP={asc:"ASCENDING",desc:"DESCENDING"},dP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fP={and:"AND",or:"OR"};class pP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ac(n,e){return n.useProto3Json||Zo(e)?e:{value:e}}function Vo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function km(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mP(n,e){return Vo(n,e.toTimestamp())}function Yt(n){return de(!!n,49232),X.fromTimestamp((function(t){const r=qn(t);return new ve(r.seconds,r.nanos)})(n))}function Al(n,e){return Rc(n,e).canonicalString()}function Rc(n,e){const t=(function(s){return new ge(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Dm(n){const e=ge.fromString(n);return de(Mm(e),10190,{key:e.toString()}),e}function Sc(n,e){return Al(n.databaseId,e.path)}function Wa(n,e){const t=Dm(e);if(t.get(1)!==n.databaseId.projectId)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(Om(t))}function Nm(n,e){return Al(n.databaseId,e)}function gP(n){const e=Dm(n);return e.length===4?ge.emptyPath():Om(e)}function Pc(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Om(n){return de(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function bd(n,e,t){return{name:Sc(n,e),fields:t.value.mapValue.fields}}function yP(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Y(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(de(d===void 0||typeof d=="string",58123),Ye.fromBase64String(d||"")):(de(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ye.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const d=u.code===void 0?L.UNKNOWN:Pm(u.code);return new j(d,u.message||"")})(o);t=new xm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wa(n,r.document.name),i=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):X.min(),c=new At({mapValue:{fields:r.document.fields}}),l=et.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];t=new yo(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wa(n,r.document),i=r.readTime?Yt(r.readTime):X.min(),o=et.newNoDocument(s,i),c=r.removedTargetIds||[];t=new yo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wa(n,r.document),i=r.removedTargetIds||[];t=new yo([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new oP(s,i),c=r.targetId;t=new Cm(c,o)}}return t}function _P(n,e){let t;if(e instanceof wi)t={update:bd(n,e.key,e.value)};else if(e instanceof Tl)t={delete:Sc(n,e.key)};else if(e instanceof kr)t={update:bd(n,e.key,e.data),updateMask:SP(e.fieldMask)};else{if(!(e instanceof rP))return Y(16599,{Vt:e.type});t={verify:Sc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof ii)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof oi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ai)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Oo)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw Y(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:mP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)})(n,e.precondition)),t}function vP(n,e){return n&&n.length>0?(de(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Yt(s.updateTime):Yt(i);return o.isEqual(X.min())&&(o=Yt(i)),new eP(o,s.transformResults||[])})(t,e)))):[]}function EP(n,e){return{documents:[Nm(n,e.path)]}}function wP(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Nm(n,s);const i=(function(u){if(u.length!==0)return Lm(Ft.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:Fr(m.field),direction:bP(m.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ac(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function TP(n){let e=gP(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){de(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const m=Vm(p);return m instanceof Ft&&hm(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(S){return new No(Ur(S.field),(function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Zo(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,T=p.values||[];return new Do(T,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const m=!p.before,T=p.values||[];return new Do(T,m)})(t.endAt)),BS(e,s,o,i,c,"F",l,u)}function IP(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Vm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ur(t.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(t.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(t.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ur(t.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Le.create(Ur(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ft.create(t.compositeFilter.filters.map((r=>Vm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(t.compositeFilter.op))})(n):Y(30097,{filter:n})}function bP(n){return hP[n]}function AP(n){return dP[n]}function RP(n){return fP[n]}function Fr(n){return{fieldPath:n.canonicalString()}}function Ur(n){return Qe.fromServerFormat(n.fieldPath)}function Lm(n){return n instanceof Le?(function(t){if(t.op==="=="){if(hd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NAN"}};if(ud(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NAN"}};if(ud(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(t.field),op:AP(t.op),value:t.value}}})(n):n instanceof Ft?(function(t){const r=t.getFilters().map((s=>Lm(s)));return r.length===1?r[0]:{compositeFilter:{op:RP(t.op),filters:r}}})(n):Y(54877,{filter:n})}function SP(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Mm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,r,s,i=X.min(),o=X.min(),c=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.yt=e}}function CP(n){const e=TP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bc(e,e.limit,"L"):e}/**
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
 */class xP{constructor(){this.Cn=new kP}addToCollectionParentIndex(e,t){return this.Cn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(jn.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class kP{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new $e(ge.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(ge.comparator)).toArray()}}/**
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
 */const Ad={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fm=41943040;class dt{static withCacheSize(e){return new dt(e,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.DEFAULT_COLLECTION_PERCENTILE=10,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dt.DEFAULT=new dt(Fm,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dt.DISABLED=new dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ts(0)}static cr(){return new ts(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="LruGarbageCollector",DP=1048576;function Sd([n,e],[t,r]){const s=se(n,t);return s===0?se(e,r):s}class NP{constructor(e){this.Ir=e,this.buffer=new $e(Sd),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Sd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OP{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(Rd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hs(t)?q(Rd,"Ignoring IndexedDB error during garbage collection: ",t):await us(t)}await this.Vr(3e5)}))}}class VP{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return M.resolve(Jo.ce);const r=new NP(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ad)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ad):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Lr()<=re.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function LP(n,e){return new VP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(){this.changes=new xr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Gs(r.mutation,s,Vt.empty(),ve.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ie()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ie()){const s=fr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Ls();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=fr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ie())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=vn();const o=Ws(),c=(function(){return Ws()})();return t.forEach(((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof kr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Gs(d.mutation,u,d.mutation.getFieldMask(),ve.now())):o.set(u.key,Vt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,d)=>o.set(u,d))),t.forEach(((u,d)=>c.set(u,new FP(d,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Ws();let s=new Ae(((o,c)=>o-c)),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let d=r.get(l)||Vt.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||ie()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=Em();d.forEach((m=>{if(!i.has(m)){const T=Rm(t.get(m),r.get(m));T!==null&&p.set(m,T),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):mm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(fr());let c=ti,l=i;return o.next((u=>M.forEach(u,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{l=l.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,ie()))).next((d=>({batchId:c,changes:vm(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next((r=>{let s=Ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,i).next((c=>M.forEach(c,(l=>{const u=(function(p,m){return new Ei(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,et.newInvalidDocument(d)))}));let c=Ls();return o.forEach(((l,u)=>{const d=i.get(l);d!==void 0&&Gs(d.mutation,u,Vt.empty(),ve.now()),na(t,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return M.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}})(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:CP(s.bundledQuery),readTime:Yt(s.readTime)}})(t)),M.resolve()}}/**
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
 */class $P{constructor(){this.overlays=new Ae(K.comparator),this.qr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=fr();return M.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=fr(),i=t.length+1,o=new K(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ae(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=fr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,d)=>c.set(u,d))),!(c.size()>=s)););return M.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iP(t,r));let i=this.qr.get(t);i===void 0&&(i=ie(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class jP{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.Qr=new $e(He.$r),this.Ur=new $e(He.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new He(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new He(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new K(new ge([])),r=new He(t,e),s=new He(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new K(new ge([])),r=new He(t,e),s=new He(t,e+1);let i=ie();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new He(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return K.comparator(e.key,t.key)||se(e.Yr,t.Yr)}static Kr(e,t){return se(e.Yr,t.Yr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new $e(He.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sP(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new He(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,t){return M.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ml:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new He(t,0),s=new He(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new $e(se);return t.forEach((s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new He(new K(i),0);let c=new $e(se);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),M.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){de(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(t.mutations,(s=>{const i=new He(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new He(t,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e){this.ri=e,this.docs=(function(){return new Ae(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():et.newInvalidDocument(t))}getEntries(e,t){let r=vn();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=vn();const o=t.path,c=new K(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_S(yS(d),r)<=0||(s.has(d.key)||na(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,r,s){Y(9500)}ii(e,t){return M.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new zP(this)}getSize(e){return M.resolve(this.size)}}class zP extends MP{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),M.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.persistence=e,this.si=new xr((t=>_l(t)),vl),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.oi=0,this._i=new Rl,this.targetCount=0,this.ai=ts.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),M.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Pr(t),M.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t){this.ui={},this.overlays={},this.ci=new Jo(0),this.li=!1,this.li=!0,this.hi=new jP,this.referenceDelegate=e(this),this.Pi=new WP(this),this.indexManager=new xP,this.remoteDocumentCache=(function(s){return new HP(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new PP(t),this.Ii=new BP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $P,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new qP(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new GP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return M.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class GP extends ES{constructor(e){super(),this.currentSequenceNumber=e}}class Sl{constructor(e){this.persistence=e,this.Ri=new Rl,this.Vi=null}static mi(e){return new Sl(e)}get fi(){if(this.Vi)return this.Vi;throw Y(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,(r=>{const s=K.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,X.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return M.or([()=>M.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Lo{constructor(e,t){this.persistence=e,this.pi=new xr((r=>IS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=LP(this,t)}static mi(e,t){return new Lo(e,t)}Ei(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return M.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?M.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,t).next((c=>{c||(r++,i.removeEntry(o,X.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=po(e.data.value)),t}br(e,t,r){return M.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ie(),s=ie();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pl(e,t.fromCache,r,s)}}/**
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
 */class KP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return wI()?8:wS(nt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new KP;return this.Ss(e,t,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,t,o,c.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(Lr()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Mr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Lr()<=re.DEBUG&&q("QueryEngine","Query:",Mr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Lr()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Mr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):M.resolve())}ys(e,t){if(md(t))return M.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=bc(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ie(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(t,c);return this.Cs(t,u,o,l.readTime)?this.ys(e,bc(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ws(e,t,r,s){return md(t)||s.isEqual(X.min())?M.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(t,i);return this.Cs(t,o,r,s)?M.resolve(null):(Lr()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(t)),this.vs(e,o,t,gS(s,ti)).next((c=>c)))}))}Ds(e,t){let r=new $e(ym(e));return t.forEach(((s,i)=>{na(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Lr()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Mr(t)),this.ps.getDocumentsMatchingQuery(e,t,jn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="LocalStore",YP=3e8;class XP{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Ae(se),this.xs=new xr((i=>_l(i)),vl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function JP(n,e,t,r){return new XP(n,e,t,r)}async function Bm(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=ie();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function ZP(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,d){const p=u.batch,m=p.keys();let T=M.resolve();return m.forEach((S=>{T=T.next((()=>d.getEntry(l,S))).next((P=>{const A=u.docVersions.get(S);de(A!==null,48541),P.version.compareTo(A)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))}))})),T.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function $m(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function eC(n,e){const t=J(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach(((d,p)=>{const m=s.get(p);if(!m)return;c.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(i,d.addedDocuments,p))));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Ye.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(p,T),(function(P,A,k){return P.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=YP?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0})(m,T,d)&&c.push(t.Pi.updateTargetData(i,T))}));let l=vn(),u=ie();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(tC(i,o,e.documentUpdates).next((d=>{l=d.ks,u=d.qs}))),!r.isEqual(X.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next((p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return M.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.Ms=s,i)))}function tC(n,e,t){let r=ie(),s=ie();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=vn();return t.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):q(Cl,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function nC(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ml),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function rC(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):t.Pi.allocateTargetId(r).next((o=>(s=new Ln(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Cc(n,e,t){const r=J(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!hs(o))throw o;q(Cl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Pd(n,e,t){const r=J(n);let s=X.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,d){const p=J(l),m=p.xs.get(d);return m!==void 0?M.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,d)})(r,o,Kt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,t?s:X.min(),t?i:ie()))).next((c=>(sC(r,jS(e),c),{documents:c,Qs:i})))))}function sC(n,e,t){let r=n.Os.get(e)||X.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class Cd{constructor(){this.activeTargetIds=KS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iC{constructor(){this.Mo=new Cd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Cd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class oC{Oo(e){}shutdown(){}}/**
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
 */const xd="ConnectivityMonitor";class kd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(xd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(xd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let to=null;function xc(){return to===null?to=(function(){return 268435456+Math.round(2147483648*Math.random())})():to++,"0x"+to.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="RestConnection",aC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===xo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const o=xc(),c=this.zo(e,t.toUriEncodedString());q(Ga,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),d=os(u);return this.Jo(e,c,l,r,d).then((p=>(q(Ga,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Xr(Ga,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,t,r,s,i,o){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ls})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=aC[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class uC extends cC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=xc();return new Promise(((c,l)=>{const u=new Hp;u.setWithCredentials(!0),u.listenOnce(zp.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case fo.NO_ERROR:const p=u.getResponseJson();q(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case fo.TIMEOUT:q(Je,`RPC '${e}' ${o} timed out`),l(new j(L.DEADLINE_EXCEEDED,"Request time out"));break;case fo.HTTP_ERROR:const m=u.getStatus();if(q(Je,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const S=T==null?void 0:T.error;if(S&&S.status&&S.message){const P=(function(k){const D=k.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(D)>=0?D:L.UNKNOWN})(S.status);l(new j(P,S.message))}else l(new j(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new j(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{q(Je,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);q(Je,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,r,15)}))}T_(e,t,r){const s=xc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Kp(),c=Gp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");q(Je,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);this.I_(p);let m=!1,T=!1;const S=new lC({Yo:A=>{T?q(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(m||(q(Je,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),q(Je,`RPC '${e}' stream ${s} sending:`,A),p.send(A))},Zo:()=>p.close()}),P=(A,k,D)=>{A.listen(k,(C=>{try{D(C)}catch(V){setTimeout((()=>{throw V}),0)}}))};return P(p,Vs.EventType.OPEN,(()=>{T||(q(Je,`RPC '${e}' stream ${s} transport opened.`),S.o_())})),P(p,Vs.EventType.CLOSE,(()=>{T||(T=!0,q(Je,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(p))})),P(p,Vs.EventType.ERROR,(A=>{T||(T=!0,Xr(Je,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),S.a_(new j(L.UNAVAILABLE,"The operation could not be completed")))})),P(p,Vs.EventType.MESSAGE,(A=>{var k;if(!T){const D=A.data[0];de(!!D,16349);const C=D,V=(C==null?void 0:C.error)||((k=C[0])==null?void 0:k.error);if(V){q(Je,`RPC '${e}' stream ${s} received error:`,V);const F=V.status;let U=(function(v){const I=Ve[v];if(I!==void 0)return Pm(I)})(F),E=V.message;U===void 0&&(U=L.INTERNAL,E="Unknown error status: "+F+" with message "+V.message),T=!0,S.a_(new j(U,E)),p.close()}else q(Je,`RPC '${e}' stream ${s} received:`,D),S.u_(D)}})),P(c,Wp.STAT_EVENT,(A=>{A.stat===yc.PROXY?q(Je,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===yc.NOPROXY&&q(Je,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Ka(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){return new pP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="PersistentStream";class qm{constructor(e,t,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new jm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(_n(t.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new j(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return q(Dd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(q(Dd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class hC extends qm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=yP(this.serializer,e),r=(function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Yt(o.readTime):X.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Pc(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=Tc(l)?{documents:EP(i,l)}:{query:wP(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=km(i,o.resumeToken);const u=Ac(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){c.readTime=Vo(i,o.snapshotVersion.toTimestamp());const u=Ac(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=IP(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Pc(this.serializer),t.removeTarget=e,this.q_(t)}}class dC extends qm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=vP(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Pc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>_P(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{}class pC extends fC{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Rc(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(L.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Rc(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(L.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class mC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_n(t),this.aa=!1):q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="RemoteStore";class gC{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Dr(this)&&(q(br,"Restarting streams for network reachability change."),await(async function(l){const u=J(l);u.Ea.add(4),await Ii(u),u.Ra.set("Unknown"),u.Ea.delete(4),await aa(u)})(this))}))})),this.Ra=new mC(r,s)}}async function aa(n){if(Dr(n))for(const e of n.da)await e(!0)}async function Ii(n){for(const e of n.da)await e(!1)}function Hm(n,e){const t=J(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Nl(t)?Dl(t):ds(t).O_()&&kl(t,e))}function xl(n,e){const t=J(n),r=ds(t);t.Ia.delete(e),r.O_()&&zm(t,e),t.Ia.size===0&&(r.O_()?r.L_():Dr(t)&&t.Ra.set("Unknown"))}function kl(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ds(n).Y_(e)}function zm(n,e){n.Va.Ue(e),ds(n).Z_(e)}function Dl(n){n.Va=new uP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ds(n).start(),n.Ra.ua()}function Nl(n){return Dr(n)&&!ds(n).x_()&&n.Ia.size>0}function Dr(n){return J(n).Ea.size===0}function Wm(n){n.Va=void 0}async function yC(n){n.Ra.set("Online")}async function _C(n){n.Ia.forEach(((e,t)=>{kl(n,e)}))}async function vC(n,e){Wm(n),Nl(n)?(n.Ra.ha(e),Dl(n)):n.Ra.set("Unknown")}async function EC(n,e,t){if(n.Ra.set("Online"),e instanceof xm&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(n,e)}catch(r){q(br,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mo(n,r)}else if(e instanceof yo?n.Va.Ze(e):e instanceof Cm?n.Va.st(e):n.Va.tt(e),!t.isEqual(X.min()))try{const r=await $m(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(Ye.EMPTY_BYTE_STRING,d.snapshotVersion)),zm(i,l);const p=new Ln(d.target,l,u,d.sequenceNumber);kl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){q(br,"Failed to raise snapshot:",r),await Mo(n,r)}}async function Mo(n,e,t){if(!hs(e))throw e;n.Ea.add(1),await Ii(n),n.Ra.set("Offline"),t||(t=()=>$m(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{q(br,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await aa(n)}))}function Gm(n,e){return e().catch((t=>Mo(n,t,e)))}async function ca(n){const e=J(n),t=Wn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ml;for(;wC(e);)try{const s=await nC(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,TC(e,s)}catch(s){await Mo(e,s)}Km(e)&&Qm(e)}function wC(n){return Dr(n)&&n.Ta.length<10}function TC(n,e){n.Ta.push(e);const t=Wn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Km(n){return Dr(n)&&!Wn(n).x_()&&n.Ta.length>0}function Qm(n){Wn(n).start()}async function IC(n){Wn(n).ra()}async function bC(n){const e=Wn(n);for(const t of n.Ta)e.ea(t.mutations)}async function AC(n,e,t){const r=n.Ta.shift(),s=Il.from(r,e,t);await Gm(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await ca(n)}async function RC(n,e){e&&Wn(n).X_&&await(async function(r,s){if((function(o){return aP(o)&&o!==L.ABORTED})(s.code)){const i=r.Ta.shift();Wn(r).B_(),await Gm(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ca(r)}})(n,e),Km(n)&&Qm(n)}async function Nd(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),q(br,"RemoteStore received new credentials");const r=Dr(t);t.Ea.add(3),await Ii(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await aa(t)}async function SC(n,e){const t=J(n);e?(t.Ea.delete(2),await aa(t)):e||(t.Ea.add(2),await Ii(t),t.Ra.set("Unknown"))}function ds(n){return n.ma||(n.ma=(function(t,r,s){const i=J(t);return i.sa(),new hC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:yC.bind(null,n),t_:_C.bind(null,n),r_:vC.bind(null,n),H_:EC.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Nl(n)?Dl(n):n.Ra.set("Unknown")):(await n.ma.stop(),Wm(n))}))),n.ma}function Wn(n){return n.fa||(n.fa=(function(t,r,s){const i=J(t);return i.sa(),new dC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:IC.bind(null,n),r_:RC.bind(null,n),ta:bC.bind(null,n),na:AC.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ca(n)):(await n.fa.stop(),n.Ta.length>0&&(q(br,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Ol(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vl(n,e){if(_n("AsyncQueue",`${e}: ${n}`),hs(n))return new j(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{static emptySet(e){return new Hr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(t,r)=>K.comparator(t.key,r.key),this.keyedMap=Ls(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.ga=new Ae(K.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Y(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ns{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new ns(e,t,Hr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class CC{constructor(){this.queries=Vd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=J(t),i=s.queries;s.queries=Vd(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new j(L.ABORTED,"Firestore shutting down"))}}function Vd(){return new xr((n=>gm(n)),ta)}async function Ym(n,e){const t=J(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new PC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Vl(o,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Ll(t)}async function Xm(n,e){const t=J(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function xC(n,e){const t=J(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Ll(t)}function kC(n,e,t){const r=J(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Ll(n){n.Ca.forEach((e=>{e.next()}))}var kc,Ld;(Ld=kc||(kc={})).Ma="default",Ld.Cache="cache";class Jm{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.key=e}}class eg{constructor(e){this.key=e}}class DC{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ie(),this.mutatedKeys=ie(),this.eu=ym(e),this.tu=new Hr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Od,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const m=s.get(d),T=na(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let A=!1;m&&T?m.data.isEqual(T.data)?S!==P&&(r.track({type:3,doc:T}),A=!0):this.su(m,T)||(r.track({type:2,doc:T}),A=!0,(l&&this.eu(T,l)>0||u&&this.eu(T,u)<0)&&(c=!0)):!m&&T?(r.track({type:0,doc:T}),A=!0):m&&!T&&(r.track({type:1,doc:m}),A=!0,(l||u)&&(c=!0)),A&&(T?(o=o.add(T),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(T,S){const P=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Rt:A})}};return P(T)-P(S)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new ns(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Od,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new eg(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Zm(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=ie();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ml="SyncEngine";class NC{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class OC{constructor(e){this.key=e,this.hu=!1}}class VC{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new xr((c=>gm(c)),ta),this.Iu=new Map,this.Eu=new Set,this.du=new Ae(K.comparator),this.Au=new Map,this.Ru=new Rl,this.Vu={},this.mu=new Map,this.fu=ts.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function LC(n,e,t=!0){const r=og(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await tg(r,e,t,!0),s}async function MC(n,e){const t=og(n);await tg(t,e,!0,!1)}async function tg(n,e,t,r){const s=await rC(n.localStore,Kt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await FC(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Hm(n.remoteStore,s),c}async function FC(n,e,t,r,s){n.pu=(p,m,T)=>(async function(P,A,k,D){let C=A.view.ru(k);C.Cs&&(C=await Pd(P.localStore,A.query,!1).then((({documents:E})=>A.view.ru(E,C))));const V=D&&D.targetChanges.get(A.targetId),F=D&&D.targetMismatches.get(A.targetId)!=null,U=A.view.applyChanges(C,P.isPrimaryClient,V,F);return Fd(P,A.targetId,U.au),U.snapshot})(n,p,m,T);const i=await Pd(n.localStore,e,!0),o=new DC(e,i.Qs),c=o.ru(i.documents),l=Ti.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);Fd(n,t,u.au);const d=new NC(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function UC(n,e,t){const r=J(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!ta(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xl(r.remoteStore,s.targetId),Dc(r,s.targetId)})).catch(us)):(Dc(r,s.targetId),await Cc(r.localStore,s.targetId,!0))}async function BC(n,e){const t=J(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xl(t.remoteStore,r.targetId))}async function $C(n,e,t){const r=KC(n);try{const s=await(function(o,c){const l=J(o),u=ve.now(),d=c.reduce(((T,S)=>T.add(S.key)),ie());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let S=vn(),P=ie();return l.Ns.getEntries(T,d).next((A=>{S=A,S.forEach(((k,D)=>{D.isValidDocument()||(P=P.add(k))}))})).next((()=>l.localDocuments.getOverlayedDocuments(T,S))).next((A=>{p=A;const k=[];for(const D of c){const C=nP(D,p.get(D.key).overlayedDocument);C!=null&&k.push(new kr(D.key,C,cm(C.value.mapValue),Qt.exists(!0)))}return l.mutationQueue.addMutationBatch(T,u,k,c)})).next((A=>{m=A;const k=A.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(T,A.batchId,k)}))})).then((()=>({batchId:m.batchId,changes:vm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ae(se)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,t),await bi(r,s.changes),await ca(r.remoteStore)}catch(s){const i=Vl(s,"Failed to persist write");t.reject(i)}}async function ng(n,e){const t=J(n);try{const r=await eC(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?de(o.hu,14607):s.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))})),await bi(t,r,e)}catch(r){await us(r)}}function Md(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=J(o);l.onlineState=c;let u=!1;l.queries.forEach(((d,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Ll(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jC(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ae(K.comparator);o=o.insert(i,et.newNoDocument(i,X.min()));const c=ie().add(i),l=new ia(X.min(),new Map,new Ae(se),o,c);await ng(r,l),r.du=r.du.remove(i),r.Au.delete(e),Fl(r)}else await Cc(r.localStore,e,!1).then((()=>Dc(r,e,t))).catch(us)}async function qC(n,e){const t=J(n),r=e.batch.batchId;try{const s=await ZP(t.localStore,e);sg(t,r,null),rg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await bi(t,s)}catch(s){await us(s)}}async function HC(n,e,t){const r=J(n);try{const s=await(function(o,c){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(de(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>l.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);sg(r,e,t),rg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await bi(r,s)}catch(s){await us(s)}}function rg(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function sg(n,e,t){const r=J(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Dc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||ig(n,r)}))}function ig(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(xl(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Fl(n))}function Fd(n,e,t){for(const r of t)r instanceof Zm?(n.Ru.addReference(r.key,e),zC(n,r)):r instanceof eg?(q(Ml,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||ig(n,r.key)):Y(19791,{wu:r})}function zC(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(q(Ml,"New document in limbo: "+t),n.Eu.add(r),Fl(n))}function Fl(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new K(ge.fromString(e)),r=n.fu.next();n.Au.set(r,new OC(t)),n.du=n.du.insert(t,r),Hm(n.remoteStore,new Ln(Kt(El(t.path)),r,"TargetPurposeLimboResolution",Jo.ce))}}async function bi(n,e,t){const r=J(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,t).then((u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Pl.As(l.targetId,u);i.push(p)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const d=J(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(u,(m=>M.forEach(m.Es,(T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T))).next((()=>M.forEach(m.ds,(T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))))))}catch(p){if(!hs(p))throw p;q(Cl,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const T=d.Ms.get(m),S=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(S);d.Ms=d.Ms.insert(m,P)}}})(r.localStore,i))}async function WC(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){q(Ml,"User change. New user:",e.toKey());const r=await Bm(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new j(L.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bi(t,r.Ls)}}function GC(n,e){const t=J(n),r=t.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let s=ie();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function og(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ng.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jC.bind(null,e),e.Pu.H_=xC.bind(null,e.eventManager),e.Pu.yu=kC.bind(null,e.eventManager),e}function KC(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HC.bind(null,e),e}class Fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return JP(this.persistence,new QP,e.initialUser,this.serializer)}Cu(e){return new Um(Sl.mi,this.serializer)}Du(e){return new iC}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fo.provider={build:()=>new Fo};class QC extends Fo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){de(this.persistence.referenceDelegate instanceof Lo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new OP(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new Um((r=>Lo.mi(r,t)),this.serializer)}}class Nc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Md(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WC.bind(null,this.syncEngine),await SC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new CC})()}createDatastore(e){const t=oa(e.databaseInfo.databaseId),r=(function(i){return new uC(i)})(e.databaseInfo);return(function(i,o,c,l){return new pC(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new gC(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Md(this.syncEngine,t,0)),(function(){return kd.v()?new kd:new oC})())}createSyncEngine(e,t){return(function(s,i,o,c,l,u,d){const p=new VC(s,i,o,c,l,u);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=J(s);q(br,"RemoteStore shutting down."),i.Ea.add(5),await Ii(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Nc.provider={build:()=>new Nc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ag{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="FirestoreClient";class YC{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=pl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{q(Gn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(q(Gn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Qa(n,e){n.asyncQueue.verifyOperationInProgress(),q(Gn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Bm(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ud(n,e){n.asyncQueue.verifyOperationInProgress();const t=await XC(n);q(Gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Nd(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Nd(e.remoteStore,s))),n._onlineComponents=e}async function XC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Gn,"Using user provided OfflineComponentProvider");try{await Qa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Xr("Error using user provided cache. Falling back to memory cache: "+t),await Qa(n,new Fo)}}else q(Gn,"Using default OfflineComponentProvider"),await Qa(n,new QC(void 0));return n._offlineComponents}async function cg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Gn,"Using user provided OnlineComponentProvider"),await Ud(n,n._uninitializedComponentsProvider._online)):(q(Gn,"Using default OnlineComponentProvider"),await Ud(n,new Nc))),n._onlineComponents}function JC(n){return cg(n).then((e=>e.syncEngine))}async function lg(n){const e=await cg(n),t=e.eventManager;return t.onListen=LC.bind(null,e.syncEngine),t.onUnlisten=UC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BC.bind(null,e.syncEngine),t}function ZC(n,e,t={}){const r=new fn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const d=new ag({next:m=>{d.Nu(),o.enqueueAndForget((()=>Xm(i,p)));const T=m.docs.has(c);!T&&m.fromCache?u.reject(new j(L.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&l&&l.source==="server"?u.reject(new j(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Jm(El(c.path),d,{includeMetadataChanges:!0,qa:!0});return Ym(i,p)})(await lg(n),n.asyncQueue,e,t,r))),r.promise}function e0(n,e,t={}){const r=new fn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const d=new ag({next:m=>{d.Nu(),o.enqueueAndForget((()=>Xm(i,p))),m.fromCache&&l.source==="server"?u.reject(new j(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Jm(c,d,{includeMetadataChanges:!0,qa:!0});return Ym(i,p)})(await lg(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function ug(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="firestore.googleapis.com",$d=!0;class jd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hg,this.ssl=$d}else this.host=e.host,this.ssl=e.ssl??$d;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<DP)throw new j(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ug(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class la{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new iS;switch(r.type){case"firstParty":return new lS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Bd.get(t);r&&(q("ComponentProvider","Removing Datastore"),Bd.delete(t),r.terminate())})(this),Promise.resolve()}}function t0(n,e,t,r={}){var u;n=Ir(n,la);const s=os(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Zf(`https://${c}`),ep("Firestore",!0)),i.host!==hg&&i.host!==c&&Xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!$n(l,o)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Ze.MOCK_USER;else{d=fI(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new j(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(m)}n._authCredentials=new oS(new Yp(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fs(this.firestore,e,this._query)}}class Be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(vi(t,Be._jsonSchema))return new Be(e,r||null,new K(ge.fromString(t.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:Me("string",Be._jsonSchemaVersion),referencePath:Me("string")};class Bn extends fs{constructor(e,t,r){super(e,t,El(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new K(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function ok(n,e,...t){if(n=ze(n),Xp("collection","path",e),n instanceof la){const r=ge.fromString(e,...t);return td(r),new Bn(n,null,r)}{if(!(n instanceof Be||n instanceof Bn))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return td(r),new Bn(n.firestore,null,r)}}function n0(n,e,...t){if(n=ze(n),arguments.length===1&&(e=pl.newId()),Xp("doc","path",e),n instanceof la){const r=ge.fromString(e,...t);return ed(r),new Be(n,null,new K(r))}{if(!(n instanceof Be||n instanceof Bn))throw new j(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return ed(r),new Be(n.firestore,n instanceof Bn?n.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="AsyncQueue";class Hd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new jm(this,"async_queue_retry"),this._c=()=>{const r=Ka();r&&q(qd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ka();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ka();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new fn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!hs(e))throw e;q(qd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,_n("INTERNAL UNHANDLED ERROR: ",zd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ol.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:zd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function zd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ai extends la{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Hd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hd(e),this._firestoreClient=void 0,await e}}}function r0(n,e){const t=typeof n=="object"?n:nl(),r=typeof n=="string"?n:xo,s=Pr(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hI("firestore");i&&t0(s,...i)}return s}function Ul(n){if(n._terminated)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||s0(n),n._firestoreClient}function s0(n){var r,s,i;const e=n._freezeSettings(),t=(function(c,l,u,d){return new RS(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ug(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new YC(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Ye.fromBase64String(e))}catch(t){throw new j(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vi(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Me("string",Rt._jsonSchemaVersion),bytes:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xt._jsonSchemaVersion}}static fromJSON(e){if(vi(e,Xt._jsonSchema))return new Xt(e.latitude,e.longitude)}}Xt._jsonSchemaVersion="firestore/geoPoint/1.0",Xt._jsonSchema={type:Me("string",Xt._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
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
 */class Jt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vi(e,Jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jt(e.vectorValues);throw new j(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jt._jsonSchemaVersion="firestore/vectorValue/1.0",Jt._jsonSchema={type:Me("string",Jt._jsonSchemaVersion),vectorValues:Me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=/^__.*__$/;class o0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,t,this.fieldTransforms):new wi(e,this.data,t,this.fieldTransforms)}}function dg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ac:n})}}class jl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new jl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Uo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(dg(this.Ac)&&i0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class a0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oa(e)}Cc(e,t,r,s=!1){return new jl({Ac:e,methodName:t,Dc:r,path:Qe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fg(n){const e=n._freezeSettings(),t=oa(n._databaseId);return new a0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function c0(n,e,t,r,s,i={}){const o=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);gg("Data must be an object, but it was:",o,r);const c=pg(r,o);let l,u;if(i.merge)l=new Vt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=u0(e,p,t);if(!o.contains(m))throw new j(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);d0(d,m)||d.push(m)}l=new Vt(d),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new o0(new At(c),l,u)}class ql extends $l{_toFieldTransform(e){return new JS(e.path,new ii)}isEqual(e){return e instanceof ql}}function l0(n,e,t,r=!1){return Hl(t,n.Cc(r?4:3,e))}function Hl(n,e){if(mg(n=ze(n)))return gg("Unsupported field value:",e,n),pg(n,e);if(n instanceof $l)return(function(r,s){if(!dg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Hl(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ve.fromDate(r);return{timestampValue:Vo(s.serializer,i)}}if(r instanceof ve){const i=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vo(s.serializer,i)}}if(r instanceof Xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:km(s.serializer,r._byteString)};if(r instanceof Be){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Al(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jt)return(function(o,c){return{mapValue:{fields:{[om]:{stringValue:am},[ko]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return wl(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Xo(r)}`)})(n,e)}function pg(n,e){const t={};return em(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(n,((r,s)=>{const i=Hl(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function mg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ve||n instanceof Xt||n instanceof Rt||n instanceof Be||n instanceof $l||n instanceof Jt)}function gg(n,e,t){if(!mg(t)||!Jp(t)){const r=Xo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function u0(n,e,t){if((e=ze(e))instanceof Bl)return e._internalPath;if(typeof e=="string")return yg(n,e);throw Uo("Field path arguments must be of type string or ",n,!1,void 0,t)}const h0=new RegExp("[~\\*/\\[\\]]");function yg(n,e,t){if(e.search(h0)>=0)throw Uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Bl(...e.split("."))._internalPath}catch{throw Uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Uo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new j(L.INVALID_ARGUMENT,c+n+l)}function d0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new f0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class f0 extends _g{data(){return super.data()}}function zl(n,e){return typeof e=="string"?yg(n,e):e instanceof Bl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wl{}class m0 extends Wl{}function ak(n,e,...t){let r=[];e instanceof Wl&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof Gl)).length,c=i.filter((l=>l instanceof ua)).length;if(o>1||o>0&&c>0)throw new j(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ua extends m0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ua(e,t,r)}_apply(e){const t=this._parse(e);return vg(e._query,t),new fs(e.firestore,e.converter,Ic(e._query,t))}_parse(e){const t=fg(e.firestore);return(function(i,o,c,l,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Gd(p,d);const S=[];for(const P of p)S.push(Wd(l,i,P));m={arrayValue:{values:S}}}else m=Wd(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Gd(p,d),m=l0(c,o,p,d==="in"||d==="not-in");return Le.create(u,d,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ck(n,e,t){const r=e,s=zl("where",n);return ua._create(s,r,t)}class Gl extends Wl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Gl(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)vg(o,l),o=Ic(o,l)})(e._query,t),new fs(e.firestore,e.converter,Ic(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Wd(n,e,t){if(typeof(t=ze(t))=="string"){if(t==="")throw new j(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mm(e)&&t.indexOf("/")!==-1)throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!K.isDocumentKey(r))throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ld(n,new K(r))}if(t instanceof Be)return ld(n,t._key);throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xo(t)}.`)}function Gd(n,e){if(!Array.isArray(n)||n.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vg(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class g0{convertValue(e,t="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Cr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ko].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>De(o.doubleValue)));return new Jt(t)}convertGeoPoint(e){return new Xt(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ea(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const t=qn(e);return new ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);de(Mm(r),9688,{name:e});const s=new ri(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(t)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Fs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yr extends _g{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=yr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",yr._jsonSchema={type:Me("string",yr._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class _o extends yr{data(e={}){return super.data(e)}}class zr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Fs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new _o(this._firestore,this._userDataWriter,r.key,r,new Fs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new _o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new _o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:_0(c.type),doc:l,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=pl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(n){n=Ir(n,Be);const e=Ir(n.firestore,Ai);return ZC(Ul(e),n._key).then((t=>v0(e,n,t)))}zr._jsonSchemaVersion="firestore/querySnapshot/1.0",zr._jsonSchema={type:Me("string",zr._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};class Eg extends g0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,t)}}function uk(n){n=Ir(n,fs);const e=Ir(n.firestore,Ai),t=Ul(e),r=new Eg(e);return p0(n._query),e0(t,n._query).then((s=>new zr(e,r,n,s)))}function hk(n){return wg(Ir(n.firestore,Ai),[new Tl(n._key,Qt.none())])}function dk(n,e){const t=Ir(n.firestore,Ai),r=n0(n),s=y0(n.converter,e);return wg(t,[c0(fg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Qt.exists(!1))]).then((()=>r))}function wg(n,e){return(function(r,s){const i=new fn;return r.asyncQueue.enqueueAndForget((async()=>$C(await JC(r),s,i))),i.promise})(Ul(n),e)}function v0(n,e,t){const r=t.docs.get(e._key),s=new Eg(n);return new yr(n,s,e._key,r,new Fs(t.hasPendingWrites,t.fromCache),e.converter)}function fk(){return new ql("serverTimestamp")}(function(e,t=!0){(function(s){ls=s})(as),en(new Mt("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Ai(new aS(r.getProvider("auth-internal")),new uS(o,r.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new j(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(u.options.projectId,d)})(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Pt(Yh,Xh,e),Pt(Yh,Xh,"esm2020")})();const Tg="@firebase/installations",Kl="0.6.19";/**
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
 */const Ig=1e4,bg=`w:${Kl}`,Ag="FIS_v2",E0="https://firebaseinstallations.googleapis.com/v1",w0=3600*1e3,T0="installations",I0="Installations";/**
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
 */const b0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ar=new Sr(T0,I0,b0);function Rg(n){return n instanceof Bt&&n.code.includes("request-failed")}/**
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
 */function Sg({projectId:n}){return`${E0}/projects/${n}/installations`}function Pg(n){return{token:n.token,requestStatus:2,expiresIn:R0(n.expiresIn),creationTime:Date.now()}}async function Cg(n,e){const r=(await e.json()).error;return Ar.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function xg({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function A0(n,{refreshToken:e}){const t=xg(n);return t.append("Authorization",S0(e)),t}async function kg(n){const e=await n();return e.status>=500&&e.status<600?n():e}function R0(n){return Number(n.replace("s","000"))}function S0(n){return`${Ag} ${n}`}/**
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
 */async function P0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Sg(n),s=xg(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Ag,appId:n.appId,sdkVersion:bg},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await kg(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Pg(u.authToken)}}else throw await Cg("Create Installation",l)}/**
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
 */function Dg(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function C0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const x0=/^[cdef][\w-]{21}$/,Oc="";function k0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=D0(n);return x0.test(t)?t:Oc}catch{return Oc}}function D0(n){return C0(n).substr(0,22)}/**
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
 */function ha(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ng=new Map;function Og(n,e){const t=ha(n);Vg(t,e),N0(t,e)}function Vg(n,e){const t=Ng.get(n);if(t)for(const r of t)r(e)}function N0(n,e){const t=O0();t&&t.postMessage({key:n,fid:e}),V0()}let pr=null;function O0(){return!pr&&"BroadcastChannel"in self&&(pr=new BroadcastChannel("[Firebase] FID Change"),pr.onmessage=n=>{Vg(n.data.key,n.data.fid)}),pr}function V0(){Ng.size===0&&pr&&(pr.close(),pr=null)}/**
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
 */const L0="firebase-installations-database",M0=1,Rr="firebase-installations-store";let Ya=null;function Ql(){return Ya||(Ya=op(L0,M0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rr)}}})),Ya}async function Bo(n,e){const t=ha(n),s=(await Ql()).transaction(Rr,"readwrite"),i=s.objectStore(Rr),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Og(n,e.fid),e}async function Lg(n){const e=ha(n),r=(await Ql()).transaction(Rr,"readwrite");await r.objectStore(Rr).delete(e),await r.done}async function da(n,e){const t=ha(n),s=(await Ql()).transaction(Rr,"readwrite"),i=s.objectStore(Rr),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&Og(n,c.fid),c}/**
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
 */async function Yl(n){let e;const t=await da(n.appConfig,r=>{const s=F0(r),i=U0(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Oc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function F0(n){const e=n||{fid:k0(),registrationStatus:0};return Mg(e)}function U0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ar.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=B0(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$0(n)}:{installationEntry:e}}async function B0(n,e){try{const t=await P0(n,e);return Bo(n.appConfig,t)}catch(t){throw Rg(t)&&t.customData.serverCode===409?await Lg(n.appConfig):await Bo(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function $0(n){let e=await Kd(n.appConfig);for(;e.registrationStatus===1;)await Dg(100),e=await Kd(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Yl(n);return r||t}return e}function Kd(n){return da(n,e=>{if(!e)throw Ar.create("installation-not-found");return Mg(e)})}function Mg(n){return j0(n)?{fid:n.fid,registrationStatus:0}:n}function j0(n){return n.registrationStatus===1&&n.registrationTime+Ig<Date.now()}/**
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
 */async function q0({appConfig:n,heartbeatServiceProvider:e},t){const r=H0(n,t),s=A0(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:bg,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await kg(()=>fetch(r,c));if(l.ok){const u=await l.json();return Pg(u)}else throw await Cg("Generate Auth Token",l)}function H0(n,{fid:e}){return`${Sg(n)}/${e}/authTokens:generate`}/**
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
 */async function Xl(n,e=!1){let t;const r=await da(n.appConfig,i=>{if(!Fg(i))throw Ar.create("not-registered");const o=i.authToken;if(!e&&G0(o))return i;if(o.requestStatus===1)return t=z0(n,e),i;{if(!navigator.onLine)throw Ar.create("app-offline");const c=Q0(i);return t=W0(n,c),c}});return t?await t:r.authToken}async function z0(n,e){let t=await Qd(n.appConfig);for(;t.authToken.requestStatus===1;)await Dg(100),t=await Qd(n.appConfig);const r=t.authToken;return r.requestStatus===0?Xl(n,e):r}function Qd(n){return da(n,e=>{if(!Fg(e))throw Ar.create("not-registered");const t=e.authToken;return Y0(t)?{...e,authToken:{requestStatus:0}}:e})}async function W0(n,e){try{const t=await q0(n,e),r={...e,authToken:t};return await Bo(n.appConfig,r),t}catch(t){if(Rg(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Lg(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Bo(n.appConfig,r)}throw t}}function Fg(n){return n!==void 0&&n.registrationStatus===2}function G0(n){return n.requestStatus===2&&!K0(n)}function K0(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+w0}function Q0(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Y0(n){return n.requestStatus===1&&n.requestTime+Ig<Date.now()}/**
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
 */async function X0(n){const e=n,{installationEntry:t,registrationPromise:r}=await Yl(e);return r?r.catch(console.error):Xl(e).catch(console.error),t.fid}/**
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
 */async function J0(n,e=!1){const t=n;return await Z0(t),(await Xl(t,e)).token}async function Z0(n){const{registrationPromise:e}=await Yl(n);e&&await e}/**
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
 */function ex(n){if(!n||!n.options)throw Xa("App Configuration");if(!n.name)throw Xa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Xa(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Xa(n){return Ar.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="installations",tx="installations-internal",nx=n=>{const e=n.getProvider("app").getImmediate(),t=ex(e),r=Pr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},rx=n=>{const e=n.getProvider("app").getImmediate(),t=Pr(e,Ug).getImmediate();return{getId:()=>X0(t),getToken:s=>J0(t,s)}};function sx(){en(new Mt(Ug,nx,"PUBLIC")),en(new Mt(tx,rx,"PRIVATE"))}sx();Pt(Tg,Kl);Pt(Tg,Kl,"esm2020");/**
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
 */const $o="analytics",ix="firebase_id",ox="origin",ax=60*1e3,cx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Jl="https://www.googletagmanager.com/gtag/js";/**
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
 */const ot=new Go("@firebase/analytics");/**
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
 */const lx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vt=new Sr("analytics","Analytics",lx);/**
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
 */function ux(n){if(!n.startsWith(Jl)){const e=vt.create("invalid-gtag-resource",{gtagURL:n});return ot.warn(e.message),""}return n}function Bg(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function hx(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function dx(n,e){const t=hx("firebase-js-sdk-policy",{createScriptURL:ux}),r=document.createElement("script"),s=`${Jl}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function fx(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function px(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Bg(t)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){ot.error(c)}n("config",s,i)}async function mx(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await Bg(t);for(const l of o){const u=c.find(p=>p.measurementId===l),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){ot.error(i)}}function gx(n,e,t,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await mx(n,e,t,c,l)}else if(i==="config"){const[c,l]=o;await px(n,e,t,r,c,l)}else if(i==="consent"){const[c,l]=o;n("consent",c,l)}else if(i==="get"){const[c,l,u]=o;n("get",c,l,u)}else if(i==="set"){const[c]=o;n("set",c)}else n(i,...o)}catch(c){ot.error(c)}}return s}function yx(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=gx(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function _x(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Jl)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=30,Ex=1e3;class wx{constructor(e={},t=Ex){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $g=new wx;function Tx(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ix(n){var o;const{appId:e,apiKey:t}=n,r={method:"GET",headers:Tx(t)},s=cx.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let c="";try{const l=await i.json();(o=l.error)!=null&&o.message&&(c=l.error.message)}catch{}throw vt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function bx(n,e=$g,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw vt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw vt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Sx;return setTimeout(async()=>{c.abort()},ax),jg({appId:r,apiKey:s,measurementId:i},o,c,e)}async function jg(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=$g){var c;const{appId:i,measurementId:o}=n;try{await Ax(r,e)}catch(l){if(o)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw l}try{const l=await Ix(n);return s.deleteThrottleMetadata(i),l}catch(l){const u=l;if(!Rx(u)){if(s.deleteThrottleMetadata(i),o)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw l}const d=Number((c=u==null?void 0:u.customData)==null?void 0:c.httpStatus)===503?wh(t,s.intervalMillis,vx):wh(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(i,p),ot.debug(`Calling attemptFetch again in ${d} millis`),jg(n,p,r,s)}}function Ax(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Rx(n){if(!(n instanceof Bt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Sx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Px(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o={...r,send_to:i};n("event",t,o)}}async function Cx(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(){if(np())try{await rp()}catch(n){return ot.warn(vt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return ot.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kx(n,e,t,r,s,i,o){const c=bx(n);c.then(m=>{t[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ot.error(m)),e.push(c);const l=xx().then(m=>{if(m)return r.getId()}),[u,d]=await Promise.all([c,l]);_x(i)||dx(i,u.measurementId),s("js",new Date);const p=(o==null?void 0:o.config)??{};return p[ox]="firebase",p.update=!0,d!=null&&(p[ix]=d),s("config",u.measurementId,p),u.measurementId}/**
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
 */class Dx{constructor(e){this.app=e}_delete(){return delete Wr[this.app.options.appId],Promise.resolve()}}let Wr={},Yd=[];const Xd={};let Ja="dataLayer",Nx="gtag",Jd,Zl,Zd=!1;function Ox(){const n=[];if(tp()&&n.push("This is a browser extension environment."),TI()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=vt.create("invalid-analytics-context",{errorInfo:e});ot.warn(t.message)}}function Vx(n,e,t){Ox();const r=n.options.appId;if(!r)throw vt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vt.create("no-api-key");if(Wr[r]!=null)throw vt.create("already-exists",{id:r});if(!Zd){fx(Ja);const{wrappedGtag:i,gtagCore:o}=yx(Wr,Yd,Xd,Ja,Nx);Zl=i,Jd=o,Zd=!0}return Wr[r]=kx(n,Yd,Xd,e,Jd,Ja,t),new Dx(n)}function Lx(n=nl()){n=ze(n);const e=Pr(n,$o);return e.isInitialized()?e.getImmediate():Mx(n)}function Mx(n,e={}){const t=Pr(n,$o);if(t.isInitialized()){const s=t.getImmediate();if($n(e,t.getOptions()))return s;throw vt.create("already-initialized")}return t.initialize({options:e})}function Fx(n,e,t){n=ze(n),Cx(Zl,Wr[n.app.options.appId],e,t).catch(r=>ot.error(r))}function Ux(n,e,t,r){n=ze(n),Px(Zl,Wr[n.app.options.appId],e,t,r).catch(s=>ot.error(s))}const ef="@firebase/analytics",tf="0.10.19";function Bx(){en(new Mt($o,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Vx(r,s,t)},"PUBLIC")),en(new Mt("analytics-internal",n,"PRIVATE")),Pt(ef,tf),Pt(ef,tf,"esm2020");function n(e){try{const t=e.getProvider($o).getImmediate();return{logEvent:(r,s,i)=>Ux(t,r,s,i),setUserProperties:(r,s)=>Fx(t,r,s)}}catch(t){throw vt.create("interop-component-reg-failed",{reason:t})}}}Bx();const $x={apiKey:"AIzaSyDyPocH5O7uwMRBRa4yoei_SX_IQnYdaZ0",authDomain:"qr-transfers.firebaseapp.com",projectId:"qr-transfers",storageBucket:"qr-transfers.firebasestorage.app",messagingSenderId:"208871776",appId:"1:208871776:web:1b91c71aba571b000d7e05",measurementId:"G-D8L18HJ2V2"},eu=ap($x),ks=tS(eu),pk=r0(eu);typeof window<"u"&&Lx(eu);const jx=new an,mk="https://qr-transfers.web.app",qx=Dy("qr-transfer-user",null),Hx=Fc(!0),zx=Fc(null);function Wx(){const[n,e]=no(qx),[t,r]=no(Hx),[s,i]=no(zx);w.useEffect(()=>{const d=qA(ks,p=>{e(p),r(!1)});return()=>d()},[e,r]);const o=w.useCallback(async(d,p)=>{try{r(!0),i(null);const m=await BA(ks,d,p);e(m.user)}catch(m){throw i(m.message||"Failed to sign in"),m}finally{r(!1)}},[r,i,e]),c=w.useCallback(async(d,p)=>{try{r(!0),i(null);const m=await UA(ks,d,p);e(m.user)}catch(m){throw i(m.message||"Failed to sign up"),m}finally{r(!1)}},[r,i,e]),l=w.useCallback(async()=>{try{r(!0),i(null);const d=await uR(ks,jx);e(d.user)}catch(d){throw i(d.message||"Failed to sign in with Google"),d}finally{r(!1)}},[r,i,e]),u=w.useCallback(async()=>{try{r(!0),i(null),await HA(ks),e(null)}catch(d){throw i(d.message||"Failed to sign out"),d}finally{r(!1)}},[r,i,e]);return{user:n,loading:t,error:s,signIn:o,signUp:c,signInWithGoogle:l,signOut:u}}const Gx=Fc(!1);function qg(){const[n,e]=no(Gx),t=w.useCallback(()=>e(i=>!i),[e]),r=w.useCallback(()=>e(!1),[e]),s=w.useCallback(()=>e(!0),[e]);return{isOpen:n,toggle:t,close:r,open:s}}function Kx(){const{themeMode:n,toggle:e}=Ny(),{open:t}=qg(),{user:r,signOut:s}=Wx(),i=Ho(),o=async()=>{await s(),i("/")};return O.jsx(l_,{position:"static",color:"transparent",elevation:2,"data-pw":`theme-${n}`,enableColorOnDark:!0,children:O.jsx(tw,{children:O.jsxs(io,{direction:"row",justifyContent:"space-between",alignItems:"center",flex:1,children:[O.jsxs(io,{direction:"row",gap:1,alignItems:"center",children:[O.jsx(Ca,{size:"large",edge:"start",color:"info","aria-label":"menu",onClick:t,children:O.jsx(nI,{})}),O.jsx(hr,{variant:"h6",component:"div",color:"info",children:Vy})]}),O.jsxs(io,{direction:"row",alignItems:"center",gap:1,children:[O.jsx(uh,{title:"Cambiar tema",arrow:!0,children:O.jsx(Ca,{color:"info",size:"large",onClick:e,"data-pw":"theme-toggle",children:O.jsx(eI,{})})}),r&&O.jsx(uh,{title:"Cerrar sesión",arrow:!0,children:O.jsx(Ca,{color:"info",size:"large",onClick:o,children:O.jsx(tI,{})})})]})]})})})}const Qx=nn([O.jsx("path",{d:"M12 3v18c4.97 0 9-4.03 9-9s-4.03-9-9-9"},"0"),O.jsx("circle",{cx:"6",cy:"14",r:"1"},"1"),O.jsx("circle",{cx:"6",cy:"18",r:"1"},"2"),O.jsx("circle",{cx:"6",cy:"10",r:"1"},"3"),O.jsx("circle",{cx:"3",cy:"10",r:".5"},"4"),O.jsx("circle",{cx:"6",cy:"6",r:"1"},"5"),O.jsx("circle",{cx:"3",cy:"14",r:".5"},"6"),O.jsx("circle",{cx:"10",cy:"21",r:".5"},"7"),O.jsx("circle",{cx:"10",cy:"3",r:".5"},"8"),O.jsx("circle",{cx:"10",cy:"6",r:"1"},"9"),O.jsx("circle",{cx:"10",cy:"14",r:"1.5"},"10"),O.jsx("circle",{cx:"10",cy:"10",r:"1.5"},"11"),O.jsx("circle",{cx:"10",cy:"18",r:"1"},"12")],"Deblur");function Yx(){const{isOpen:n,open:e,close:t}=qg();return O.jsx(XE,{anchor:"left",open:n,onClose:t,onOpen:e,disableBackdropTransition:!1,swipeAreaWidth:30,"data-pw":"sidebar",children:O.jsx(gE,{sx:{width:250,pt:r=>`${r.mixins.toolbar.minHeight}px`},children:zf.filter(r=>r.title).map(({path:r,title:s,icon:i})=>O.jsx(xE,{sx:{p:0},onClick:t,children:O.jsxs(TE,{component:el,to:r,children:[O.jsx(OE,{children:i?O.jsx(i,{}):O.jsx(Qx,{})}),O.jsx(FE,{children:s})]})},r))})})}function Xx(){return O.jsxs(w.Fragment,{children:[O.jsx(Mv,{}),O.jsxs(IT,{children:[O.jsx(Kx,{}),O.jsx(Yx,{}),O.jsx(ZT,{})]})]})}const Jx=MT(Xx,jT),gk=Object.freeze(Object.defineProperty({__proto__:null,default:Jx},Symbol.toStringTag,{value:"Module"}));export{mk as A,Ef as B,lk as C,sk as D,ck as E,Rv as F,Fy as G,By as H,Hf as I,gk as J,GT as L,rE as M,rk as N,io as S,hr as T,Wx as a,hk as b,ok as c,pk as d,n0 as e,Uc as f,uk as g,qy as h,xv as i,un as j,zi as k,tk as l,dk as m,$y as n,zt as o,cf as p,ak as q,ih as r,fk as s,jy as t,Ho as u,Hy as v,gE as w,ec as x,zy as y,nk as z};
