const i=(a,r=!1)=>{const t=new Date(a*1e3),n=t.getUTCHours().toString().padStart(2,"0"),o=t.getUTCMinutes().toString().padStart(2,"0"),S=t.getUTCSeconds().toString().padStart(2,"0");let s,e=`${n}:${o.toString().padStart(2,"0")}:${S}`;return r&&(s=t.getUTCMilliseconds().toString().padStart(3,"0"),e=`${e}:${s}`),e};export{i as f};
