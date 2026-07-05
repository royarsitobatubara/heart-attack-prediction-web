import React from 'react'
import { Link } from 'react-router-dom'
import heart from '../../assets/heart.webp'

function SectionHome() {
  return (
    <section 
      id='home' 
      className="relative flex flex-col md:flex-row py-10 px-6 md:px-20 min-h-screen md:h-screen items-center justify-center md:justify-around bg-linier-to-br from-dark-red/20 to-transparent overflow-hidden"
    >
      {/* Konten Teks */}
      <div className='text-white flex flex-col w-full md:w-[40%] lg:w-[35%] z-10 text-center md:text-start space-y-5'>
        <h2 className='font-extrabold text-4xl sm:text-5xl md:text-4xl lg:text-5xl tracking-tight leading-tight uppercase'>
          Take Care Of <br />
          <span className='text-pink bg-clip-text bg-linear-to-r from-pink to-white'>
            Your Heart Disease
          </span>
        </h2>   
        
        <p className='font-medium text-base sm:text-lg text-white/80 max-w-md mx-auto md:mx-0 leading-relaxed'>
          It keeps running 24/7, non-stop, always by your side. Give a damn about your heart.
        </p>
        
        {/* Fitur List Lebih Menarik */}
        <ul className='space-y-3 text-left max-w-xs mx-auto md:mx-0 font-medium text-white/90'>
          <li className='flex items-center space-x-3'>
            <span className='flex h-2 w-2 rounded-full bg-pink' />
            <span>Interactive 3D heart model</span>
          </li>
          <li className='flex items-center space-x-3'>
            <span className='flex h-2 w-2 rounded-full bg-pink' />
            <span>Expert heart health insight</span>
          </li>
          <li className='flex items-center space-x-3'>
            <span className='flex h-2 w-2 rounded-full bg-pink' />
            <span>Personalized health tracking tools</span>
          </li>
        </ul>
        
        {/* Tombol dengan Efek Hover */}
        <div className='pt-4'>
          <Link 
            to={'/predict'} 
            className='inline-block w-full sm:w-auto sm:px-10 py-4 bg-pink text-dark-red font-bold text-lg rounded-full text-center shadow-lg shadow-pink/20 hover:shadow-pink/40 hover:scale-105 transition-all duration-300 ease-in-out transform'
          >
            Get In Touch
          </Link>
        </div>
      </div>
      
      {/* Konten Gambar dengan Animasi Mengambang */}
      <div className='absolute md:static opacity-20 md:opacity-100 bottom-10 right-0 left-0 md:flex justify-center items-center pointer-events-none md:pointer-events-auto z-0 md:w-[40%]'>
        <img 
          src={heart} 
          alt="Heart Illustration" 
          className="w-2/3 sm:w-1/2 md:w-full max-w-md mx-auto animate-[float_4s_ease-in-out_infinite] drop-shadow-[0_15px_15px_rgba(255,192,203,0.3)]" 
        />
      </div>
    </section>
  )
}

export default SectionHome