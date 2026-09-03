"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import medusaClient from "@/lib/medusa-client"
import { Product } from "@/lib/types"

export default function ProductPage() {
  const params = useParams()
  const handle = params.handle as string
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await medusaClient.get(`/store/products/${handle}`)
        setProduct(response.data.product)
      } catch (err) {
        setError("Product not found")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (handle) {
      fetchProduct()
    }
  }, [handle])

  if (loading) {
    return (
      <div className="container-main py-12">
        <p className="text-center">Loading...</p>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container-main py-12">
        <p className="text-center text-red-600">{error || "Product not found"}</p>
      </div>
    )
  }

  const price = product.prices?.[0]?.amount ? (product.prices[0].amount / 100).toFixed(2) : "N/A"
  const currency = product.prices?.[0]?.currency_code?.toUpperCase() || "USD"
  const image = product.thumbnail || product.images?.[0]?.url

  return (
    <div className="container-main py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          {image && (
            <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-3xl font-bold text-gray-900 mb-6">
            {currency} {price}
          </p>
          {product.description && (
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-lg font-semibold">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-6 py-2 text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            <button className="btn-primary w-full py-3 text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
