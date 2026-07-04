"use client";

type Props = {
  current?: string;
};

const menus = [
  "🏠 Dashboard",
  "📊 Thị trường",
  "💼 Danh mục",
  "🤖 AI Đầu tư",
  "📰 Tin tức",
  "⭐ Watchlist",
  "⚙️ Cài đặt",
];

export default function Sidebar({
  current = "🏠 Dashboard",
}: Props) {
  return (
    <aside
      style={{
        width: "240px",
        background: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          marginBottom: "30px",
        }}
      >
        💎 KIM CƯƠNG OS
      </h2>

      {menus.map((item) => (
        <div
          key={item}
          style={{
            padding: "12px 14px",
            marginBottom: "8px",
            borderRadius: "10px",
            cursor: "pointer",
            background:
              item === current ? "#2563eb" : "transparent",
            color:
              item === current ? "#ffffff" : "#333333",
            fontWeight: item === current ? 600 : 500,
          }}
        >
          {item}
        </div>
      ))}
    </aside>
  );
}
