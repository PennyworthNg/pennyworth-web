import{u as l,r as a,q as v,f as k,t as E,j as e,v as I,F as w,O as S,k as u,w as A,T as d,B as m,A as F,l as L,x as B,g as W,y as D,z as c,D as H,E as O,G as s,H as T,L as z}from"./index-5d2dc36a.js";import{I as G,C as M}from"./InputLabel-63b74b29.js";const P=({...r})=>{const n=l(),[h,x]=a.useState(!0),j=v();k(t=>t.user);const p=E(),[g,i]=a.useState(!1),[o,f]=a.useState(""),y=()=>{i(!0),W.post("/api/auth",{email:o},{headers:{Accept:"application/json"}}).then(t=>{p(D({id:t.data.user.id,email:t.data.user.email})),j("/verify-email"),c("Welcome... Please verify email.","success")}).catch(t=>{i(!1),Object.entries(t.response.data.error).forEach(([R,b])=>{b.forEach(C=>{c(`${C}`,"error")})})})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsxs(w,{fullWidth:!0,sx:{...n.typography.customInput},children:[e.jsx(G,{htmlFor:"outlined-adornment-email-login",children:"Email Address"}),e.jsx(S,{id:"outlined-adornment-email-login",type:"email",value:o,name:"email",onChange:t=>f(t.target.value),label:"Email Address",inputProps:{}})]}),e.jsxs(u,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[e.jsx(A,{control:e.jsx(M,{checked:h,onChange:t=>x(t.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),e.jsx(d,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Email?"})]}),e.jsx(m,{sx:{mt:2},children:e.jsx(F,{children:e.jsx(L,{endIcon:e.jsx(B,{}),disableElevation:!0,disabled:g,onClick:y,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Continue"})})})]})},Q=()=>{const r=l(),n=H(r.breakpoints.down("md"));return e.jsx(O,{children:e.jsx(s,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:e.jsx(s,{item:!0,xs:12,children:e.jsx(s,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(s,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(T,{children:e.jsxs(s,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(s,{item:!0,sx:{mb:3},children:e.jsx(z,{to:"#",children:e.jsx(m,{component:"img",src:"assets/logo/logo-full.png",width:"200px"})})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(s,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:e.jsx(s,{item:!0,children:e.jsx(u,{alignItems:"center",justifyContent:"center",spacing:1,children:e.jsx(d,{align:"center",color:r.palette.secondary.main,gutterBottom:!0,variant:n?"h4":"h3",children:"Enter your credentials to continue"})})})})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(P,{})})]})})})})})})})};export{Q as default};