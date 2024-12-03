import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { StackedBarDash } from "@om-dashboard/front-end";

export default {
  title: "Grafics/Stacked Bar Dash",
  component: StackedBarDash,
  tags: ["autodocs"],
  argTypes: {
    margin: {
      control: {
        type: "object",
      },
    },
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
        type: "object",
      },
    },
  },
  render: (args) => {
    const data: any = [
      {
        label: "Janeiro",
        Entrada: 4000,
        Faturamento: 2400,
      },
      {
        label: "Fevereiro",
        Entrada: 3000,
        Faturamento: 1398,
      },
      {
        label: "Março",
        Entrada: 2000,
        Faturamento: 9800,
      },
      {
        label: "Abril",
        Entrada: 2780,
        Faturamento: 3908,
      },
      {
        label: "Maio",
        Entrada: 1890,
        Faturamento: 4800,
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
          margin={args.margin}
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
    margin: {
      top: 20,
      right: 20,
      left: 80,
      bottom: 20,
    },
  },
};
