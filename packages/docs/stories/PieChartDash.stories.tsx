import { PieChartDash } from "@om-dashboard/front-end";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof PieChartDash> = {
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
    },
    colorCollection: {
      control: {
        type: "object",
      },
    },
    legend: {
      control: {
        type: "boolean",
      },
    },
  },
  render: (args) => {
    const data = [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 500 },
      { name: "Group C", value: 600 },
      { name: "Group D", value: 750 },
    ];

    return (
      <div style={{ width: "400px", height: "400px", margin: "auto" }}>
        <PieChartDash
          size={args.size}
          data={data}
          colorCollection={args.colorCollection}
          legend={args.legend}
        />
      </div>
    );
  },
};

export default meta;

export const Default: StoryObj<typeof PieChartDash> = {
  args: {
    colorCollection: ["#000", "#00ff00", "#0000ff", "#ffff00"],
    legend: true,
  },
};
