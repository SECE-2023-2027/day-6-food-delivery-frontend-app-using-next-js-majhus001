"use client"; // Required for useState

import { useState } from 'react';

export default function OrderPage() {
  // Sample cart data (replace with your actual state management)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Burger",
      price: 9.99,
      quantity: 2,
      image: "/burger.jpg"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 12.99,
      quantity: 1,
      image: "/pizza.jpg"
    }
  ]);

  // Form state
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    phone: '',
    notes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('cash');

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission here
    alert('Order placed successfully!');
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
                    onChange={(e) => setDeliveryDetails({...deliveryDetails, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Delivery Address</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="3"
                    value={deliveryDetails.address}
                    onChange={(e) => setDeliveryDetails({...deliveryDetails, address: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={deliveryDetails.phone}
                    onChange={(e) => setDeliveryDetails({...deliveryDetails, phone: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Delivery Notes (Optional)</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="2"
                    value={deliveryDetails.notes}
                    onChange={(e) => setDeliveryDetails({...deliveryDetails, notes: e.target.value})}
                  />
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Payment Method</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                    className="h-4 w-4 text-orange-500"
                  />
                  <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
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
              {cartItems.map(item => (
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
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded-full"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
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