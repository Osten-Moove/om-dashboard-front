import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { format } from '../helpers/format';
import { Fonts } from "../styles/fonts";
import { Collection, Format } from '../types';

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

type Styles = {
  legend?: boolean
  size?: number
  legendType?: 'line' | 'square' | 'circle' | 'rect' | 'diamond' | 'star' | 'triangle' | 'wye'
}

type PieChartDashData = {
  name: string;
  value: number;
};

interface PieChartDashProps {
  data: PieChartDashData[];
  colorCollection?: string[] | Collection;
  styles?: Styles
  formatValue?: Format
}

export function PieChartDash({
  styles = {
    legend: true,
    legendType: 'square',
  },
  data,
  colorCollection,
  formatValue = {
    type: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  },
}: PieChartDashProps) {
  const { size = 500, legendType } = styles || {};
  const calcToDefineOuterRadius = Math.round((size / 700) * 200);
  const calcToDefineFontSizeInText = Math.round((size / 700) * 28);

  const RADIAN = Math.PI / 180;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={styles.size} height={styles.size}>
        <Tooltip
          formatter={(value) => format(value as number, formatValue)}
        />

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          legendType={legendType}
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            percent,
          }: CustomizedLabelProps) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="white"
                style={{
                  fontSize: `${calcToDefineFontSizeInText}px`,
                  fontFamily: Fonts.openSans,
                  fontWeight: 700,
                }}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}
          outerRadius={calcToDefineOuterRadius}
          fill="#8884d8"
          dataKey="value"
        >
          {colorCollection &&
            data.map((_, index) => {
              const color =
                Array.isArray(colorCollection)
                  ? colorCollection[index % colorCollection.length]
                  : colorCollection[data[index].name];
              return <Cell key={`cell-${index}`} fill={color} />;
            })}
        </Pie>

        {styles.legend && <Legend />}

      </PieChart>
    </ResponsiveContainer>
  );
}
