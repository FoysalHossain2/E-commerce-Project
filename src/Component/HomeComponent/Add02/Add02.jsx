import download from "../../../assets/download.png";

const Add02 = () => {
  const promoCards = [
    {
      id: 1,
      title: "Microsoft Xbox Series S",
      subtitle: "From $3500.00",
      discount: "FLAT 20% OFF",
      buttonText: "Shop Now",
      bgColor: "bg-blue-100",
      buttonColor: "bg-orange-500",
      textColor: "text-blue-900",
      image: download, // Replace with actual image
    },
    {
      id: 2,
      title: "Xbox Core Wireless Controller",
      subtitle: "Aqua Shift Special Edition",
      buttonText: "Shop Now",
      bgColor: "bg-blue-200",
      buttonColor: "bg-blue-500",
      textColor: "text-blue-900",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      id: 3,
      title: "Metaverse",
      subtitle: "The Future of Creativity",
      buttonText: "Learn More",
      bgColor: "bg-orange-100",
      buttonColor: "bg-orange-500",
      textColor: "text-orange-900",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      id: 4,
      title: "Electronic",
      subtitle: "Hot devices, Latest trending",
      buttonText: "Shop Now",
      bgColor: "bg-blue-100",
      buttonColor: "bg-orange-500",
      textColor: "text-blue-900",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      id: 5,
      title: "Super discount for your first purchase",
      subtitle: "Use discount code in checkout page",
      buttonText: "Shop Now",
      bgColor: "bg-purple-100",
      buttonColor: "bg-orange-500",
      textColor: "text-purple-900",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg relative flex flex-col">
          <img
            src={download} // Replace this with the actual image URL
            alt="RO Water Purifiers"
            className="absolute top-4 right-4 w-32 bg-blue-400 "
          />
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            Worlds Best RO Water Purifiers
          </h2>
          <p className="text-gray-600 mb-4">Water 100% Pure</p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Makes Water 100% Pure</li>
            <li>Multiple Purification Process</li>
            <li>Retains Essential Minerals</li>
          </ul>
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline mt-auto"
          >
            LEARN MORE
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg relative flex flex-col">
          <img
            src="https://via.placeholder.com/300x150" // Replace this with the actual image URL
            alt="Smart Kitchen Appliances"
            className="absolute top-4 right-4 w-32"
          />
          <h2 className="text-2xl font-bold text-pink-700 mb-2">
            Smart Kitchen Appliances
          </h2>
          <p className="text-gray-600 mb-6">
            Cook Smart, Cook Tasty and Cook Easy
          </p>
          <a
            href="#"
            className="text-pink-500 font-semibold hover:underline mt-auto"
          >
            LEARN MORE
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg relative flex flex-col">
          <img
            src="https://via.placeholder.com/300x150" // Replace this with the actual image URL
            alt="Electric Kettles"
            className="absolute top-4 right-4 w-32"
          />
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Electric Kettles
          </h2>
          <p className="text-gray-600 mb-4">Starting from $82</p>
          <p className="text-gray-600 mb-6">
            High capacity electric kettles for boiling water
          </p>
          <a
            href="#"
            className="text-green-500 font-semibold hover:underline mt-auto"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </>
  );
};

export default Add02;
