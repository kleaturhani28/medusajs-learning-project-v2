"use client"

export default function CartPage() {
  return (
    <div className="container-main py-12">
      <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
      <div className="text-center py-12">
        <p className="text-lg text-gray-600 mb-4">Your cart is currently empty</p>
        <a href="/products" className="btn-primary">
          Continue Shopping
        </a>
      </div>
    </div>
  )
}
