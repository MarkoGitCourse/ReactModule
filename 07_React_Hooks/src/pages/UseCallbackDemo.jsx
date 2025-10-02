import { useState, useCallback } from "react";

// Child komponenta koja prima callback funkciju kao prop
function Child({ onClick }) {
  console.log("Child render");
  return (
    <button type="submit" onClick={onClick}>
      Klikni iz Child-a
    </button>
  );
}

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  // Funkcija spremljena u useCallback - ista instanca funkcije sve dok se ne promijeni dependency
  const handleClick = useCallback(() => {
    console.log("Klik iz Child komponente!");
  }, []); // nema dependencyja -> uvijek istu funkciju

  return (
    <div>
      <h2>useCallback Primjer</h2>
      <p>Brojač: {count}</p>
      <button onClick={() => setCount(count + 1)}>Povećaj</button>

      {/* Child prima callback */}
      <Child onClick={handleClick} />
    </div>
  );
}
