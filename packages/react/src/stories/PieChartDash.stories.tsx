import type { Meta, StoryObj } from "@storybook/react";

import { PieChartDash } from "../components/pieChart";

export default {
  title: "Grafics/Pie Chart Dash",
  component: PieChartDash,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "number",
        min: 200,
        max: 1440,
      },
      defaultValue: 600,
    },
  },
  render: (args) => {
    const data = [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 500 },
      { name: "Group C", value: 600 },
      { name: "Group D", value: 400 },
    ];

    return (
      <div style={{ width: "400px", height: "400px", margin: "auto auto" }}>
        <PieChartDash size={args.size} data={data} />
      </div>
    );
  },
  args: {},
} as Meta;

export const Default: StoryObj = {
  args: {},
};
