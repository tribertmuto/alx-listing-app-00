import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import type { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly", "Pool"];

const Pill: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button
    className={`px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 border transition
      ${active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  // Filter properties by active filter in category
  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) => property.category.includes(activeFilter))
    : PROPERTYLISTINGSAMPLE;

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80")',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg text-center">
          Find your favorite place here!
        </h1>
        <p className="mt-3 text-lg md:text-xl drop-shadow-md text-center max-w-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="my-6">
        <div className="flex flex-wrap">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={filter === activeFilter}
              onClick={() => setActiveFilter(filter === activeFilter ? "" : filter)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.map((property: PropertyProps, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative h-48 w-full">
              <img
                src={property.image}
                alt={property.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              {property.discount && (
                <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                  {property.discount}% OFF
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.name}</h3>
              <p className="text-sm text-gray-500">
                {property.address.city}, {property.address.state}, {property.address.country}
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="text-blue-600 font-bold">${property.price.toLocaleString()}</div>
                <div className="flex items-center text-yellow-500">
                  <svg
                    className="w-5 h-5 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
                  </svg>
                  <span>{property.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HomePage;