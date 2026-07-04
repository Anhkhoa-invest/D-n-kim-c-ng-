"use client";

export default function Header() {
  const now = new Date();

  return (
    <div
      style={{
        marginBottom: "30px",
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "#2563eb",
          marginBottom: "8px",
        }}
      >
        💎 KIM CƯƠNG OS 4.0
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "16px",
          marginBottom: "6px",
        }}
      >
        Xin chào Anh Khoa 👋
      </p>

      <p
        style={{
          color: "#16a34a",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Hệ thống hoạt động bình thường
      </p>

      <p
        style={{
          color: "#888",
          fontSize: "13px",
          marginBottom: "4px",
        }}
      >
        🕒 {now.toLocaleTimeString("vi-VN")}
      </p>

      <p
        style={{
          color: "#888",
          fontSize: "13px",
          marginBottom: "10px",
        }}
      >
        📅 {now.toLocaleDateString("vi-VN")}
      </p>

      <hr />

      <p
        style={{
          color: "#999",
          fontSize: "14px",
          marginTop: "10px",
        }}
      >
        AI Investment Operating System
      </p>
    </div>
  );
}

