import { useState } from "react";

function ProductCard({
  name,
  price = 0,
  inStock = false,
  imageUrl = "https://placehold.co/400x200",
}) {

  const [clicks, setClicks] = useState(0);

  return (
    <div className="card">
      <img src={imageUrl} />
      <h3>{name}</h3>
      <p>{price.toFixed(2)}€</p>
      <p>Na stanju: {inStock ? "DA" : "NE"}</p>
      <button type="button" onClick={() => setClicks(c => c + 1)} >Kliknuto: {clicks}</button>
    </div>
  );
}

export default ProductCard;
