import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KalkulatorZakat from "./components/KalkulatorZakat";
import ProgramSection from "./components/ProgramSection";
import Footer from "./components/Footer";

function App() {
  // State untuk kontrol muncul/tidaknya kalkulator (modal)
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Kita oper fungsi setIsCalcOpen ke Navbar */}
      <Navbar onOpenCalc={() => setIsCalcOpen(true)} />

      <Hero />
      <ProgramSection />
      <Footer />

      {/* MODAL KALKULATOR: Hanya muncul kalau isCalcOpen === true */}
      {isCalcOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Overlay Gelap untuk nutupin background */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCalcOpen(false)} // Klik luar buat nutup
          ></div>

          {/* Konten Kalkulator */}
          <div className="relative z-10 w-full max-w-md">
            <button
              onClick={() => setIsCalcOpen(false)}
              className="absolute -top-12 right-0 text-white font-bold hover:text-emerald-400"
            >
              ✕ Tutup
            </button>
            <KalkulatorZakat />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
