import React from "react";

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
      image: "https://via.placeholder.com/150", // Replace with actual image
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
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {promoCards?.slice(0, 1).map((card, index) => (
            <div
              key={card.id}
              className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${card.bgColor}`}
            >
              <h3 className={`text-lg font-bold ${card.textColor}`}>
                {card.discount}
              </h3>
              <h2 className={`text-2xl font-extrabold ${card.textColor} mt-2`}>
                {card.title}
              </h2>
              <p className={`text-sm ${card.textColor} mt-2`}>
                {card.subtitle}
              </p>
              <button
                className={`mt-4 px-4 py-2 text-white font-bold rounded ${card.buttonColor} hover:opacity-80`}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Add02;
