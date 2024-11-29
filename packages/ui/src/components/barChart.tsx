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
import { format } from '../helpers/format';
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
  formatValue: any[]
}

export function BarChartDash({
  dataBody,
  maxWidth = 800,
  maxHeight = 600,
  colorCollection = null,
  barSize = 40,
  hoverColors = null,
  margin,
  formatValue,
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

        <YAxis type="number"
          tickFormatter={(value) => format(value as number, formatValue)}
        />
        <Tooltip
          formatter={(value) => format(value as number, formatValue)}
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
