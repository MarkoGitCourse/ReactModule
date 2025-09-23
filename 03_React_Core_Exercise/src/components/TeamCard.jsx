function TeamCard({ id, emoji, name, score, onIncrement, onDecrement }) {
  return (
    <article className="card">
      <header>
        <span>{emoji}</span>
        <h3>{name}</h3>
      </header>
      <div>
        <strong>Glasovi: </strong>
        <span>{score}</span>
      </div>
      <footer>
        <button
          type="button"
          disabled={score === 0}
          onClick={() => onDecrement(id, name)}
          title="Oduzmi glas"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => onIncrement(id, name)}
          title="Dodaj glas"
        >
          +
        </button>
      </footer>
    </article>
  );
}

export default TeamCard;
