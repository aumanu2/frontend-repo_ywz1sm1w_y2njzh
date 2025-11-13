import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }){
  const [items, setItems] = useState([])

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find(p => p.slug === product.slug)
      if (existing) {
        return prev.map(p => p.slug === product.slug ? { ...p, qty: p.qty + 1 } : p)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }
  const removeFromCart = (slug) => setItems(prev => prev.filter(p => p.slug !== slug))
  const clearCart = () => setItems([])
  const total = items.reduce((sum, p) => sum + p.price * p.qty, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
