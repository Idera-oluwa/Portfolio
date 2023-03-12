import { Inter } from 'next/font/google'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
      <Hero/>
      <About/>
      </div>
    </main>
  )
}
