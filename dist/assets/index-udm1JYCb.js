const __vite__fileDeps=["assets/OutOfCanvasUpdater-DJiK5DJB.js","assets/index-BNx22nUp.js","assets/index-C-5JYWDM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-BNx22nUp.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-DJiK5DJB.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
