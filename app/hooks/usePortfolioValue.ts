import { useRealtimeMarket } from "./useRealtimeMarket";
export function usePortfolioValue() {


const quotes = useRealtimeMarket();
return {
    quotes
};
}