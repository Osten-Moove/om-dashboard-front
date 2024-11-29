import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { StackedBarDash } from "@om-dashboard/front-end";

export default {
  title: "Grafics/Stacked Bar Dash",
  component: StackedBarDash,
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
          legend: boolean,
          barSize: number,
          stackId: string
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
    hoverColors: {
      control: {
        type: "object", // Permite customizar as cores de hover
      },
    },
  },
  render: (args) => {
    const data: any = [
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
    ];
    return (
      <div style={{ width: "700px", height: "400px" }}>
        <StackedBarDash
          dataBody={data}
          maxWidth={args.maxWidth}
          maxHeight={args.maxHeight}
          colorCollection={args.colorCollection}
          styles={args.styles}
          formatValue={args.formatValue}
          hoverColors={args.hoverColors}
        />
      </div>
    );
  },
  args: {},
} as Meta;

export const Default: StoryObj = {
  args: {
    maxWidth: 700,
    maxHeight: 400,
    colorCollection: { Vendas: "#2545d6", Despesas: "#c12f2f", Lucro: "#2cb7a9" },
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
    hoverColors: { Vendas: "#000", Despesas: "#000", Lucro: "#000" },
  },
};
