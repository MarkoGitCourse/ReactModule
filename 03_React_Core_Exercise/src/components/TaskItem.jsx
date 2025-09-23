export default function TaskItem({ task, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 12px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "8px",
      }}
    >
      <span>{task.text}</span>
      <button
        style={{
          background: "#e53935",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "4px 10px",
          textAlign: "center",
        }}
        onClick={() => onDelete(task.id)}
      >
        Obriši
      </button>
    </li>
  );
}
