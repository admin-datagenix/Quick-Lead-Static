import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import DataPromise from './components/sections/DataPromise'
import FAQ from './components/sections/FAQ'
import Features from './components/sections/Features'
import Hero from './components/sections/Hero'
import HowItWorks from './components/sections/HowItWorks'
import OneAppTwoRoles from './components/sections/OneAppTwoRoles'
import ProductShowcase from './components/sections/ProductShowcase'
import UseCases from './components/sections/UseCases'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7fbfd]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg font-mono text-xs"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <HowItWorks />
        <OneAppTwoRoles />
        <Features />
        <ProductShowcase />
        <UseCases />
        <DataPromise />
        <FAQ />
      </main>
      <Footer isHelpPage={false} />
    </div>
  )
}
