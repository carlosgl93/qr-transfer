function o(r){return`${r.fullName}
RUT: ${r.rut}
${r.bankOrPlatform}
${r.accountType}
Número de cuenta: ${r.accountNumber}
${r.email}`}async function a(r){try{if(navigator.clipboard&&navigator.clipboard.writeText)return await navigator.clipboard.writeText(r),!0;{const e=document.createElement("textarea");e.value=r,e.style.position="fixed",e.style.left="-999999px",document.body.appendChild(e),e.focus(),e.select();try{return document.execCommand("copy"),document.body.removeChild(e),!0}catch{return document.body.removeChild(e),!1}}}catch(e){return console.error("Failed to copy to clipboard:",e),!1}}export{a as c,o as f};
