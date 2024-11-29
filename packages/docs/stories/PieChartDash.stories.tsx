import { PieChartDash } from "@om-dashboard/front-end";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof PieChartDash> = {
  title: "Grafics/Pie Chart Dash",
  component: PieChartDash,
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
      `,
    },
    colorCollection: {
      control: {
        type: "object",
      },
    },
    styles: {
      control: {
        type: 'object'
      },
      description: `
        OPÇÕES:

        {
          legend: true
          size: number
        }
      `,
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
          data={data}
          colorCollection={args.colorCollection}
          styles={args.styles}
          formatValue={args.formatValue}
        />
      </div>
    );
  },
};

export default meta;

export const Default: StoryObj<typeof PieChartDash> = {
  args: {
    colorCollection: ["#000", "#00ff00", "#0000ff", "#ffff00"],
    styles: {
      legend: true,
      size: 500
    },
    formatValue: {
      "type": "currency",
      "currency": "BRL",
      "minimumFractionDigits": 2
    }
  },
};
