import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { calculatePortfolio } from "../lib/calculatePortfolio";

export default function PortfolioCard({ stocks }: any) {
  const result = calculatePortfolio(stocks);
const chartData = [
  { day: "T2", value: 1120000 },
  { day: "T3", value: 1135000 },
  { day: "T4", value: 1128000 },
  { day: "T5", value: 1140000 },
  { day: "T6", value: result.totalValue },
];

const pieData = stocks.map((stock: any) => ({
  name: stock.code,
  value: stock.quantity * stock.buyPrice,
}));

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#f59e0b",
  "#9333ea",
];


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



  <ResponsiveContainer width="100%" height={250}>
  <LineChart
    data={[
      { day: "T1", value: result.totalCost },
      { day: "T2", value: result.totalCost * 1.01 },
      { day: "T3", value: result.totalCost * 1.02 },
      { day: "T4", value: result.totalValue },
    ]}
  >
    <CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="day" />
<YAxis />
<Tooltip />
    <Line
      type="monotone"
      dataKey="value"
      stroke="#2563eb"
      strokeWidth={3}
    />
  </LineChart>
</ResponsiveContainer>
<div style={{ width: "100%", height: 250, marginTop: "20px" }}>
  <ResponsiveContainer height={250}>
    <PieChart>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        outerRadius={80}
        label
      >
        {pieData.map((entry: any, index: number) => (
          <Cell
            key={index}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>

    </div>
  );
}

