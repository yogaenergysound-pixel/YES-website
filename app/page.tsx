import Nav from './components/Nav'
import Hero from './components/Hero'
import Method from './components/Method'
import Offerings from './components/Offerings'
import Testimonials from './components/Testimonials'
import BlogPreview from './components/BlogPreview'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Method />
        <Offerings />
        <Testimonials />
        <BlogPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
