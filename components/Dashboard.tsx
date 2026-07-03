"use client";
import SummaryCard from "./SummaryCard";
import StatsCard from "./StatsCard";

import { calculatePortfolio } from "../lib/calculatePortfolio";

import { portfolio } from "../data/market";
import { useState, useEffect } from "react";
import AddStockForm from "./AddStockForm";
import AddStockButton from "./AddStockButton";
import StockList from "./StockList";
import Header from "./Header";
import MarketCard from "./MarketCard";
import PortfolioCard from "./PortfolioCard";
import Top5Card from "./Top5Card";
import AIAssistant from "./AIAssistant";

export default function Dashboard() {
  const [stocks, setStocks] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio");
      return saved ? JSON.parse(saved) : portfolio;
    }
    return portfolio;
  });

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

const result = calculatePortfolio(stocks);
  useEffect(() => {
    localStorage.setItem("portfolio", JSON.stringify(stocks));
  }, [stocks]);

  return (
    <main
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
    
      <Header />
      <input
  type="text"
  
  placeholder="🔍 Tìm mã cổ phiếu..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "16px",
  }}
/>

      <SummaryCard stocks={stocks} />
console.log(stocks);

<div
      
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <MarketCard />
        <PortfolioCard stocks={stocks} />
        <Top5Card />
      </div>

      <AIAssistant />

      <AddStockButton
        onClick={() => setShowForm(!showForm)}
      />

      {showForm && (
        <AddStockForm
  editingStock={
    editingIndex !== null ? stocks[editingIndex] : null
  }
  onAdd={(newStock: any) => {
  if (editingIndex !== null) {
    const updatedStocks = [...stocks];
    updatedStocks[editingIndex] = newStock;
    setStocks(updatedStocks);
    setEditingIndex(null);
  } else {
    setStocks([...stocks, newStock]);
  }

            setShowForm(false);
          }}
        />
      )}
<input
  type="text"
  placeholder="🔍 Tìm mã cổ phiếu..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "16px",
  }}
/>

<StockList
  stocks={stocks.filter((stock: any) =>
    stock.code.toLowerCase().includes(search.toLowerCase())
  )}
  onDelete={(index: number) => {
    setStocks(
      stocks.filter((_: any, i: number) => i !== index)
    );
  }}
 onEdit={(index: number) => {
    setEditingIndex(index);
    setShowForm(true);
}}


/>
    </main>
  );
}

