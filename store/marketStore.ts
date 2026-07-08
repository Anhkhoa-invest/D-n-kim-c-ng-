import { create } from "zustand";

interface Quote {
  code: string;
  price: number;
  change?: number;
  percent?: number;
}

interface MarketStore {
  quotes: Quote[];
  setQuotes: (quotes: Quote[]) => void;
}

export const useMarketStore = create<MarketStore>((set) => ({
  quotes: [],
  setQuotes: (quotes) => set({ quotes }),
}));
