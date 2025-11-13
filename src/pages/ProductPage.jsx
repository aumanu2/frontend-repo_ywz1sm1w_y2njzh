import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProductPage(){
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    fetch(`${baseUrl}/api/products/${slug}`).then(r=>r.json()).then(setProduct)
  }, [slug])

  if(!product) return <div className="max-w-6xl mx-auto px-4 py-12">Loading...</div>

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      <div className="rounded-3xl overflow-hidden bg-white border border-[var(--beige-300)]">
        <img className="w-full h-[520px] object-cover" src={product.image} alt={product.title} />
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-[var(--clay-900)]">{product.title}</h1>
        <p className="mt-2 text-[var(--clay-700)] max-w-prose">{product.description}</p>
        <p className="mt-4 text-2xl font-semibold text-[var(--clay-900)]">${product.price.toFixed(2)}</p>
        <div className="mt-6 flex gap-3">
          <button onClick={()=>addToCart(product)} className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-[var(--terracotta-500)] to-[var(--clay-500)] shadow hover:shadow-md transition">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
