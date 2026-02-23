import React from "react";

const AboutUs = () => {
  const points = [
    {
      title: "Transparansi Penuh",
      desc: "Setiap rupiah yang Anda zakatkan tercatat dan dilaporkan secara publik.",
      icon: "💎",
    },
    {
      title: "Tepat Sasaran",
      desc: "Melalui survei mendalam agar bantuan sampai ke tangan yang berhak (Asnaf).",
      icon: "🎯",
    },
    {
      title: "Pemberdayaan",
      desc: "Bukan sekadar memberi, tapi juga membina mustahik menjadi muzakki.",
      icon: "🌱",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Sisi Kiri: Visual/Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                alt="Tentang Kami"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-4xl font-black italic">10+ Tahun</p>
                <p className="text-sm font-medium opacity-80">
                  Mengabdi untuk Kemanusiaan
                </p>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Teks Teks */}
          <div className="w-full lg:w-1/2 text-left">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">
              Tentang BAZAMANAH
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Menjembatani Kebaikan, <br />
              <span className="text-emerald-600">Menghapus Kemiskinan.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              BAZAMANAH adalah lembaga pengelolaan zakat, infaq, dan sedekah
              yang berfokus pada transformasi umat. Kami percaya bahwa zakat
              bukan hanya kewajiban agama, tapi solusi nyata bagi keadilan
              sosial di Indonesia.
            </p>

            <div className="space-y-6">
              {points.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100 group"
                >
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
