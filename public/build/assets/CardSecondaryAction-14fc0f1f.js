import{P as s,m as o,j as t,n as m,H as x,I as b}from"./index-e73224de.js";import{L as c}from"./Link-82a14fe5.js";const l=({color:i,outline:n,size:p,sx:r,...h})=>{const e=o(),g=i&&!n&&{color:e.palette.background.paper,bgcolor:`${i}.main`},d=n&&{color:i?`${i}.main`:"primary.main",bgcolor:e.palette.background.paper,border:"2px solid",borderColor:i?`${i}.main`:"primary.main"};let a={};switch(p){case"badge":a={width:e.spacing(3.5),height:e.spacing(3.5)};break;case"xs":a={width:e.spacing(4.25),height:e.spacing(4.25)};break;case"sm":a={width:e.spacing(5),height:e.spacing(5)};break;case"lg":a={width:e.spacing(9),height:e.spacing(9)};break;case"xl":a={width:e.spacing(10.25),height:e.spacing(10.25)};break;case"md":a={width:e.spacing(7.5),height:e.spacing(7.5)};break;default:a={}}return t.jsx(m,{sx:{...g,...d,...a,...r},...h})};l.propTypes={className:s.string,color:s.string,outline:s.bool,size:s.string,sx:s.object};const L=({title:i,link:n,icon:p})=>{const r=o();return t.jsx(x,{title:i||"Reference",placement:"left",children:t.jsxs(b,{disableRipple:!0,children:[!p&&t.jsx(l,{component:c,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:t.jsxs("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsxs("g",{clipPath:"url(#clip0)",children:[t.jsx("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:r.palette.primary[800]}),t.jsx("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:r.palette.primary.main}),t.jsx("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:r.palette.primary[800]}),t.jsx("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:r.palette.primary.main})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0",children:t.jsx("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),p&&t.jsx(l,{component:c,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:p})]})})};L.propTypes={icon:s.node,link:s.string,title:s.string};export{L as C};
