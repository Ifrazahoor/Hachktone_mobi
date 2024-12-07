import Image from "next/image";

const FlashSales = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$25.99",
      image: "/game.png",
      rating: 4.5,
      reviews: 200,
    },
    {
      id: 2,
      name: "JK-402 Wired Keyboard",
      price: "$15.99",
      image: "/keyboard.png",
      rating: 4.3,
      reviews: 120,
    },
    {
      id: 3,
      name: "MSI LCD Gaming Monitor",
      price: "$199.99",
      image: "/ledd.png",
      rating: 4.7,
      reviews: 320,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$89.99",
      image: "/c.jpeg",
      rating: 4.6,
      reviews: 150,
    },
  ];

  return (
    <div className="bg-gray-50 py-2 px-4 md:px-16">
    
      <span className="bg-red-600 p-2 rounded ml-3"></span>
      <span className="text-red-500 ml-3 font-bold text-xl">Todays</span>
    
      {/* Flash Sales Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-11">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Flash Sales</h2>
        {/* Countdown Timer */}
        <div className="flex items-center mt-3 md:mt-0 space-x-5 text-gray-700 mr-[600px]">
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-bold">03</span>
            <span className="text-sm md:text-base">Days</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-bold">23</span>
            <span className="text-sm md:text-base">Hours</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-bold">19</span>
            <span className="text-sm md:text-base">Minutes</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-bold">56</span>
            <span className="text-sm md:text-base">Seconds</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-5">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-red-500 text-lg font-bold mt-2">{product.price}</p>
              <div className="flex items-center mt-2 text-yellow-500">
                {Array(Math.floor(product.rating))
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                {product.rating % 1 !== 0 && <span>☆</span>}
                <span className="ml-2 text-gray-500 text-sm">({product.reviews} reviews)</span>
              </div>
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="mt-8 text-center">
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          View All Products
        </button>
      </div>
    </div>
    
  );
};

export default FlashSales;