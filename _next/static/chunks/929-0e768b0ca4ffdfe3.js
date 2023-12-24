"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{6664:function(e,r,t){t.r(r),t.d(r,{Accordion:function(){return o},AccordionContent:function(){return f},AccordionGroup:function(){return m},AccordionItem:function(){return c},AccordionMDX:function(){return p},AccordionTrigger:function(){return u}});var n=t(7437),a=t(2265),i=t(2490),s=t(3523),l=t(2703),d=t(3313);let o=i.fC,c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(i.ck,{ref:r,className:(0,l.cn)("base-border-color my-4 rounded-md border bg-white dark:bg-zinc-950",t),...a})});c.displayName="AccordionItem";let u=a.forwardRef((e,r)=>{let{className:t,children:a,...d}=e;return(0,n.jsx)(i.h4,{className:"!m-0 flex text-base",children:(0,n.jsxs)(i.xz,{ref:r,className:(0,l.cn)("flex flex-1 items-center justify-between p-4 py-4 font-medium transition-all hover:rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:rounded-none",t),...d,children:[a,(0,n.jsx)(s.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});u.displayName=i.xz.displayName;let f=a.forwardRef((e,r)=>{let{className:t,children:a,...s}=e;return(0,n.jsx)(i.VY,{ref:r,className:(0,l.cn)("overflow-hidden px-4 pb-2 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",t),...s,children:(0,n.jsx)("div",{className:"pt-0",children:a})})});f.displayName=i.VY.displayName;let m=e=>{let{children:r}=e;return(0,n.jsx)("div",{className:"base-border-color my-6 divide-y divide-black divide-opacity-5 rounded-md border bg-white dark:divide-white dark:divide-opacity-5 dark:bg-zinc-950 [&>div:first-child>div>h3>button]:!rounded-t-md [&>div>div>h3>button]:!rounded-none [&>div>div]:m-0 [&>div>div]:border-none",children:r})},p=e=>(0,n.jsx)(o,{type:"single",collapsible:!0,className:"w-full",children:(0,n.jsxs)(c,{value:e.title,children:[(0,n.jsxs)(u,{children:[e.icon&&(0,n.jsx)("span",{className:"absolute min-w-[20px] max-w-[20px] text-center",children:(0,n.jsx)(d.Icon,{name:e.icon,size:"1x"})}),(0,n.jsx)("div",{className:(0,l.cn)(e.icon&&"pl-8"),children:e.title})]}),(0,n.jsx)(f,{children:e.children})]})})},6357:function(e,r,t){t.r(r),t.d(r,{Card:function(){return d},CardClickable:function(){return p},CardContent:function(){return f},CardDescription:function(){return u},CardFooter:function(){return m},CardHeader:function(){return o},CardTitle:function(){return c}});var n=t(7437),a=t(2265),i=t(2703),s=t(3313),l=t(4033);let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});d.displayName="Card";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",t),...a})});o.displayName="CardHeader";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});c.displayName="CardTitle";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",t),...a})});u.displayName="CardDescription";let f=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("p-6 pt-0",t),...a})});f.displayName="CardContent";let m=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",t),...a})});m.displayName="CardFooter";let p=e=>{let r=(0,l.useRouter)();return(0,n.jsxs)(d,{className:"flex cursor-pointer flex-col gap-1 p-6 pb-2 hover:border-primary",onClick:()=>r.push(e.href||"/"),children:[e.icon&&(0,n.jsx)(s.Icon,{className:"mb-4 text-primary",name:e.icon,size:"lg"}),(0,n.jsxs)("div",{className:"flex flex-col gap-[0.05rem]",children:[(0,n.jsx)("span",{className:"font-bold tracking-wide",children:e.title}),(0,n.jsx)("div",{className:"base-text-color [&>:first-child]:!mt-0",children:e.children})]})]})}},6100:function(e,r,t){t.r(r),t.d(r,{Code:function(){return u},CodeGroup:function(){return f},Pre:function(){return c}});var n=t(7437),a=t(2703),i=t(1218),s=t(7431),l=t(2265);function d(e){let{text:r,className:t}=e,[d,o]=(0,l.useState)(!1),c=async()=>{await navigator.clipboard.writeText(r),o(!0),setTimeout(()=>{o(!1)},1e4)};return(0,n.jsx)("span",{className:(0,a.cn)("cursor-pointer text-opacity-20 hover:text-opacity-40",t),onClick:()=>{c(),setTimeout(()=>{o(!1)},1500),o(!0)},children:d?(0,n.jsx)(i.Z,{className:"stroke-green-400",size:"18"}):(0,n.jsx)(s.Z,{className:"stroke-zinc-500 hover:stroke-zinc-400",size:"18"})})}var o=t(9690);let c=e=>{let{children:r,className:t,raw:i,tabs:s,...l}=e;l["data-language"];let o=l["data-theme"],c=l["data-name"];return(0,n.jsxs)("div",{className:(0,a.cn)("dark"===o?"relative hidden dark:block":"relative block dark:hidden","base-border-color my-6 max-h-[650px] w-full overflow-x-auto rounded-xl border bg-white leading-6 children:!my-0 children:!shadow-none dark:bg-zinc-950"),children:[c&&!s&&(0,n.jsx)("div",{className:"base-border-color border-b bg-white text-xs text-primary dark:bg-black",children:(0,n.jsx)("div",{className:"h-full w-fit border-b border-primary p-3 px-4 pt-4 font-medium",children:c})}),(0,n.jsx)(d,{className:(0,a.cn)("absolute right-4 top-5 !font-normal",c&&"top-[0.8rem]"),text:i}),(0,n.jsx)("pre",{className:(0,a.cn)("max-h-64 !bg-transparent [&>code]:overflow-auto",t),...l,children:r})]})},u=e=>{let{className:r,...t}=e;return(0,n.jsx)("code",{className:(0,a.cn)("!font-firacode tracking-wider",r),...t})},f=e=>{let{children:r}=e;if(null==r||!Array.isArray(r)||r.length<1)return(0,n.jsx)("div",{children:"Code Group syntax error"});let t=Array.isArray(r)&&r[0].props.children[0].props["data-name"];return(0,n.jsx)("div",{className:(0,a.cn)("base-border-color my-6 max-h-[650px] w-full overflow-x-auto rounded-xl border bg-white leading-6 children:!my-0 children:!shadow-none dark:bg-zinc-950"),children:(0,n.jsxs)(o.mQ,{className:"relative",defaultValue:(0,a.lV)(t),children:[(0,n.jsx)(o.dr,{className:"base-border-color relative flex h-auto w-full justify-start rounded-none border-b bg-transparent bg-white !p-0 dark:bg-black ",children:r.map(e=>{let r=e.props.children[0].props["data-name"];return(0,n.jsx)(o.SP,{className:"h-full w-fit rounded-none px-4 pb-2 pt-3 data-[state=active]:border-b data-[state=active]:border-primary data-[state=active]:text-primary",value:(0,a.lV)(r),children:(0,n.jsx)("div",{className:"rounded-lg px-2 pb-1 pt-1 text-xs font-medium hover:bg-zinc-800 hover:text-primary",children:e.props.children[0].props["data-name"]})},(0,a.lV)(r))})}),r.map(e=>e.props.children.map(r=>{let t=r.props["data-theme"],i=r.props["data-name"];return(0,n.jsxs)(o.nU,{className:(0,a.cn)("dark"===t?"relative hidden dark:block":"relative block dark:hidden","!m-0"),value:(0,a.lV)(i),children:[(0,n.jsx)("pre",{className:"!my-0 !bg-transparent [&>code]:overflow-auto",children:r.props.children}),(0,n.jsx)(d,{className:"absolute right-4 top-3 !font-normal data-[state=inactive]:hidden",text:e.props.children[0].props.raw})]},(0,a.lV)(i))}))]})})}},6525:function(e,r,t){t.r(r),t.d(r,{Expandable:function(){return l}});var n=t(7437),a=t(7158),i=t(9224),s=t(2265);let l=e=>{let[r,t]=(0,s.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("button",{onClick:()=>t(!r),className:"mb-2 mt-2 flex w-full items-center gap-1 text-start hover:text-black hover:dark:text-white",children:[r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{size:16}),"Hide"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{size:16}),"Show"]})," ",e.title]}),r&&(0,n.jsx)("div",{className:"my-0 ml-2 border-l border-zinc-300 pl-4 dark:border-zinc-900 [&>:first-child]:!pt-4 [&>:last-child]:!mb-6",children:e.children})]})}},3313:function(e,r,t){t.r(r),t.d(r,{Icon:function(){return o}});var n=t(7437);t(2265);var a=t(1279),i=t(1988),s=t(2759),l=t(7188),d=t(62);function o(e){let{name:r,className:t,...s}=e;try{let e=(0,i.N)({prefix:"fab",iconName:r});if(e)return(0,n.jsx)("span",{className:t,children:(0,n.jsx)(a.G,{icon:["fab",r],...s})});let l=(0,i.N)({prefix:"far",iconName:r});if(l&&!["sun","moon"].includes(r))return(0,n.jsx)("span",{className:t,children:(0,n.jsx)(a.G,{icon:["far",r],...s})});return(0,n.jsx)("span",{className:t,children:(0,n.jsx)(a.G,{icon:["fas",r],...s})})}catch(e){console.log("Error while trying to get icon")}}i.vI.add(s.mRB,l.NCV,d.vnX)},4869:function(e,r,t){t.r(r),t.d(r,{Picture:function(){return l}});var n=t(7437),a=t(2703),i=t(6691),s=t.n(i);t(6942);let l=e=>(0,n.jsx)(s(),{width:700,height:475,sizes:"100vw",style:{width:"100%",height:"auto"},...e,className:(0,a.cn)("rounded-3xl",e.className)})},9690:function(e,r,t){t.d(r,{SP:function(){return o},dr:function(){return d},mQ:function(){return l},nU:function(){return c}});var n=t(7437),a=t(2265),i=t(7094),s=t(2703);let l=e=>(0,n.jsx)(i.fC,{...e,value:e.value,children:e.children}),d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(i.aV,{ref:r,className:(0,s.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...a})});d.displayName=i.aV.displayName;let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(i.xz,{ref:r,className:(0,s.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium",t),...a})});o.displayName=i.xz.displayName;let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(i.VY,{ref:r,className:(0,s.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...a})});c.displayName=i.VY.displayName},2703:function(e,r,t){t.d(r,{CH:function(){return d},QD:function(){return l},cn:function(){return i},lV:function(){return s}});var n=t(7042),a=t(3986);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m)((0,n.W)(r))}function s(e){var r;let t;return t=r=e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/^\d+/,"").replace(/^[\d-]+/,"").trim(),Array.isArray(r)||(t=t.split(" ")),(t=(t=t.filter(e=>!e.startsWith(":")||!e.endsWith(":"))).join(" ").replace(RegExp("[^\\p{L}\\p{N}\\p{P}\\p{Z}^$\\n]","gu"),"")).trim()}function l(e,r){return e.flatMap(e=>e.groups).flatMap(e=>e.pages).find(e=>"/".concat(e.href)===r)}function d(e,r){return e.find(e=>e.groups.some(e=>e.pages.some(e=>"/".concat(e.href)===r)))||e[0]}t(2265)}}]);