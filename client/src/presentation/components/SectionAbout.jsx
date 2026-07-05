import React from 'react'

function SectionAbout() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full py-20 px-6 md:px-20 bg-dark-red text-white flex items-center justify-center overflow-hidden"
    >
      {/* Dekorasi Latar Belakang Lingkaran Abstrak */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-light-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Sisi Kiri: Visual & Statistik */}
        <div className="flex flex-col space-y-6 order-2 md:order-1">
          <div className="relative group p-8 rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-pink/30">
            <h3 className="text-pink font-bold text-sm tracking-widest uppercase mb-2">Powered by Machine Learning</h3>
            <h4 className="text-2xl font-extrabold mb-4">Smart Prediction System</h4>
            <p className="text-white/70 leading-relaxed text-sm">
              Sistem kami menganalisis berbagai faktor risiko klinis secara mendalam—mulai dari tekanan darah, kadar kolesterol, hingga rekam aktivitas fisik—untuk mendeteksi indikasi awal gangguan kardiovaskular secara instan.
            </p>
          </div>

          {/* Grid Statistik Kecil */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
              <span className="block text-4xl font-extrabold text-pink mb-1">24/7</span>
              <span className="text-xs uppercase tracking-wider text-white/60">Real-time Analysis</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
              <span className="block text-4xl font-extrabold text-white mb-1">90%+</span>
              <span className="text-xs uppercase tracking-wider text-white/60">AI Accuracy Rate</span>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Narasi Utama */}
        <div className="flex flex-col space-y-6 order-1 md:order-2 text-center md:text-left">
          <div className="inline-block mx-auto md:mx-0 px-4 py-1.5 rounded-full bg-pink/10 border border-pink/30 text-pink text-xs font-semibold uppercase tracking-widest w-fit">
            About Our Technology
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Deteksi Dini, <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-pink to-white">
              Selamatkan Detak Jantung.
            </span>
          </h2>
          
          <p className="text-white/80 font-medium text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Serangan jantung sering kali datang tanpa peringatan yang jelas. Aplikasi ini dirancang untuk menjembatani teknologi AI mutakhir dengan kesadaran kesehatan global, membantu Anda membaca sinyal tersembunyi dari tubuh sebelum terlambat.
          </p>

          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
            Melalui pemrosesan data biometrik yang komprehensif, kami memberikan penilaian risiko yang dipersonalisasi serta wawasan medis yang mudah dipahami demi masa depan yang lebih sehat.
          </p>
        </div>

      </div>
    </section>
  )
}

export default SectionAbout