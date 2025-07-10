"use client";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  FaStar,
  FaClock,
  FaFire,
  FaLeaf,
  FaCheese,
  FaPepperHot,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
const menuItems = [
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

export default function FoodItemPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const { foodId } = useParams();
  const foodItem = menuItems.find((item) => item.id.toString() === foodId);

  if (!foodItem) {
    notFound();
  }

  const extras = [
    { id: 1, name: "Extra Cheese", price: 1.5, icon: <FaCheese /> },
    { id: 2, name: "Spicy Sauce", price: 0.75, icon: <FaPepperHot /> },
    { id: 3, name: "Garlic Bread", price: 2.0, icon: "🍞" },
    { id: 4, name: "Side Salad", price: 3.0, icon: "🥗" },
  ];

  const toggleExtra = (extra) => {
    if (selectedExtras.some((e) => e.id === extra.id)) {
      setSelectedExtras(selectedExtras.filter((e) => e.id !== extra.id));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const subtotal =
    foodItem.price * quantity +
    selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Food Detail Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Food Image with badges */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={foodItem.image}
              alt={foodItem.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 flex space-x-2">
              {foodItem.isVegetarian && (
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                  <FaLeaf className="mr-1" /> VEG
                </span>
              )}
              {foodItem.isSpicy && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                  <FaFire className="mr-1" /> SPICY
                </span>
              )}
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
            >
              <FaStar
                className={isFavorite ? "text-yellow-400" : "text-gray-300"}
              />
            </button>
          </div>

          {/* Food Info */}
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  {foodItem.name}
                </h1>
                <div className="flex items-center mt-1 text-yellow-500">
                  <FaStar className="mr-1" />
                  <span className="text-gray-700">
                    {foodItem.rating} (
                    {foodItem.rating > 4.7 ? "Highly Rated" : "Popular"})
                  </span>
                </div>
              </div>
              <span className="text-2xl font-bold text-orange-500">
                ${foodItem.price.toFixed(2)}
              </span>
            </div>

            <p className="text-gray-600 mb-6">{foodItem.description}</p>

            {/* Nutrition and Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-orange-50 p-3 rounded-lg text-center">
                <FaClock className="mx-auto text-orange-500 mb-1" />
                <p className="text-sm text-gray-600">Prep Time</p>
                <p className="font-semibold">{foodItem.prepTime}</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg text-center">
                <span className="text-orange-500">🔥</span>
                <p className="text-sm text-gray-600">Calories</p>
                <p className="font-semibold">{foodItem.calories}</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg text-center">
                <span className="text-orange-500">🌱</span>
                <p className="text-sm text-gray-600">Dietary</p>
                <p className="font-semibold">
                  {foodItem.isVegetarian ? "Vegetarian" : "Non-Veg"}
                </p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg text-center">
                <span className="text-orange-500">⚡</span>
                <p className="text-sm text-gray-600">Spice Level</p>
                <p className="font-semibold">
                  {foodItem.isSpicy ? "Medium" : "Mild"}
                </p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {foodItem.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Add Extras</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {extras.map((extra) => (
                  <button
                    key={extra.id}
                    onClick={() => toggleExtra(extra)}
                    className={`p-3 border rounded-lg flex flex-col items-center transition-all ${
                      selectedExtras.some((e) => e.id === extra.id)
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200"
                    }`}
                  >
                    <span className="text-lg mb-1">{extra.icon}</span>
                    <span className="text-sm font-medium">{extra.name}</span>
                    <span className="text-xs text-orange-500">
                      +${extra.price.toFixed(2)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-l-full flex items-center justify-center"
                >
                  <FaMinus />
                </button>
                <div className="bg-gray-100 w-16 h-10 flex items-center justify-center font-bold">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-r-full flex items-center justify-center"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>
                    {quantity} × {foodItem.name}
                  </span>
                  <span>${(foodItem.price * quantity).toFixed(2)}</span>
                </div>
                {selectedExtras.map((extra) => (
                  <div
                    key={extra.id}
                    className="flex justify-between text-sm text-gray-600"
                  >
                    <span>+ {extra.name}</span>
                    <span>+${extra.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium flex-1 transition-colors">
                Add to Cart (${subtotal.toFixed(2)})
              </button>
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium flex-1 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems
            .filter((item) => item.id !== foodItem.id)
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{item.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-orange-500 font-bold">
                      ${item.price}
                    </span>
                    <div className="flex items-center text-yellow-500 text-sm">
                      <FaStar className="mr-1" />
                      {item.rating}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
