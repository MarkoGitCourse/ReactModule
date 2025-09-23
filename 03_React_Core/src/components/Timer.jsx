import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    // useEffect se pokreće nakon prvog rendera
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(seconds)
            setSeconds(prev => prev + 1); // Funckionalni update
        }, 1000)

        // cleanup funkcija - očisti interval kad se komponenta ukloni
        return () => clearInterval(interval);
    }, []) // -> Pokreni samo jednom (na mount)

    return <p>Aplikacija radi već {seconds} sekundi.</p>   
}

export default Timer