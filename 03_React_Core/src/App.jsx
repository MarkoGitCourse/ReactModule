import { useState } from "react";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import LoginPanel from "./components/LoginPanel";
import UsersList from "./components/UsersList";

import "./App.css";
import Message from "./components/Message";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <h1>Moja React aplikacija</h1>
      <Welcome name="Ana" />
      <Welcome name="Ivan" />
      <Welcome name="Maja" />
      <p>Pokrenuta pomoću Vite-a</p>
      <Counter />
      <Counter />
      <Counter />
      <button type="button" onClick={() => setShowTimer(!showTimer)}>Show timer</button>
      {showTimer ? (
        <div>
          <hr />
          <h2>Timer</h2>
          <Timer />
          <br/>
          <hr/>
          <Message />
        </div>
      ) : null}
      <hr/>
      <LoginPanel />
      <hr/>
      <div>
        <h2>List Rendering</h2>
        <UsersList />
      </div>
    </div>
  );
}

export default App;
