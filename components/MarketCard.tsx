
import { useRealtimeMarket } from "../app/hooks/useRealtimeMarket";

import { useEffect, useState } from "react";
import { RealtimePriceService } from "../app/services/RealtimePriceService";

import MarketEventBus from "../app/providers/MarketEventBus";

import { marketData } from "../data/market";
export default function MarketCard() {
  const quotes = useRealtimeMarket();

  const [prices, setPrices] = useState<Record<string, any>>({});

useEffect(() => {
  const fetchPrices = async () => {
    const priceData = await Promise.all(
      marketData.codes.map((code) =>
        RealtimePriceService.getPrice(code)
      )
    );

    const priceMap = priceData.reduce((acc, curr) => {
      acc[curr.code] = curr;
      return acc;
    }, {} as Record<string, any>);

    setPrices(priceMap);
  };

  fetchPrices();
  const timer = setInterval(fetchPrices, 5000);

return () => clearInterval(timer);
}, []);
const vnIndex = quotes.find(
    q => q.code === "VNINDEX"
);
console.log("MarketCard Quotes:", quotes);
{vnIndex && (
    <div
        style={{
            marginBottom: 12,
            padding: 10,
            background: "#eef7ff",
            borderRadius: 8,
        }}
    >
        <strong>{vnIndex.code}</strong>

        <br />

        {vnIndex.price}

        <br />

        {vnIndex.percent}%
    </div>
)}


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
      <hr />

<p>
  Cập nhật:
  {prices["VNINDEX"]?.updatedAt || "--:--:--"}
</p>
    </div>
  );
}
