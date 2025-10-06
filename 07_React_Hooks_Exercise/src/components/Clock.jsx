import { useState, useEffect } from "react";

export default function Clock() {
  // 1. State za trenutno vrijeme
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 2. Postavljamo interval koji ažurira vrijeme svake sekunde
    const timer = setInterval(() => {
        setTime(new Date());
    }, 1000);

    // 3. Čišćenje intervala kada se komponenta ukloni
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Digitalni sat</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}
