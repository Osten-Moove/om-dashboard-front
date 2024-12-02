import{R as o}from"./index-DJO9vBfz.js";import{S as r}from"./index-DPECKjqS.js";import"./jsx-runtime-CkxqCPlQ.js";import"./tiny-invariant-CopsF_GD.js";const p={title:"Grafics/Stacked Bar Dash",component:r,tags:["autodocs"],argTypes:{margin:{control:{type:"object"}},formatValue:{control:{type:"object"},description:`
        OPÇÕES:

        {
          "type": "currency",
          "currency": "BRL",
          "minimumFractionDigits": 2
        }

        {
          "type": "number"
        }

        {
          "type": "percentage"
        }
      `},styles:{control:{type:"object"},description:`
        OPÇÕES:

        {
          legend: boolean,
          barSize: number,
          stackId: string
        }
      `},maxWidth:{control:{type:"number",min:200}},maxHeight:{control:{type:"number",min:200}},colorCollection:{control:{type:"object"}},hoverColors:{control:{type:"object"}}},render:e=>{const n=[{label:"Janeiro",Vendas:4e3,Despesas:2400,Lucro:1250},{label:"Fevereiro",Vendas:3e3,Despesas:1398,Lucro:4250},{label:"Março",Vendas:2e3,Despesas:9800,Lucro:2250},{label:"Abril",Vendas:2780,Despesas:3908,Lucro:3250},{label:"Maio",Vendas:1890,Despesas:4800,Lucro:1250}];return o.createElement("div",{style:{width:"700px",height:"400px"}},o.createElement(r,{dataBody:n,maxWidth:e.maxWidth,maxHeight:e.maxHeight,colorCollection:e.colorCollection,styles:e.styles,formatValue:e.formatValue,hoverColors:e.hoverColors,margin:e.margin}))},args:{}},t={args:{maxWidth:700,maxHeight:400,colorCollection:{Vendas:"#2545d6",Despesas:"#c12f2f",Lucro:"#2cb7a9"},formatValue:{type:"currency",currency:"BRL",minimumFractionDigits:2},styles:{legend:!0,barSize:40,stackId:"a"},hoverColors:{Vendas:"#000",Despesas:"#000",Lucro:"#000"},margin:{top:20,right:20,left:80,bottom:20}}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    maxWidth: 700,
    maxHeight: 400,
    colorCollection: {
      Vendas: "#2545d6",
      Despesas: "#c12f2f",
      Lucro: "#2cb7a9"
    },
    formatValue: {
      "type": "currency",
      "currency": "BRL",
      "minimumFractionDigits": 2
    },
    styles: {
      legend: true,
      barSize: 40,
      stackId: 'a'
    },
    hoverColors: {
      Vendas: "#000",
      Despesas: "#000",
      Lucro: "#000"
    },
    margin: {
      top: 20,
      right: 20,
      left: 80,
      bottom: 20
    }
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,p as default};
