import{g as r}from"./user-x2NkDJov.js";import{d,r as l,l as h,h as v,o as a,c as t,m as _,F as f,n as g,a as s,t as i,b as p,e as k,i as u,p as L,q as x,_ as w}from"./index-BzzMiSTW.js";const y=o=>(L("data-v-7ac4a3ed"),o=o(),x(),o),I={class:"table"},N=y(()=>s("div",null,[s("span",{class:"cell"},"ID"),s("span",{class:"cell"},"Name")],-1)),U={key:0},V={class:"cell"},C={class:"cell"},S={key:0},b=d({__name:"ListUsers",setup(o){const c=l([]),n=l(!1);return h(async()=>{console.log("onMounted"),n.value=!0,c.value=await r(),n.value=!1}),(F,M)=>{const m=v("RouterLink");return a(),t("div",I,[N,n.value?(a(),t("div",U,"Loading...")):_("",!0),(a(!0),t(f,null,g(c.value,e=>(a(),t("div",{key:e},[s("span",V,i((e==null?void 0:e.id)||"-"),1),s("span",C,i((e==null?void 0:e.name)||(e==null?void 0:e.email)),1),e!=null&&e.email?(a(),t("span",S,[p(m,{to:{name:"wardrobe",params:{email:e.email}}},{default:k(()=>[u("Go to Home")]),_:2},1032,["to"])])):_("",!0)]))),128))])}}}),B=w(b,[["__scopeId","data-v-7ac4a3ed"]]),$={class:"users"},D=s("h1",null,"Users",-1),E=d({__name:"UsersView",setup(o){return(c,n)=>(a(),t("div",$,[D,p(B)]))}});export{E as default};
