import{d as p,r as l,u as m,o as v,c as _,a as o,w as n,v as i,t as h,b as f,e as w,f as g,g as V,h as x,j as U,i as k}from"./index-DuMoUVsD.js";const R={class:"register"},b=o("h1",null,"Register",-1),B=o("button",null,"Enter",-1),E={class:"error"},N=p({__name:"RegisterView",setup(L){const a=l(null),u=m(),e=l({email:"",password:""});function d(){e.value.email&&e.value.password&&(a.value=null,U(k,e.value.email,e.value.password).then(s=>{console.log("success resiter"),s.user,u.setUser(s.user),router.push({name:"home"})}).catch(s=>{console.error(s),a.value=s.message}))}return(s,t)=>{const c=V("RouterLink");return v(),_("div",R,[b,o("form",{class:"form",onSubmit:g(d,["prevent"])},[n(o("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.value.email=r),placeholder:"email"},null,512),[[i,e.value.email]]),n(o("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.password=r),placeholder:"password",type:"password"},null,512),[[i,e.value.password]]),B,o("div",E,h(a.value),1),f(c,{to:{name:"login"}},{default:w(()=>[x("Login")]),_:1})],32)])}}});export{N as default};
