"use client";

import { useDashboardHistory } from "../app/hooks/useDashboardHistory";

export default function DashboardHistoryCard() {
    const history = useDashboardHistory();

    if (!history.length) return null;

    return (
        <div className="rounded-lg border p-4 mt-4">
            <div className="font-bold mb-2">
                AI Decision History
            </div>

            {history.slice(0, 5).map((item: any, index: number) => (
                <div
                    key={index}
                    className="border-b py-2"
                >
                    <div>
                        <b>{item.symbol}</b> - {item.recommendation}
                    </div>

                    <div>Score: {item.score}</div>

                    <div className="text-sm opacity-70">
                        {item.time}
                    </div>
                </div>
            ))}
        </div>
    );
}

