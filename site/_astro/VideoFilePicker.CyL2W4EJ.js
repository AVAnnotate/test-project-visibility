import{j as t}from"./jsx-runtime.B6N9iRLn.js";import{r as l}from"./index.DNi1g-pO.js";import{s as d}from"./store.aycOQVLs.js";import{f as o}from"./player.ChVRuTep.js";const h=r=>{const e=l.useRef(null);return l.useEffect(()=>{if(e.current){const s=document.createElement("video");s.src=r.url,s.onloadeddata=()=>{if(e.current){e.current.height=180,e.current.width=240;const i=e.current.getContext("2d",{alpha:!1});if(i){i.beginPath(),i.fillStyle="#000000",i.fillRect(0,0,e.current.width,e.current.height);const a=s.videoHeight/s.videoWidth,n=e.current.height/e.current.width;if(a>n){const c=e.current.width*a;i.drawImage(s,0,Math.floor(e.current.height-c/2),e.current.width,c)}else{const c=e.current.width*n/a;i.drawImage(s,0,0,c,e.current.height)}}}}}},[r.url,e.current]),t.jsx("canvas",{className:"w-[120px] h-[90px]",ref:e})},v=r=>{const[e,s]=l.useState(r.children?"desc":"picker"),i=a=>{const n="py-2 mb-4";return a===e?`${n} border-b-2 border-solid border-secondary mt-[2px]`:`${n} text-gray-400`};return t.jsxs("div",{className:"py-2",children:[t.jsxs("div",{className:"flex gap-4",children:[t.jsx("button",{onClick:()=>s("desc"),role:"button",className:i("desc"),children:"Description"}),t.jsx("button",{onClick:()=>s("picker"),role:"button",className:i("picker"),children:"Contents"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:e!=="desc"?"hidden":"",children:[r.children,r.event.data.citation&&t.jsx("p",{children:r.event.data.citation})]}),t.jsx("div",{className:`grid grid-cols-2 gap-2 py-2 ${e!=="picker"?"hidden":""}`,children:Object.keys(r.event.data.audiovisual_files).map((a,n)=>{const c=r.event.data.audiovisual_files[a];return t.jsxs("div",{className:"h-[90px] hover:cursor-pointer hover:bg-gray-200 flex gap-2",onClick:()=>d(a,r.playerId),children:[t.jsx(h,{url:c.file_url}),t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsxs("p",{children:[n+1,". ",c.label]}),t.jsx("p",{children:o(c.duration,!1)})]})]},a)})})]})]})};export{v as default};
