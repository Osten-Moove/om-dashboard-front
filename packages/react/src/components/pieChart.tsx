import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { colors, fonts } from "@osten-moove/tokens";

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

interface PieChartDashProps {
  size?: number;
  data: PieChartDashData[];
}

export function PieChartDash({ size = 600, data }: PieChartDashProps) {
  const calcToDefineOuterRadius = Math.round((size / 700) * 200);
  const calcToDefineFontSizeInText = Math.round((size / 700) * 28);

  const COLORS = Object.values(colors);

  const RADIAN = Math.PI / 180;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={size} height={size}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
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
                  fontFamily: fonts.openSans,
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
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
