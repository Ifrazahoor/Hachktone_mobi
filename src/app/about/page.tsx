import Image from "next/image";
import {
  FaChartLine,
  FaShoppingCart,
  FaUsers,
  FaMoneyBillWave,
  FaTruck,
  FaHeadset,
  FaRegMoneyBillAlt,
} from "react-icons/fa"; // React Icons import

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mt-4">
        Home / <span className="text-black">About</span>
      </div>

      {/* Our Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h2 className="text-3xl font-bold mb-9">Our Story</h2>
          <p className="text-gray-700">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-gray-700 mt-4">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer...
          </p>
        </div>
        <div>
          <Image
            src="/shpping.jpeg"
            alt="Shopping Girls"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
        {[
          { icon: <FaChartLine />, label: "Sellers active on site", value: "10.5k" },
          { icon: <FaShoppingCart />, label: "Monthly Product Sale", value: "33k" },
          { icon: <FaUsers />, label: "Customer active in our site", value: "45.5k" },
          { icon: <FaMoneyBillWave />, label: "Annual gross sale", value: "25k" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="p-4 bg-white shadow rounded-lg border-t-4 border-red-500"
          >
            <div className="text-red-500 text-3xl mx-auto mb-2">{stat.icon}</div>
            <h3 className="text-xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Team */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Tom Cruise",
              role: "Founder & Chairman",
              img: "/boy.jpeg",
            },
            {
              name: "Emma Watson",
              role: "Managing Director",
              img: "/girl.jpeg",
            },
            {
              name: "Will Smith",
              role: "Product Designer",
              img: "/old.jpeg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="text-center p-4 bg-white shadow rounded-lg"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="flex justify-center gap-4 mt-2 text-gray-500">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features with React Icons */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[
          {
            icon: <FaTruck className="w-10 h-10 text-red-500 mx-auto" />,
            label: "FREE AND FAST DELIVERY",
            desc: "Free delivery for all orders over $140",
          },
          {
            icon: <FaHeadset className="w-10 h-10 text-red-500 mx-auto" />,
            label: "24/7 CUSTOMER SERVICE",
            desc: "Friendly 24/7 customer support",
          },
          {
            icon: <FaRegMoneyBillAlt className="w-10 h-10 text-red-500 mx-auto" />,
            label: "MONEY BACK GUARANTEE",
            desc: "We return money within 30 days",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="text-center p-4 bg-white shadow rounded-lg"
          >
            {feature.icon}
            <h3 className="font-bold text-red-500 mt-4">{feature.label}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}