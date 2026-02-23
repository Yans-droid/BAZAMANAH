import React, { useState } from "react";
import { Calculator, Coins, Info, CheckCircle2 } from "lucide-react";

const KalkulatorZakat = () => {
  const [displayHarta, setDisplayHarta] = useState(""); // Untuk tampilan (ber-titik)
  const [zakat, setZakat] = useState(0);
  const [isNishab, setIsNishab] = useState(false);

  const hargaEmas = 1500000;
  const nishab = 85 * hargaEmas;

  // Fungsi Format Angka jadi Titik Ribuan
  const formatNumber = (num) => {
    return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Fungsi saat Input Berubah
  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ""); // Hapus semua karakter non-angka
    const formattedValue = formatNumber(rawValue);

    setDisplayHarta(formattedValue);

    // Hitung Zakat dari angka murni (rawValue)
    const nominalHarta = parseFloat(rawValue) || 0;
    if (nominalHarta >= nishab) {
      setZakat(nominalHarta * 0.025);
      setIsNishab(true);
    } else {
      setZakat(0);
      setIsNishab(false);
    }
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-emerald-50 overflow-hidden max-w-md w-full mx-auto">
      {/* Header Tetap Sama */}
      <div className="bg-emerald-600 p-8 text-white relative">
        <div className="absolute top-0 right-0 p-6 opacity-10">
          <Calculator size={80} />
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Coins size={28} /> Kalkulator Zakat
          </h3>
          <p className="text-emerald-100 text-sm mt-1">
            Hitung kewajiban zakat maal Anda
          </p>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
            Total Harta Simpanan (1 Tahun)
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold group-focus-within:text-emerald-600">
              Rp
            </div>
            <input
              type="text" // Ubah jadi text agar bisa nampilin titik
              value={displayHarta}
              onChange={handleInputChange}
              placeholder="0"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-lg text-slate-800"
            />
          </div>
          <div className="flex items-center gap-2 mt-3 text-[11px] text-slate-500 bg-slate-100 p-2 rounded-lg">
            <Info size={14} className="shrink-0" />
            <span>
              Nishab saat ini: <b>{formatRupiah(nishab)}</b>
            </span>
          </div>
        </div>

        {/* Result Area */}
        <div
          className={`p-6 rounded-3xl border-2 transition-all duration-500 ${
            isNishab
              ? "bg-emerald-50 border-emerald-200"
              : "bg-slate-50 border-slate-100"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
            Zakat yang Harus Ditunaikan
          </p>
          <h2
            className={`text-3xl font-black ${isNishab ? "text-emerald-600" : "text-slate-300"}`}
          >
            {formatRupiah(zakat)}
          </h2>

          {isNishab && (
            <div className="flex items-center gap-2 mt-3 text-emerald-700 font-bold text-xs">
              <CheckCircle2 size={16} />
              Wajib Zakat (Sudah mencapai Nishab)
            </div>
          )}
        </div>

        <button
          className={`w-full py-4 rounded-2xl font-black transition-all shadow-lg ${
            isNishab
              ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Tunaikan Zakat Sekarang
        </button>
      </div>
    </div>
  );
};

export default KalkulatorZakat;
