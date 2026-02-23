import React, { useState } from "react";

const KalkulatorZakat = () => {
  // 1. Ini namanya 'State' (Ibarat variabel yang kalau berubah, tampilannya ikut berubah)
  const [harta, setHarta] = useState("");

  // 2. Logic Perhitungan (Ini otomatis jalan setiap kali 'harta' berubah)
  const nishab = 85000000; // Standar nishab emas
  const angkaHarta = parseFloat(harta) || 0; // Ubah teks jadi angka
  const zakat = angkaHarta >= nishab ? angkaHarta * 0.025 : 0;

  return (
    <div className="bg-white/95 backdrop-blur-sm p-8 rounded-[2rem] shadow-2xl border border-emerald-100 max-w-md w-full">
      <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
        <span className="bg-emerald-100 p-2 rounded-lg">📊</span> Kalkulator
        Zakat
      </h3>

      <div className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
            Total Harta (Rp)
          </label>
          {/* 3. 'value' dan 'onChange' ini kuncinya biar input bisa kebaca JS */}
          <input
            type="number"
            value={harta}
            onChange={(e) => setHarta(e.target.value)}
            placeholder="Contoh: 100000000"
            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all text-lg font-semibold text-gray-800"
          />
        </div>

        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <p className="text-sm text-emerald-600 font-medium mb-1 text-left">
            Zakat yang wajib ditunaikan:
          </p>
          <p className="text-3xl font-black text-emerald-900 text-left">
            Rp {zakat.toLocaleString("id-ID")}
          </p>
          {/* 4. Notif kalau belum mencapai nishab */}
          {angkaHarta > 0 && angkaHarta < nishab && (
            <p className="text-[11px] text-amber-600 mt-2 font-medium">
              ⚠️ Belum wajib zakat karena belum mencapai nishab.
            </p>
          )}
        </div>

        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all active:scale-95">
          Tunaikan Zakat
        </button>
      </div>
    </div>
  );
};

export default KalkulatorZakat;
