import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface RadarData {
  skill: string;
  level: number;
  fullMark: number;
}

interface RadarChartProps {
  data: RadarData[];
  className?: string;
}

const SkillRadarChart = ({ data, className }: RadarChartProps) => {
  return (
    <div className={`w-full h-96 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid 
            stroke="hsl(var(--border))" 
            strokeOpacity={0.3}
          />
          <PolarAngleAxis 
            dataKey="skill" 
            tick={{
              fontSize: 12,
              fill: 'hsl(var(--muted-foreground))',
              fontWeight: 500
            }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{
              fontSize: 10,
              fill: 'hsl(var(--muted-foreground))',
            }}
            axisLine={false}
          />
          <Radar
            name="Skills"
            dataKey="level"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.1}
            strokeWidth={2}
            dot={{
              r: 4,
              fill: 'hsl(var(--primary))',
              stroke: 'hsl(var(--background))',
              strokeWidth: 2
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillRadarChart;