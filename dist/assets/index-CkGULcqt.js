const __vite__fileDeps=["assets/PolygonDrawer-Cg2ad9cR.js","assets/PolygonDrawerBase-BuS_JafP.js","assets/index-Dsx1wIy0.js","assets/index-C-5JYWDM.css","assets/TriangleDrawer-BcpbY_Kq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-Dsx1wIy0.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-Cg2ad9cR.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-BcpbY_Kq.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
