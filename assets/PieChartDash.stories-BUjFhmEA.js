import{P as t}from"./index-XkLbokb0.js";import{R as o}from"./index-DJO9vBfz.js";import"./jsx-runtime-CkxqCPlQ.js";import"./tiny-invariant-CopsF_GD.js";const p={title:"Grafics/Pie Chart Dash",component:t,tags:["autodocs"],argTypes:{formatValue:{control:{type:"object"},description:`
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
          legendType: 'line' | 'square' | 'circle' | 'rect' | 'diamond' | 'star' | 'triangle' | 'wye'
        }
      `}},render:r=>{const l=[{name:"Group A",value:400},{name:"Group B",value:500},{name:"Group C",value:600},{name:"Group D",value:750}];return o.createElement("div",{style:{width:"400px",height:"400px",margin:"auto"}},o.createElement(t,{data:l,colorCollection:r.colorCollection,styles:r.styles,formatValue:r.formatValue}))}},e={args:{colorCollection:["#000","#00ff00","#0000ff","#ffff00"],formatValue:{type:"currency",currency:"BRL",minimumFractionDigits:2},styles:{legend:!0,legendType:"square"}}};var a,c,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    colorCollection: ["#000", "#00ff00", "#0000ff", "#ffff00"],
    formatValue: {
      "type": "currency",
      "currency": "BRL",
      "minimumFractionDigits": 2
    },
    styles: {
      legend: true,
      legendType: 'square'
    }
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,p as default};
