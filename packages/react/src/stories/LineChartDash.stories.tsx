import type { Meta, StoryObj } from "@storybook/react";
import { LineChartDash } from "../components/lineChart";

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
      {
        label: "June",
        Vendas: 2390,
        Despezas: 3800,
        Lucro: 2250,
      },
      {
        label: "July",
        Vendas: 3490,
        Despezas: 4300,
        Lucro: 3250,
      },
    ];

    return (
      <div style={{ width: "800px", height: "400px" }}>
        <LineChartDash
          dataBody={data}
          maxWidth={args.maxWidth}
          maxHeight={args.maxHeight}
        />
      </div>
    );
  },
  args: {},
} as Meta;

export const Default: StoryObj = {
  args: {},
};
