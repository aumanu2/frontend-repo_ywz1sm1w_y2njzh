import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Shop(){
  const [items, setItems] = useState([])
  const [filters, setFilters] = useState({ type: 'all', minPrice: '', maxPrice: '' })

  useEffect(() => {
    fetch(`${baseUrl}/api/products`).then(r=>r.json()).then(d=>setItems(d.items))
  }, [])

  const filtered = useMemo(() => {
    return items.filter(p => {
      const typeOk = filters.type === 'all' || p.type === filters.type
      const minOk = !filters.minPrice || p.price >= parseFloat(filters.minPrice)
      const maxOk = !filters.maxPrice || p.price <= parseFloat(filters.maxPrice)
      return typeOk && minOk && maxOk
    })
  }, [items, filters])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-[var(--clay-900)]">Shop the collection</h1>
          <p className="text-[var(--clay-700)]">Handcrafted mugs, bowls, plates, and vases.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <select value={filters.type} onChange={e=>setFilters(f=>({ ...f, type: e.target.value }))} className="px-4 py-2 rounded-full border border-[var(--beige-300)] bg-white">
            <option value="all">All types</option>
            <option value="mug">Mugs</option>
            <option value="bowl">Bowls</option>
            <option value="plate">Plates</option>
            <option value="vase">Vases</option>
          </select>
          <input value={filters.minPrice} onChange={e=>setFilters(f=>({ ...f, minPrice: e.target.value }))} placeholder="Min price" className="px-4 py-2 rounded-full border border-[var(--beige-300)] bg-white" />
          <input value={filters.maxPrice} onChange={e=>setFilters(f=>({ ...f, maxPrice: e.target.value }))} placeholder="Max price" className="px-4 py-2 rounded-full border border-[var(--beige-300)] bg-white" />
          <button onClick={()=>setFilters({ type:'all', minPrice:'', maxPrice:'' })} className="px-4 py-2 rounded-full bg-[var(--beige-200)] text-[var(--clay-800)]">Reset</button>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <Link key={p.slug} to={`/product/${p.slug}`} className="group rounded-2xl overflow-hidden bg-white border border-[var(--beige-300)] hover:shadow-md transition">
            <img className="h-56 w-full object-cover" src={p.image} alt={p.title} />
            <div className="p-4">
              <h3 className="font-medium text-[var(--clay-900)]">{p.title}</h3>
              <p className="text-sm text-[var(--clay-700)] capitalize">{p.type}</p>
              <p className="mt-1 font-medium text-[var(--clay-900)]">${p.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
