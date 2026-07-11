"use client";

import { useDashboardRealtime } from "../app/hooks/useDashboardRealtime";



interface Props {
  stocks: any[];
}

export default function RealtimeDashboard({ stocks }: Props) {
  const data = useDashboardRealtime(stocks);

  return (
    <div className="space-y-4">
      {data?.map((item: any) => (
        <div
          key={item.symbol}
          className="border rounded-lg p-4"
        >
          <div className="font-bold">{item.symbol}</div>

          <div>Price: {item.price}</div>

          <div>AI Score: {item.aiScore}</div>

          <div>Recommendation: {item.recommendation}</div>
        </div>
      ))}
    </div>
  );
}
