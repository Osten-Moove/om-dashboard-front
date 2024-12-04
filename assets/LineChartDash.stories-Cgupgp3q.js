import{R as o}from"./index-DJO9vBfz.js";import{L as r}from"./index-XkLbokb0.js";import"./jsx-runtime-CkxqCPlQ.js";import"./tiny-invariant-CopsF_GD.js";const d={title:"Grafics/Line Chart Dash",component:r,tags:["autodocs"],argTypes:{formatValue:{control:{type:"object"},description:`
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
          strokeStyle: "3 4 10 4",
          strokeWidth: "2",
          type: "monotone" | "linear" | "step"
        }
      `},maxWidth:{control:{type:"number",min:200}},maxHeight:{control:{type:"number",min:200}},colorCollection:{control:{type:"object"}},margin:{control:{type:"object"}}},render:e=>{const l=[{label:"Janeiro",Vendas:4e3,Despesas:2400,Lucro:1250},{label:"Fevereiro",Vendas:3e3,Despesas:1398,Lucro:4250},{label:"Março",Vendas:2e3,Despesas:9800,Lucro:2250},{label:"Abril",Vendas:2780,Despesas:3908,Lucro:3250},{label:"Maio",Vendas:1890,Despesas:4800,Lucro:1250},{label:"Junho",Vendas:2390,Despesas:3800,Lucro:2250},{label:"Julho",Vendas:3490,Despesas:4300,Lucro:3250}];return o.createElement("div",{style:{width:"800px",height:"400px"}},o.createElement(r,{formatValue:e.formatValue,dataBody:l,maxWidth:e.maxWidth,maxHeight:e.maxHeight,colorCollection:e.colorCollection,margin:e.margin,styles:e.styles}))},args:{}},t={args:{colorCollection:{vendas:"#5fb612",despesas:"#c3291e",lucro:"#1f46c8"},formatValue:{type:"number"},styles:{strokeStyle:"",strokeWidth:"2",type:"monotone",activeDot:{r:8},legend:!0},margin:{top:20,right:20,left:80,bottom:20}}};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    colorCollection: {
      vendas: "#5fb612",
      despesas: "#c3291e",
      lucro: "#1f46c8"
    },
    formatValue: {
      "type": "number"
    },
    styles: {
      strokeStyle: "",
      strokeWidth: "2",
      type: "monotone",
      activeDot: {
        r: 8
      },
      legend: true
    },
    margin: {
      top: 20,
      right: 20,
      left: 80,
      bottom: 20
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,d as default};
