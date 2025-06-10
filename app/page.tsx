import { Smartphone, Brain, Zap, Globe, Clock, Shield } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AnimatedDivider from '@/components/AnimatedDivider'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      <Hero />
      <AnimatedDivider />
      <Features />
      <AnimatedDivider />
      <Footer />
    </main>
  )
} 