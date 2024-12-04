import{R as o}from"./index-DJO9vBfz.js";import{B as t}from"./index-XkLbokb0.js";import"./jsx-runtime-CkxqCPlQ.js";import"./tiny-invariant-CopsF_GD.js";const p={title:"Grafics/Bar Chart Dash",component:t,tags:["autodocs"],argTypes:{formatValue:{control:{type:"object"},description:`
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
      `},maxWidth:{control:{type:"number",min:200}},maxHeight:{control:{type:"number",min:200}},colorCollection:{control:{type:"object"}},margin:{control:{type:"object"}},hoverColors:{control:{type:"object"}},styles:{control:{type:"object"},description:`
        OPÇÕES:

        {
          legend: boolean;
          barSize: number,
          radius: number
        }
      `}},render:e=>{const c=[{label:"Janeiro",Vendas:4e3,Despesas:2400,Lucro:1250},{label:"Fevereiro",Vendas:3e3,Despesas:1398,Lucro:4250},{label:"Março",Vendas:2e3,Despesas:9800,Lucro:2250},{label:"Abril",Vendas:2780,Despesas:3908,Lucro:3250},{label:"Maio",Vendas:1890,Despesas:4800,Lucro:1250}];return o.createElement("div",{style:{width:"700px",height:"400px"}},o.createElement(t,{formatValue:e.formatValue,dataBody:c,maxWidth:e.maxWidth,maxHeight:e.maxHeight,colorCollection:e.colorCollection,hoverColors:e.hoverColors,margin:e.margin,styles:e.styles}))},args:{}},r={args:{formatValue:{type:"currency",currency:"BRL",minimumFractionDigits:2},maxWidth:700,maxHeight:400,colorCollection:{Vendas:"#387a0f",Despesas:"#ae2020",Lucro:"#0d2f85"},hoverColors:{Vendas:"#000",Despesas:"#000",Lucro:"#000"},margin:{top:20,right:20,left:80,bottom:20},styles:{legend:!0,barSize:40,radius:6}}};var a,n,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    formatValue: {
      "type": "currency",
      "currency": "BRL",
      "minimumFractionDigits": 2
    },
    maxWidth: 700,
    maxHeight: 400,
    colorCollection: {
      Vendas: "#387a0f",
      Despesas: "#ae2020",
      Lucro: "#0d2f85"
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
    },
    styles: {
      legend: true,
      barSize: 40,
      radius: 6
    }
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const d=["Default"];export{r as Default,d as __namedExportsOrder,p as default};
