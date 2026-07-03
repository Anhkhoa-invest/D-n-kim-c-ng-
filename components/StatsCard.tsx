export default function StatsCard({ stocks }: any) {
  const totalStocks = stocks.length;

  const totalQuantity = stocks.reduce(
    (sum: number, stock: any) => sum + stock.quantity,
    0
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>📄 Số mã cổ phiếu</h3>
        <h1>{totalStocks}</h1>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>📦 Tổng số lượng cổ phiếu</h3>
        <h1>{totalQuantity}</h1>
      </div>
    </div>
  );
}
