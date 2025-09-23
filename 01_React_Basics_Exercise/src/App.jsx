import Header from "./components/Header";
import DestinationCard from "./components/DestinationCard";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const destinations = [
    {
      id: 1,
      city: "Barcelona",
      country: "Španjolska",
      distanceKm: 1450,
      rating: 4.6,
      imageUrl:
        "https://www.planetware.com/photos-large/E/spain-barcelona-sagrada-familia.jpg",
    },
    {
      id: 2,
      city: "Oslo",
      country: "Norveška",
      distanceKm: 2450,
      rating: 2.6,
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9d/61/c4/barcode-skyline-in-oslo.jpg?w=900&h=500&s=1",
    },
    {
      id: 3,
      city: "Berlin",
      country: "Njemačka",
      distanceKm: 1250,
      rating: 3.6,
      imageUrl:
        "https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
          <h2 className="text-center my-3">Top destinacije</h2>
          {destinations.map((des, index) => (
            <div className="col-4">
              <DestinationCard
                key={index}
                city={des.city}
                country={des.country}
                distanceKm={des.distanceKm}
                rating={des.rating}
                imageUrl={des.imageUrl}
              />
            </div>
          ))}
          <hr className="my-3"/>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
