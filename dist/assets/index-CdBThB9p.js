const __vite__fileDeps=["assets/SizeUpdater-_1j8IcVj.js","assets/index-Dsx1wIy0.js","assets/index-C-5JYWDM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-Dsx1wIy0.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-_1j8IcVj.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};