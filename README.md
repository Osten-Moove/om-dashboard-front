# QuickDash

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Stack Utilizada](#stack-utilizada)
- [Componentes](#componentes)
- [Estrutura de dados e Props](#Estrutura-de-dados-e-Props)
- [Pré-requisitos](#pré-requisitos)

## Sobre o Projeto

QuickDash é uma ferramenta desenvolvida para simplificar a criação e implementação de gráficos em aplicações. Seu design modular e flexível permite uma integração rápida e eficiente, proporcionando aos desenvolvedores uma experiência intuitiva durante o processo de uso e implementação. Ao adotar um padrão de fácil customização, o QuickDash não só acelera o desenvolvimento, mas também melhora a produtividade, garantindo uma implementação ágil e sem complexidade excessiva.

## Stack Utilizada

**Front-end:**

- [react](https://react.dev/)
- [styled-components](https://styled-components.com/)
- [recharts](https://recharts.org/en-US)
- [polished](https://polished.js.org/)
- [storybook](https://storybook.js.org/)

## Componentes

| Nome      | Descrição                  |
| --------- | -------------------------- |
| BarChart  | Gráfico de Barras          |
| LineChart | Gráfico de Linha           |
| PieChart  | Modelo de Gráfico de Pizza |
| TableDash | Modelo de Tabela           |

## Estrutura de dados e Props

- [BarChart](#BarChart)
- [LineChart](#LineChart)
- [PieChart](#PieChart)
- [TableDash](#TableDash)

## BarChart

```TS
type dataRow = {
  label: string;
  [key: string]: string | number;
};

interface BarChartDashProps {
  dataBody: dataRow[];
  maxWidth?: number;
  maxHeight?: number;
}
```

## LineChart

```TS
type dataRow = {
  label: string;
  [key: string]: string | number;
};

interface LineChartDashProps {
  dataBody: dataRow[];
  maxWidth?: number;
  maxHeight?: number;
}
```

## PieChart

```TS
type PieChartDashData = {
  name: string;
  value: number;
};

interface PieChartDashProps {
  size?: number;
  data: PieChartDashData[];
}
```

## TableDash

```TS
type DataRow<T extends Array<string>> = {
  [key in T[number]]: number | string;
};

type TableDashProps<T extends Array<string>> = {
  headers: T;
  dataBody: DataRow<T>[];
  variant: "light" | "dark";
};
```

## Pré-requisitos

Para começar a trabalhar no projeto do Coffee-Delivery, certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- **Node.js:** O projeto depende do Node.js para execução de scripts. Se você não tiver o Node.js instalado, poderá baixá-lo em [https://nodejs.org/](https://nodejs.org/).
