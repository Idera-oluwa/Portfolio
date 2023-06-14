"use client"
import { Inter } from 'next/font/google'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import WhyMe from './Components/WhyMe'
import Portfolio from './Components/Portfolio'
import Catalogue from './Components/Catalogue'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () =>{
  if (menuOpen==false){
   setMenuOpen(true)
  }
  }
  const closeMenu = () =>{
    if (menuOpen==true){
      setMenuOpen(false)
  }
}
   return (
    <main>
      <div>
        <Sidebar closeMenu={closeMenu} menuOpen={menuOpen}/>
        <Navbar openMenu={openMenu}/>
      <Hero openMenu={openMenu}/>
     <About/>
       <WhyMe/>
       <Portfolio/>
       <Catalogue/>
      <Contact/>
      <Footer/>
      </div>
    </main>
  )
}
