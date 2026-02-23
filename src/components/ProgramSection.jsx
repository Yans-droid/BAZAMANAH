import React from "react";
// Import icon dari Lucide
import {
  HeartPulse,
  GraduationCap,
  Refrigerator,
  Wallet,
  ChevronRight,
} from "lucide-react";

const ProgramSection = () => {
  const programs = [
    {
      title: "Zakat Health",
      desc: "Layanan kesehatan gratis dan bantuan biaya pengobatan bagi kaum dhuafa.",
      icon: <HeartPulse size={32} />,
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Zakat Edukasi",
      desc: "Beasiswa pendidikan untuk anak yatim dan siswa berprestasi kurang mampu.",
      icon: <GraduationCap size={32} />,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Zakat Food",
      desc: "Distribusi bahan pangan pokok untuk keluarga prasejahtera di pelosok.",
      icon: <Refrigerator size={32} />,
      color: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
      title: "Zakat Ekonomi",
      desc: "Pemberian modal usaha dan pelatihan skill untuk kemandirian ekonomi umat.",
      icon: <Wallet size={32} />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <section id="program" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-left">
        <div className="mb-16">
          <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase">
            Program Penyaluran
          </span>
          <h2 className="text-4xl font-black text-slate-900 mt-2">
            Kebaikan Yang Terukur
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border ${item.color} group-hover:scale-110 transition-transform duration-500`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>

              <button className="flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:gap-4 transition-all">
                Detail Program <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
