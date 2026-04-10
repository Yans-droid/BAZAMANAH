import React from "react";
// 1. Import foto dulu supaya diproses oleh Vite
import fotoProfil from "../assets/fotoProfil/riantoagustinu.jpg";

const Biodata = () => {
  return (
    <section id="biodata" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black-600">
          Profil Pengembang
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* 2. Gunakan variabel fotoProfil di sini */}
            <div className="w-48 h-48 rounded-lg overflow-hidden border-4 border-blue-100 shadow-sm">
              <img
                src={fotoProfil}
                alt="Foto Rianto Agus Tinu"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Detail Data */}
            <div className="flex-1">
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="py-2 font-semibold text-gray-700">Nama</td>
                    <td className="py-2 text-gray-600">: Rianto Agus Tinu</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-gray-700">Kampus</td>
                    <td className="py-2 text-gray-600">
                      : Universitas Pelita Bangsa
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-gray-700">
                      Keahlian
                    </td>
                    <td className="py-2 text-gray-600">: Web Development</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-gray-700">Kelas</td>
                    <td className="py-2 text-gray-600">: TI23.D.1</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-gray-700">Email</td>
                    <td className="py-2 text-gray-600">
                      : riantoagustinu2000@gmail.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); // Tutup dengan kurung dan titik koma
};

export default Biodata;
