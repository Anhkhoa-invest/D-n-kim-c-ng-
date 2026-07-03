export default function AddStockButton({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#2563eb",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold",
        marginBottom: "20px",
      }}
    >
      ➕ Thêm cổ phiếu
    </button>
  );
}

