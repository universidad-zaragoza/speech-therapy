import{r as o}from"./react-ePaza90U.js";import{i as m,p as L,m as H,j as U,A as j,s as V,g as F,r as M,a as W}from"./@remix-run-DyRdwddT.js";/**
* React Router v6.22.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},b.apply(this,arguments)}const D=o.createContext(null),q=o.createContext(null),E=o.createContext(null),S=o.createContext(null),x=o.createContext({outlet:null,matches:[],isDataRoute:!1}),I=o.createContext(null);function G(t,e){let{relative:a}=e===void 0?{}:e;R()||m(!1);let{basename:r,navigator:i}=o.useContext(E),{hash:c,pathname:n,search:d}=_(t,{relative:a}),s=n;return r!=="/"&&(s=n==="/"?r:U([r,n])),i.createHref({pathname:s,search:d,hash:c})}function R(){return o.useContext(S)!=null}function k(){return R()||m(!1),o.useContext(S).location}function J(t){o.useContext(E).static||o.useLayoutEffect(t)}function K(){let{isDataRoute:t}=o.useContext(x);return t?ie():Q()}function Q(){R()||m(!1);let t=o.useContext(D),{basename:e,future:a,navigator:r}=o.useContext(E),{matches:i}=o.useContext(x),{pathname:c}=k(),n=JSON.stringify(F(i,a.v7_relativeSplatPath)),d=o.useRef(!1);return J(()=>{d.current=!0}),o.useCallback(function(s,h){if(h===void 0&&(h={}),!d.current)return;if(typeof s=="number"){r.go(s);return}let u=M(s,JSON.parse(n),c,h.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:U([e,u.pathname])),(h.replace?r.replace:r.push)(u,h.state,h)},[e,r,n,c,t])}function _(t,e){let{relative:a}=e===void 0?{}:e,{future:r}=o.useContext(E),{matches:i}=o.useContext(x),{pathname:c}=k(),n=JSON.stringify(F(i,r.v7_relativeSplatPath));return o.useMemo(()=>M(t,JSON.parse(n),c,a==="path"),[t,n,c,a])}function X(t,e){return Y(t,e)}function Y(t,e,a,r){R()||m(!1);let{navigator:i}=o.useContext(E),{matches:c}=o.useContext(x),n=c[c.length-1],d=n?n.params:{};n&&n.pathname;let s=n?n.pathnameBase:"/";n&&n.route;let h=k(),u;if(e){var l;let p=typeof e=="string"?L(e):e;s==="/"||(l=p.pathname)!=null&&l.startsWith(s)||m(!1),u=p}else u=h;let v=u.pathname||"/",f=v;if(s!=="/"){let p=s.replace(/^\//,"").split("/");f="/"+v.replace(/^\//,"").split("/").slice(p.length).join("/")}let g=H(t,{pathname:f}),C=re(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},d,p.params),pathname:U([s,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?s:U([s,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),c,a,r);return e&&C?o.createElement(S.Provider,{value:{location:b({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:j.Pop}},C):C}function Z(){let t=le(),e=W(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},e),a?o.createElement("pre",{style:r},a):null,null)}const $=o.createElement(Z,null);class ee extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){console.error("React Router caught the following error during render",e,a)}render(){return this.state.error!==void 0?o.createElement(x.Provider,{value:this.props.routeContext},o.createElement(I.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function te(t){let{routeContext:e,match:a,children:r}=t,i=o.useContext(D);return i&&i.static&&i.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=a.route.id),o.createElement(x.Provider,{value:e},r)}function re(t,e,a,r){var i;if(e===void 0&&(e=[]),a===void 0&&(a=null),r===void 0&&(r=null),t==null){var c;if((c=a)!=null&&c.errors)t=a.matches;else return null}let n=t,d=(i=a)==null?void 0:i.errors;if(d!=null){let u=n.findIndex(l=>l.route.id&&(d==null?void 0:d[l.route.id]));u>=0||m(!1),n=n.slice(0,Math.min(n.length,u+1))}let s=!1,h=-1;if(a&&r&&r.v7_partialHydration)for(let u=0;u<n.length;u++){let l=n[u];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(h=u),l.route.id){let{loaderData:v,errors:f}=a,g=l.route.loader&&v[l.route.id]===void 0&&(!f||f[l.route.id]===void 0);if(l.route.lazy||g){s=!0,h>=0?n=n.slice(0,h+1):n=[n[0]];break}}}return n.reduceRight((u,l,v)=>{let f,g=!1,C=null,p=null;a&&(f=d&&l.route.id?d[l.route.id]:void 0,C=l.route.errorElement||$,s&&(h<0&&v===0?(ue("route-fallback",!1),g=!0,p=null):h===v&&(g=!0,p=l.route.hydrateFallbackElement||null)));let P=e.concat(n.slice(0,v+1)),O=()=>{let y;return f?y=C:g?y=p:l.route.Component?y=o.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=u,o.createElement(te,{match:l,routeContext:{outlet:u,matches:P,isDataRoute:a!=null},children:y})};return a&&(l.route.ErrorBoundary||l.route.errorElement||v===0)?o.createElement(ee,{location:a.location,revalidation:a.revalidation,component:C,error:f,children:O(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):O()},null)}var A=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(A||{}),B=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(B||{});function ae(t){let e=o.useContext(D);return e||m(!1),e}function oe(t){let e=o.useContext(q);return e||m(!1),e}function ne(t){let e=o.useContext(x);return e||m(!1),e}function T(t){let e=ne(),a=e.matches[e.matches.length-1];return a.route.id||m(!1),a.route.id}function le(){var t;let e=o.useContext(I),a=oe(B.UseRouteError),r=T(B.UseRouteError);return e!==void 0?e:(t=a.errors)==null?void 0:t[r]}function ie(){let{router:t}=ae(A.UseNavigateStable),e=T(B.UseNavigateStable),a=o.useRef(!1);return J(()=>{a.current=!0}),o.useCallback(function(r,i){i===void 0&&(i={}),a.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,b({fromRouteId:e},i)))},[t,e])}const w={};function ue(t,e,a){!e&&!w[t]&&(w[t]=!0)}function z(t){m(!1)}function se(t){let{basename:e="/",children:a=null,location:r,navigationType:i=j.Pop,navigator:c,static:n=!1,future:d}=t;R()&&m(!1);let s=e.replace(/^\/*/,"/"),h=o.useMemo(()=>({basename:s,navigator:c,static:n,future:b({v7_relativeSplatPath:!1},d)}),[s,d,c,n]);typeof r=="string"&&(r=L(r));let{pathname:u="/",search:l="",hash:v="",state:f=null,key:g="default"}=r,C=o.useMemo(()=>{let p=V(u,s);return p==null?null:{location:{pathname:p,search:l,hash:v,state:f,key:g},navigationType:i}},[s,u,l,v,f,g,i]);return C==null?null:o.createElement(E.Provider,{value:h},o.createElement(S.Provider,{children:a,value:C}))}function ce(t){let{children:e,location:a}=t;return X(N(e),a)}new Promise(()=>{});function N(t,e){e===void 0&&(e=[]);let a=[];return o.Children.forEach(t,(r,i)=>{if(!o.isValidElement(r))return;let c=[...e,i];if(r.type===o.Fragment){a.push.apply(a,N(r.props.children,c));return}r.type!==z&&m(!1),!r.props.index||!r.props.children||m(!1);let n={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(n.children=N(r.props.children,c)),a.push(n)}),a}export{E as N,se as R,K as a,k as b,_ as c,ce as d,z as e,G as u};