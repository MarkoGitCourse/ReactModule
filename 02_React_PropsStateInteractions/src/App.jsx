import { useState } from "react";
import ProductCard from "./components/ProductCard";

import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Laptop X200", price: 1299, inStock: true },
    { id: 2, name: "Mobitel Pro", price: 799, inStock: false },
    { id: 3, name: "Miš", price: 29, inStock: false },
  ];

  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilteredProducts(
      products.filter((x) =>
        x.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">Pretraži</button>
      </form>

      <p>{query}</p>
      {filteredProducts.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </>
  );
}

export default App;
