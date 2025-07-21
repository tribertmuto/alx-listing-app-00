import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} ALX Listing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;