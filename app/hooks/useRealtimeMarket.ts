import { useEffect, useState } from "react";

import { RealtimeEngine } from "../services/RealtimeEngine";
import type { PriceData } from "../services/RealtimePriceService";

export function useRealtimeMarket() {
    const [quotes, setQuotes] = useState<PriceData[]>([]);

    useEffect(() => {
        RealtimeEngine.start((prices: PriceData[]) => {
            setQuotes(prices);
        });

        return () => {
            RealtimeEngine.stop();
        };
    }, []);

    return quotes;
}
