import { useState, useEffect } from "react";
// 1. Naš custom hook
export default function useLocalStorage(key, initialValue) {
  // Provjeravamo je li što postoji po određenom ključu u localStorage
  const storedValue = localStorage.getItem(key);

  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  // 2. Kada se vrijednost promijeni, spremamo u localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
