import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <p className="text-red-500 font-bold uppercase">Featured</p>
        <h1 className="text-4xl font-extrabold text-gray-800">New Arrival</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* PlayStation 5 */}
        <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/musi.jpeg"
            alt="PlayStation 5"
            width={500}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h2 className="text-xl font-semibold">PlayStation 5</h2>
            <p className="text-sm text-gray-300">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-4 text-black bg-white py-2 px-4 rounded font-bold">
              Shop Now
            </button>
          </div>
        </div>

        {/* Women's Collections */}
        <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/women.jpeg"
            alt="Women's Collection"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h2 className="text-xl font-semibold">Women's Collections</h2>
            <p className="text-sm text-gray-300">
              Featured woman collections that give you another vibe.
            </p>
            <button className="mt-4 text-black bg-white py-2 px-4 rounded font-bold">
              Shop Now
            </button>
          </div>
        </div>

        {/* Speakers */}
        <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/speaker.png"
            alt="Speakers"
            width={500}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h2 className="text-xl font-semibold">Speakers</h2>
            <p className="text-sm text-gray-300">
              Amazon wireless speakers.
            </p>
            <button className="mt-4 text-black bg-white py-2 px-4 rounded font-bold">
              Shop Now
            </button>
          </div>
        </div>

        {/* Perfume */}
        <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-md pb-10">
          <Image
            src="/perfume.png"
            alt="Perfume"
            width={500}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h2 className="text-xl font-semibold">Perfume</h2>
            <p className="text-sm text-gray-300">
              GUCCI INTENSE OUD EDP.
            </p>
            <button className="mt-4 text-black bg-white py-2 px-4 rounded font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}