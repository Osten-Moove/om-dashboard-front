import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Margin } from 'recharts/types/util/types';
import { format } from '../helpers/format';
import { Colors } from "../styles/colors";
import { Fonts } from "../styles/fonts";
import { Collection, dataRow, Format } from '../types';

type ChartType = 'line' | 'bar';

type Styles = {
  config?: {
    type?: 'monotone' | 'linear' | 'step';
    legend?: boolean;
    strokeWidth?: number;
    activeDot?: { r: number };
    barSize?: number;
  };
  [key: string]: ChartType | undefined | { [key: string]: any };
};

interface ComposedChartProps {
  dataBody: dataRow[];
  styles?: Styles;
  maxWidth?: number;
  maxHeight?: number;
  colorCollection?: Collection | null;
  margin?: Margin;
  formatValue?: Format;
}

export function ComposedChartDash({
  dataBody,
  maxWidth = 800,
  maxHeight = 600,
  colorCollection = null,
  margin,
  styles = {
    config: {
      type: 'linear',
      legend: true,
      strokeWidth: 3,
      activeDot: { r: 8 },
      barSize: 38,
    },
  },
  formatValue = {
    type: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  },
}: ComposedChartProps) {

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
        fontFamily: Fonts.openSans,
        fontWeight: 600,
      }}
    >
      <ComposedChart
        width={maxWidth}
        height={maxHeight}
        data={dataBody}
        margin={margin}
      >
        <CartesianGrid stroke="#cdcdcd" />

        <XAxis dataKey={axisLabelKey} />

        <YAxis type="number"
          tickFormatter={(value) => format(value as number, formatValue)}
        />

        <Tooltip
          formatter={(value) => format(value as number, formatValue)}
        />

        {styles && styles.config!.legend && <Legend />}

        {
          referenceFields.map((fieldKey: string, index: number) => {
            const fieldType = styles[fieldKey]

            if (fieldType === "line") {
              const { type, strokeWidth, activeDot } = styles.config || {};
              return (
                <Line
                  key={`line-${fieldKey}-${index}`}
                  type={type}
                  dataKey={fieldKey}
                  stroke={COLORS[index]}
                  strokeWidth={strokeWidth}
                  activeDot={activeDot}
                />
              );
            }

            if (fieldType === "bar") {
              const { barSize } = styles.config || {};

              return (
                <Bar
                  key={`bar-${fieldKey}-${index}`}
                  dataKey={fieldKey}
                  barSize={barSize}
                  fill={COLORS[index]}
                />
              );
            }

            return null;
          })
        }

      </ComposedChart>
    </ResponsiveContainer>
  );
}
