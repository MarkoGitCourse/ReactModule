import { useState } from "react";

export default function CounterWithLimit() {
  // 1. State za trenutni count
  const [count, setCount] = useState(0);

  function handleCount(isReset) {
    if (isReset) {
      setCount(0);
    } else {
      if (count >= MAX) return;
      setCount(count + 1);
    }
  }
  // maksimalnu vrijednost
  const MAX = 10;

  return (
    <div>
      <h2>Counter with Limit</h2>
      <p>Broj klikova: {count}</p>

      <button
        type="button"
        onClick={() => handleCount(false)}
        disabled={count >= MAX}
      >
        +1
      </button>

      <button type="button" onClick={() => handleCount(true)}>
        Reset
      </button>

      {count >= MAX && <p>Dostigli ste MAX broj klikova</p>}
    </div>
  );
}
