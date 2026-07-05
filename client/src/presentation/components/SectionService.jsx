import React from 'react'
import { MdTimeline, MdViewInAr, MdSecurity } from "react-icons/md";

function SectionService() {
  const services = [
    {
      icon: <MdTimeline size={32} className="text-pink group-hover:text-white transition-colors duration-300" />,
      title: "AI Heart Prediction",
      desc: "Analisis risiko serangan jantung secara instan menggunakan algoritma machine learning berbasis data klinis yang akurat."
    },
    {
      icon: <MdViewInAr size={32} className="text-pink group-hover:text-white transition-colors duration-300" />,
      title: "Interactive 3D Model",
      desc: "Eksplorasi anatomi jantung manusia lewat visualisasi 3D interaktif untuk memahami area terdampak gangguan kardiovaskular."
    },
    {
      icon: <MdSecurity size={32} className="text-pink group-hover:text-white transition-colors duration-300" />,
      title: "Personal Health Tracker",
      desc: "Pantau rekam medis harian Anda seperti tekanan darah dan kolesterol dengan sistem enkripsi data yang aman."
    }
  ];

  return (
    <section 
      id="service" 
      className="relative min-h-screen w-full py-24 px-6 md:px-20 bg-dark-red text-white flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16 z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-pink/10 border border-pink/30 text-pink text-xs font-semibold uppercase tracking-widest mb-4">
          Our Features
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Layanan Unggulan <span className="text-pink">HeartCare</span>
        </h2>
        <p className="text-white/60 text-base sm:text-lg">
          Kami menyediakan ekosistem digital cerdas untuk memantau, memprediksi, dan menjaga kesehatan organ paling berharga Anda.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative p-8 rounded-3xl bg-linear-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-pink/40 hover:shadow-2xl hover:shadow-pink/10 flex flex-col justify-between"
          >
            <div>
              {/* Tempat Lingkaran Ikon */}
              <div className="w-14 h-14 rounded-2xl bg-pink/10 flex items-center justify-center mb-6 group-hover:bg-pink transition-all duration-300 shadow-inner">
                {service.icon}
              </div>

              {/* Judul & Deskripsi */}
              <h3 className="text-xl font-bold mb-3 tracking-wide group-hover:text-pink transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* Garis Aksen Dekoratif Kecil di Bawah Kartu */}
            <div className="w-0 h-0.75 bg-pink rounded-full absolute bottom-0 left-8 transition-all duration-300 group-hover:w-1/3" />
          </div>
        ))}
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-light-red/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}

export default SectionService