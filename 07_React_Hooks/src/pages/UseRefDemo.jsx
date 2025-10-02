import { useRef } from 'react';

export default function UseRefDemo() {
    // 1. Kreiramo ref za <input> element, početno je null
    const inputRef = useRef(null);

    function focusInput() {
        // 3. current pokazuje na DOM eleemnt
        console.log("InputRef: ", inputRef.current);
        inputRef.current.focus();
    }

    return (
        <>
            <h2>useRef Primjer</h2>
            {/* 2. Dodajemo ref na input */}
            <input ref={inputRef} placeholder='Upišite svoje ime...'/>

            { /* Klikom na gumb fokusiramo input pomoću ref-a */}
            <button type="button" onClick={focusInput}>Fokusiraj input</button>
        </>
    )
}