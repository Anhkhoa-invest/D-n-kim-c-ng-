"use client";
import { useMarket } from "../app/hooks/useMarket";

import WatchlistCard from "./WatchlistCard";

import { PortfolioService } from "../app/services/PortfolioService";

import { useState, useEffect } from "react";

import { portfolio } from "../data/market";

import Header from "./Header";
import Sidebar from "./Sidebar";
import SummaryCard from "./SummaryCard";
import MarketCard from "./MarketCard";
import PortfolioCard from "./PortfolioCard";
import Top5Card from "./Top5Card";
import StockList from "./StockList";
import AddStockButton from "./AddStockButton";
import AddStockForm from "./AddStockForm";
import AIAssistant from "./AIAssistant";


export default function Dashboard() {

 const [stocks, setStocks] = useState(() =>
  PortfolioService.loadPortfolio(portfolio)
);
const { data, loading } = useMarket("HHV");

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
  PortfolioService.savePortfolio(stocks);
}, [stocks]);


  return (
    <main
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: 30,
        fontFamily: "Arial",
      }}
    >
      <Header />

      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
        }}
      >
        <Sidebar />

        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="🔍 Tìm mã cổ phiếu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 10,
              border: "1px solid #ddd",
              marginBottom: 20,
            }}
          />

          <SummaryCard stocks={stocks} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: 20,
            }}
          >
            <MarketCard />
            <PortfolioCard stocks={stocks} />
            <Top5Card />
            <WatchlistCard />

          </div>

          <AIAssistant />

          <AddStockButton
            onClick={() => {
              setEditingIndex(null);
              setShowForm(true);
            }}
          />

          {showForm && (
            <AddStockForm
              editingStock={
                editingIndex !== null ? stocks[editingIndex] : null
              }
              onAdd={(newStock: any) => {
                if (editingIndex !== null) {
                  const updated = [...stocks];
                  updated[editingIndex] = newStock;
                  setStocks(updated);
                  setEditingIndex(null);
                } else {
                  setStocks([...stocks, newStock]);
                }

                setShowForm(false);
              }}
            />
          )}

          <StockList
            stocks={stocks.filter((stock: any) =>
              stock.code.toLowerCase().includes(search.toLowerCase())
            )}
            onDelete={(index: number) => {
              setStocks(stocks.filter((_: any, i: number) => i !== index));
            }}
            onEdit={(index: number) => {
              setEditingIndex(index);
              setShowForm(true);
            }}
          />
        </div>
      </div>
    </main>
  );
}

