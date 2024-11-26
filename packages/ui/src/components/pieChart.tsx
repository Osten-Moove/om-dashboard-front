import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { Fonts } from "../styles/fonts";

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

type PieChartDashData = {
  name: string;
  value: number;
};

type ColorCollection = Record<string, string>;

interface PieChartDashProps {
  size?: number;
  data: PieChartDashData[];
  colorCollection?: string[] | ColorCollection;
  legend?: boolean;
}

export function PieChartDash({ size = 600, data, colorCollection, legend }: PieChartDashProps) {
  const calcToDefineOuterRadius = Math.round((size / 700) * 200);
  const calcToDefineFontSizeInText = Math.round((size / 700) * 28);

  console.log('colorCollection', colorCollection)

  // const COLORS =

  const RADIAN = Math.PI / 180;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={size} height={size}>
        <Tooltip
          contentStyle={{
            fontSize: `${calcToDefineFontSizeInText * 0.7}px`,
            fontFamily: Fonts.openSans,
          }}
          formatter={(value: number, name: string) => [`${value}`, name]}
        />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          legendType="square"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            percent,
            index,
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
        {legend && (
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              fontSize: `${calcToDefineFontSizeInText * 0.6}px`,
              fontFamily: Fonts.openSans,
            }}
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}
