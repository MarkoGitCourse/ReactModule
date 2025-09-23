import { useState, useEffect } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/usersasdas")
      .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Greška pri učitavanju korisnika")
        }
      })
      .then((json) => {
        console.log("response json: ", json);
        setUsers(json);
        setStatus("Korisnici uspješno učitani.");
        setIsLoading(false);
      })
      .catch((error) => {
        setStatus(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Korisnici</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {users && users.map((user) => (
            <li key={user.id}>
              {user.name} - <em>{user.email}</em>
            </li>
          ))}
        </ul>
      )}
      {status && <p>{status}</p>}
    </div>
  );
}
