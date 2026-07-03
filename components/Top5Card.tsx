import { top5 } from "../data/market";
export default function Top5Card() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>💎 Top 5 Kim Cương</h2>

      <table style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Hạng</th>
            <th>Mã</th>
            <th>Điểm AI</th>
          </tr>
        </thead>
<tbody>
  {top5.map((stock) => (
    <tr key={stock.rank}>
      <td>{stock.rank}</td>
      <td>{stock.code}</td>
      <td>{stock.score}</td>
    </tr>
  ))}
</tbody>
        
      </table>
    </div>
  );
}
