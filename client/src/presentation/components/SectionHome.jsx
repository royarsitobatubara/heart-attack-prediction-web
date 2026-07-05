import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heart from '../../assets/heart.webp'

function SectionHome() {
  // Varian animasi untuk transisi teks yang rapi satu per satu (Staggered)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda waktu antar elemen muncul
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 60 } 
    }
  }

  return (
    <section 
      id='home' 
      className="relative flex flex-col md:flex-row py-10 px-6 md:px-20 min-h-screen md:h-screen items-center justify-center md:justify-around bg-linear-to-br from-dark-red/20 to-transparent overflow-hidden"
    >
      {/* Dekorasi Cahaya Ambient di Latar Belakang */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Konten Teks dengan Animasi Reveal */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Otomatis trigger animasi saat elemen masuk viewport scroll
        viewport={{ once: true, amount: 0.3 }} // Hanya berjalan sekali saat di-scroll
        className='text-white flex flex-col w-full md:w-[45%] lg:w-[40%] z-10 text-center md:text-start space-y-6 md:space-y-1'
      >
        <motion.h2 
          variants={itemVariants}
          className='font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase'
        >
          Take Care Of <br />
          <span className='bg-clip-text text-transparent bg-linear-to-r from-pink to-white drop-shadow-sm'>
            Your Heart Disease
          </span>
        </motion.h2> 
        
        <motion.p 
          variants={itemVariants}
          className='font-medium text-base sm:text-lg text-white/80 max-w-md mx-auto md:mx-0 leading-relaxed'
        >
          It keeps running 24/7, non-stop, always by your side. Give a damn about your heart.
        </motion.p>
        
        {/* Fitur List */}
        <motion.ul 
          variants={itemVariants}
          className='space-y-3.5 text-left max-w-xs mx-auto md:mx-0 font-medium text-white/90'
        >
          {['Interactive 3D heart model', 'Expert heart health insight', 'Personalized health tracking tools'].map((text, idx) => (
            <li key={idx} className='flex items-center space-x-3 group/item'>
              <span className='flex h-2 w-2 rounded-full bg-pink group-hover/item:scale-150 transition-transform duration-300' />
              <span className="group-hover/item:text-pink transition-colors duration-200">{text}</span>
            </li>
          ))}
        </motion.ul>
        
        {/* Tombol Get In Touch */}
        <motion.div variants={itemVariants} className='pt-2'>
          <Link 
            to={'/medics'} 
            className='inline-block w-full sm:w-auto sm:px-12 py-4 bg-pink text-dark-red font-extrabold text-lg rounded-full text-center shadow-lg shadow-pink/20 hover:shadow-pink/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out transform'
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Konten Gambar Jantung dengan Animasi Reveal + Efek Floating */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
        className='absolute md:static opacity-15 md:opacity-100 bottom-10 right-0 left-0 md:flex justify-center items-center pointer-events-none md:pointer-events-auto z-0 md:w-[40%]'
      >
        <img 
          src={heart} 
          alt="Heart Illustration" 
          className="w-2/3 sm:w-1/2 md:w-full max-w-md mx-auto animate-[float_4s_ease-in-out_infinite] drop-shadow-[0_20px_30px_rgba(255,192,203,0.25)]" 
        />
      </motion.div>
    </section>
  )
}

export default SectionHome