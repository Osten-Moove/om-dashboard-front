import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { BarChartDash } from "@om-dashboard/front-end";

export default {
  title: "Grafics/Bar Chart Dash",
  component: BarChartDash,
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
    margin: {
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
    ];
    return (
      <div style={{ width: "700px", height: "400px" }}>
        <BarChartDash
          dataBody={data}
          maxWidth={args.maxWidth}
          maxHeight={args.maxHeight}
          colorCollection={args.colorCollection}
          barSize={args.barSize}
          hoverColors={args.hoverColors}
          margin={args.margin}
        />
      </div>
    );
  },
  args: {
    maxWidth: 700,
    maxHeight: 400,
    barSize: 40,
    colorCollection: { Vendas: "#387a0f", Despesas: "#ae2020", Lucro: "#0d2f85" },
    hoverColors: { Vendas: "#000", Despesas: "#000", Lucro: "#000" },
    margin: {
      top: 20,
      right: 20,
      left: 80,
      bottom: 20,
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {},
};
