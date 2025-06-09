import type { TrendDataPoint } from '@/app/lib/types';
import TrendChart from './TrendChart'; // Import the new chart component

interface TrendsDisplayProps {
  trends: TrendDataPoint[];
}

export default function TrendsDisplay({ trends }: TrendsDisplayProps) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Spending Trends</h3>
      <TrendChart data={trends} />
      {/* The list below was for textual representation, now replaced by the chart.
          It can be removed or kept if detailed textual data alongside the chart is desired.
          For now, I'm removing it to give prominence to the chart.
      */}
      {/*
      <ul className="mt-2 text-sm">
        {trends.map(trend => (
          <li key={trend.date}>{trend.date}: ${trend.value.toLocaleString()}</li>
        ))}
      </ul>
      */}
    </div>
  );
}
