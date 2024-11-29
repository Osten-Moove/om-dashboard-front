import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { LineChartDash } from "@om-dashboard/front-end";

export default {
  title: "Grafics/Line Chart Dash",
  component: LineChartDash,
  tags: ["autodocs"],
  argTypes: {
    formatValue: {
      control: {
        type: 'object'
      },
      description: `
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
      `,
    },
    styles: {
      control: {
        type: 'object'
      },
      description: `
        OPÇÕES:

        {
          strokeStyle: "3 4 10 4",
          strokeWidth: "2",
          type: "monotone"
        }
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
    const data = [
      {
        label: "Janeiro",
        Vendas: 4000,
        Despesas: 2400,
        Lucro: 1250,
      },
      {
        label: "Fevereiro",
        Vendas: 3000,
        Despesas: 1398,
        Lucro: 4250,
      },
      {
        label: "Março",
        Vendas: 2000,
        Despesas: 9800,
        Lucro: 2250,
      },
      {
        label: "Abril",
        Vendas: 2780,
        Despesas: 3908,
        Lucro: 3250,
      },
      {
        label: "Maio",
        Vendas: 1890,
        Despesas: 4800,
        Lucro: 1250,
      },
      {
        label: "Junho",
        Vendas: 2390,
        Despesas: 3800,
        Lucro: 2250,
      },
      {
        label: "Julho",
        Vendas: 3490,
        Despesas: 4300,
        Lucro: 3250,
      },
    ];

    return (
      <div style={{ width: "800px", height: "400px" }}>
        <LineChartDash
          formatValue={args.formatValue}
          dataBody={data}
          maxWidth={args.maxWidth}
          maxHeight={args.maxHeight}
          colorCollection={args.colorCollection}
          margin={args.margin}
          styles={args.styles}
        />
      </div>
    );
  },
  args: {},
} as Meta;

export const Default: StoryObj = {
  args: {
    colorCollection: {
      vendas: "#5fb612",
      despesas: "#c3291e",
      lucro: "#1f46c8"
    },
    formatValue: {
      "type": "number",
    },
    styles: {
      strokeStyle: "",
      strokeWidth: "2",
      type: "monotone",
      activeDot: { r: 8 },
      legend: true
    },
    margin: {
      top: 20,
      right: 20,
      left: 80,
      bottom: 20,
    },
  },
};

