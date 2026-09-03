import Link from "next/link"
import Image from "next/image"
import { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const price = product.prices?.[0]?.amount ? (product.prices[0].amount / 100).toFixed(2) : "N/A"
  const currency = product.prices?.[0]?.currency_code?.toUpperCase() || "USD"
  const image = product.thumbnail || product.images?.[0]?.url

  return (
    <Link href={`/products/${product.handle}`}>
      <div className="group cursor-pointer">
        {image && (
          <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src={image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition">
          {product.title}
        </h3>
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.description}</p>
        )}
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            {currency} {price}
          </span>
        </div>
      </div>
    </Link>
  )
}
