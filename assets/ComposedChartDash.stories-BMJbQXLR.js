import{R as a}from"./index-DJO9vBfz.js";import{C as r}from"./index-XkLbokb0.js";import"./jsx-runtime-CkxqCPlQ.js";import"./tiny-invariant-CopsF_GD.js";const p={title:"Grafics/Composed Chart Dash",component:r,tags:["autodocs"],argTypes:{formatValue:{control:{type:"object"},description:`
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

        Entrada: 'line',
        Saída: 'line',
        Resultado: 'bar',
        config: {
          type: 'linear',
          legend: true,
          strokeWidth: 3,
          activeDot: { r: 8 },
          barSize: 38
        }
      `},maxWidth:{control:{type:"number",min:200}},maxHeight:{control:{type:"number",min:200}},colorCollection:{control:{type:"object"}},margin:{control:{type:"object"}}},render:e=>{const l=[{label:"Janeiro",Entrada:400,Saída:650,Resultado:-115},{label:"Fevereiro",Entrada:1700,Saída:967,Resultado:210},{label:"Março",Entrada:1930,Saída:1098,Resultado:380}];return a.createElement("div",{style:{width:"700px",height:"400px"}},a.createElement(r,{formatValue:e.formatValue,styles:e.styles,dataBody:l,maxWidth:e.maxWidth,maxHeight:e.maxHeight,colorCollection:e.colorCollection,margin:e.margin}))},args:{}},t={args:{styles:{Entrada:"line",Saída:"line",Resultado:"bar",config:{type:"linear",legend:!0,strokeWidth:3,activeDot:{r:8},barSize:38}},formatValue:{type:"currency",currency:"BRL",minimumFractionDigits:2},maxWidth:1920,colorCollection:{entrada:"#40c211",saída:"#9c0f0f",resultado:"#2a3d83"},margin:{top:20,right:20,left:80,bottom:20}}};var n,o,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    styles: {
      Entrada: 'line',
      Saída: 'line',
      Resultado: 'bar',
      config: {
        type: 'linear',
        legend: true,
        strokeWidth: 3,
        activeDot: {
          r: 8
        },
        barSize: 38
      }
    },
    formatValue: {
      type: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    },
    maxWidth: 1920,
    colorCollection: {
      entrada: '#40c211',
      saída: '#9c0f0f',
      resultado: '#2a3d83'
    },
    margin: {
      top: 20,
      right: 20,
      left: 80,
      bottom: 20
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,p as default};
