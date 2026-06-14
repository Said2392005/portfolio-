import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import GitHubStats from '@/components/GitHubStats'
import Research from '@/components/Research'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0b' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubStats />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
