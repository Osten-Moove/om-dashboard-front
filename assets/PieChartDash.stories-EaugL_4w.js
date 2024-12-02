import{P as r}from"./index-DPECKjqS.js";import{R as o}from"./index-DJO9vBfz.js";import"./jsx-runtime-CkxqCPlQ.js";import"./tiny-invariant-CopsF_GD.js";const f={title:"Grafics/Pie Chart Dash",component:r,tags:["autodocs"],argTypes:{formatValue:{control:{type:"object"},description:`
        OPÇÕES:

        {
          "type": "currency",
          "currency": "BRL",
          "minimumFractionDigits": 2
        }

        {
          "type": "number"
        }
      `},colorCollection:{control:{type:"object"}},styles:{control:{type:"object"},description:`
        OPÇÕES:

        {
          legend: true
          size: number
        }
      `}},render:t=>{const l=[{name:"Group A",value:400},{name:"Group B",value:500},{name:"Group C",value:600},{name:"Group D",value:750}];return o.createElement("div",{style:{width:"400px",height:"400px",margin:"auto"}},o.createElement(r,{data:l,colorCollection:t.colorCollection,styles:t.styles,formatValue:t.formatValue}))}},e={args:{colorCollection:["#000","#00ff00","#0000ff","#ffff00"],styles:{legend:!0,size:500},formatValue:{type:"currency",currency:"BRL",minimumFractionDigits:2}}};var n,a,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    colorCollection: ["#000", "#00ff00", "#0000ff", "#ffff00"],
    styles: {
      legend: true,
      size: 500
    },
    formatValue: {
      "type": "currency",
      "currency": "BRL",
      "minimumFractionDigits": 2
    }
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,f as default};
