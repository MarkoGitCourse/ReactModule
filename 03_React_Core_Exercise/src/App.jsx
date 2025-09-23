import { useState } from "react";
import "./App.css";
import TeamCard from "./components/TeamCard";
import Scoreboard from "./components/Scoreboard";

function App() {
  // Centralni state: svi timove i status poruka
  const [teams, setTeams] = useState([
    { id: 1, emoji: "🐱", name: "Mačke", score: 0 },
    { id: 2, emoji: "🐶", name: "Psi", score: 0 },
    { id: 3, emoji: "🦊", name: "Lisice", score: 0 },
  ]);

  const [status, setStatus] = useState("");

  // Handleri - roditelj ažurira state; djeca samo pozivaju funkcije iz svojih propsa
  function increment(id, label) {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id ? { ...team, score: team.score + 1 } : team
      )
    );
    setStatus(`Glas dodan timu ${label}`);
  }

  function decrement(id, label) {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id ? { ...team, score: team.score - 1 } : team
      )
    );
    setStatus(`Glas oduzet timu ${label}`);
  }

  function resetAll() {
    setTeams((prev) => prev.map((team) => ({ ...team, score: 0 })));
    setStatus("Svi glasovi resetirani");
  }

  // Izvedene vrijednosti
  let total = 0;
  let maxScore = 0;

  for(const team of teams) {
    total += team.score;
    if(team.score > maxScore)
      maxScore = team.score;
  }

  let leaderLabel = "Još nema glasova";
  let leaders = teams.filter((t) => t.score === maxScore && maxScore > 0);

  if(maxScore > 0) {
    leaderLabel = leaders.length == 1 ? `Vodi tim: ${leaders[0].name}` : "Izjednačeno";
    console.log(leaders.length, leaderLabel)
  }

  return (
    <>
      <div>
        {teams.map((team) => (
          <div key={team.id}>
            <TeamCard
              id={team.id}
              name={team.name}
              emoji={team.emoji}
              score={team.score}
              onIncrement={increment}
              onDecrement={decrement}
            />
            <hr />
          </div>
        ))}
      </div>
      <Scoreboard status={status} total={total} leaderLabel={leaderLabel}  onReset={resetAll}/>
    </>
  );
}

export default App;
