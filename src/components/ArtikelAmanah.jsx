import React from "react";

const ArtikelAmanah = () => {
  return (
    <section id="artikel" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Kisah Al-Qur'an: Integritas dan Amanah
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
          <article className="prose lg:prose-lg text-gray-700 leading-relaxed">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              Kisah Nabi Musa dan Sifat Al-Amin
            </h3>
            <p className="mb-4">
              Dalam Al-Qur'an Surat Al-Qashas ayat 26, terdapat kisah menarik
              saat salah seorang putri Nabi Syuaib mengusulkan untuk
              mempekerjakan Nabi Musa AS. Ia berkata:
            </p>

            <div className="bg-blue-100/50 p-6 rounded-xl border-l-4 border-blue-600 mb-6">
              <p className="text-right text-xl font-serif mb-3" dir="rtl">
                إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ
              </p>
              <p className="italic text-gray-700">
                "Sesungguhnya orang yang paling baik yang engkau ambil untuk
                bekerja (pada kita) ialah orang yang kuat lagi dipercaya
                (Al-Amin)."
              </p>
            </div>

            <p className="mb-6">
              Kisah ini mengajarkan bahwa dalam mengelola sebuah tanggung
              jawab—seperti halnya <strong>BAZAMANAH</strong>—dibutuhkan dua
              syarat utama: <strong>Al-Quwwah</strong> (Kompetensi/Keahlian IT)
              dan <strong>Al-Amanah</strong> (Integritas/Kejujuran).
            </p>

            <h3 className="text-xl font-bold text-blue-700 mb-4">
              Relevansi dengan BAZAMANAH
            </h3>
            <p className="text-justify leading-relaxed text-gray-700">
              Dosen mungkin ingin melihat bagaimana kisah ini diaplikasikan
              dalam sistem. Di web ini, kami mengimplementasikan nilai tersebut
              melalui transparansi sistem digital. Sebagaimana para nabi menjaga
              amanah umatnya, sistem ini dibangun untuk memastikan setiap
              titipan donasi tercatat dengan benar secara sistematis.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ArtikelAmanah;
