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

import { Colors } from "../styles/colors";
import { Fonts } from "../styles/fonts";

type ArgsConfig = {
  type: "bar" | 'line',
  value: string | number
  color: string
}

type dataRow = {
  label: string;
} & {
  [key: string]: ArgsConfig;
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

  const formattedBodyData = dataBody.reduce((acc: any, item: dataRow) => {
    const result: any = { label: item.label };

    Object.keys(item).forEach((key) => {
      if (key !== 'label') {
        const formattedKey = key.charAt(0) + key.slice(1);
        result[formattedKey] = item[key].value;
      }
    });

    acc.push(result);
    return acc;
  }, []);

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
      <ComposedChart
        width={maxWidth}
        height={maxHeight}
        data={formattedBodyData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 40,
        }}
      >
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

        {
          referenceFields.map((fieldKey, index) => {
            const fieldType = dataBody[0][fieldKey].type;

            if (fieldType === "line") {
              return (
                <Line
                  key={`line-${fieldKey}-${index}`}
                  type="monotone"
                  dataKey={fieldKey}
                  stroke={COLORS[index]}
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                />
              );
            }

            if (fieldType === "bar") {
              return (
                <Bar
                  key={`bar-${fieldKey}-${index}`}
                  dataKey={fieldKey}
                  barSize={38}
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
