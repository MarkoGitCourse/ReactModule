export default function QuoteBox({ quote, status, onNewQuote }) {
  return (
    <div style={containerStyles}>
      <blockquote style={blockquoteStyles}>
        "{quote}"
      </blockquote>
      <button style={buttonStyles} type="button" onClick={onNewQuote}>
        Generiraj novi citat
      </button>
      <p style={statusStyles}>{status}</p>
    </div>
  );
}

const containerStyles = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "20px",
  background: "#f9f9f9",
  marginTop: "20px",
};

const blockquoteStyles = { fontSize: "1.2rem", fontStyle: "italic", color: "#555" };

const buttonStyles = {
  marginTop: "15px",
  padding: "10px 16px",
  border: "none",
  borderRadius: "8px",
  background: "#1e88e5",
  color: "#fff",
  cursor: "pointer",
};

const statusStyles = { marginTop: "12px", color: "#555" };
