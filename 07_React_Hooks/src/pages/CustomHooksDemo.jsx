import { useState, useEffect } from "react";

// 1. Naš custom hook - useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
    
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, [url]);

  return data; // vraćamo podatke
}

// 2. Komponenta koja koristi naš custom hook
export default function CustomHookDemo() {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users')
    const users = useFetch(url);

    return (
        <div>
            <h2>Custom Hooks Primjer - useFetch</h2>
            <p>
                {JSON.stringify(users)}
            </p>
            <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}>Promijeni URL</button>
        </div>
    )
}