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
    const data = [
      {
        label: "January",
        Vendas: 4000,
        Despezas: 2400,
        Lucro: 1250,
      },
      {
        label: "February",
        Vendas: 3000,
        Despezas: 1398,
        Lucro: 4250,
      },
      {
        label: "March",
        Vendas: 2000,
        Despezas: 9800,
        Lucro: 2250,
      },
      {
        label: "April",
        Vendas: 2780,
        Despezas: 3908,
        Lucro: 3250,
      },
      {
        label: "May",
        Vendas: 1890,
        Despezas: 4800,
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
        />
        <BarChartDash
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
    colorCollection: { Vendas: "#d64325" }, // Cores padrão
    hoverColors: { Vendas: "#82c4ca" }, // Cores de hover padrão
  },
} as Meta;

export const Default: StoryObj = {
  args: {},
};
