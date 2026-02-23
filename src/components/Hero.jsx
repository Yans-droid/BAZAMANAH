import React from "react";
import KalkulatorZakat from "./KalkulatorZakat";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-20 pb-12 px-6 lg:px-20 overflow-hidden"
    >
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Background Kebaikan"
          className="w-full h-full object-cover"
        />
        {/* Layer Gelap (Gradient Overlay) agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Teks di Sisi Kiri (Sekarang warna putih semua agar kontras) */}
        <div className="text-center lg:text-left">
          <span className="inline-block py-1 px-4 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-bold mb-6 backdrop-blur-md">
            #ZakatMembangunUmat
          </span>
          <h1 className="text-4xl lg:text-7xl font-black leading-[1.1] mb-8 text-white">
            Ubah Hidup Mereka <br />
            <span className="text-emerald-400">Dengan Zakatmu</span>
          </h1>
          <p className="text-lg text-emerald-50/80 mb-10 max-w-xl leading-relaxed">
            Salurkan zakat, infaq, dan sedekah secara amanah, transparan, dan
            tepat sasaran kepada mereka yang benar-benar membutuhkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-900/50 transition-all">
              Lihat Program
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-10 py-4 rounded-2xl font-bold text-lg transition-all">
              Tentang Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
