"use client";

import { useEffect, useState } from "react";
import DashboardReportBridge from "../services/DashboardReportBridge";

export function useDashboardReport() {
    const [report, setReport] = useState<any>(null);

    useEffect(() => {
        DashboardReportBridge.start(setReport);

        return () => {
            DashboardReportBridge.stop(setReport);
        };
    }, []);

    return report;
}
