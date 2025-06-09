import type { TrendDataPoint } from '@/app/lib/types';
import TrendChart from './TrendChart';

interface TrendsDisplayProps {
  trends: TrendDataPoint[];
}

export default function TrendsDisplay({ trends }: TrendsDisplayProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
      <h3 className="text-xl font-semibold text-neutral-700 mb-4">Spending Trends</h3>
      <div className="h-72"> {/* Set a specific height for the chart container */}
        <TrendChart data={trends} />
      </div>
    </div>
  );
}
