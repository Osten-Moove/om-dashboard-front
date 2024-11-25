import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ComposedChartDash } from "@om-dashboard/front-end";

export default {
  title: "Grafics/Composed Chart Dash",
  component: ComposedChartDash,
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
  },
  render: (args) => {
    const data = [
      {
        label: 'Janeiro',
        entrada: 590,
        'saída': 800,
        resultado: -115,
      },
      {
        label: 'Fevereiro',
        entrada: 1700,
        'saída': 967,
        resultado: 210,
      },
      {
        label: 'Março',
        entrada: 1930,
        'saída': 1098,
        resultado: 380,
      },
    ];

    return (
      <div style={{ width: "700px", height: "400px" }}>
        <ComposedChartDash
          dataBody={data}
          maxWidth={args.maxWidth}
          maxHeight={args.maxHeight}
          colorCollection={args.colorCollection}
        />
      </div>
    );
  },
  args: {},
} as Meta;

export const Default: StoryObj = {
  args: {
    maxWidth: 1920
  },
};
