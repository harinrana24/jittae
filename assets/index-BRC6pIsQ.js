const __vite__fileDeps=["assets/LifeUpdater-DU3fflaF.js","assets/ValueWithRandom-Ls57tpqj.js","assets/index-hAadKk29.js","assets/index-OasCHL_z.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-hAadKk29.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DU3fflaF.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};