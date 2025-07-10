// app/page.js
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import { FaStar, FaClock, FaBolt, FaLeaf, FaFire } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // 6 static food items with complete data
  const featuredDishes = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      price: 9.99,
      description:
        "Juicy beef patty with cheddar cheese, lettuce, tomato, and our special sauce served on a toasted brioche bun.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      prepTime: "15-20 min",
      calories: 750,
      isVegetarian: false,
      isSpicy: false,
      ingredients: [
        "Beef patty",
        "Cheddar cheese",
        "Lettuce",
        "Tomato",
        "Special sauce",
        "Brioche bun",
      ],
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 12.99,
      description:
        "Authentic Neapolitan-style pizza with fresh mozzarella, basil, and San Marzano tomato sauce on our hand-tossed thin crust.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      prepTime: "20-25 min",
      calories: 850,
      isVegetarian: true,
      isSpicy: false,
      ingredients: [
        "Pizza dough",
        "San Marzano tomatoes",
        "Fresh mozzarella",
        "Basil",
        "Olive oil",
      ],
    },
    {
      id: 3,
      name: "Chicken Biryani",
      price: 11.99,
      description:
        "Fragrant basmati rice layered with tender spiced chicken, caramelized onions, and fresh herbs, cooked in the traditional dum style.",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",

      rating: 4.9,
      prepTime: "25-30 min",
      calories: 920,
      isVegetarian: false,
      isSpicy: true,
      ingredients: [
        "Basmati rice",
        "Chicken",
        "Yogurt",
        "Saffron",
        "Caramelized onions",
        "Biryani spices",
      ],
    },
    {
      id: 4,
      name: "Veggie Wrap",
      price: 8.49,
      description:
        "Grilled seasonal vegetables with homemade hummus, feta cheese, and fresh greens wrapped in a whole wheat tortilla.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",

      rating: 4.5,
      prepTime: "10-15 min",
      calories: 580,
      isVegetarian: true,
      isSpicy: false,
      ingredients: [
        "Whole wheat tortilla",
        "Grilled vegetables",
        "Hummus",
        "Feta cheese",
        "Mixed greens",
      ],
    },
    {
      id: 5,
      name: "Spicy Chicken Wings",
      price: 10.99,
      description:
        "Crispy fried chicken wings tossed in our signature buffalo sauce, served with cool ranch dip and celery sticks.",
      image:
        "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",

      rating: 4.6,
      prepTime: "15-20 min",
      calories: 680,
      isVegetarian: false,
      isSpicy: true,
      ingredients: [
        "Chicken wings",
        "Buffalo sauce",
        "Ranch dressing",
        "Celery",
        "Blue cheese",
      ],
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      price: 6.99,
      description:
        "Decadent warm chocolate cake with a molten center, served with vanilla bean ice cream and fresh berries.",
      image:
        "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",

      rating: 4.9,
      prepTime: "10-12 min",
      calories: 420,
      isVegetarian: true,
      isSpicy: false,
      ingredients: [
        "Dark chocolate",
        "Butter",
        "Eggs",
        "Sugar",
        "Vanilla ice cream",
        "Berries",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-32 bg-gradient-to-r from-orange-50 to-yellow-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-orange-300"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-yellow-300"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 animate-fadeIn">
            Hungry? Order in <span className="text-orange-500">3 Clicks</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Fastest delivery in your city with{" "}
            <span className="font-semibold">100% satisfaction guarantee</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/menu"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaBolt /> Browse Menu
            </Link>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
              Download App
            </button>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FaClock className="text-2xl" />,
                title: "Fast Delivery",
                desc: "Under 30 mins",
              },
              {
                icon: <FaLeaf className="text-2xl" />,
                title: "Fresh Food",
                desc: "Daily prepared",
              },
              {
                icon: <FaStar className="text-2xl" />,
                title: "4.8+ Rating",
                desc: "10,000+ reviews",
              },
              {
                icon: "💳",
                title: "Easy Payment",
                desc: "Cash or card",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-4 hover:bg-orange-50 rounded-lg transition-colors"
              >
                <div className="text-orange-500 mb-2 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Signature Dishes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Customer favorites that keep them coming back for more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <Link
                key={dish.id}
                href={`/menu/${dish.id}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 block"
              >
                <div className="relative">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    {dish.image && (
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  {dish.isPopular && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      POPULAR
                    </div>
                  )}
                  {dish.isVegetarian && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      VEG
                    </div>
                  )}
                  {dish.isSpicy && (
                    <div className="absolute top-12 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
                      <FaFire className="mr-1" /> SPICY
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">{dish.name}</h3>
                  <span className="text-orange-500 font-bold">
                    ${dish.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    {dish.rating}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FaClock className="mr-1" />
                    {dish.prepTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-block"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get the FoodExpress App</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enjoy exclusive app-only deals and faster ordering
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <span className="text-xs">Download on the</span>
              <span className="font-bold text-lg">App Store</span>
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <span className="text-xs">Get it on</span>
              <span className="font-bold text-lg">Google Play</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
