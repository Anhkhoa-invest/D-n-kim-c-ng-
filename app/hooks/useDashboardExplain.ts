"use client";

import { useEffect, useState } from "react";
import DashboardExplainBridge from "../services/DashboardExplainBridge";

export function useDashboardExplain() {
    const [explanation, setExplanation] = useState<any>(null);

    useEffect(() => {
        DashboardExplainBridge.start(setExplanation);

        return () => {
            DashboardExplainBridge.stop(setExplanation);
        };
    }, []);

    return explanation;
}
