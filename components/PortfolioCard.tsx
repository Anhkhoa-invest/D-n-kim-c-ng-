import { LineChart, Line, ResponsiveContainer } from "recharts";

import { calculatePortfolio } from "../lib/calculatePortfolio";

export default function PortfolioCard({ stocks }: any) {
  const result = calculatePortfolio(stocks);

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "28px",
          fontWeight: "bold",
          color: "#1f2937",
          textAlign: "center",
        }}
      >
        💎 Danh mục đầu tư
      </h2>

      <div
        style={{
          lineHeight: "2.5",
          fontSize: "18px",
        }}
      >
        <div>
          🪙 Tổng vốn:
          <strong> {result.totalCost.toLocaleString("vi-VN")} đ</strong>
        </div>

        <div>
          📈 Giá trị hiện tại:
          <strong> {result.totalValue.toLocaleString("vi-VN")} đ</strong>
        </div>

        <div
          style={{
            color: result.profit >= 0 ? "#16a34a" : "#dc2626",
            fontWeight: "bold",
          }}
        >
          💰 Lãi/Lỗ:
          <strong> {result.profit.toLocaleString("vi-VN")} đ</strong>
        </div>

        <div
          style={{
            color: result.profit >= 0 ? "#16a34a" : "#dc2626",
            fontWeight: "bold",
          }}
        >
          📊 Hiệu suất:
          <strong> {result.percent.toFixed(2)}%</strong>
        </div>
      </div>
      <hr style={{ margin: "20px 0", border: "1px solid #eee" }} />

<h3 style={{ marginBottom: "15px", color: "#2563eb" }}>
  📈 Hiệu suất 30 ngày
</h3>

<div
  style={{
    height: "180px",
    background: "#f8fafc",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: "18px",
    fontWeight: "bold",
  }}
>

    </div>
  Biểu đồ sẽ hiển thị tại đây
    </div>
  );
}

