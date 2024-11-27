import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { StackedBarDash } from "@om-dashboard/front-end";

export default {
  title: "Grafics/Stacked Bar Dash",
  component: StackedBarDash,
  tags: ["autodocs"],
  argTypes: {
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
    barSize: {
      control: {
        type: "number",
        min: 10,
        max: 500,
        step: 10,
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
        label: "January",
        Vendas: 4000,
        Despesas: 2400,
        Lucro: 1250,
      },
      {
        label: "February",
        Vendas: 3000,
        Despesas: 1398,
        Lucro: 4250,
      },
      {
        label: "March",
        Vendas: 2000,
        Despesas: 9800,
        Lucro: 2250,
      },
      {
        label: "April",
        Vendas: 2780,
        Despesas: 3908,
        Lucro: 3250,
      },
      {
        label: "May",
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
          barSize={args.barSize}
          hoverColors={args.hoverColors}
        />
      </div>
    );
  },
  args: {
    maxWidth: 700,
    maxHeight: 400,
    barSize: 40,
    colorCollection: { Vendas: "#2545d6", Despesas: "#c12f2f", Lucro: "#2cb7a9" },
    hoverColors: { Vendas: "#000", Despesas: "#000", Lucro: "#000" },
  },
} as Meta;

export const Default: StoryObj = {
  args: {},
};
