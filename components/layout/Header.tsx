import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 cursor-pointer">ALX Listing</div>

        {/* Types of accommodation */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-blue-600">Rooms</a>
          <a href="#" className="hover:text-blue-600">Mansion</a>
          <a href="#" className="hover:text-blue-600">Countryside</a>
          <a href="#" className="hover:text-blue-600">Villa</a>
          <a href="#" className="hover:text-blue-600">Chalet</a>
        </nav>

        {/* Search bar */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <input
            type="search"
            placeholder="Search properties"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Sign In / Sign Up */}
        <div className="flex space-x-4">
          <button className="text-blue-600 font-semibold hover:underline">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;