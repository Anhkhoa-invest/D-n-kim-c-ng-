import AIEngine from "../app/services/AIEngine";


export default function StockList({
  stocks,
  onDelete,
  onEdit,
}: any) {
  const logos: Record<string, string> = {
  MBB: "🏦",
  HHV: "🛣️",
  FPT: "💻",
  VCB: "💚",
  ACB: "💙",
};
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        marginTop: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>📋 Danh sách cổ phiếu</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#f5f7fb",
            }}
          >
            <th style={{ padding: "10px" }}>Mã</th>
            <th style={{ padding: "10px" }}>Số lượng</th>
            <th style={{ padding: "10px" }}>Giá mua</th>
            <th style={{ padding: "10px" }}>Giá hiện tại</th>
            <th style={{ padding: "10px" }}>Lãi/Lỗ</th>
            <th style={{ padding: "10px" }}>% Lãi/Lỗ</th>
            <th style={{ padding: "10px" }}>Thao tác</th>
            <th style={{ padding: "10px" }}>Điểm AI</th>
          </tr>
        </thead>

        <tbody>
          {stocks.map((stock: any, index: number) => {
            const profit =
              (stock.currentPrice - stock.buyPrice) * stock.quantity;

            const profitPercent =
              ((stock.currentPrice - stock.buyPrice) /
                stock.buyPrice) *
              100;
const ai = AIEngine.analyze({
  symbol: stock.code,
  price: stock.currentPrice,
  roe: 95,
  growth: 90,
  pe: 8,
  debt: 4,
});

            return (
              <tr key={stock.code + index}>
                <td style={{ padding: "10px" }}>{logos[stock.code] || "📈"} {stock.code}</td>

                <td style={{ padding: "10px" }}>
                  {stock.quantity}
                </td>

                <td style={{ padding: "10px" }}>
                  {stock.buyPrice}
                </td>

                <td style={{ padding: "10px" }}>
                  {stock.currentPrice}
                </td>

                <td
                  style={{
                    padding: "10px",
                    color:
                      profit >= 0
                        ? "#16a34a"
                        : "#dc2626",
                    fontWeight: "bold",
                  }}
                >
                  {profit.toLocaleString("vi-VN")}
                </td>

                <td
                  style={{
                    padding: "10px",
                    color:
                      profitPercent >= 0
                        ? "#16a34a"
                        : "#dc2626",
                    fontWeight: "bold",
                  }}
                >
                  {profitPercent.toFixed(2)}%
                </td>

                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => onEdit(index)}
                    style={{
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 10px",
                      cursor: "pointer",
                      marginRight: "8px",
                    }}
                  >
                    ✏️ Sửa
                  </button>

                  <button
                    onClick={() => onDelete(index)}
                    style={{
                      background: "#dc2626",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 10px",
                      cursor: "pointer",
                    }}
                  >
                    🗑️ Xóa
                  </button>
                </td>
                <td
  style={{
    padding: "10px",
    fontWeight: "bold",
    color: "#2563eb",
    textAlign: "center",
  }}
>
  {ai.score ? ai.score : "-"}
</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

