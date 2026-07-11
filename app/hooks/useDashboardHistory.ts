"use client";

import { useEffect, useState } from "react";
import DashboardHistoryBridge from "../services/DashboardHistoryBridge";

export function useDashboardHistory() {
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        const callback = (payload: any) => {
            setHistory(payload.history ?? []);
        };

        DashboardHistoryBridge.start(callback);

        return () => {
            DashboardHistoryBridge.stop(callback);
        };
    }, []);

    return history;
}

