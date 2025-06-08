import type { TrendDataPoint } from '@/app/lib/types';

interface TrendsDisplayProps {
  trends: TrendDataPoint[];
}

export default function TrendsDisplay({ trends }: TrendsDisplayProps) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Spending Trends</h3>
      {/* Placeholder for graph */}
      <div className="bg-gray-200 h-40 flex items-center justify-center rounded">
        <p className="text-gray-500">[Trend Graph Placeholder]</p>
      </div>
      <ul className="mt-2 text-sm">
        {trends.map(trend => (
          <li key={trend.date}>{trend.date}: ${trend.value.toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}
