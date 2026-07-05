import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.svg'
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isShowMenu, setShowMenu] = useState(false)
    const [isScrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Diubah ke 50 agar transisi terasa lebih responsif saat mulai scroll
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const listNav = [
        { label: 'Home', path: '#' },
        { label: 'About', path: '#about' },
        { label: 'Service', path: '#service' },
        { label: 'Medics', path: '/medics' },
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full py-4 px-6 md:px-16 z-50 flex flex-row items-center justify-between transition-all duration-300 ease-in-out ${
                isScrolled 
                ? 'bg-light-red/90 backdrop-blur-md shadow-lg border-b border-white/10' 
                : 'bg-transparent'
            } text-white`}>

                {/* Logo dengan sedikit efek hover */}
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={logo} alt="logo" width={45} className='aspect-square'/>
                    <span className="font-bold text-lg tracking-wider hidden sm:block">HEARTCARE</span>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex md:flex-row font-medium gap-x-8 text-sm uppercase tracking-wider'>
                    {listNav.map((item, index) => (
                        <li key={index} className="relative group py-1">
                            {
                                index != 3
                                ? <>
                                    <a href={item.path} className="hover:text-pink transition-colors duration-200">
                                        {item.label}
                                    </a>
                                    {/* Garis animasi di bawah teks */}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </>
                                : <>
                                    <Link to={item.path} className="hover:text-pink transition-colors duration-200">
                                        {item.label}
                                    </Link>
                                    {/* Garis animasi di bawah teks */}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </>
                            }
                        </li>
                    ))}
                </ul>

                {/* Hamburger Tombol Mobile */}
                <button 
                    onClick={() => setShowMenu(!isShowMenu)} 
                    className='md:hidden z-50 p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none'
                    aria-label="Toggle Menu"
                >
                    {isShowMenu ? <MdClose size={26} /> : <MdMenu size={26} />}
                </button>
            </nav>

            {/* Mobile Menu Backdrop (Latar Belakang Gelap saat Menu Terbuka) */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
                    isShowMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setShowMenu(false)}
            />

            {/* Mobile Menu Drawer (Animasi Geser dari Kiri ke Kanan) */}
            <div className={`fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] bg-light-red z-40 pt-28 px-8 border-r border-white/10 shadow-2xl md:hidden transform transition-transform duration-300 ease-out ${
                isShowMenu ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <ul className='flex flex-col gap-8 text-lg font-medium tracking-wide'>
                    {listNav.map((item, index) => (
                        <li key={index} className="border-b border-white/5 pb-3">
                            {
                                index==3
                                ? <Link to={item.path} onClick={() => setShowMenu(false)} className="block active:text-pink hover:text-pink transition-colors w-full"> {item.label}</Link>
                                :(<a 
                                    href={item.path} 
                                    onClick={() => setShowMenu(false)} // Tutup menu setelah klik tautan
                                    className="block active:text-pink hover:text-pink transition-colors w-full"
                                >
                                    {item.label}
                                </a>)
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar