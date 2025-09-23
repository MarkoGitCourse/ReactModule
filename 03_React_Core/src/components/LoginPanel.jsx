import { useState } from "react";

export default function LoginPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <div>
      <h2>Conditional Rendering Demo</h2>

      {/* 1. Ternarni operator */}
      {isLoggedIn ? (
        <p>Dobrošao natrag</p>
      ) : (
        <p>Nisi prijavljen. Molimo prijavi se</p>
      )}

      {/* 2. Kratki zapis s && */}
      {isLoggedIn && (
        <button type="button" onClick={toggleLogin}>
          Odjava
        </button>
      )}
      {!isLoggedIn && (
        <button type="button" onClick={toggleLogin}>
          Prijava
        </button>
      )}

      <button
        type="button"
        style={isLoggedIn ? { background: "red" } : { background: "blue" }}
        onClick={isLoggedIn ? toggleLogin : toggleLogin}
      >
        {isLoggedIn ? "Odjava" : "Prijava"}
      </button>
    </div>
  );
}
