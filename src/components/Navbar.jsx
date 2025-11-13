import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu } from 'lucide-react'
import { useCart } from '../context/CartContext'

const navLinkClass = ({ isActive }) => `px-3 py-2 rounded-full transition-colors ${isActive ? 'bg-[var(--beige-200)] text-[var(--clay-900)]' : 'text-[var(--clay-700)] hover:bg-[var(--beige-200)]'}`

export default function Navbar(){
  const { items } = useCart()

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-[var(--beige-300)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-wide text-[var(--clay-900)]">
            <span className="text-xl">Urban Wheel Pottery</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/cart" className="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-[var(--beige-200)]">
              <ShoppingCart className="w-5 h-5 text-[var(--clay-900)]" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 text-xs bg-[var(--terracotta-500)] text-white rounded-full px-1.5 py-0.5">
                  {items.length}
                </span>
              )}
            </Link>
            <button className="md:hidden inline-flex items-center justify-center rounded-full p-2 hover:bg-[var(--beige-200)]" aria-label="Menu">
              <Menu className="w-5 h-5 text-[var(--clay-900)]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
