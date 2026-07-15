import { useRealtimeMarket } from "../app/hooks/useRealtimeMarket";

export default function MarketCard() {
  const quotes = useRealtimeMarket();

  const vcb = quotes.find((q) => q.code === "VCB");
  const fpt = quotes.find((q) => q.code === "FPT");
  const mbb = quotes.find((q) => q.code === "MBB");
  const hhv = quotes.find((q) => q.code === "HHV");

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
      }}
    >
      <h2>📈 Thị trường Realtime</h2>

      <p>VCB: {vcb?.price ?? "--"} VND</p>
      <p>FPT: {fpt?.price ?? "--"} VND</p>
      <p>MBB: {mbb?.price ?? "--"} VND</p>
      <p>HHV: {hhv?.price ?? "--"} VND</p>

      <hr />

      <p>
        Cập nhật: {vcb?.updatedAt ?? "--:--:--"}
      </p>
    </div>
  );
}

