const __vite__fileDeps=["assets/OutOfCanvasUpdater-CI6S9mYy.js","assets/index-DR0fa53a.js","assets/index-C-5JYWDM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-DR0fa53a.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-CI6S9mYy.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};