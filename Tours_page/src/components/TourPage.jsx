import { useState } from "react";
import TourCard from "./TourCard";

const TourPlaces = [
  {
    name: "Best Of Paris In 7 Days Tour",
    details:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    banner: `https://www.course-api.com/images/tours/tour-1.jpeg`,
    price:1290
  },

  {
    name: "Best Of Ireland In 14 Days Tour",
    details:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    banner: `https://www.course-api.com/images/tours/tour-2.jpeg`,
    price:'Free'
  },
  {
    name: "Best Of Salzburg & Vienna In 8 Days Tour",
    details:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
    banner: "https://www.course-api.com/images/tours/tour-3.jpeg",
    price:2345
  },
  {
    name: "Best Of Rome In 7 Days Tour",
    details:
      "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
    banner: "https://www.course-api.com/images/tours/tour-4.jpeg",
    price:4567
  },
  {
    name: "Best Of Poland In 10 Days Tour",
    details:
      "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days",
    banner: "https://www.course-api.com/images/tours/tour-5.jpeg",
    price:1235
  },
];

const TourPage = () => {
  const [tourCard, setTourCard] = useState(TourPlaces);

  return (
    <>
      <h1 className="text-center relative font-mono text-6xl w-max mx-auto py-4  mb-8 after:content-normal after:absolute after:bottom-0 after:left-2/4 after:-translate-x-2/4 after:h-1 after:rounded-md after:w-3/5 after:bg-green-600">
        Our Tours
      </h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start  p-6 mx-10 xl:grid-cols-4">
        {tourCard.length === 0 ? (
          <h1 className="text-green-400 text-3xl">
            {" "}
            {tourCard.length} place to shown{" "}
          </h1>
        ) : (
          tourCard.map((item, index) => (
            <TourCard
              key={item.banner}
              data={{
                item,
                updateCard: () => {
                  const newCard = tourCard.filter((_, i) => i !== index);
                  setTourCard(newCard);
                },
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TourPage;
