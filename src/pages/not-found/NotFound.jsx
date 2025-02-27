import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! Sahifa topilmadi.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
