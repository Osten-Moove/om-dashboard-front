import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Rectangle,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Colors } from "../styles/colors";
import { Fonts } from "../styles/fonts";

type dataRow = {
  label: string;
  [key: string]: string | number;
};

type ColorCollection = Record<string, string>;

interface ComposedChartProps {
  dataBody: dataRow[];
  maxWidth?: number;
  maxHeight?: number;
  colorCollection?: ColorCollection | null;
}

export function ComposedChartDash({
  dataBody,
  maxWidth = 800,
  maxHeight = 600,
  colorCollection = null,
}: ComposedChartProps) {
  const objectFields = Object.keys(dataBody[0]);
  const axisLabelKey = objectFields[0];

  const referenceFields = objectFields.filter((item) => item !== "label");

  const COLORS =
    colorCollection === null
      ? Object.values(Colors)
      : Object.values(colorCollection);

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      maxHeight={maxHeight}
      style={{
        maxWidth: `${maxWidth}px`,
        fontFamily: Fonts.openSans,
        fontWeight: 600,
      }}
    >
      <ComposedChart width={500} height={400} data={dataBody} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 40,
      }}>
        <CartesianGrid stroke="#cdcdcd" />
        <XAxis dataKey={axisLabelKey} />
        <YAxis type="number"
          tickFormatter={(value) => {
            return new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(value);
          }}
        />
        <Tooltip
          formatter={(value) => {
            const numericValue = typeof value === 'number' ? value : parseFloat(value as string) || 0;
            return new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(numericValue);
          }}
        />

        <Legend />
        <Line type="monotone" dataKey="entrada" stroke="#00ff55" />
        <Line type="monotone" dataKey="saída" stroke="#e14043" />
        <Bar dataKey="resultado" barSize={38} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
