import styles from "../App.module.css";

export default function StudentCard({
  name,
  age,
  grade,
  active,
  children,
  onDelete,
}) {
  const cardStyle =
    grade === 5 ? styles.best : grade === 1 ? styles.worst : styles.normal;

  return (
    <div className={`${styles.card} ${cardStyle}`}>
      <h3>{name}</h3>
      <p>Godine: {age}</p>
      <p>Ocjena: {grade}</p>
      <p>Status: {active ? "Aktivan" : "Neaktivan"}</p>

      {children}

      <button type="button" className={styles.deleteBtn} onClick={onDelete}>
        Obriši
      </button>
    </div>
  );
}
