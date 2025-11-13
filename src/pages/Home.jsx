import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  useEffect(() => {
    const onScroll = () => {}
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--beige-50)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[var(--clay-900)]">
              Where earth meets elegance.
            </h1>
            <p className="mt-4 text-[var(--clay-700)] max-w-prose">
              Minimal, handcrafted ceramics designed for calm, modern living. Thoughtfully made with natural textures and warm tones.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/shop" className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-[var(--terracotta-500)] to-[var(--clay-500)] shadow hover:shadow-md transition">Shop Now</Link>
              <Link to="/about" className="px-6 py-3 rounded-full text-[var(--clay-800)] bg-[var(--beige-200)] hover:bg-[var(--beige-300)] transition">Our Story</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img className="w-full h-[420px] object-cover" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop" alt="Ceramic hero" />
            <div className="absolute inset-0 ring-1 ring-black/5" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-[var(--clay-900)]">Featured pieces</h2>
        <p className="text-[var(--clay-700)]">A small selection from our studio.</p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['terra-mug','olive-bowl','clay-vase'].map((slug, i) => (
            <Link key={slug} to={`/product/${slug}`} className="group rounded-2xl overflow-hidden bg-white border border-[var(--beige-300)] hover:shadow-md transition">
              <img className="h-56 w-full object-cover" src={i===0? 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop' : i===1? 'https://images.unsplash.com/photo-1533321942807-08e8a5f1a3f9?q=80&w=1600&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop'} alt="ceramic" />
              <div className="p-4">
                <h3 className="font-medium text-[var(--clay-900)] capitalize">{slug.replace('-',' ')}</h3>
                <p className="text-sm text-[var(--clay-700)]">Explore</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
