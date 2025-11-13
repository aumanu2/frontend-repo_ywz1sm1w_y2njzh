import React, { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if(data.success){
        setStatus('Thanks for reaching out! We will get back soon.')
        setForm({ name:'', email:'', message:'' })
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (e) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl font-semibold text-[var(--clay-900)]">Contact</h1>
        <p className="mt-2 text-[var(--clay-700)]">We'd love to hear from you. For commissions, wholesale, or studio visits, send a note.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input required value={form.name} onChange={e=>setForm(f=>({ ...f, name:e.target.value }))} placeholder="Name" className="w-full px-4 py-3 rounded-xl border border-[var(--beige-300)] bg-white" />
          <input required type="email" value={form.email} onChange={e=>setForm(f=>({ ...f, email:e.target.value }))} placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-[var(--beige-300)] bg-white" />
          <textarea required value={form.message} onChange={e=>setForm(f=>({ ...f, message:e.target.value }))} placeholder="Message" rows="5" className="w-full px-4 py-3 rounded-xl border border-[var(--beige-300)] bg-white" />
          <button className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-[var(--terracotta-500)] to-[var(--clay-500)] shadow hover:shadow-md transition">Send Message</button>
          {status && <p className="text-sm text-[var(--clay-700)]">{status}</p>}
        </form>
      </div>
      <div className="rounded-3xl overflow-hidden h-[420px] border border-[var(--beige-300)] bg-white">
        <iframe title="map" className="w-full h-full" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.5%2C-0.12%2C51.52&layer=mapnik"></iframe>
      </div>
    </div>
  )
}
