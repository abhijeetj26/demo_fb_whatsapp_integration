import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,c as l,b as c,f as u,g as h,h as f,j as p,k as d,l as m,n as g}from"./client.b6413ba1.js";function v(t){let s,a,v,b,j,x,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),b=o(y),j=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),v=c(t,"H1",{});var s=u(v);b=h(s,y),s.forEach(r),j=l(t),x=c(t,"DIV",{class:!0}),u(x).forEach(r),this.h()},h(){f(x,"class","content svelte-gnxal1")},m(t,s){p(t,a,s),p(t,v,s),d(v,b),p(t,j,s),p(t,x,s),x.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&m(b,y),1&a&&E!==(E=t[0].html+"")&&(x.innerHTML=E)},i:g,o:g,d(t){t&&r(a),t&&r(v),t&&r(j),t&&r(x)}}}async function b({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,v,a,{post:0})}}export{b as preload};
