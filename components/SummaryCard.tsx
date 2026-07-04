import { useEffect, useState } from "react";
import MarketService from "../app/services/MarketService";

export default function SummaryCard() {
  const [stock, setStock] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await MarketService.getStockPrice("VNM");
        setStock(data);
      } catch (error) {
        console.error(error);
      }
    }

    load();
  }, []);
if (!stock) {
    return (
      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        Đang tải dữ liệu...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
<h3>📈 Thị trường Việt Nam</h3>

      <h2>{stock.symbol}</h2>

      <p>
        <strong>{stock.name}</strong>
      </p>

      <p>💰 Giá: {stock.price.toLocaleString()} VNĐ</p>

      <p>
        📊 Thay đổi: {stock.change} ({stock.percentChange}%)
      </p>

      <p>📦 Khối lượng: {stock.volume.toLocaleString()}</p>

      <p>💵 Giá trị: {stock.value.toLocaleString()}</p>

      <p>🏛 Sàn: {stock.market}</p>

      <p>
        🕒 Cập nhật: {new Date(stock.updatedAt).toLocaleTimeString()}
      </p>
</div>
  );
}
