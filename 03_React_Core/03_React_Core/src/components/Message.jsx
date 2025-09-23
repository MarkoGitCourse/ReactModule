import { useState, useEffect } from "react";

function Message() {
  const [message, setMessage] = useState("");

  // useEffect sa dependency arrayom
  useEffect(() => {
    console.log("Poruka promijenjena: ", message);

    const timeout = setTimeout(() => {
      console.log("Auto-save poruke: ", message);
    }, 2000);

    // cleanup sprječava da više timeoutova ostane aktivno
    return () => clearTimeout(timeout);
  }, [message]); // efekt se pokreće svaki put kada dođe do promjene message varijable

  return (
    <div>
      <h2>Unesi neku poruku: </h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>Trenutna poruka: {message}</p>
    </div>
  );
}

export default Message;
