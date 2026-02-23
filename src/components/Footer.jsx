import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-12 pb-6 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">BAZ AMANAH</h3>
          <p className="text-emerald-100 text-sm">
            Lembaga Amil Zakat resmi terpercaya. Mengelola zakat Anda dengan
            transparan dan tepat sasaran.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Navigasi</h4>
          <ul className="text-sm space-y-2 text-emerald-100">
            <li>Tentang Kami</li>
            <li>Program Penyaluran</li>
            <li>Laporan Tahunan</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Kontak</h4>
          <p className="text-sm text-emerald-100">
            Jl. Kebajikan No. 10, Jakarta
          </p>
          <p className="text-sm text-emerald-100">WhatsApp: 0812-3456-7890</p>
        </div>
      </div>
      <div className="border-t border-emerald-800 mt-10 pt-6 text-center text-xs text-emerald-200">
        © 2026 Badan Amil Zakat Amanah. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
