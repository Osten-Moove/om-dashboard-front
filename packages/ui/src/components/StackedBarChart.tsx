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

import { Colors } from "../styles/colors";
import { Fonts } from "../styles/fonts";

type dataRow = {
  label: string;
  [key: string]: string | number;
};

type ColorCollection = Record<string, string>;

interface StackedBarDashProps {
  dataBody: dataRow[];
  maxWidth?: number;
  maxHeight?: number;
  colorCollection?: ColorCollection | null;
  barSize?: number;
  hoverColors?: ColorCollection | null;
}

export function StackedBarDash({
  dataBody,
  maxWidth = 800,
  maxHeight = 600,
  colorCollection = null,
  barSize = 40,
  hoverColors = null,
}: StackedBarDashProps) {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  
  const objectFields = Object.keys(dataBody[0]);
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
      <BarChart width={maxWidth} height={maxHeight} data={dataBody}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          cursor={{ fill: "#f5f5f5" }}
          contentStyle={{ fontFamily: Fonts.openSans }}
        />
        <Legend />

        {referenceFields.map((item, index) => (
          <Bar
            key={index}
            stackId="a"
            dataKey={item}
            fill={hoveredBar === item ? HOVER_COLORS[index] : COLORS[index]}
            maxBarSize={barSize}
            onMouseOver={() => setHoveredBar(item)}
            onMouseOut={() => setHoveredBar(null)}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
