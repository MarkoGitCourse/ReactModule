import { useRef } from 'react';

export default function FocusInput() {
    // 1. Kreiramo ref
    const inputRef = useRef(null);

    // 2. Funkcija koja fokusira na input pomoću ref.current
    function handleFocus() {
        console.log("Ref: ", inputRef)
        inputRef.current.focus();
    }

    return (
        <div>
            <h2>useRef vježba</h2>
            <input ref={inputRef} placeholder="Upiši ime..."/>
            <button onClick={handleFocus}>Fokusiraj input</button>
        </div>
    )
}