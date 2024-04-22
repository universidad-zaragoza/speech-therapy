import{r,a as F}from"./react-ePaza90U.js";import"./react-dom-BGCucnFv.js";import{R as p}from"./react-router-DHtK1h3G.js";import{c as R}from"./@remix-run-Dql683DL.js";/**
* React Router DOM v6.22.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/const U="6";try{window.__reactRouterVersion=U}catch{}const b="startTransition",l=F[b];function v(e){let{basename:h,children:S,future:a,window:w}=e,o=r.useRef();o.current==null&&(o.current=R({window:w,v5Compat:!0}));let t=o.current,[i,n]=r.useState({action:t.action,location:t.location}),{v7_startTransition:s}=a||{},c=r.useCallback(u=>{s&&l?l(()=>n(u)):n(u)},[n,s]);return r.useLayoutEffect(()=>t.listen(c),[t,c]),r.createElement(p,{basename:h,children:S,location:i.location,navigationType:i.action,navigator:t,future:a})}var m;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(m||(m={}));var f;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(f||(f={}));export{v as B};
