import{R as t}from"./index-DJO9vBfz.js";import{C as o}from"./index-BL9o_FXf.js";import"./jsx-runtime-CkxqCPlQ.js";import"./tiny-invariant-CopsF_GD.js";const p={title:"Grafics/Composed Chart Dash",component:o,tags:["autodocs"],argTypes:{maxWidth:{control:{type:"number",min:200}},maxHeight:{control:{type:"number",min:200}},colorCollection:{control:{type:"object"}}},render:a=>{const d=[{label:"Janeiro",Entrada:{type:"line",value:400},Saída:{type:"line",value:650},Resultado:{type:"bar",value:-115}},{label:"Fevereiro",Entrada:{type:"line",value:1700},Saída:{type:"line",value:967},Resultado:{type:"bar",value:210}},{label:"Março",Entrada:{type:"line",value:1930},Saída:{type:"line",value:1098},Resultado:{type:"bar",value:380}}];return t.createElement("div",{style:{width:"700px",height:"400px"}},t.createElement(o,{dataBody:d,maxWidth:a.maxWidth,maxHeight:a.maxHeight,colorCollection:a.colorCollection}))},args:{}},e={args:{maxWidth:1920,colorCollection:{entrada:"#40c211",saída:"#9c0f0f",resultado:"#2a3d83"}}};var r,l,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    maxWidth: 1920,
    colorCollection: {
      entrada: '#40c211',
      saída: '#9c0f0f',
      resultado: '#2a3d83'
    }
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,p as default};
