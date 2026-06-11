export default function Dashboard() {
  const cardStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "20px",
    borderRadius: "20px",
    minWidth: "220px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    textAlign: "center" as const,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background:
          "linear-gradient(135deg, #2563eb, #7c3aed)",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <a
          href="/create-ticket"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          🎫 Create Ticket
        </a>

        <a
          href="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          📊 Dashboard
        </a>
      </div>

      <h1
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        🤖 AI Ticket Dashboard
      </h1>

      <h2>📈 Ticket Overview</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>🎫 Total Tickets</h3>
          <h1>10</h1>
        </div>

        <div style={cardStyle}>
          <h3>💳 Billing</h3>
          <h1>3</h1>
        </div>

        <div style={cardStyle}>
          <h3>🛠 Technical</h3>
          <h1>4</h1>
        </div>

        <div style={cardStyle}>
          <h3>👤 Account</h3>
          <h1>3</h1>
        </div>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        🚦 Ticket Status
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>🟢 Open</h3>
          <h1>5</h1>
        </div>

        <div style={cardStyle}>
          <h3>🟡 In Progress</h3>
          <h1>3</h1>
        </div>

        <div style={cardStyle}>
          <h3>🔴 Closed</h3>
          <h1>2</h1>
        </div>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        ⭐ Customer Satisfaction
      </h2>

      <div
        style={{
          ...cardStyle,
          marginTop: "20px",
          maxWidth: "300px",
        }}
      >
        <h1>⭐⭐⭐⭐☆</h1>
        <h2>4.2 / 5</h2>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        👨‍💻 Agent Performance
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Agent A</h3>
          <p>15 Tickets Resolved</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>

        <div style={cardStyle}>
          <h3>Agent B</h3>
          <p>10 Tickets Resolved</p>
          <p>⭐⭐⭐⭐</p>
        </div>

        <div style={cardStyle}>
          <h3>Agent C</h3>
          <p>8 Tickets Resolved</p>
          <p>⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  );
}