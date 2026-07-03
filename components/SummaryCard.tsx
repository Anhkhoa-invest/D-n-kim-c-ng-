"use client";

import { calculatePortfolio } from "../lib/calculatePortfolio";

export default function SummaryCard({ stocks }: any) {
  const result = calculatePortfolio(stocks);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "15px",
        margin: "20px 0",
      }}
    >
      <div style={{ background:"#fff",padding:"20px",borderRadius:"12px" }}>
        <h3>💰 Tổng vốn</h3>
        <h2>{result.totalCost.toLocaleString("vi-VN")} đ</h2>
      </div>

      <div style={{ background:"#fff",padding:"20px",borderRadius:"12px" }}>
        <h3>📈 Giá trị</h3>
        <h2>{result.totalValue.toLocaleString("vi-VN")} đ</h2>
      </div>

      <div style={{ background:"#fff",padding:"20px",borderRadius:"12px" }}>
        <h3>💵 Lãi/Lỗ</h3>
        <h2>{result.profit.toLocaleString("vi-VN")} đ</h2>
      </div>

      <div style={{ background:"#fff",padding:"20px",borderRadius:"12px" }}>
        <h3>📊 Hiệu suất</h3>
        <h2>{result.percent.toFixed(2)}%</h2>
      </div>
    </div>
  );
}

