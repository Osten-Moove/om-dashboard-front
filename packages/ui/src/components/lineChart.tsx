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

import { Margin } from 'recharts/types/util/types';
import { Collection, dataRow, Format } from "../../src/types";
import { format } from '../helpers/format';
import { Colors } from "../styles/colors";
import { Fonts } from "../styles/fonts";

type Styles = {
  strokeStyle: string
  strokeWidth: string,
  type: "monotone" | "linear" | "step";
  activeDot?: Record<string, number> | { r: number };
  legend: boolean;
}

interface LineChartDashProps {
  dataBody: dataRow[];
  maxWidth?: number;
  maxHeight?: number;
  colorCollection?: Collection | null;
  margin: Margin
  styles: Styles,
  formatValue: Format,
}

export function LineChartDash({
  dataBody,
  maxWidth = 800,
  maxHeight = 800,
  colorCollection = null,
  margin,
  styles,
  formatValue,
}: LineChartDashProps) {
  const objectFields = dataBody && dataBody[0] ? Object.keys(dataBody[0]) : [];

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

        {styles.legend && <Legend />}

        {referenceFields.map((item, index) => {
          return (
            <Line
              key={index}
              type={styles.type}
              dataKey={item}
              stroke={COLORS[index]}
              strokeWidth={styles.strokeWidth}
              activeDot={styles.activeDot}
              strokeDasharray={styles.strokeStyle}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}
