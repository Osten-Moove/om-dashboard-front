import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { LineChartDash } from "@om-dashboard/front-end";

export default {
  title: "Grafics/Line Chart Dash",
  component: LineChartDash,
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
  },
  render: (args) => {
    const data = [
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
      {
        label: "June",
        Vendas: 2390,
        Despesas: 3800,
        Lucro: 2250,
      },
      {
        label: "July",
        Vendas: 3490,
        Despesas: 4300,
        Lucro: 3250,
      },
    ];

    return (
      <div style={{ width: "800px", height: "400px" }}>
        <LineChartDash
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
    colorCollection: {
      vendas: "#5fb612",
      despesas: "#c3291e",
      lucro: "#1f46c8"
    },
    margin: {
      top: 20,
      right: 20,
      left: 80,
      bottom: 20,
    },
  },
};

