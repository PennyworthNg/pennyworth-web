import{ag as x,j as t,a as j,g as P,s as g,ah as B,ai as M,a6 as h,_ as a,b as S,r as p,u as R,d as _,e as H,f as E}from"./index-e73224de.js";const O=x(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=x(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=x(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function L(e){return P("MuiCheckbox",e)}const N=j("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),u=N,w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=e=>{const{classes:o,indeterminate:c,color:n,size:r}=e,s={root:["root",c&&"indeterminate",`color${h(n)}`,`size${h(r)}`]},l=E(s,L,o);return a({},o,l)},T=g(B,{shouldForwardProp:e=>M(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:c}=e;return[o.root,c.indeterminate&&o.indeterminate,c.color!=="default"&&o[`color${h(c.color)}`]]}})(({theme:e,ownerState:o})=>a({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:S(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${u.checked}, &.${u.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${u.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),W=t.jsx(U,{}),q=t.jsx(O,{}),A=t.jsx(V,{}),D=p.forwardRef(function(o,c){var n,r;const s=R({props:o,name:"MuiCheckbox"}),{checkedIcon:l=W,color:f="primary",icon:I=q,indeterminate:i=!1,indeterminateIcon:m=A,inputProps:z,size:d="medium",className:$}=s,y=_(s,w),C=i?m:I,k=i?m:l,v=a({},s,{color:f,indeterminate:i,size:d}),b=F(v);return t.jsx(T,a({type:"checkbox",inputProps:a({"data-indeterminate":i},z),icon:p.cloneElement(C,{fontSize:(n=C.props.fontSize)!=null?n:d}),checkedIcon:p.cloneElement(k,{fontSize:(r=k.props.fontSize)!=null?r:d}),ownerState:v,ref:c,className:H(b.root,$)},y,{classes:b}))}),J=D;export{J as C};
