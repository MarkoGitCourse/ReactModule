function DestinationCard({ city, country, distanceKm, rating, imageUrl }) {
  const miles = (distanceKm * 0.6213).toFixed(0);
  const scorePercentage = Math.round((rating / 5) * 100);
  const stars = "⭐".repeat(rating);

  return (
    <article className="card">
      <img
        src={imageUrl || "https://placehold.co/400x200"}
        alt={`${city}, ${country}`}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: 12,
        }}
      />
      <div className="card-body">
        <h3 className="card-title">
            {city}, {country}
        </h3>
        <div className="row">
            <span className="muted">
                Udaljenost: 
            </span>
            <span>{distanceKm} km - {miles} mi</span>
        </div>
        <div className="row">
            <span className="muted">
                Ocjena: 
            </span>
            {" "}
            <span>{stars}</span>
            {" "}
            <span>{scorePercentage} %</span>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard