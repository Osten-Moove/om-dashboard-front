import{R as r}from"./index-DJO9vBfz.js";import{S as o}from"./index-XkLbokb0.js";import"./jsx-runtime-CkxqCPlQ.js";import"./tiny-invariant-CopsF_GD.js";const u={title:"Grafics/Stacked Bar Dash",component:o,tags:["autodocs"],argTypes:{margin:{control:{type:"object"}},formatValue:{control:{type:"object"},description:`
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
      `},maxWidth:{control:{type:"number",min:200}},maxHeight:{control:{type:"number",min:200}},colorCollection:{control:{type:"object"}},hoverColors:{control:{type:"object"}}},render:e=>{const i=[{label:"Janeiro",Entrada:4e3,Faturamento:2400},{label:"Fevereiro",Entrada:3e3,Faturamento:1398},{label:"Março",Entrada:2e3,Faturamento:9800},{label:"Abril",Entrada:2780,Faturamento:3908},{label:"Maio",Entrada:1890,Faturamento:4800}];return r.createElement("div",{style:{width:"700px",height:"400px"}},r.createElement(o,{dataBody:i,maxWidth:e.maxWidth,maxHeight:e.maxHeight,colorCollection:e.colorCollection,styles:e.styles,formatValue:e.formatValue,hoverColors:e.hoverColors,margin:e.margin}))},args:{}},t={args:{maxWidth:700,maxHeight:400,colorCollection:{Vendas:"#2545d6",Despesas:"#c12f2f",Lucro:"#2cb7a9"},formatValue:{type:"currency",currency:"BRL",minimumFractionDigits:2},styles:{legend:!0,barSize:40,stackId:"a"},hoverColors:{Vendas:"#000",Despesas:"#000",Lucro:"#000"},margin:{top:20,right:20,left:80,bottom:20}}};var a,c,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,u as default};
