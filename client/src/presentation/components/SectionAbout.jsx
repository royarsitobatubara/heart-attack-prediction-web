import React from 'react'
import { motion } from 'framer-motion'

function SectionAbout() {
  // Konfigurasi animasi pembungkus (Staggered effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  // Animasi dari arah kiri (Slide in Right) untuk teks narasi
  const leftSideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 50, damping: 20 } 
    }
  }

  // Animasi dari arah kanan (Slide in Left) untuk kartu AI & statistik
  const rightSideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 50, damping: 20 } 
    }
  }

  // Animasi kecil khusus untuk angka statistik agar memantul (Pop-up)
  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  }

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full py-20 px-6 md:px-20 bg-dark-red text-white flex items-center justify-center overflow-hidden"
    >
      {/* Dekorasi Latar Belakang Lingkaran Abstrak dengan Animasi Denyut Halus */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-pink/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.13, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-light-red/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Sisi Kiri: Visual & Statistik (Muncul dari Kiri bawah ke atas) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col space-y-6 order-2 md:order-1"
        >
          {/* Kartu Utama AI */}
          <motion.div 
            variants={leftSideVariants}
            className="relative group p-8 rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-pink/40 hover:shadow-pink/5"
          >
            {/* Garis aksen neon vertikal saat di-hover */}
            <div className="absolute left-0 top-1/4 w-0.75 h-0 bg-pink transition-all duration-300 group-hover:h-1/2 rounded-r-full" />
            
            <h3 className="text-pink font-bold text-sm tracking-widest uppercase mb-2">Powered by Machine Learning</h3>
            <h4 className="text-2xl font-extrabold mb-4 tracking-wide text-white group-hover:text-pink transition-colors duration-300">
              Smart Prediction System
            </h4>
            <p className="text-white/70 leading-relaxed text-sm">
              Sistem kami menganalisis berbagai faktor risiko klinis secara mendalam—mulai dari tekanan darah, kadar kolesterol, hingga rekam aktivitas fisik—untuk mendeteksi indikasi awal gangguan kardiovaskular secara instan.
            </p>
          </motion.div>

          {/* Grid Statistik Kecil */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              variants={statCardVariants}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 hover:border-white/10 transition-all duration-300"
            >
              <span className="block text-4xl font-extrabold text-pink mb-1 drop-shadow-[0_4px_10px_rgba(255,192,203,0.2)]">
                24/7
              </span>
              <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">Real-time Analysis</span>
            </motion.div>
            
            <motion.div 
              variants={statCardVariants}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 hover:border-white/10 transition-all duration-300"
            >
              <span className="block text-4xl font-extrabold text-white mb-1 group-hover:text-pink transition-colors duration-300">
                90%+
              </span>
              <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">AI Accuracy Rate</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Sisi Kanan: Narasi Utama (Muncul dari Kanan) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col space-y-6 order-1 md:order-2 text-center md:text-left"
        >
          <motion.div 
            variants={rightSideVariants}
            className="inline-block mx-auto md:mx-0 px-4 py-1.5 rounded-full bg-pink/10 border border-pink/30 text-pink text-xs font-semibold uppercase tracking-widest w-fit"
          >
            About Our Technology
          </motion.div>
          
          <motion.h2 
            variants={rightSideVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight uppercase"
          >
            Deteksi Dini, <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-pink to-white drop-shadow-sm">
              Selamatkan Detak Jantung.
            </span>
          </motion.h2>
          
          <motion.p 
            variants={rightSideVariants}
            className="text-white/80 font-medium text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Serangan jantung sering kali datang tanpa peringatan yang jelas. Aplikasi ini dirancang untuk menjembatani teknologi AI mutakhir dengan kesadaran kesehatan global, membantu Anda membaca sinyal tersembunyi dari tubuh sebelum terlambat.
          </motion.p>

          <motion.p 
            variants={rightSideVariants}
            className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Melalui pemrosesan data biometrik yang komprehensif, kami memberikan penilaian risiko yang dipersonalisasi serta wawasan medis yang mudah dipahami demi masa depan yang lebih sehat.
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}

export default SectionAbout