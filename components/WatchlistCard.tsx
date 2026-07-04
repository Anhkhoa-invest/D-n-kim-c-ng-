export default function WatchlistCard() {
  const watchlist = [
    { code: "HHV", price: 11.4, change: "+1.25%" },
    { code: "MBB", price: 25.6, change: "+0.82%" },
    { code: "FPT", price: 96.2, change: "+2.10%" },
    { code: "VCB", price: 92.8, change: "-0.30%" },
    { code: "ACB", price: 24.9, change: "+0.56%" },
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3>⭐ Watchlist</h3>

      {watchlist.map((item) => (
        <div
          key={item.code}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <strong>{item.code}</strong>

          <span>{item.price}</span>

          <span
            style={{
              color: item.change.includes("-") ? "#dc2626" : "#16a34a",
              fontWeight: "bold",
            }}
          >
            {item.change}
          </span>
        </div>
      ))}
    </div>
  );
}
