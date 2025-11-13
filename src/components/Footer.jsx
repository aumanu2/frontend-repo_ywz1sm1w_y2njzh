import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Mail } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="border-t border-[var(--beige-300)] bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-[var(--clay-900)]">Urban Wheel Pottery</h3>
          <p className="text-sm text-[var(--clay-700)] mt-2">Where earth meets elegance.</p>
        </div>
        <div className="flex gap-6">
          <div>
            <h4 className="font-medium text-[var(--clay-900)]">Explore</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link className="hover:underline" to="/">Home</Link></li>
              <li><Link className="hover:underline" to="/shop">Shop</Link></li>
              <li><Link className="hover:underline" to="/about">About</Link></li>
              <li><Link className="hover:underline" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-[var(--clay-900)]">Follow</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a className="hover:underline inline-flex items-center gap-2" href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram className="w-4 h-4"/> Instagram</a></li>
              <li><a className="hover:underline inline-flex items-center gap-2" href="mailto:hello@urbanwheel.com"><Mail className="w-4 h-4"/> Email</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-[var(--clay-700)] md:text-right">
          <p>&copy; {new Date().getFullYear()} Urban Wheel Pottery</p>
        </div>
      </div>
    </footer>
  )
}
