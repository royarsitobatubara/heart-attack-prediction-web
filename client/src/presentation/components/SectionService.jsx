import React from 'react'
import { motion } from 'framer-motion'
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

  // Konfigurasi container untuk efek kemunculan berurutan (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Jeda 150ms antar kartu
      }
    }
  };

  // Konfigurasi animasi untuk masing-masing kartu layanan
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section 
      id="service" 
      className="relative min-h-screen w-full py-24 px-6 md:px-20 bg-dark-red text-white flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Header Section dengan Animasi Fade-In */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16 z-10"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-pink/10 border border-pink/30 text-pink text-xs font-semibold uppercase tracking-widest mb-4">
          Our Features
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
          Layanan Unggulan <span className="bg-clip-text text-transparent bg-linear-to-r from-pink to-white">HeartCare</span>
        </h2>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed">
          Kami menyediakan ekosistem digital cerdas untuk memantau, memprediksi, dan menjaga kesehatan organ paling berharga Anda.
        </p>
      </motion.div>

      {/* Grid Cards dengan Staggered Motion */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }} // Efek tambahan framer-motion saat di-hover
            className="group relative p-8 rounded-3xl bg-linear-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-pink/40 hover:shadow-2xl hover:shadow-pink/10 flex flex-col justify-between overflow-hidden"
          >
            {/* Efek Sorot Cahaya (Glossy Glare) saat kartu di-hover */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div>
              {/* Tempat Lingkaran Ikon */}
              <div className="w-14 h-14 rounded-2xl bg-pink/10 flex items-center justify-center mb-6 group-hover:bg-pink group-hover:scale-110 transition-all duration-300 shadow-inner">
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

            {/* Garis Aksen Dekoratif di Bawah Kartu */}
            <div className="w-0 h-0.75 bg-pink rounded-full absolute bottom-0 left-8 transition-all duration-300 group-hover:w-1/3" />
          </motion.div>
        ))}
      </motion.div>

      {/* Background Glow Effect dengan Animasi Denyut Konstan */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-125 md:h-125 bg-light-red rounded-full blur-[120px] pointer-events-none z-0" 
      />
    </section>
  )
}

export default SectionService