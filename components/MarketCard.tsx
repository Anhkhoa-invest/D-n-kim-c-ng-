import { marketData } from "../data/market";
export default function MarketCard() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>📈 Thị trường</h2>

      <p>VNINDEX: {marketData.vnIndex} điểm</p>
      <p>VN30: +{marketData.vn30}%</p>
      <p>HNX: +{marketData.hnx}%</p>
      <p>UPCOM: +{marketData.upcom}%</p>
    </div>
  );
}

