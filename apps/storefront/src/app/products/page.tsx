"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"
import medusaClient from "@/lib/medusa-client"
import { Product } from "@/lib/types"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await medusaClient.get("/store/products")
        setProducts(response.data.products || [])
      } catch (err) {
        setError("Failed to load products. Make sure the Medusa backend is running.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="container-main py-12">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container-main py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="container-main py-12">
      <h1 className="text-4xl font-bold mb-4">Our Products</h1>
      <p className="text-gray-600 text-lg mb-12">Browse our full collection</p>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No products available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
