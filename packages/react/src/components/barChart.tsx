import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Rectangle,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { colors, fonts } from "@osten-moove/tokens";

type dataRow = {
  label: string;
  [key: string]: string | number;
};

interface BarChartDashProps {
  dataBody: dataRow[];
  maxWidth?: number;
  maxHeight?: number;
}

export function BarChartDash({
  dataBody,
  maxWidth = 800,
  maxHeight = 600,
}: BarChartDashProps) {
  const objectFields = Object.keys(dataBody[0]);
  const axisLabelKey = objectFields[0];

  const referenceFields = objectFields.filter((item) => item !== "label");

  const COLORS = Object.values(colors);

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      maxHeight={maxHeight}
      style={{
        maxWidth: `${maxWidth}px`,
        fontFamily: fonts.openSans,
        fontWeight: 600,
      }}
    >
      <BarChart width={maxWidth} height={maxHeight} data={dataBody}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey={axisLabelKey} />

        <YAxis />
        <Tooltip />
        <Legend />

        {referenceFields.map((item, index) => {
          return (
            <Bar
              key={index}
              dataKey={item}
              fill={COLORS[index]}
              radius={6}
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}
