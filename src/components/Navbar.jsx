import React from "react";

const Navbar = ({ onOpenCalc }) => {
  // Terima props dari App.jsx
  return (
    <nav className="bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-700">
          BAZ<span className="text-emerald-500">AMANAH</span>
        </div>

        <div className="hidden md:flex space-x-8 text-gray-600 font-bold text-sm">
          <a href="#beranda" className="hover:text-emerald-600 transition">
            Beranda
          </a>
          {/* Ubah href jadi onClick */}
          <button
            onClick={onOpenCalc}
            className="hover:text-emerald-600 transition cursor-pointer"
          >
            Kalkulator
          </button>
          <a href="#program" className="hover:text-emerald-600 transition">
            Program
          </a>
        </div>

        <button className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-emerald-700 transition shadow-md">
          Donasi
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
