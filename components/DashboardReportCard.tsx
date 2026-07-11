"use client";

import { useDashboardReport } from "../app/hooks/useDashboardReport";

export default function DashboardReportCard() {
    const report = useDashboardReport();

    if (!report) return null;

    return (
        <div className="rounded-lg border p-4 mt-4">
            <div className="font-bold mb-2">
                AI Report
            </div>

            <pre className="whitespace-pre-wrap">
                {report.report}
            </pre>
        </div>
    );
}

