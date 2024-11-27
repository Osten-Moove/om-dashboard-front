import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
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

interface LineChartDashProps {
  dataBody: dataRow[];
  maxWidth?: number;
  maxHeight?: number;
  colorCollection?: ColorCollection | null;
}

export function LineChartDash({
  dataBody,
  maxWidth = 800,
  maxHeight = 800,
  colorCollection = null,
}: LineChartDashProps) {
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
        padding: "1rem",
        fontFamily: Fonts.openSans,
        fontWeight: 600,
      }}
    >
      <LineChart
        width={maxWidth}
        height={maxHeight}
        data={dataBody}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey={axisLabelKey} />

        <YAxis />
        <Tooltip />
        <Legend />

        {referenceFields.map((item, index) => {
          return (
            <Line
              key={index}
              type="monotone"
              dataKey={item}
              stroke={COLORS[index]}
              strokeWidth={2}
              activeDot={{ r: 8 }}
              strokeDasharray="3 4 10 4"
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}
