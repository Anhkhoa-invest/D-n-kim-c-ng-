import { NotificationService } from "../app/services/NotificationService";

export default function NotificationCard() {
  const notifications = NotificationService.getNotifications();

  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginTop: "20px",
      }}
    >
      <h2>🔔 Thông báo</h2>

      {notifications.map((item) => (
        <div
          key={item.id}
          style={{
            borderBottom: "1px solid #eee",
            padding: "12px 0",
          }}
        >
          <b>{item.title}</b>

          <div>{item.message}</div>

          <small style={{ color: "#666" }}>
            {item.time}
          </small>
        </div>
      ))}
    </div>
  );
}

