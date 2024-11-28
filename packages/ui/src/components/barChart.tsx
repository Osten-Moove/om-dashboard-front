import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { useState } from "react";

import { Margin } from 'recharts/types/util/types';
import { Colors } from "../styles/colors";
import { Fonts } from "../styles/fonts";

type dataRow = {
  label: string;
  [key: string]: string | number;
};

type Collection = Record<string, string>;

interface BarChartDashProps {
  dataBody: dataRow[];
  maxWidth?: number;
  maxHeight?: number;
  colorCollection?: Collection | null;
  barSize?: number;
  hoverColors?: Collection | null;
  margin: Margin
}

export function BarChartDash({
  dataBody,
  maxWidth = 800,
  maxHeight = 600,
  colorCollection = null,
  barSize = 40,
  hoverColors = null,
  margin,
}: BarChartDashProps) {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  const objectFields = Object.keys(dataBody[0]);
  const axisLabelKey = objectFields[0];
  const referenceFields = objectFields.filter((item) => item !== "label");

  const COLORS =
    colorCollection === null
      ? Object.values(Colors)
      : Object.values(colorCollection);

  const HOVER_COLORS =
    hoverColors === null
      ? COLORS.map((color) => `${color}CC`)
      : Object.values(hoverColors);

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
      <BarChart
        width={maxWidth}
        height={maxHeight}
        data={dataBody}
        margin={margin}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey={axisLabelKey} />

        <YAxis
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

        {referenceFields.map((item, index) => (
          <Bar
            key={index}
            dataKey={item}
            fill={hoveredBar === item ? HOVER_COLORS[index] : COLORS[index]}
            radius={6}
            maxBarSize={barSize}
            onMouseOver={() => setHoveredBar(item)}
            onMouseOut={() => setHoveredBar(null)}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
