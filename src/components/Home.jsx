import React, { useState } from "react";
import "./home.css";
import './Contact.css';
import TripPlanner from "./Trip/TripPlanner";


const destinations = [
  // Domestic Destinations
  {
  name: "Goa",
  price: "₹12,000",
  days: "3 Days / 2 Nights",
  type: "domestic",
  image: "https://th.bing.com/th/id/OIP.xBbdpU3sSV6otqRspMnB8AHaE8?w=359&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  description: `
Goa is a tropical paradise located on the western coast of India, known for its sun-kissed beaches and vibrant nightlife.
The golden sands of Baga, Calangute, and Anjuna attract tourists from around the world.
Explore the Portuguese architecture, colonial churches, and colorful houses that reflect Goa’s rich heritage.
Indulge in thrilling water sports like parasailing, jet skiing, banana boat rides, and scuba diving.
Enjoy authentic Goan cuisine including seafood curries, vindaloo, and bebinca dessert.
Visit ancient temples, flea markets, and spice plantations tucked away in the countryside.
Take a peaceful sunset cruise along the Mandovi River or explore wildlife at the Bhagwan Mahavir Sanctuary.
The Basilica of Bom Jesus, a UNESCO World Heritage Site, is a must-visit for history lovers.
Nightlife is electric — with beach parties, shacks, pubs, and nightclubs at every corner.
Join the iconic Sunburn Festival if you're visiting in December.
Rent a scooter to roam the scenic villages and lesser-known beaches like Butterfly Beach or Cola Beach.
Stay in beachside cottages, luxury resorts, or heritage Portuguese homes for a unique experience.
Goa has something for everyone — backpackers, families, honeymooners, and adventurers alike.
Don't miss the local shopping scene — from Mapusa market to Anjuna’s flea bazaar.
Whether you're seeking relaxation or excitement, Goa promises an unforgettable escape.
`
},

 
  {
    name: "Mysore",
    price: "₹7,500",
    days: "2 Days / 1 Night",
    type: "domestic",
    image: "https://th.bing.com/th/id/OIP.zEvOzI2XjNg9i-7vToqhAwHaE8?w=277&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description: `Mysore, the City of Palaces, offers a blend of royal heritage and cultural charm.
The grand Mysore Palace is a highlight, especially when illuminated at night.
Chamundi Hills provide spiritual vibes with a panoramic city view.
Visit St. Philomena’s Church and the colonial architecture around the city.
Brindavan Gardens and its musical fountain show are a visual treat.
The bustling Devaraja Market is perfect for local spices, flowers, and silk.
Don’t miss Mysore’s iconic sandalwood products and incense.
During Dussehra, the city transforms with grand processions and celebrations.
Try local dishes like Mysore Pak and Masala Dosa for a flavorful experience.
The calm vibe, yoga centers, and green boulevards make Mysore relaxing.
It’s a photographer’s delight with heritage buildings and colorful streets.
A perfect mix of tradition and modernity in a compact 2-day trip.
Easy to navigate and family-friendly, ideal for a quick weekend getaway.
Mysore is also well-connected, making travel smooth and affordable.
Great for couples, families, or solo travelers wanting cultural richness.`
  },
  {
    name: "Coorg",
    price: "₹9,000",
    days: "3 Days / 2 Nights",
    type: "domestic",
    image: "https://th.bing.com/th/id/OIP.IfEPpb_suogaN_OoxwxgfwHaE8?w=233&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description: `Coorg is a scenic hill station known for its misty hills and coffee estates.
Often called the Scotland of India, it’s a nature lover’s paradise.
Visit Abbey Falls and soak in the roaring beauty of the cascading water.
Dubare Elephant Camp lets you feed and bathe friendly elephants.
Raja’s Seat is perfect for catching stunning valley sunsets.
Enjoy peaceful treks to Tadiandamol and Brahmagiri peaks.
Namdroling Monastery offers a glimpse of Tibetan culture and prayer rituals.
Taste authentic Kodava cuisine, rich in spices and local flavors.
Stay at cozy homestays nestled in the hills and plantations.
Wake up to birdsong and the aroma of fresh coffee every morning.
Coorg’s weather stays pleasant, making it a year-round destination.
Great for couples, families, or a solo soul-searching retreat.
Photographers will love the lush greenery and scenic drives.
Adventure seekers can enjoy river rafting and hiking trails.
A refreshing and immersive escape into Karnataka’s highlands.`
  },
  {
    name: "Chikkamagaluru",
    price: "₹8,000",
    days: "2 Days / 1 Night",
    type: "domestic",
    image: "https://th.bing.com/th/id/OIP.Ph85SvAW-GLoLdfdY0WXzAHaEQ?w=225&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description: `Chikkamagaluru is Karnataka’s coffee heartland nestled in the Western Ghats.
A peaceful hill station ideal for a quick mountain retreat.
Climb Mullayanagiri, Karnataka’s highest peak, for panoramic views.
Explore Baba Budangiri Hills with caves, myths, and a spiritual aura.
Trek through lush trails or simply relax in nature’s silence.
Visit Hebbe and Jhari waterfalls gushing through green canopies.
Tour sprawling coffee plantations and learn the art of coffee-making.
Stay in homestays that serve fresh local Malnad food.
The misty climate makes every walk feel like a nature therapy.
Perfect for nature lovers, bird watchers, and adventure seekers.
Experience local hospitality, peace, and slow mountain life.
Visit the Hirekolale Lake for calm evenings and great sunset views.
It’s less commercial, preserving its authentic charm.
Capture starry night skies and misty morning hills.
A rejuvenating 2-day escape into the calmness of the hills.`
  },
  {
    name: "Hampi",
    price: "₹10,500",
    days: "3 Days / 2 Nights",
    type: "domestic",
    image: "https://ts3.mm.bing.net/th?id=OIP.d7g3-JxAJhq0kI_dwOKZxwHaE8&pid=15.1",
    description: `Hampi is a UNESCO World Heritage site brimming with ancient wonders.
Once the capital of the Vijayanagara Empire, it's rich in ruins and legends.
Explore the Virupaksha Temple, still active with daily rituals.
See the famous Stone Chariot at Vittala Temple, a symbol of Karnataka.
Marvel at the musical pillars and ancient marketplace ruins.
Trek Matanga Hill or Anjanadri Hill for panoramic sunrise views.
Coracle rides on the Tungabhadra River offer unique experiences.
Visit Queen’s Bath, Lotus Mahal, and the Elephant Stables.
Boulder-strewn landscapes make for thrilling hikes and epic photography.
Stay in local guesthouses or quirky backpacker cafes on the riverside.
Enjoy cycle tours around the ruins for an immersive experience.
Hampi blends history with relaxed hippie vibes in the evenings.
Ideal for solo travelers, history lovers, and offbeat explorers.
Watch cultural performances and shop handmade crafts in Hampi Bazaar.
A timeless journey into Karnataka’s glorious past.`
  },
  {
    name: "Badami",
    price: "₹6,500",
    days: "2 Days / 1 Night",
    type: "domestic",
    image: "https://th.bing.com/th/id/OIP.Ees8Cph4p_9QwkFK5BFsLgHaE7?w=228&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description: `Badami is a historic town famed for its rock-cut cave temples.
It was the capital of the ancient Chalukya dynasty.
Carved into red sandstone cliffs, the cave temples are artistic masterpieces.
These temples depict Hindu, Jain, and Buddhist influences.
Climb up to Agastya Lake for a stunning reflection of temples and cliffs.
Visit the Bhutanatha Temples along the lakefront for serene vibes.
Explore the Badami Fort and its ancient watchtowers.
Stone inscriptions and sculptures reveal centuries-old stories.
Ideal for history lovers, culture seekers, and architecture fans.
Capture dramatic sunsets over the rocky terrain and lake.
Less crowded, making it perfect for quiet exploration.
Local markets offer handmade crafts and tribal souvenirs.
Try North Karnataka cuisine in traditional eateries.
Connect Badami with Pattadakal and Aihole for a heritage trail.
A short yet enriching getaway into India’s architectural brilliance.`
  },
  {
    name: "Tirupati",
    price: "₹11,000",
    days: "3 Days / 2 Nights",
    type: "domestic",
    image: "https://th.bing.com/th/id/OIP.ZhZE5EWrnFN8ZmGMGiITRQHaFc?w=184&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description: `Tirupati is India’s most revered pilgrimage site, home to Lord Balaji.
The hilltop temple of Sri Venkateswara draws millions of devotees yearly.
Devotion, rituals, and the grandeur of the temple create a divine aura.
Climb the sacred steps or take a scenic drive to Tirumala Hills.
Receive the famous Tirupati Laddu Prasadam, a spiritual treat.
Visit Kapila Theertham, a Shiva temple set beside a waterfall.
Explore Srivari Museum and Akasa Ganga waterfalls nearby.
Spend peaceful moments in Govindaraja Swamy and Padmavathi temples.
The city is well-organized and equipped for all pilgrim needs.
Spiritual atmosphere combined with efficient hospitality.
Great for families, elderly devotees, or faith-based travelers.
Take in the chants, darshan rituals, and traditional ambiance.
Clean, well-managed, and full of religious energy.
A must-visit for anyone seeking spiritual solace and divine blessings.
Tirupati leaves your heart lighter and soul fuller.`
  },
  {
    name: "Udupi",
    price: "₹8,500",
    days: "2 Days / 1 Night",
    type: "domestic",
    image: "https://th.bing.com/th/id/OIP.v-ow6OMv_09CVCgGCuUYxwHaFL?w=197&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description: `Udupi is a sacred coastal town known for the Sri Krishna Temple.
The temple’s unique window darshan is a spiritual experience.
Udupi is also famous for its delicious vegetarian cuisine.
Stroll through the temple town's lanes filled with music and offerings.
Relax on serene beaches like Malpe and Kaup nearby.
Take a boat to St. Mary’s Island with its hexagonal rock formations.
Visit the ancient Anantheshwara and Chandramouleshwara temples.
Explore Manipal’s museum and lake if time permits.
Try traditional thali meals and local ice cream varieties.
A great blend of coastal charm and spiritual heritage.
Clean, peaceful, and culturally rich atmosphere.
Ideal for solo travelers, families, and elderly pilgrims.
Experience coastal Karnataka’s traditions and hospitality.
Sunsets here are as soulful as the temple rituals.
Udupi offers both inner peace and natural beauty.`
  },
  {
    name: "Gokarna",
    price: "₹9,500",
    days: "3 Days / 2 Nights",
    type: "domestic",
    image: "https://th.bing.com/th/id/OIP.6vCL394Yf1ZjNVKkVfv-DQHaEK?w=325&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description: `Gokarna blends spirituality and beachside serenity in one trip.
Visit the revered Mahabaleshwar Temple in the heart of the town.
Trek across beaches like Om, Kudle, Paradise, and Half Moon.
Enjoy yoga sessions or simply unwind by the sea.
Sunsets here are slow, colorful, and calming.
Ideal for both spiritual seekers and backpacking beach lovers.
Stay in sea-view cottages, cafes, or beach tents.
Enjoy seafood delicacies and local Konkani dishes.
Evenings come alive with bonfires and guitar music.
Perfect for couples, solo travelers, and peaceful group trips.
Watch fishermen at work and explore nearby hill trails.
Clean, less crowded beaches unlike commercial hotspots.
It’s a slower, deeper travel experience.
Gokarna feels like Goa in the 90s—raw, real, and refreshing.
A hidden paradise along Karnataka’s coast.`
  },
  {
    name: "Rajasthan",
    price: "₹48,500",
    days: "5 Days / 4 Nights",
    type: "domestic",
    image: "https://ts2.mm.bing.net/th?id=OIP.1SMg9FYQb_s-Zk5RhCdDDQHaE8&pid=15.1",
    description: `Rajasthan is the land of kings, forts, deserts, and rich traditions.
Explore the Pink City Jaipur with its grand palaces and bazaars.
Visit the City Palace, Hawa Mahal, and Amber Fort.
In Jaisalmer, take a camel safari in the golden Thar Desert.
Witness Udaipur’s lakes, white palaces, and romantic vibes.
See the blue hues of Jodhpur’s old town from Mehrangarh Fort.
Experience local folk dance, puppet shows, and music.
Stay in heritage havelis and royal resorts.
Enjoy authentic Rajasthani food like dal baati churma.
Shop for handicrafts, jewelry, and colorful textiles.
A photographer’s dream and a history lover’s paradise.
Rajasthan blends adventure, royalty, and cultural immersion.
Every city has its own story, cuisine, and character.
Perfect for family vacations, couples, or cultural tours.
A majestic journey through India’s royal heartland.`
  },
  {
    name: "Chardham",
    price: "₹29,500",
    days: "6 Days / 5 Nights",
    type: "domestic",
    image: "https://th.bing.com/th/id/OIP.hzX3jK3zwLsvAtxr9dWWRAHaEO?w=319&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description: `The Chardham Yatra is a sacred journey to four Himalayan shrines.
Visit Yamunotri, Gangotri, Kedarnath, and Badrinath.
Each site holds immense spiritual significance and natural beauty.
Begin with Yamunotri, source of the Yamuna River.
Gangotri is the origin point of the holy Ganga.
Kedarnath, dedicated to Lord Shiva, is nestled in rugged terrain.
Badrinath, dedicated to Lord Vishnu, lies amidst snowy peaks.
The journey tests endurance but rewards the soul immensely.
You’ll witness glaciers, rivers, forests, and divine shrines.
Enjoy mountain hospitality, langar meals, and peaceful stays.
Perfect for pilgrims, nature lovers, and seekers of inner peace.
Weather can be unpredictable—carry warm and rain gear.
Every step feels like walking with faith and purpose.
End the yatra feeling renewed, blessed, and transformed.
The Chardham is more than a trip—it’s a spiritual awakening.`
  },



  // International Destinations
  

  {
    name: "Dubai",
    price: "₹60,000",
    days: "5 Days / 4 Nights",
    type: "international",
    image: "https://th.bing.com/th/id/OIP.v2pN_eDdV0f_sb_PHimtJQHaE7?w=283&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description: `Dubai is a dazzling metropolis known for its luxury, futuristic architecture, and desert adventures.
Explore the towering Burj Khalifa and enjoy breathtaking views from the top.
Visit the Dubai Mall with endless shopping, dining, and indoor entertainment.
Experience the magic of the desert with dune bashing, camel rides, and sunset BBQs.
Cruise through Dubai Marina and admire the skyline from the water.
Stroll through traditional souks for gold, spices, and souvenirs.
Marvel at the artificial islands of Palm Jumeirah and stay at Atlantis.
Explore the cultural district of Al Fahidi and take an abra ride across Dubai Creek.
Indulge in global cuisine at high-end restaurants and street food stalls.
Relax at Jumeirah Beach or enjoy water sports at Kite Beach.
Go skiing indoors at Ski Dubai or skydiving over The Palm.
Dubai seamlessly blends tradition and innovation like no other place.
It’s perfect for luxury seekers, adventurers, and cultural explorers.
Experience the glamour and warmth of this Middle Eastern gem.
A must-visit destination that offers unforgettable memories.`
  },
  {
    name: "Paris",
    price: "₹1,20,000",
    days: "6 Days / 5 Nights",
    type: "international",
    image: "https://th.bing.com/th/id/OIP.yzCuAeJsOcnpcXVmIKx5cwHaDS?w=282&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description: `Paris, the City of Lights, is the epitome of romance, elegance, and art.
Begin your journey at the Eiffel Tower with stunning city views.
Cruise along the Seine River and take in the city’s beautiful architecture.
Visit the Louvre Museum and admire masterpieces like the Mona Lisa.
Explore the artistic Montmartre district and climb the steps to Sacré-Cœur.
Walk through the historic Notre-Dame Cathedral and Latin Quarter.
Shop luxury fashion on Champs-Élysées or explore vintage shops in Le Marais.
Enjoy French cuisine—croissants, macarons, cheese, and fine wine.
Relax at a street café and people-watch like a true Parisian.
Visit the Palace of Versailles for royal French opulence.
Take romantic strolls through Jardin du Luxembourg or Tuileries Garden.
Experience Parisian nightlife with jazz clubs and cabaret shows.
Immerse yourself in the city’s timeless charm and cultural beauty.
Perfect for couples, solo travelers, and art lovers.
Paris leaves a lasting impression on every traveler.`
  },
  {
    name: "Thailand",
    price: "₹45,000",
    days: "4 Days / 3 Nights",
    type: "international",
    image: "https://th.bing.com/th/id/OIP.yzCuAeJsOcnpcXVmIKx5cwHaDS?w=282&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description: `Thailand is a tropical haven rich in culture, beaches, and flavor.
Explore Bangkok’s royal temples like Wat Arun and the Grand Palace.
Shop at floating markets and street-side stalls for unique finds.
Taste authentic Thai cuisine—Pad Thai, green curry, and mango sticky rice.
Travel to Phuket for white-sand beaches and crystal-clear waters.
Go island-hopping to Phi Phi Islands or James Bond Island.
Experience vibrant nightlife in Pattaya or full-moon parties in Koh Phangan.
Visit ancient cities like Ayutthaya to explore Thailand’s past.
Get close to elephants in Chiang Mai’s ethical sanctuaries.
Unwind with traditional Thai massages and beachside yoga.
Dive or snorkel in Koh Tao's rich coral reefs.
Enjoy warm hospitality and Buddhist serenity in every region.
From bustling cities to peaceful temples and nature, it has it all.
Perfect for backpackers, honeymooners, and families alike.
Thailand offers an adventure for every kind of traveler.`
  },
];


function Home() {
  const [selectedType, setSelectedType] = useState("domestic");
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.type === selectedType &&
      dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
   <div className="home-container" id="home">

    <marquee 
  behavior="scroll"
  direction="left"
  scrollAmount="6"
  style={{
    backgroundColor: "#f0f8ff",
    color: "#ff4500",
    fontSize: "20px",
    padding: "5px",
    fontWeight: "bold",
    margin:"0px",
   
  }}
>
  🚨 Limited time offer! <span style={{ color: "#0a0505dc" }}>Book Now</span> with Bhaskar Tours & Travels and get exciting discounts! 📞 Call: +91 9148637747 📧 Email: bhaskartoursandtravels926@gmail.com
</marquee>
      {/* <TripPlanner/> */}
    {/* <Login/> */}
    

      <h1 className="header-title"><b>Welcome to Bhaskar Tours & Travels</b></h1>
<p className="header-subtitle"><b>Your one-stop solution for memorable trips!</b></p>


      {/* Type Buttons */}
      <div className="type-selector">
        <button
          className={selectedType === "domestic" ? "active" : ""}
          onClick={() => {
            setSelectedType("domestic");
            setSelected(null);
            setSearchTerm("");
          }}
        >
          Domestic
        </button>
        <button
          className={selectedType === "international" ? "active" : ""}
          onClick={() => {
            setSelectedType("international");
            setSelected(null);
            setSearchTerm("");
          }}
        >
          International
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search destinations..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setSelected(null);
        }}
      />

     {/* Destination Buttons – Show only if searchTerm is not empty */}
{searchTerm.trim() !== "" && (
  <div className="destination-list">
    {filteredDestinations.length > 0 ? (
      filteredDestinations.map((dest, index) => (
        <button
          key={index}
          className="destination-button"
          onClick={() => setSelected(dest)}
        >
          {dest.name}
        </button>
      ))
    ) : (
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        No destinations found.
      </p>
    )}
  </div>
)}
  

      {/* Details Card */}
     {/* Details Card */}
{selected && (
  <div className="details-card">
    <h2>{selected.name}</h2>
    <img 
      src={selected.image} 
      alt={selected.name} 
      style={{ width: "100%", maxWidth: "600px", borderRadius: "10px", margin: "15px 0" }}
    />
    <p><strong>Price:</strong> {selected.price}</p>
    <p><strong>Duration:</strong> {selected.days}</p>
    
    {selected.description && (
      <div style={{ whiteSpace: "pre-line", marginTop: "10px" }}>
        <strong>Description:</strong>
        <p>{selected.description}</p>
      </div>
    )}
  </div>
)}


<footer className="footer">
  <img src="https://th.bing.com/th/id/OIP.P23rQAY1ODmbuh_jX0_nuQHaEo?w=245&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" />
  <img src="https://th.bing.com/th/id/OIP.yKlUtKnr3fp2kNL3wYPPKwAAAA?w=238&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" />
  <img src="https://th.bing.com/th/id/OIP.wcOyfoUyccLm-UvoNtNLsAHaE4?w=250&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" />
  
  <img src="https://th.bing.com/th?q=Jog+Falls+in+Rainy+Season&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
  <img src="https://th.bing.com/th/id/OIP.oi5lKRyxHo-GHP2rq2JoEgHaEK?w=287&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" />
  
  <img src="https://ts3.mm.bing.net/th?id=OIP.zPy1rGA-9BliBZUMdEOdfgHaFc&pid=15.1" alt="" />
  <img src="https://th.bing.com/th/id/OIP.9i9iNnFPcCN2B_jPStk_UwHaFj?w=196&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" />
  <img src="https://ts2.mm.bing.net/th?id=OIP.1SMg9FYQb_s-Zk5RhCdDDQHaE8&pid=15.1" alt="" />
   <img src="https://ts1.mm.bing.net/th?id=OIP.dcnxknwDneXNFjl-Bd5w-wHaJQ&pid=15.1" alt="" />



</footer>


    </div>
  );
}

export default Home;
