import { AIService } from "../app/services/AIService";

import { useState } from "react";
export default function AddStockForm({
  onAdd,
  editingStock,
}: any) {
   const [code, setCode] = useState(editingStock?.code || "");
const [quantity, setQuantity] = useState(editingStock?.quantity || "");
const [BuyPrice, setBuyPrice] = useState(editingStock?.buyPrice || "");
const [CurrentPrice, setCurrentPrice] = useState(editingStock?.currentPrice || "");



  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h2>➕ Thêm cổ phiếu</h2>

      <div style={{ marginTop: "15px" }}>
        <input
          placeholder="Mã cổ phiếu"
          value={code}
onChange={(e) => setCode(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

       <input
  placeholder="Số lượng"
  type="number"
  value={quantity}
  onChange={(e) => setQuantity(e.target.value)}
  style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
/>

       <input
  placeholder="Giá mua"
  type="number"
  value={BuyPrice}
  onChange={(e) => setBuyPrice(e.target.value)}
  style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
/> 

       <input
  placeholder="Giá hiện tại"
  type="number"
  value={CurrentPrice}
  onChange={(e) => setCurrentPrice(e.target.value)}
  style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
/>


        <button
       onClick={() => {
  const ai = AIService.analyze(code.toUpperCase());

  onAdd({
    code: code.toUpperCase(),
    quantity: Number(quantity),
    buyPrice: Number(BuyPrice),
    currentPrice: Number(CurrentPrice),

    aiScore: ai.total,
    aiFinancial: ai.financial,
    aiGrowth: ai.growth,
    aiValuation: ai.valuation,
    aiRisk: ai.risk,
    aiComment: ai.comment,
  });
}}

          style={{
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          💾 Lưu cổ phiếu
        </button>
      </div>
    </div>
  );
}
