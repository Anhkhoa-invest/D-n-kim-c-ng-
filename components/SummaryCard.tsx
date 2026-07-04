"use client";

import { calculatePortfolio } from "../lib/calculatePortfolio";

export default function SummaryCard({ stocks }: any) {
  const result =
  calculatePortfolio(stocks ?? []) ?? {
    totalCost: 0,
    totalValue: 0,
    profit: 0,
    percent: 0,
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "15px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>💰 Tổng vốn</h3>
        <h2>{(result.totalCost ?? 0).toFixed(0)} đ</h2>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>📈 Giá trị</h3>
        <h2>{(result.totalValue ?? 0).toFixed(0)} đ</h2>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0.0,0,0.08)",
        }}
      >
        <h3>💵 Lãi/Lỗ</h3>
        <h2
          style={{
            color: result.profit >= 0 ? "green" : "red",
          }}
        >
          {(result.profit ?? 0).toFixed(0)} đ
        </h2>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>📊 Hiệu suất</h3>
        <h2>{(result.percent ?? 0).toFixed(2)}%</h2>
      </div>
    </div>
  );
}
