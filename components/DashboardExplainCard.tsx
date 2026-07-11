"use client";

import { useDashboardExplain } from "../app/hooks/useDashboardExplain";

export default function DashboardExplainCard() {
    const explanation = useDashboardExplain();

    if (!explanation) return null;

    return (
        <div className="rounded-lg border p-4 mt-4">
            <div className="font-bold mb-2">
                AI Explanation
            </div>

            <div>
                {explanation.explanation}
            </div>
        </div>
    );
}
