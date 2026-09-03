import Link from "next/link"
import { ShoppingCart } from "lucide-react"

interface HeaderProps {
  cartCount?: number
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            {process.env.NEXT_PUBLIC_STORE_NAME || "Store"}
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-900 transition">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </Link>
          </nav>
          <Link href="/cart" className="flex items-center gap-2 relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
