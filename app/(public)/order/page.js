"use client"; // Required for useState

import { useState } from "react";


export default function OrderPage() {
  // Sample cart data (replace with your actual state management)
  const [cartItems, setCartItems] = useState([
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
  ]);

  // Form state
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    phone: "",
    notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission here
    alert("Order placed successfully!");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Complete Your Order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Delivery Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={deliveryDetails.name}
                    onChange={(e) =>
                      setDeliveryDetails({
                        ...deliveryDetails,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Delivery Address
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="3"
                    value={deliveryDetails.address}
                    onChange={(e) =>
                      setDeliveryDetails({
                        ...deliveryDetails,
                        address: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={deliveryDetails.phone}
                    onChange={(e) =>
                      setDeliveryDetails({
                        ...deliveryDetails,
                        phone: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Delivery Notes (Optional)
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="2"
                    value={deliveryDetails.notes}
                    onChange={(e) =>
                      setDeliveryDetails({
                        ...deliveryDetails,
                        notes: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                Payment Method
              </h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                    className="h-4 w-4 text-orange-500"
                  />
                  <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="h-4 w-4 text-orange-500"
                  />
                  <span>Credit/Debit Card</span>
                </label>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>

            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="py-4 flex justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border rounded-full"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border rounded-full"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium mt-6"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
