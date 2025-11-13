import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartPage(){
  const { items, removeFromCart, clearCart, total } = useCart()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-[var(--clay-900)]">Your Cart</h1>
      {items.length === 0 ? (
        <p className="mt-4 text-[var(--clay-700)]">Your cart is empty.</p>
      ) : (
        <div className="mt-6 grid gap-4">
          {items.map(item => (
            <div key={item.slug} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[var(--beige-300)]">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-xl" />
              <div className="flex-1">
                <h3 className="font-medium text-[var(--clay-900)]">{item.title}</h3>
                <p className="text-sm text-[var(--clay-700)]">Qty: {item.qty}</p>
              </div>
              <p className="font-medium">${(item.price * item.qty).toFixed(2)}</p>
              <button onClick={()=>removeFromCart(item.slug)} className="px-4 py-2 rounded-full bg-[var(--beige-200)] text-[var(--clay-800)]">Remove</button>
            </div>
          ))}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[var(--beige-300)]">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">${total.toFixed(2)}</p>
          </div>
          <button onClick={clearCart} className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-[var(--terracotta-500)] to-[var(--clay-500)] shadow hover:shadow-md transition w-full sm:w-auto">Checkout (Demo)</button>
        </div>
      )}
    </div>
  )
}
