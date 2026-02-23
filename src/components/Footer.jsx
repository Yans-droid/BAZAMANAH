import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              BAZ<span className="text-emerald-500">AMANAH</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Lembaga Amil Zakat terpercaya yang berdedikasi untuk memberdayakan
              umat melalui pengelolaan dana ZIS yang transparan dan amanah.
            </p>
            <div className="flex gap-4">
              <Instagram
                className="hover:text-emerald-500 cursor-pointer transition"
                size={20}
              />
              <Facebook
                className="hover:text-emerald-500 cursor-pointer transition"
                size={20}
              />
              <Twitter
                className="hover:text-emerald-500 cursor-pointer transition"
                size={20}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#beranda"
                  className="hover:text-emerald-400 transition"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="hover:text-emerald-400 transition"
                >
                  Program Penyaluran
                </a>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition">
                  Kalkulator Zakat
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold">Hubungi Kami</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-500" />
                <span>info@bazamanah.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-500" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-500 mt-1" />
                <span>Jl. Iman No. 12, Jakarta Selatan, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h4 className="text-white font-bold">Buat Perubahan</h4>
            <p className="text-sm text-slate-400">
              Mari bantu sesama dengan menyisihkan sebagian harta kita.
            </p>
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-emerald-900/20">
              Donasi Sekarang
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            © 2026 BAZAMANAH - Tugas Matkul Agama Islam. Developed by Rianto.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
