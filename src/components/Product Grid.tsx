import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    rating: 4,
    reviews: 35,
    image: "/cat.png",
    isNew: false,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: 5,
    reviews: 95,
    image: "/car.png",
    isNew: false,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 5,
    reviews: 325,
    image: "/laptop.jpeg",
    isNew: false,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    rating: 3,
    reviews: 145,
    image: "/h.jpeg",
    isNew: false,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: "/car (4).png",
    isNew: true,
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 4,
    reviews: 35,
    image: "/shoes.jpeg",
    isNew: true,
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4,
    reviews: 55,
    image: "/gam.jpeg",
    isNew: true,
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    rating: 4,
    reviews: 50,
    image: "/jackett.jpeg",
    isNew: false,
  },
];

const Product = () => {
  return (
    <div className="">
    <div className="pt-2">
      <span className="bg-red-600 p-2 rounded ml-3"></span>
      <span className="text-red-500 ml-3 font-bold">Our Product</span>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-5 hover:shadow-lg transition relative"
          >
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full absolute top-2 left-2">
                NEW
              </span>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={100}
              className="w-full h-60 object-cover mb-3 rounded-md"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 mb-2">${product.price}</p>
            <div className="flex items-center justify-between">
              <button className="bg-black text-white px-4 py-2 rounded">
                Add To Cart
              </button>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">
                  {"★".repeat(product.rating)}
                </span>
                <span className="text-gray-500">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Product;