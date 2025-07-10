import Navbar from "@/app/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
        <Navbar />
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-xl">Delivering happiness since 2023</p>
      </section>

      {/* About Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At FoodExpress, we believe good food should be convenient without compromising quality. 
                Our mission is to connect food lovers with the best local restaurants through our 
                seamless delivery platform.
              </p>
              <p className="text-gray-600">
                Founded in 2023, we've grown from a small team of food enthusiasts to the city's 
                most trusted food delivery service.
              </p>
            </div>
            <div className="bg-gray-200 h-64 md:h-80 rounded-lg overflow-hidden">
              {/* Replace with your team/food image */}
              <img 
                src="/about-hero.jpg" 
                alt="Our team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-orange-500">50+</p>
              <p className="text-gray-600">Restaurants</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-orange-500">10K+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-orange-500">30 min</p>
              <p className="text-gray-600">Avg. Delivery</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-orange-500">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "John Smith", role: "Founder & CEO", image: "/team1.jpg" },
              { name: "Sarah Johnson", role: "Head Chef", image: "/team2.jpg" },
              { name: "Mike Chen", role: "Delivery Manager", image: "/team3.jpg" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  {/* Replace with actual team photos */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-orange-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}