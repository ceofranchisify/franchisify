import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import restaurant from "../assets/images/restaurant.jpg";
import kovai from "../assets/images/Kovai.png";
import lnc from "../assets/images/LNC.jpg";
import TTP from "../assets/images/Teatalk.jpg";
import TTE from "../assets/images/TeaTalkExpress.jpg";
import KOKO from "../assets/images/kokoking.jpg";
import CE from "../assets/images/crunchys.jpg";
import stevia from "../assets/images/stevia logo-1.png";
import Sizzlly from "../assets/images/Sizzly Snacks Logo Kit_page-0001.jpg";
import BBB from "../assets/images/Big Bang Bajji Logo Kit_page-0001.jpg";
import foodoor from "../assets/images/foodoor.jpg";
import so from "../assets/images/spized.jpg";
import hh from "../assets/images/hungerheist.png";
import stonedmonkey from "../assets/images/stonedmonkey.png";

const franchises = [
  {
    name: "Kovai Rawuther Biriyani",
    logo: kovai,
    investment: "₹20 - ₹25 Lakhs",
    sqft: "1600-1800 sq.ft",
    rating: "4.4★",
    origin: "Banglore",
    year: 2025,
    franchisees: 1,
    description:
      "Kovai Rawuther Biriyani is a popular biryani franchise offering traditional South Indian flavors with a modern QSR experience.",
  },
  {
    name: "Lassi n cafe",
    logo: lnc,
    investment: "₹12 Lakhs",
    sqft: "200 Sqft",
    rating: "4.2★",
    origin: "Manglore Karnataka",
    year: 2017,
    franchisees: 30,
    description:
      "Mr. Shafeequa a distinguished individual with extensive knowledge and expertise in the food industry. Mr, Shafeeque's family legacy in the food sector, coupled with his traditional culinary expertise, has given him a unique perspective on the value of combining delicious food with rich cultural heritage. In 2007, Mr. Shafeeque began his professional career in telecom marketing but soon shifted his focus to the food industry, where he co-founded and served as the managing director of KWR Enterprises PVT. LTD. This ISO 9001:2015 certified company has been renowned for its excellent and authentic cafe cuisine, and now Mr. Shafeeque runs a pioneering venture called Lassi n Cafe that will serve a diverse range of foods such as fried chicken, burgers, milkshakes, crushers, mojitos, ice creams, and soft drinks. Mr. Shafeeque's primary objective with Lassi n Café is to provide healthy and hygienic food that is also affordable and delectable, and he has prioritized the signature recipes of renowned chef Mr. AK Moideen, who has 40 years of experience in the global food industry in both India and Dubai. This Initiative is supported by an expert team in the food sector at the global level, and Mr. Shafeeque is offering a golden opportunity for dynamic investors to invest and earn a profit from venture. Moreover entrusted entrepreneurs can establish franchises with Lassi n Cafe Which presents an extremely professional franchise model with low initial investment and the assurance of future high growth and good returns through the provision of express and lounge services with a diverse range of dishes.",
  },
  {
    name: "Tea talk Budget Premium Cafe",
    logo: TTP,
    investment: "₹10-20 Lakhs",
    sqft: "200-300 sqft",
    rating: "4.1★",
    origin: "Mumbai",
    year: 2018,
    model: "FOFO",
    franchisees: 1,
    description:
      "Premium cafe experience with budget-friendly investment and quick returns.",
  },
  {
    name: "Tea talk express",
    logo: TTE,
    investment: "₹5 Lakhs",
    sqft: "200-250 sqft",
    rating: "4.3★",
    origin: "Mumbai",
    year: 2018,
    model: "FOFO",
    franchisees:4 ,
    description:
      "Compact tea outlet with high footfall in busy areas.",
  },
  {
    name: "Kokoking",
    logo: KOKO,
    investment: "₹8 Lakhs",
    sqft: "150 sqft",
    rating: "4.5★",
    origin: "Manglore Karnataka",
    year: 2022,
    franchisees: 30,
    description:
      "Koko King services such as Fried chicken, Pizza, burgers, sandwiches, rolls, pizzas, French Fries, Chicken Lollipop, Chicken Wings, milkshakes, crushers mojitos, ice creams, and soft drinks. Our primary objective is to serve healthy and hygienic food that is also a ordable and delectable. The prominent signature recipes of Mr. AK Moideen are prioritized in the new initiative. He is a re nowned chef with 40 years of experience in the global food industry in both India and Dubai. As a ourishing proposal backed by an expert team in the food sector at the global level, we o er a golden opportunity for dynamic investors to invest in and earn pro t from our venture. Besides, there is a great opportunity for enthusiastic entrepreneurs to establish franchises with us. We present an extremely professional franchise model with a low initial investment and the assurance of future high growth and good returns through the provision of express and lounge services with a diverse range of dishes.",
  },
  {
    name: "Crunchy's Express",
    logo: CE,
    investment: "₹12 Lakhs",
    sqft: "200 sqft",
    rating: "4.2★",
    origin: "Bengaluru",
    year: 2017,
    model: "FOCO",
    franchisees: 23,
    description:
      "Fast food joint known for its express menu and vibrant ambiance.",
  },
  {
    name: "Crunchy's",
    logo: CE,
    investment: "₹26.5 Lakhs",
    sqft: "600 sqft",
    rating: "4.3★",
    origin: "Bengaluru",
    year: 2017,
    model: "FOCO",
    franchisees: 23,
    description:
      "Larger dine-in format with complete kitchen setup and family seating.",
  },
  {
    name: "Crunchy's Master Franchise",
    logo: CE,
    investment: "₹50-75 Lakhs",
    sqft: "200 sqft",
    rating: "4.4★",
    origin: "Bengaluru",
    year: 2017,
    model: "Master",
    franchisees: 1,
    description:
      "Master franchise opportunity for regional operations and expansion.",
  },
  {
    name: "Stevia Delights",
    logo: stevia,
    investment: "₹2.5 Lakhs",
    sqft: "LWH: 4*2*7",
    rating: "4.6★",
    origin: "Malappuram, kottakkal",
    year: 2021,
    franchisees: 5,
    description:
      "Stevia Delights is a pioneering company specializing in producing Indian sweets and candies using stevia, a natural zero-calorie sugar alternative. Our goal is to become the leading manufacturer of stevia-based products inIndia, starting with a primary focus on the lucrative marketof Kerala. With a significant population of diabetic patientsand a health-conscious consumer base, Kerala provides promising opportunity for our innovative and healthier alternative. We invite franchises to join us on this journey to revolutionize the Indian sweets industry and expand our presence across South India.",
  },
  {
    name: "Sizzlly Snacks",
    logo: Sizzlly,
    investment: "Shop-in-Shop: ₹3.5 Lakhs | Street Model: ₹4 Lakhs",
    sqft: "LWH: 6*3*8",
    rating: "4.3★",
    origin: "Malappuram, kottakkal",
    year: 2024,
    franchisees: 0,
    description:
      "Welcome to Sizzly Snacks, the ultimate destination for snack lovers who crave bold flavours, crispy textures, and a mouth-watering experience! Our menu is crafted with a perfect blend of spice, crunch, and cheesy goodness, ensuring every bite is unforgettable. Whether you're on the go or enjoying a food break, we bring you freshly made, fast-served, and irresistibly delicious snacks thatkeep you coming back for more. Get ready to sizzle up your cravings with every bite.",
  },
  {
    name: "Big Bang Bajji",
    logo: BBB,
    investment: "Shop-in-Shop: ₹3.5 Lakhs | Street Model: ₹4 Lakhs",
    sqft: "LWH: 6*3*8",
    rating: "4.4★",
    origin: "Malappuram, kottakkal",
    year: 2024,
    franchisees: 1,
    description:
      "At Big Bang Bajji, we focus on taste, quality, and innovation. Our stalls are designed for efficiency, ensuring a smooth & fast customer experience while serving the most delicious bajjis",
  },
  {
    name: "Foodoor",
    logo: foodoor,
    investment: "₹1 Lakhs",
    rating: "4.0★",
    origin: "Perinthalmanna, Kerala",
    year: 2020,
    franchisees: 20,
    description:
      "we’ve been delivering more than just Food we’ve been delivering convenience, quality and a touch of joy to your doorstep for the past four years. Founded in 2019, our mission was simple: to transform the way people experience food delivery. We started with a vision to make mealtimes effortless and enjoyable by connecting you with your favourite restaurants and culinary delights, right at your fingertips Over the years we've grown from a small start up into a trusted partner in your daily routine, thanks to our unwavering commitment to exceptional service and customer satisfaction. Our user-friendly app ensures a seamless ordering experience, while our dedicated team works around the clock to ensure that your food arrives hot, fresh, and on time. we believe that food is more than just sustenance—it’s an experience to be savoured. That’s why we take pride in our curated selection of local eateries and popular dining spots, ensuring you always have access to  the best flavours in town.",
  },
  {
    name: "Spized Organics",
    logo: so,
    investment: "Silver :₹8 Lakhs|  Gold :₹14 Lakhs | Diamond:₹26 Lakhs",
    rating: "4.5★",
    origin: "Thekkadi",
    year: 2015,
    franchisees: 1,
    description:
      "The journey of Kerala spices from farm to kitchen is a testament to the region's rich cultural heritage and its pivotal role in the global spice trade. These spices not only enhance the flavour of dishes but also carry with them stories of ancient trade routes, culinary traditions, and the harmonious blend of cultures. Whether used in a hearty curry, a delicate dessert, or a simple home-cooked meal, Kerala spices continue to inspire anddelight chefs and food enthusiasts everywhere.",
  },
  {
    name: "Hunger Heist",
    logo: hh,
    investment: "17 Lakhs",
    sqft: "400 - 700 sqft",
    rating: "4.4★",
    origin: "Madurai",
    year: 2021,
    franchisees: 0,
    description:
      "Series brought to your table, an epitome of creativity. The establishment of Hunger Heist has been inspired by the famous series Money Heist. The heist begins with the alignment of the fresh ingredients along with hand-picked and ground spices. In the world of preservatives and food colour, step into this small theme-based restaurant to delve inside different culinary cuisines, keeping your health as the highest priority.",
  },
  {
    name: "Stoned Monkey",
    logo: stonedmonkey,
    investment: "Franchise 24L | Master Franchise - 50L",
    sqft: "400 to 600 sqft",
    rating: "4.6★",
    origin: "Banglore",
    year: 2015,
    franchisees: 3,
    description:
      "Dr.Aslesh is a hands-on Managing Director in Stoned Monkey Food & Beverages Private Limited. He has expertise in Business Development, Operations, Manufacturing, Import - Export, Entertainment and Hospitality Industry. Through strategic foresight, drive, and determination, he built a strong foundation for his successful Group of Companies",
  },
];

  // Add more franchise objects as needed


const Restaurant = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${restaurant})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-4xl text-white font-bold drop-shadow-lg">
          Restaurant Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
              <Link to="/" className="hover:text-orange-500 font-medium">
                Home
              </Link>
              <span className="mx-1"> / </span>
              <span className="font-semibold">Restaurant</span>
            </div>

      {/* Cards */}
      <div className="px-4 py-8 space-y-6 max-w-6xl mx-auto">
        {franchises.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl border p-4 flex flex-col md:flex-row gap-4 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={item.logo}
                alt={item.name}
                className="w-24 h-24 object-contain rounded border bg-white"
              />
            </div>

            {/* Info */}
            <div className="flex-1 space-y-2 text-gray-800 text-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h2>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                  {item.rating} Google Ratings
                </span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  Verified Brand
                </span>
              </div>
              <p className="text-gray-700">
                {expandedIndex === index
                  ? item.description
                  : `${item.description.slice(0, 100)}...`}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs text-gray-600 mt-2">
                <div>
                  <strong>Investment:</strong> {item.investment}
                </div>
                <div>
                  <strong>Space:</strong> {item.sqft || "N/A"}
                </div>
                <div>
                  <strong>Model:</strong> {item.model}
                </div>
                <div>
                  <strong>Franchisees:</strong> {item.franchisees}
                </div>
                <div>
                  <strong>Brand Origin:</strong> {item.origin}
                </div>
                <div>
                  <strong>Est. Year:</strong> {item.year}
                </div>
              </div>

              {/* Toggle Description Button */}
              {expandedIndex === index && (
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-red-500 text-xs mt-2 underline"
                >
                  Close
                </button>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-col items-end justify-center gap-2">
              <button
                onClick={() => toggleDescription(index)}
                className="text-sm text-blue-600 border border-blue-500 px-4 py-1 rounded hover:bg-blue-50"
              >
                {expandedIndex === index ? "Hide Details" : "View Details"}
              </button>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
              >
                Contact Brand
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
