import { useState } from "react";

export default function UseStateDemo() {
  // 1. Definiramo state varijablu 'likes' sa početnom vrijednošću 0
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>useState Primjer - Like Button</h2>

      {/* 2. Prikazujemo trenutnu vrijednost */}
      <p>Broj lajkova: {likes}</p>

      {/* 3. Povećavamo/smanjujemo likes na klik gumba */}
      <button type="button" onClick={() => setLikes(likes + 1)}>Like</button>
      <button type="button" onClick={() => setLikes(likes - 1)}>Unlike</button>
    </div>
  );
}
