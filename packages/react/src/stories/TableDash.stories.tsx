import type { Meta, StoryObj } from "@storybook/react";
import { TableDash } from "../components/tableDash";

export default {
  title: "Grafics/Table Dash",
  component: TableDash,
  tags: ["autodocs"],
  argTypes: {
    footerText: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "select",
      },
    },
  },
  render: (args) => {
    const data = {
      headers: [
        "Pontos Obtidos",
        "Pontuação Máxima",
        "Pré",
        "Jan",
        "Fev",
        "Mar",
        "Q1",
      ],
      dataBody: [
        {
          "Pontos Obtidos": "Lorem ipsum dolor sit amet",
          "Pontuação Máxima": "100%",
          Pré: "Pré",
          Jan: "90%",
          Fev: "88%",
          Mar: "95%",
          Q1: "91%",
        },
        {
          "Pontos Obtidos": "Lorem ipsum dolor sit amet",
          "Pontuação Máxima": "100%",
          Pré: "Pré",
          Jan: "80%",
          Fev: "75%",
          Mar: "78%",
          Q1: "78%",
        },
        {
          "Pontos Obtidos": "Lorem ipsum dolor sit amet",
          "Pontuação Máxima": "100%",
          Pré: "Pré",
          Jan: "95%",
          Fev: "92%",
          Mar: "89%",
          Q1: "92%",
        },
        {
          "Pontos Obtidos": "Lorem ipsum dolor sit amet",
          "Pontuação Máxima": "100%",
          Pré: "Pré",
          Jan: "70%",
          Fev: "60%",
          Mar: "75%",
          Q1: "68%",
        },
        {
          "Pontos Obtidos": "Lorem ipsum dolor sit amet",
          "Pontuação Máxima": "100%",
          Pré: "Pré",
          Jan: "100%",
          Fev: "100%",
          Mar: "100%",
          Q1: "100%",
        },
      ],
    };

    return (
      <TableDash
        headers={data.headers}
        dataBody={data.dataBody}
        variant={args.variant}
      />
    );
  },
  args: {},
} as Meta;

export const Default: StoryObj = {
  args: {},
};
