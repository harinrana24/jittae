const __vite__fileDeps=["assets/Attractor-mUVPMwg2.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-QGWFl7Dt.js","assets/index-C-5JYWDM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-QGWFl7Dt.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-mUVPMwg2.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};