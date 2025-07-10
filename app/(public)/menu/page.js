import FoodCard from "@/app/components/FoodCard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

// Sample data (replace with your actual data)
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

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Delicious Menu</h1>
        <p className="text-xl">Choose from our wide variety of dishes</p>
      </section>

      {/* Menu Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
