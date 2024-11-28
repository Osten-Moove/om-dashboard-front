import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ComposedChartDash } from "@om-dashboard/front-end";

export default {
  title: "Grafics/Composed Chart Dash",
  component: ComposedChartDash,
  tags: ["autodocs"],
  argTypes: {
    formatValue: {
      control: {
        type: 'object'
      },
      description: `
        OPÇÕES:

        [
          {
            "type": "currency",
            "currency": "BRL",
            "minimumFractionDigits": 2
          }
        ]

        [
          {
            "type": "number"
          }
        ]

        [
          {
            "type": "percentage"
          }
        ]
      `,
    },
    styles: {
      control: {
        type: 'object'
      },
      description: `
        OPÇÕES:

        line, bar
      `,
    },
    maxWidth: {
      control: {
        type: "number",
        min: 200,
      },
    },
    maxHeight: {
      control: {
        type: "number",
        min: 200,
      },
    },
    colorCollection: {
      control: {
        type: "object",
      },
    },
    margin: {
      control: {
        type: "object",
      },
    },
  },

  render: (args) => {
    const data: any = [
      {
        label: 'Janeiro',
        Entrada: {
          type: 'line',
          value: 400,
        },
        'Saída': {
          type: 'line',
          value: 650,
        },
        Resultado: {
          type: 'bar',
          value: -115,
        },
      },
      {
        label: 'Fevereiro',
        Entrada: {
          type: 'line',
          value: 1700,
        },
        'Saída': {
          type: 'line',
          value: 967,
        },
        Resultado: {
          type: 'bar',
          value: 210,
        },
      },
      {
        label: 'Março',
        Entrada: {
          type: 'line',
          value: 1930,
        },
        'Saída': {
          type: 'line',
          value: 1098,
        },
        Resultado: {
          type: 'bar',
          value: 380,
        },
      },
    ];

    return (
      <div style={{ width: "700px", height: "400px" }}>
        <ComposedChartDash
          formatValue={args.formatValue}
          styles={args.styles}
          dataBody={data}
          maxWidth={args.maxWidth}
          maxHeight={args.maxHeight}
          colorCollection={args.colorCollection}
          margin={args.margin}
        />
      </div>
    );
  },
  args: {},
} as Meta;

export const Default: StoryObj = {
  args: {
    styles: {
      Entrada: 'line',
      Saída: 'line',
      Resultado: 'bar'
    },
    formatValue: [
      {
        type: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      },
    ],
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
      bottom: 20,
    },
  },
};
