import { Inter } from 'next/font/google'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import WhyMe from './Components/WhyMe'
import Portfolio from './Components/Portfolio'
import Catalogue from './Components/Catalogue'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
      <Hero/>
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
