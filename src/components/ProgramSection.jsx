import React from "react";

const programs = [
  {
    id: 1,
    title: "Beasiswa Anak Yatim",
    desc: "Membantu biaya pendidikan anak yatim piatu hingga lulus sekolah.",
    icon: "🎓",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Klinik Gratis",
    desc: "Layanan kesehatan bagi kaum dhuafa yang membutuhkan pengobatan.",
    icon: "🏥",
    color: "bg-red-100 text-red-600",
  },
  {
    id: 3,
    title: "Modal UMKM",
    desc: "Pemberdayaan ekonomi melalui pemberian modal usaha tanpa riba.",
    icon: "📈",
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 4,
    title: "Tanggap Bencana",
    desc: "Bantuan pangan dan obat-obatan untuk wilayah terdampak bencana.",
    icon: "🚑",
    color: "bg-emerald-100 text-emerald-600",
  },
];

const ProgramSection = () => {
  return (
    <section id="program" className="py-20 bg-gray-50 px-6">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Program Unggulan Kami
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((item) => (
          <div
            key={item.id}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
          >
            <div
              className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            <button className="mt-6 text-emerald-600 font-semibold text-sm hover:underline">
              Selengkapnya →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;
