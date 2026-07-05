import React from 'react'
import { FaHeartbeat, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  const description = [
    {
      title: '100,000 Beats',
      text: 'Jantung Anda berdetak lebih dari 100.000 kali setiap harinya tanpa henti.'
    },
    {
      title: '2,000 Gallons',
      text: 'Memompa sekitar 2.000 galon darah kaya oksigen ke seluruh jaringan tubuh.'
    },
    {
      title: '1 in 4 Deaths',
      text: 'Penyakit jantung bertanggung jawab atas 1 dari 4 kematian secara global.'
    }
  ]

  return (
    <footer className='w-full text-white bg-linear-to-t from-dark-red to-light-red pt-16 pb-8 px-6 md:px-20 border-t border-white/5'>
      <div className='max-w-6xl mx-auto flex flex-col gap-12'>
        
        {/* Bagian Atas: Fakta Kesehatan & Branding */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          
          {/* Kolom Branding Singkat */}
          <div className='flex flex-col space-y-4 md:pr-4'>
            <div className='flex items-center gap-2 text-pink font-bold text-xl tracking-wider'>
              <FaHeartbeat size={24} className="animate-pulse" />
              <span>HEARTCARE</span>
            </div>
            <p className='text-sm text-white/60 leading-relaxed'>
              Menjembatani teknologi cerdas machine learning dengan kesadaran kesehatan jantung global.
            </p>
          </div>

          {/* Kolom Fakta Medis (Looping dari Array) */}
          {description.map((data, index) => (
            <div key={index} className='flex flex-col space-y-2 border-l-2 border-pink/30 pl-4 md:pl-6'>
              <h3 className='font-extrabold text-lg tracking-wide text-pink'>
                {data.title}
              </h3>
              <p className='text-sm text-white/70 leading-relaxed'>
                {data.text}
              </p>
            </div>
          ))}

        </div>

        {/* Garis Pembatas Horisontal */}
        <hr className='border-white/10' />

        {/* Bagian Bawah: Copyright & Sosmed */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50 font-medium'>
          <div>
            &copy; {new Date().getFullYear()} HeartCare. All rights reserved.
          </div>
          
          {/* Tautan Ikon Sosial Media */}
          <div className='flex items-center gap-5 text-white/60'>
            <a href="#" className='hover:text-pink transition-colors duration-200' aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className='hover:text-pink transition-colors duration-200' aria-label="Linkedin">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className='hover:text-pink transition-colors duration-200' aria-label="Github">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer