'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

const APP_STORE_URL = 'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

const PARTICLE_COLORS = ['#FF4D6A', '#5B6EF5', '#9B59E8', '#29D9A5', '#F5A623', '#4FC3F7']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * (w || window.innerWidth),
      y: Math.random() * (h || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 2.5 + 0.5,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      alpha: Math.random() * 0.4 + 0.1,
    }))

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, w, h)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        ctx.globalAlpha = 1
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Edge glow washes */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: '#FF4D6A', opacity: 0.08, transform: 'translate(-40%, -40%)' }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: '#5B6EF5', opacity: 0.1, transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: '#29D9A5', opacity: 0.06, transform: 'translateY(40%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: '#9B59E8', opacity: 0.07, transform: 'translate(20%, 30%)' }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] fade-in-up">
          The news, <span className="gold-text">simplified</span>.
        </h1>

        <p className="text-lg sm:text-xl text-[#AAAAAA] mb-10 max-w-2xl mx-auto leading-relaxed fade-in-up-delay-1">
          AI-powered summaries from trusted sources. 10+ categories. Updated every 3 hours. Zero noise.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up-delay-2">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-6 py-3 gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
          <a href="#features" className="btn-ghost text-base px-6 py-3 gap-2">
            Learn more
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-10 text-sm text-[#555555] fade-in-up-delay-3">
          Available free on iOS
        </p>
      </div>
    </section>
  )
}
